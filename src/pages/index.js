import React from "react"
import Heading from "../components/Heading"
import { Card, ProjectCard } from "../components/Card"
import Decoration from "../components/Decoration"
import Skills from "../components/Skills"
import { Link } from "gatsby"

const IndexPage = () => {
  const posts = [
    { title: 'Python for C programmers', time: 'Jul 7, 2022', pageLink: 'python-for-c-programmers', tags: ["Python", "Beginner"] },
    { title: 'My journey through Angular', time: 'Jun 5, 2022', pageLink: 'TODO', tags: ["Front-end", "TypeScript", "Walkthrough"] },
    { title: 'Introduction to Linux Terminal', time: 'February 20, 2022', pageLink: 'TODO', tags: ["Command line", "Terminal", "Linux"] },
    { title: 'Installing Arch Linux on a Virtualbox VM', time: 'January 27, 2022', pageLink: 'TODO', tags: ["Linux", "OS", "VM"] },
    { title: 'Creating a simple typing game webapp', time: 'December 18, 2021', pageLink: 'TODO', tags: ["JavaScript", "Event", "API"] },
    { title: 'Setting up your first coding environment', time: 'August 17, 2020', pageLink: 'first-coding-environment-setup', tags: ["IDE", "C", "VsCode"] },
  ]

  const projects = [
    { title: 'Typing Game', desc: 'A typing game for desktop and mobile', time: '2022', srcLink: 'https://github.com/tripathics/typing-game', demoLink: 'https://tripathics.github.io/typing-game', imgSrc: 'typewriter.webp' },
    { title: 'Todo List', desc: 'Todo list CLI app', time: '2021', srcLink: 'https://github.com/tripathics/projects/tree/main/todo_list', demoLink: '', imgSrc: 'todo.webp' },
    { title: 'Filter', desc: 'Apply filter to images from CLI', time: '2021', srcLink: 'https://github.com/tripathics/projects/tree/main/filter_more', demoLink: '', imgSrc: 'filter.webp' },
    { title: 'DNA', desc: 'Identify people from their DNA sequence given a database', time: '2021', srcLink: 'https://github.com/tripathics/projects/tree/main/dna', demoLink: '', imgSrc: 'dna.webp' },
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
          {projects.map((project, i) => <ProjectCard {...project} key={i} />)}
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