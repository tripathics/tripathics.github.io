import React from "react"
import Helmet from "react-helmet"
import config from "../utils/config"
import { Link } from "gatsby"
import { PageTitle } from "../components/Heading"
import { slugify } from "../utils/helpers"

const PostListItem = ({ title, date }) => {
  return (
    <Link className="post" to={`./${slugify(title)}`}>
      <h3>{title}</h3>
      <time>{date}</time>
    </Link>
  )
}

const Posts = () => {
  return (
    <div className="posts-component">
      <Helmet title={`Posts | ${config.siteTitle}`} />

      <PageTitle id='posts' title='Posts' />
      <section className="container">
        <h2 className="year">2023</h2>
        <div className="posts">
          <PostListItem title={"Setting up Node on Linux"} date={"Jan 15"} />
        </div>
      </section>

      <section className="container">
        <h2 className="year">2022</h2>
        <div className="posts">
          <PostListItem title={"Python for C programmers"} date={"Jul 07"} />
          <PostListItem title={"My Journey through Angular"} date={"Jun 05"} />
          <PostListItem title={"Introduction to Linux Terminal"} date={"Feb 28"} />
          <PostListItem title={"Installing Arch Linux on a Virtualbox VM"} date={"Jan 27"} />
        </div>
      </section>
      <section className="container">
        <h2 className="year">2021</h2>
        <div className="posts">
          <PostListItem title={"Creating a simple typing game webapp"} date={"Dec 18"} />
        </div>
      </section>
      <section className="container">
        <h2 className="year">2020</h2>
        <div className="posts">
          <PostListItem title={"Setting up your first coding environment"} date={"Aug 17"} />
        </div>
      </section>
    </div>
  )
}

export default Posts