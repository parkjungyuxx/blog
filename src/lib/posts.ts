export interface Post {
  id: number;
  created_at?: string;
  category: string;
  date: string;
  title: string;
  content: string;
}

export type FilterCategory = "LIFE" | "TECH" | "REVIEW";

export const FILTER_CATEGORIES: FilterCategory[] = ["LIFE", "TECH", "REVIEW"];

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?select=*&order=date.desc`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: {
          revalidate: 3600,
          tags: ["posts"],
        },
      }
    );

    if (!response.ok) {
      console.error("Error fetching posts:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Unexpected error fetching posts:", error);
    return [];
  }
}

export function filterPosts(posts: Post[], filter?: string): Post[] {
  if (!filter) return posts;
  return posts.filter((post) => post.category === filter);
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?id=eq.${id}&select=*`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=representation",
        },
        next: {
          revalidate: 3600,
          tags: ["posts", `post-${id}`],
        },
      }
    );

    if (!response.ok) {
      console.error("Error fetching post:", response.statusText);
      return null;
    }

    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error("Unexpected error fetching post:", error);
    return null;
  }
}

export async function getPostsByCategory(
  category: FilterCategory
): Promise<Post[]> {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?category=eq.${category}&select=*&order=date.desc`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        next: {
          revalidate: 3600,
          tags: ["posts", `category-${category}`],
        },
      }
    );

    if (!response.ok) {
      console.error("Error fetching posts by category:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Unexpected error fetching posts by category:", error);
    return [];
  }
}

export async function createPost(
  post: Omit<Post, "id" | "created_at">
): Promise<Post | null> {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      console.error("Error creating post:", response.statusText);
      return null;
    }

    const data = await response.json();

    return data[0] || null;
  } catch (error) {
    console.error("Unexpected error creating post:", error);
    return null;
  }
}
