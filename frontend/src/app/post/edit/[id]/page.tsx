"use client";

import { useParams } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "@/consts";
import { useRouter } from "next/navigation";
import { Post } from "@/types";

const Edit = () => {
  const params = useParams();
  const router = useRouter();

  const queryClient = useQueryClient();

  const { data: post, isPending } = useQuery({
    queryKey: ["getPost", params.id],
    queryFn: async () => {
      return axios
        .get(`${API_URL}/post/${params.id}`)
        .then((response) => response.data as Post);
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: (data: FormData) => {
      data.append("_method", "PATCH");

      return axios.post(`${API_URL}/post/${params.id}`, data);
    },
    onSuccess: async () => {
      await queryClient.resetQueries({ queryKey: ["getPosts"] });

      router.push("/");
    },
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Update Post</h1>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target;
          // @ts-expect-error
          const formData = new FormData(form);

          update(formData);
        }}
      >
        <input
          defaultValue={post?.title}
          type="text"
          placeholder="Title"
          name="title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          defaultValue={post?.description}
          placeholder="Description"
          name="description"
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Edit;
