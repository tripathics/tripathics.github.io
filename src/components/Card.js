import React from "react"
import { Link } from "gatsby"
import { slugify } from "../utils/helpers"

const PostCard = ({ date, year, title, tags = [] }) => {
  return (
    <article className="card">
      <time>{date}, {year}</time>
      <h3><Link to={`/posts/${slugify(title)}`}>{title}</Link></h3>
      <div className="tags">
        {(tags || []).map((tag, i) => <span key={i} className="tag">{tag}</span>)}
      </div>
    </article>
  )
}

const ProjectCard = ({ name, date, slug, tagline, url, src, writeup }) => {
  return (
    <article className="project-card anchored card">
      <div className="image-wrapper">
        {slug && (
          <img src={`/projects/${slug}.webp`} width="250" height="250" alt="" />
        )}
        {!slug && (
          <img src={`/projects/filter.webp`} width="250" height="250" alt="" />
        )}
      </div>
      <div className="proj-desc">
        <time>{date}</time>
        {url ? (
          <h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3>
        ) : (
          <h3><a href={src} target="_blank" rel="noreferrer">{name}</a></h3>
        )}
        <p>{tagline}</p>
      </div>
      <div className="anchored links">
        <a target="_blank" rel="noreferrer" href={src} className="button">Source</a>
        {url && <a target="_blank" rel="noreferrer" href={url} className="button">Demo</a>}
        {writeup && <Link to={slug} className="button">Article</Link>}
      </div>
    </article>
  )
}

export { PostCard, ProjectCard }