import { FilterSection } from "@/components/FilterSection";
import { PostsList } from "@/components/PostsList";
import { FilterCategory, getPosts } from "@/lib/posts";
import Link from "next/link";

interface PostsPageProps {
  searchParams: { filter?: string };
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const posts = await getPosts();
  const selectedFilter = searchParams.filter as FilterCategory | undefined;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="flex justify-between items-start mb-12">
        <h1 className="text-[80px] font-bold text-black">Posts</h1>
        <Link href="/" className="text-[20px] text-black hover:underline">
          / HOME
        </Link>
      </div>

      <div className="grid grid-cols-[250px_1fr] gap-8">
        <FilterSection selectedFilter={selectedFilter} />
        <PostsList posts={posts} selectedFilter={selectedFilter} />
      </div>
    </div>
  );
}
