import React from "react"
import Helmet from "react-helmet"
import config from "../../utils/config"
import { graphql } from "gatsby"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  const { txt, prerequisites, setup, lesson } = frontmatter.hero
  return (
    <div className="blog-component">
      <Helmet title={`${frontmatter.title} | ${config.siteTitle}`} />

      <header className="head-container">
        <h1>{frontmatter.title}</h1>
        <section className="segment">
          {txt && <p dangerouslySetInnerHTML={{ __html: txt }}></p>}
          {prerequisites && (
            <>
              <h4>Prerequisites</h4>
              <ul>{prerequisites.split(';').map((item, i) => (
                <li key={i}>{item}</li>
              ))}</ul>
            </>
          )}
          {setup && (
            <>
              <h4>What you'll need</h4>
              <ul>{setup.split(';').map((item, i) => (
                <li key={i}>{item}</li>
              ))}</ul>
            </>
          )}
          {lesson && (
            <>
              <h4>After reading this article, you'll be able to</h4>
              <ul>{lesson.split(';').map((item, i) => (
                <li key={i}>{item}</li>
              ))}</ul>
            </>
          )}
        </section>
      </header>

      <main className="grid">
        <aside className="container">
          <div className="toc-sidebar">
            <h2>Table of contents</h2>
            <div className="toc" dangerouslySetInnerHTML={{ __html: tableOfContents }} />
          </div>
        </aside>
        <article className="container" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
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