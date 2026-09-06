import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { toString } from "hast-util-to-string";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { formatShortDate, formatYear } from "./helpers";

export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  year: string;
  tags: string[];
}

export interface Post extends PostSummary {
  html: string;
  toc: string;
  hero: {
    txt: string;
    prerequisites: string;
    setup: string;
    lesson: string;
  };
}

interface Heading {
  depth: number;
  id: string;
  text: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getAllPosts(): PostSummary[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));

  const posts = files
    .map((file) => {
      const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data } = matter(content);
      const date = String(data.date || "");
      return {
        slug: String(data.slug || ""),
        title: String(data.title || ""),
        date: formatShortDate(date),
        year: formatYear(date),
        tags: Array.isArray(data.tags)
          ? data.tags.map((tag: unknown) => String(tag))
          : [],
      };
    })
    .filter((post) => post.slug)
    .sort((a, b) => {
      if (a.year !== b.year) return b.year.localeCompare(a.year);
      return b.date.localeCompare(a.date);
    });

  return posts;
}

const IMAGE_SRC_RE = /(src|href)="(?:\.\.?\/)?images\//g;

function makeAnchor(id: string) {
  return {
    type: "element",
    tagName: "a",
    properties: {
      href: `#${id}`,
      ariaHidden: "true",
      tabIndex: -1,
      className: ["heading-link"],
    },
    children: [
      {
        type: "element",
        tagName: "svg",
        properties: {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "1em",
          height: "1em",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        children: [
          {
            type: "element",
            tagName: "path",
            properties: {
              d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            },
            children: [],
          },
          {
            type: "element",
            tagName: "path",
            properties: {
              d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            },
            children: [],
          },
        ],
      },
    ],
  };
}

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const date = String(data.date || "");
  const headings: Heading[] = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(() => (tree) => {
      const visit = (node: any) => {
        if (node.type === "element" && /^h[1-4]$/.test(node.tagName)) {
          const depth = Number(node.tagName[1]);
          const text = toString(node);
          const id = node.properties?.id;
          if (id) {
            headings.push({ depth, id: String(id), text });
            node.children = [...node.children, makeAnchor(String(id))];
          }
        }
        if (node.children) node.children.forEach(visit);
      };
      visit(tree);
    })
    .use(rehypePrismPlus, { ignoreMissing: true })
    .use(rehypeStringify);

  const vfile = processor.processSync(content);
  const html = String(vfile).replace(IMAGE_SRC_RE, '$1="/blog-images/');

  return {
    slug: String(data.slug || slug),
    title: String(data.title || ""),
    date: formatShortDate(date),
    year: formatYear(date),
    tags: Array.isArray(data.tags)
      ? data.tags.map((tag: unknown) => String(tag))
      : [],
    html,
    toc: buildToc(headings),
    hero: {
      txt: data.hero?.txt || "",
      prerequisites: data.hero?.prerequisites || "",
      setup: data.hero?.setup || "",
      lesson: data.hero?.lesson || "",
    },
  };
}

function buildToc(headings: Heading[]): string {
  const items = headings.filter((h) => h.depth >= 2 && h.depth <= 3 && h.id);
  if (items.length === 0) return "";

  let html = "<ul>";
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.depth === 3) {
      html += `<li><a href="#${item.id}">${escapeHtml(item.text)}</a></li>`;
      continue;
    }
    html += `<li><a href="#${item.id}">${escapeHtml(item.text)}</a>`;
    const children = [];
    for (let j = i + 1; j < items.length && items[j].depth === 3; j++) {
      children.push(items[j]);
      i = j;
    }
    if (children.length) {
      html += `<ul>${children
        .map((c) => `<li><a href="#${c.id}">${escapeHtml(c.text)}</a></li>`)
        .join("")}</ul>`;
    }
    html += "</li>";
  }
  html += "</ul>";
  return html;
}

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
