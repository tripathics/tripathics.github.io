import React from "react"
import Helmet from "react-helmet"
import config from "../utils/config"
import { Link } from "gatsby"
import { PageTitle } from "../components/Heading"

const Posts = () => {
  return (
    <div className="posts-component">
      <Helmet title={`Posts | ${config.siteTitle}`} />

      <PageTitle id='section-ps0' title='Posts' />
      <section className="container">
        <h2 className="year">2022</h2>
        <div className="posts">
          <Link className="post" to="./python-for-c-programmers">
            <h3>Python for C programmers</h3>
            <time>Jul 07</time>
          </Link>
          <Link className="post" to="./TODO">
            <h3>My Journey through Angular</h3>
            <time>Jun 05</time>
          </Link>
          <Link className="post" to="./TODO">
            <h3>Introduction to Linux Terminal</h3>
            <time>Feb 28</time>
          </Link>
          <Link className="post" to="./TODO">
            <h3>Installing Arch Linux on a Virtualbox VM</h3>
            <time>Jan 27</time>
          </Link>
        </div>
      </section>
      <section className="container">
        <h2 className="year">2021</h2>
        <div className="posts">
          <Link className="post" to="./TODO">
            <h3>Creating a simple typing game webapp</h3>
            <time>Dec 18</time>
          </Link>
        </div>
      </section>
      <section className="container">
        <h2 className="year">2020</h2>
        <div className="posts">
          <Link className="post" to="./first-coding-environment-setup">
            <h3>Setting up your first coding environment</h3>
            <time>Aug 17</time>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Posts