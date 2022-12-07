import { Link } from "react-router-dom"

const Card = (props) => {
  const { time, pageLink, title, tags } = props
  return (
    <article className="card">
      <time>{time}</time>
      <h3><Link to={pageLink}>{title}</Link></h3>
      <div className="tags">
        {tags.map(tag => <span className="tag">{tag}</span>)}
      </div>
    </article>
  )
}

const ProjectCard = (props) => {
  const { imgSrc, time, demoLink, srcLink, title, desc } = props
  return (
    <article className="anchored card">
      <div className="image-wrapper">
        <img src={`./static/projects/${imgSrc}`} width="250" height="250" alt="" />
      </div>
      <div className="proj-desc">
        <time>{time}</time>
        {demoLink ? (
          <h3><a href={demoLink} target="_blank" rel="noreferrer">{title}</a></h3>
        ) : (
          <h3><a href={srcLink} target="_blank" rel="noreferrer">{title}</a></h3>
        )}
        <p>{desc}</p>
      </div>
      <div className="anchored links">
        <a target="_blank" rel="noreferrer" href={srcLink} className="button">Source</a>
        {demoLink && <a target="_blank" rel="noreferrer" href={demoLink} className="button">Demo</a>}
      </div>
    </article>
  )
}

export { Card, ProjectCard }