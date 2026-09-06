import Link from "next/link";
import { slugify } from "@/lib/helpers";

interface PostCardProps {
  date: string;
  year: string;
  title: string;
  tags?: string[];
}

export const PostCard = ({ date, year, title, tags = [] }: PostCardProps) => {
  return (
    <article className="card">
      <time>
        {date}, {year}
      </time>
      <h3>
        <Link href={`/posts/${slugify(title)}`}>{title}</Link>
      </h3>
      <div className="tags">
        {(tags || []).map((tag, i) => (
          <span key={i} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

interface ProjectCardProps {
  name: string;
  date: string;
  slug?: string;
  tagline: string;
  url?: string;
  src: string;
  writeup?: string;
}

export const ProjectCard = ({
  name,
  date,
  slug,
  tagline,
  url,
  src,
  writeup,
}: ProjectCardProps) => {
  const imgSlug = slug || "filter";
  return (
    <article className="project-card anchored card">
      <div className="image-wrapper">
        <img
          src={`/projects/${imgSlug}.webp`}
          width="250"
          height="250"
          alt=""
        />
      </div>
      <div className="proj-desc">
        <time>{date}</time>
        {url ? (
          <h3>
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          </h3>
        ) : (
          <h3>
            <a href={src} target="_blank" rel="noreferrer">
              {name}
            </a>
          </h3>
        )}
        <p>{tagline}</p>
      </div>
      <div className="anchored links">
        <a target="_blank" rel="noreferrer" href={src} className="button">
          Source
        </a>
        {url && (
          <a target="_blank" rel="noreferrer" href={url} className="button">
            Demo
          </a>
        )}
        {writeup && (
          <Link href={`/posts/${slug}`} className="button">
            Article
          </Link>
        )}
      </div>
    </article>
  );
};
