import type { ComponentType } from "react";

export interface PostHero {
  txt: string;
  prerequisites: string;
  setup: string;
  lesson: string;
}

export interface PostMeta {
  slug: string;
  date: string;
  title: string;
  tags: string[];
  hero: PostHero;
}

export interface PostModule {
  default: ComponentType;
  metadata: PostMeta;
}

export const posts = import.meta.glob("./content/*.mdx", {
  eager: true,
}) as unknown as Record<string, PostModule>;
