import React from "react"

const Posts = () => {
  return (
    <div className="posts-component">
      <header className="head-container">
        <h1 id="section-ps0" className=""><a href="#section-ps0">Posts</a></h1>
      </header>
      <section className="container">
        <h2 className="year">2022</h2>
        <div className="posts">
          <a className="post" href="./python-for-c-programmers">
            <h3>Python for C programmers</h3>
            <time>Jul 07</time>
          </a>
          <a className="post" href="./TODO">
            <h3>My Journey through Angular</h3>
            <time>Jun 05</time>
          </a>
          <a className="post" href="./TODO">
            <h3>Introduction to Linux Terminal</h3>
            <time>Feb 28</time>
          </a>
          <a className="post" href="./TODO">
            <h3>Installing Arch Linux on a Virtualbox VM</h3>
            <time>Jan 27</time>
          </a>
        </div>
      </section>
      <section className="container">
        <h2 className="year">2021</h2>
        <div className="posts">
          <a className="post" href="./TODO">
            <h3>Creating a simple typing game webapp</h3>
            <time>Dec 18</time>
          </a>
        </div>
      </section>
      <section className="container">
        <h2 className="year">2020</h2>
        <div className="posts">
          <a className="post" href="./first-coding-environment-setup">
            <h3>Setting up your first coding environment</h3>
            <time>Aug 17</time>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Posts