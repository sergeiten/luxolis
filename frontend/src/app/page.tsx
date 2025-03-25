"use client";

import { API_URL } from "@/consts";
import { Post } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";

const List = () => {
  const { data: posts, refetch } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      return axios
        .get(`${API_URL}/post`)
        .then((response) => response.data.data as Post[]);
    },
  });

  const { mutate: remove } = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`${API_URL}/post/${id}`);
    },
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <Link
          href="/post/create"
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
        >
          Create Post
        </Link>

        <ul>
          {posts?.map((post) => (
            <li
              key={post.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <Link
                href={`/post/${post.id}`}
                className="text-blue-600 hover:underline flex-1"
              >
                {post.title}
              </Link>
              <div className="flex space-x-2">
                <Link
                  href={`/post/edit/${post.id}`}
                  className="text-yellow-500 hover:text-yellow-700"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    remove(post.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
