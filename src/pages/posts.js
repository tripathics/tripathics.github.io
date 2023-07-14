import React from "react"
import Helmet from "react-helmet"
import config from "../utils/config"
import { Link, graphql } from "gatsby"
import { PageTitle } from "../components/Heading"
import { slugify } from "../utils/helpers"

const PostListItem = ({ title, date }) => (
  <Link className="post" to={`./${slugify(title)}`}>
    <h3>{title}</h3>
    <time>{date}</time>
  </Link>
)

const Posts = ({ data }) => {
  const { allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges.map(edge => edge.node.frontmatter);

  // map over posts to categorize posts according to year where year is in descending order
  // years is an array of years in descending order
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  return (
    <div className="posts-component">
      <Helmet title={`Posts | ${config.siteTitle}`} />
      <PageTitle id='posts' title='Posts' />
      {Object.keys(postsByYear).sort((a, b) => (b - a)).map(year => (
        <section className="container" key={year}>
          <h2 className="year">{year}</h2>
          <div className="posts">
            {postsByYear[year].map(post => (
              <PostListItem key={post.title} title={post.title} date={post.date} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/" } },
      sort:{frontmatter: {date:DESC} }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD")
            year:date(formatString:"YYYY")
          }
        }
      }
    }
  }
`

export default Posts