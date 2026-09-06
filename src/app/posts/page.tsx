import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostsList from "./PostsList";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  const posts = getAllPosts();
  return <PostsList posts={posts} />;
}
