"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "@/consts";
import Link from "next/link";
import { Post } from "@/types";

const Detail = () => {
  const params = useParams();

  const {
    data: post,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["getPost", params.id],
    queryFn: async () => {
      return axios
        .get(`${API_URL}/post/${params.id}`)
        .then((response) => response.data as Post);
    },
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div className="max-w-3xl mx-auto p-6">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.description}</p>
      <Link href="/" className="text-blue-500 hover:underline block mt-4">
        Back to List
      </Link>
    </div>
  );
};

export default Detail;
