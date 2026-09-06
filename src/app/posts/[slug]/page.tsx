import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title };
}

const splitItems = (value: string) =>
  value
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { title, hero, html, toc } = post;
  const { txt, prerequisites, setup, lesson } = hero;

  return (
    <div className="blog-component">
      <header className="head-container">
        <h1>{title}</h1>
        <section className="segment">
          {txt && <p dangerouslySetInnerHTML={{ __html: txt }} />}
          {prerequisites && (
            <>
              <h4>Prerequisites</h4>
              <ul>
                {splitItems(prerequisites).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {setup && (
            <>
              <h4>What you&apos;ll need</h4>
              <ul>
                {splitItems(setup).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {lesson && (
            <>
              <h4>After reading this article, you&apos;ll be able to</h4>
              <ul>
                {splitItems(lesson).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </section>
      </header>

      <main className="grid">
        <aside className="container">
          <div className="toc-sidebar">
            <h2>Table of contents</h2>
            {toc ? (
              <div className="toc" dangerouslySetInnerHTML={{ __html: toc }} />
            ) : null}
          </div>
        </aside>
        <article
          className="container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </div>
  );
}
