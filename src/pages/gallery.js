import React from "react"
import Todo from "../components/todo"

const Gallery = () => {
  return (
    <>
      <header className="head-container">
        <h1 id="section-g0" className="title"><a href="#section-g0">Photo Gallery</a></h1>
      </header>
      <section className="container">
        <Todo />
      </section>
    </>
  )
}

export default Gallery