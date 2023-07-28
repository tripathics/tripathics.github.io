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

  const [tagFilter, setTagFilter] = React.useState(null);

  const postsByYear = posts.reduce((acc, post) => {
    const year = post.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const tags = posts.reduce((acc, post) => {
    const tags = post.tags || [];
    tags.forEach(tag => {
      if (!acc.includes(tag)) acc.push(tag);
    });
    return acc;
  }, []);

  return (
    <div className="posts-component">
      <Helmet title={`Posts | ${config.siteTitle}`} />
      <PageTitle id='posts' title='Posts' />
      <div className='tags-filter container'>
        <h3>Filter by tag</h3>
        <div className='tags'>
          <button className={`tag ${tagFilter === null ? 'active' : ''}`} onClick={() => setTagFilter(null)}>All</button>
          {tags.map(tag => (
            <button key={tag} className={`tag ${tagFilter === tag ? 'active' : ''}`} onClick={() => setTagFilter(tag)}>{tag}</button>
          ))}
        </div>
      </div>
      {Object.keys(postsByYear).sort((a, b) => (b - a)).map(year => (
        <section className="container" key={year}>
          {(tagFilter === null || postsByYear[year].filter(post => (post.tags || []).includes(tagFilter)).length > 0) && (
            <h2 className="year">{year}</h2>
          )}
          <div className="posts">
            {postsByYear[year].filter(post => tagFilter === null || (post.tags || []).includes(tagFilter)).map(post => (
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
          filter: {fileAbsolutePath: {regex: "/content/" } },
          sort:{frontmatter: {date:DESC} }
        ) {
        edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD")
            year:date(formatString:"YYYY")
            tags
          }
        }
      }
    }
  }
`

export default Posts