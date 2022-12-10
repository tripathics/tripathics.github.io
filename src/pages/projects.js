import React from "react"
import { PageTitle } from "../components/Heading"
import { ProjectCard } from "../components/Card"
import { projectsList } from "../data/projectsList"

const Projects = () => {

  return (
    <div className="projects-component">
      <PageTitle id='section-p0' title='Projects' />

      <section className="container projects-grid">
        {projectsList.map((project, i) => (
          <ProjectCard {...project} key={i} />
        ))}
      </section>
    </div>
  )
}

export default Projects