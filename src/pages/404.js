import React from "react"
import Helmet from "react-helmet"
import config from "../utils/config"
import { PageTitle } from "../components/Heading"
import { Link } from "gatsby"

const error404 = () => {
  return (
    <div className="error-404">
      <Helmet title={`404 | ${config.siteTitle}`} />
      <PageTitle title='404'/>
      <section className="container">
        <p>This is not the web page you are looking for.</p>
        <Link to="/">Back to home</Link>
      </section>
    </div>
  )
}

export default error404