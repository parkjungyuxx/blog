import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { ClientPostsContent } from "@/components/ClientPostsContent";
import { Suspense } from "react";

export const revalidate = 3600;

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12 gap-2 md:gap-0">
        <h1 className="text-5xl md:text-[80px] md:leading-[120px] font-bold text-black">
          Posts
        </h1>
        <Link
          href="/"
          className="text-base md:text-[20px] text-black hover:underline"
        >
          / HOME
        </Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ClientPostsContent posts={posts} />
      </Suspense>
    </div>
  );
}
