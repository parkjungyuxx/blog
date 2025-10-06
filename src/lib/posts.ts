import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export interface Post {
  id: number;
  created_at?: string;
  category: string;
  date: string;
  title: string;
  content: string;
}

export type FilterCategory = "LIFE" | "DEV" | "REVIEW";

export const FILTER_CATEGORIES: FilterCategory[] = ["LIFE", "DEV", "REVIEW"];

export async function getPosts(): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

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
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error fetching post:", error);
    return null;
  }
}

export async function getPostsByCategory(
  category: FilterCategory
): Promise<Post[]> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("category", category)
      .order("date", { ascending: false });

    if (error) {
      console.error("Error fetching posts by category:", error);
      return [];
    }

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
    const { data, error } = await supabase
      .from("posts")
      .insert([post])
      .select()
      .single();

    if (error) {
      console.error("Error creating post:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Unexpected error creating post:", error);
    return null;
  }
}
