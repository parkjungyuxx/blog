import Link from "next/link";
import { Post, filterPosts } from "@/lib/posts";

interface PostsListProps {
  posts: Post[];
  selectedFilter?: string;
}

export function PostsList({ posts, selectedFilter }: PostsListProps) {
  const filteredPosts = filterPosts(posts, selectedFilter);

  return (
    <div className="border-t-2 border-black">
      <div className="grid grid-cols-[200px_1fr] border-b border-black py-4">
        <div className="font-mono text-sm text-black">/ DATE</div>
        <div className="font-mono text-sm text-black">/ TITLE</div>
      </div>

      <div>
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="grid grid-cols-[200px_1fr] border-b border-gray-300 py-4 transition-colors group"
          >
            <div className="text-black text-sm">{post.date}</div>
            <div className="text-black group-hover:text-[#E67E22]">
              {post.title}
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          {selectedFilter
            ? "해당 카테고리에 포스트가 없습니다."
            : "포스트가 없습니다."}
        </div>
      )}
    </div>
  );
}
