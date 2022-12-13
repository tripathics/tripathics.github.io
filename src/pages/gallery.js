import React from "react"
import Helmet from "react-helmet"
import config from "../utils/config"
import { PageTitle } from "../components/Heading"
import Todo from "../components/todo"

const Gallery = () => {
  return (
    <>
      <PageTitle id='section-g0' title='Gallery' />
      <Helmet title={`Gallery | ${config.siteTitle}`} /> 
      <section className="container">
        <Todo />
      </section>
    </>
  )
}

export default Gallery