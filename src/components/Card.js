import React from "react"
import { Link } from "gatsby"

const Card = ({ date, writeup, name, tags }) => {
  return (
    <article className="card">
      <time>{date}</time>
      <h3><Link to={writeup}>{name}</Link></h3>
      <div className="tags">
        {tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
      </div>
    </article>
  )
}

const ProjectCard = ({ name, date, slug, tagline, url, src, writeup, highlight }) => {
  return (
    <article className="anchored card">
      <div className="image-wrapper">
        {highlight && (
          <img src={require(`../images/projects/${slug}.webp`).default} width="250" height="250" alt="" />
        )}
        {!highlight && (
          <img src={require(`../images/projects/filter.webp`).default} width="250" height="250" alt="" />
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

export { Card, ProjectCard }