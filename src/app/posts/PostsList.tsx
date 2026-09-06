"use client";

import Link from "next/link";
import { useState } from "react";
import { PageTitle } from "@/components/Heading";
import type { PostSummary } from "@/lib/posts";

const PostListItem = ({ slug, title, date }: PostSummary) => (
  <Link className="post" href={`/posts/${slug}`}>
    <h3>{title}</h3>
    <time>{date}</time>
  </Link>
);

export default function PostsList({ posts }: { posts: PostSummary[] }) {
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  const postsByYear: Record<string, PostSummary[]> = posts.reduce(
    (acc, post) => {
      const year = post.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {} as Record<string, PostSummary[]>,
  );

  const allTags: string[] = [];
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!allTags.includes(tag)) allTags.push(tag);
    }
  }
  const tags = allTags.sort();

  return (
    <div className="posts-component">
      <PageTitle id="posts" title="Posts" />
      <div className="tags-filter container">
        <h3>Filter by tag</h3>
        <div className="tags">
          <button
            type="button"
            className={`tag ${tagFilter === null ? "active" : ""}`}
            onClick={() => setTagFilter(null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag ${tagFilter === tag ? "active" : ""}`}
              onClick={() => setTagFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      {Object.keys(postsByYear)
        .sort((a, b) => b.localeCompare(a))
        .map((year) => {
          const yearPosts = postsByYear[year].filter(
            (post) =>
              tagFilter === null || post.tags.includes(tagFilter as string),
          );
          if (yearPosts.length === 0) return null;
          return (
            <section className="container" key={year}>
              <h2 className="year">{year}</h2>
              <div className="posts">
                {yearPosts.map((post) => (
                  <PostListItem key={post.slug} {...post} />
                ))}
              </div>
            </section>
          );
        })}
    </div>
  );
}
