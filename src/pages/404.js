import React from "react"
import { Link } from "gatsby"
import { PageTitle } from "../components/Heading"

const error404 = () => {
  return (
    <div className="error-404">
      <PageTitle title='404'/>
      <section className="container">
        <p>This is not the web page you are looking for.</p>
        <Link to="/">Back to home</Link>
      </section>
    </div>
  )
}

export default error404