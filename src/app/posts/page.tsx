import { FilterSection } from "@/components/FilterSection";
import { PostsList } from "@/components/PostsList";
import { FilterCategory, getPosts } from "@/lib/posts";
import Link from "next/link";

interface PostsPageProps {
  searchParams: Promise<{ filter?: string }>; 
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const posts = await getPosts();
  const params = await searchParams; 
  const selectedFilter = params.filter as FilterCategory | undefined;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12 gap-2 md:gap-0">
        <h1 className="text-5xl md:text-[80px] md:leading-[120px] font-bold text-black">
          Posts
        </h1>
        <Link href="/" className="text-base md:text-[20px] text-black hover:underline">
          / HOME
        </Link>
      </div>

      <div className="hidden md:grid md:grid-cols-[250px_1fr] gap-8">
        <FilterSection selectedFilter={selectedFilter} />
        <PostsList posts={posts} selectedFilter={selectedFilter} />
      </div>

      <div className="md:hidden space-y-6">
        <FilterSection selectedFilter={selectedFilter} />
        <PostsList posts={posts} selectedFilter={selectedFilter} />
      </div>
    </div>
  );
}