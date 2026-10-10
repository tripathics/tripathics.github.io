import type { ComponentType } from "react";
import { type PostHero, type PostMeta, posts } from "@/posts";
import { formatShortDate, formatYear } from "./helpers";

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  year: string;
  tags: string[];
}

export interface PostRender {
  slug: string;
  title: string;
  tags: string[];
  hero: PostHero;
  Component: ComponentType;
}

function metaOf(mod: { metadata: PostMeta }): PostMeta {
  return mod.metadata;
}

export function getAllPosts(firstN?: number): PostSummary[] {
  let postValues = Object.values(posts);
  if (firstN !== undefined) {
    postValues = postValues.slice(0, firstN);
  }

  return postValues
    .map((mod) => {
      const m = metaOf(mod);
      const date = String(m.date || "");
      return {
        slug: String(m.slug || ""),
        title: String(m.title || ""),
        date: formatShortDate(date),
        year: formatYear(date),
        tags: Array.isArray(m.tags) ? m.tags.map((t) => String(t)) : [],
        _rawDate: date,
      };
    })
    .filter((post) => post.slug)
    .sort((a, b) => b._rawDate.localeCompare(a._rawDate))
    .map(({ _rawDate, ...post }) => post);
}

export function getPostRender(slug: string): PostRender | null {
  for (const mod of Object.values(posts)) {
    if (String(metaOf(mod).slug) !== slug) continue;
    const m = metaOf(mod);
    return {
      slug: String(m.slug),
      title: String(m.title),
      tags: Array.isArray(m.tags) ? m.tags.map((t) => String(t)) : [],
      hero: m.hero || { txt: "", prerequisites: "", setup: "", lesson: "" },
      Component: mod.default,
    };
  }
  return null;
}

export function postSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
