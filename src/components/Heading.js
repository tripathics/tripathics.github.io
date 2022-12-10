import React from "react"
import { Link } from "gatsby"

const Heading = ({ id, title, pageLink, extLink, extLinkText }) => {
  return (
    <div className="section-heading">
      <h2 id={id}>
        <a href={`#${id}`}>{title}</a>
      </h2>
      {extLink && (
        <a className="button" href={extLink} target="_blank" rel="noreferrer">{extLinkText}</a>
      )}
      {pageLink && (
        <Link className="button" to={pageLink}>View all</Link>
      )}
    </div>
  )
}

const PageTitle = ({ id, title }) => {
  id = id ?? '';
  return (
    <header className="head-container">
      <h1 id={id}>
        {id ? <a href={`#${id}`}>{title}</a> : <>{title}</>}
      </h1>
    </header>
  )
}

export {Heading, PageTitle};