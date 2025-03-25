"use client";

import { useRouter } from "next/navigation";
import { API_URL } from "@/consts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Create = () => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate: insert } = useMutation({
    mutationFn: (data: FormData) => {
      return axios.post(`${API_URL}/post`, data);
    },
    onSuccess: async () => {
      await queryClient.resetQueries({ queryKey: ["getPosts"] });

      router.push("/");
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target;
          // @ts-expect-error
          const formData = new FormData(form);

          insert(formData);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Content"
          name="description"
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
