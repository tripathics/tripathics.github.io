import React from "react"
import { Heading } from "../components/Heading"
import { Card, ProjectCard } from "../components/Card"
import Decoration from "../components/Decoration"
import Skills from "../components/Skills"
import { Link } from "gatsby"
import { projectsList } from "../data/projectsList"

const IndexPage = () => {
  const posts = [
    { name: 'Python for C programmers', date: 'Jul 7, 2022', writeup: '/posts/python-for-c-programmers', tags: ["Python", "Beginner"] },
    { name: 'My journey through Angular', date: 'Jun 5, 2022', writeup: '/posts/TODO', tags: ["Front-end", "TypeScript", "Walkthrough"] },
    { name: 'Introduction to Linux Terminal', date: 'February 20, 2022', writeup: '/posts/TODO', tags: ["Command line", "Terminal", "Linux"] },
    { name: 'Installing Arch Linux on a Virtualbox VM', date: 'January 27, 2022', writeup: '/posts/TODO', tags: ["Linux", "OS", "VM"] },
    { name: 'Creating a simple typing game webapp', date: 'December 18, 2021', writeup: '/posts/TODO', tags: ["JavaScript", "Event", "API"] },
    { name: 'Setting up your first coding environment', date: 'August 17, 2020', writeup: '/posts/first-coding-environment-setup', tags: ["IDE", "C", "VsCode"] },
  ]

  return (
    <div className="home-component">
      <header className="head-container hero">
        <h1 className="hero-heading" id="section-hero"><Link to="#section-hero">Hello!</Link></h1>

        <p className="hero-description">I'm Chandrashekhar, a software developer and engineer who likes making projects from scratch and learning new technologies. I'm a computer science student pursuing B. Tech. from <Link to="https://www.nitap.ac.in/" target="_blank" rel="noreferrer">NIT Arunachal Pradesh</Link>. I like pop music, coding, sketching and shooting photos.
          <br /><br />
          This is the spot for finding my projects and articles I share with the world &#128518;</p>
      </header>

      <section className="container">
        <Decoration />
      </section>

      <section className="container">
        <Heading id='section-h1' title="Skills" />
        <Skills />
      </section>

      <section className="container">
        <Heading id='section-h2' title="What's new" pageLink='/posts' />

        <div className="home-posts">
          {posts.map((post, i) => <Card {...post} key={i} />)}
        </div>
      </section>

      <section className="container">
        <Heading id='section-h3' title="Featured projects" pageLink='/projects' />

        <div className="home-projects">
          {projectsList.filter(project => project.highlight).map((project, i) => (
            <ProjectCard {...project} key={i} />
          ))}
        </div>
      </section>

      <section className="container resume">
        <Heading id='section-h4' title="Resume" extLinkText="View PDF" extLink='https://1drv.ms/b/s!AnLTSa_M6LzggsQ6jQZR5gu_Jln6xQ?e=Bdh9Ky' />
        <div className="image-wrapper">
          <img src="./static/Chandrashekhar_Tripathi-resume.webp" alt="resume" width="925" height="1196" />
        </div>
      </section>
    </div>
  )
}

export default IndexPage