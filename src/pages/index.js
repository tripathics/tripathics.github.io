import React from "react"
import Helmet from "react-helmet"
import config from "../utils/config"
import { Heading } from "../components/Heading"
import { PostCard, ProjectCard } from "../components/Card"
import Decoration from "../components/Decoration"
import Skills from "../components/Skills"
import { Link } from "gatsby"
import { projectsList } from "../data/projectsList"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges.map(edge => edge.node.frontmatter);

  return (
    <div className="home-component">
      <Helmet title={config.siteTitle} htmlAttributes={{ lang: 'en' }} />

      <header className="head-container hero">
        <h1 className="hero-heading" id="hello"><Link to="#hello">Hello!</Link></h1>

        <p className="hero-description">I'm Chandrashekhar, a software developer and engineer who likes making projects from scratch and learning new technologies. I'm a computer science student pursuing B. Tech. from <Link to="https://www.nitap.ac.in/" target="_blank" rel="noreferrer">NIT Arunachal Pradesh</Link>. I like pop music, coding, sketching and shooting photos. Sometimes I write technical blogs.
          <br /><br />
          This is the spot for finding my projects I share with the world &#128518;.</p>
      </header>

      <section className="container">
        <Decoration />
      </section>

      <section className="container">
        <Heading id='skills' title="Things I use daily" />
        <Skills />
      </section>

      <section className="container">
        <Heading id='posts' title="What's new" pageLink='/posts' />

        <div className="home-posts">
          {posts.map((post, i) => <PostCard {...post} key={i} />)}
        </div>
      </section>

      <section className="container">
        <Heading id='featuredProjects' title="Featured projects" pageLink='/projects' />

        <div className="home-projects">
          {projectsList.filter(project => project.highlight).filter((_, i) => i < 4).map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </div>
      </section>

      <section className="container resume">
        <Heading id='resume' title="Resume" extLinkText="View PDF" extLink='https://raw.githubusercontent.com/tripathics/resume/7d73cc617db7e93212b576f35e8e79301ee46f45/Chandrashekhar.pdf' />
        <div className="image-wrapper">
          <img src={require("../assets/Chandrashekhar_Tripathi-resume.webp").default} alt="resume" width="925" height="1196" />
        </div>
      </section>
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
            tags
          }
        }
      }
    }
  }
`


export default IndexPage