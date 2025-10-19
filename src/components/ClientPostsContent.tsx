"use client";

import { useSearchParams } from "next/navigation";
import { FilterSection } from "@/components/FilterSection";
import { PostsList } from "@/components/PostsList";
import { Post, FilterCategory } from "@/lib/posts";

interface ClientPostsContentProps {
  posts: Post[];
}

export function ClientPostsContent({ posts }: ClientPostsContentProps) {
  const searchParams = useSearchParams();
  const selectedFilter = searchParams.get("filter") as
    | FilterCategory
    | undefined;

  return (
    <>
      <div className="hidden md:grid md:grid-cols-[250px_1fr] gap-8">
        <FilterSection selectedFilter={selectedFilter} />
        <PostsList posts={posts} selectedFilter={selectedFilter} />
      </div>

      <div className="md:hidden space-y-6">
        <FilterSection selectedFilter={selectedFilter} />
        <PostsList posts={posts} selectedFilter={selectedFilter} />
      </div>
    </>
  );
}
