import * as React from "react"
import { graphql } from "gatsby"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  const { txt, prerequisites, setup, lesson } = frontmatter.hero
  return (
    <div className="blog-component grid">
      <main>
        <header className="head-container">
          <h1>{frontmatter.title}</h1>
          {txt && <p>{txt}</p>}
          {prerequisites && (
            <>
            <h3>Prerequisites</h3>
            <ul>{prerequisites.split(';').map((item, i) => (
              <li key={i}>{item}</li>
            ))}</ul>
            </>
          )}
          {setup && (
            <>
            <h3>What you'll need</h3>
            <ul>{setup.split(';').map((item, i) => (
              <li key={i}>{item}</li>
            ))}</ul>
            </>
          )}
          {lesson && (
            <>
            <h3>After reading this article, you'll be able to</h3>
            <ul>{lesson.split(';').map((item, i) => (
              <li key={i}>{item}</li>
            ))}</ul>
            </>
          )}
        </header>
        <article className="container" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <aside className="container" dangerouslySetInnerHTML={{ __html: tableOfContents }} />
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents(
        maxDepth: 3
      )
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        hero {
          txt
          prerequisites
          setup
          lesson
        }
      }
    }
  }
`