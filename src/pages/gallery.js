import React from "react"
import { PageTitle } from "../components/Heading"
import Todo from "../components/todo"

const Gallery = () => {
  return (
    <>
      <PageTitle id='section-g0' title='Gallery' />
      <section className="container">
        <Todo />
      </section>
    </>
  )
}

export default Gallery