const Home = () => {
  return (
    <div className="home-component">
      <header className="head-container hero">
        <h1 className="hero-heading" id="section-hero"><a href="#section-hero">Hello!</a></h1>

        <p className="hero-description">I'm Chandrashekhar, a software developer and engineer who likes making projects from scratch and learning new technologies. I'm a computer science student pursuing B. Tech. from <a href="https://www.nitap.ac.in/" target="_blank" rel="noreferrer">NIT Arunachal Pradesh</a>. I like pop music, coding, sketching and shooting photos.
          <br /><br />
          This is the spot for finding my projects and articles I share with the world &#128518;</p>
      </header>

      <section className="container">
        <div className="images">
          <div className="image">
            <img src="./static/square/1.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/2.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/3.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/4.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/5.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/6.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/7.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/8.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/9.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/10.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/11.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/12.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/13.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/14.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/15.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./static/square/16.jpg" alt="" />
          </div>

        </div>
      </section>

      <section className="container">
        <h2 id="section-h1"><a href="#section-h1">Skills</a></h2>

        <div className="skills-section">
          <div className="category-wrapper">
            <div className="slide">
              <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_55_2)">
                  <path id="slide-left" d="M11.5975 9.34019L10.2955 8L0 17.9997L10.2955 28L11.5975 26.6595L2.68291 17.9997L11.5975 9.34019Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_55_2">
                    <rect width="20" height="36" fill="none" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="category">
              <ul id="skill-category">
                <li id="skill" className="active">All</li>
                <li id="linux">Linux</li>
                <li id="prog">Programming languages</li>
                <li id="script">Scripting languages</li>
                <li id="web">Web</li>
                <li id="vcs">Version control</li>
                <li id="db">Database</li>
                <li id="framework">Web frameworks</li>
                <li id="frontend">Frontend frameworks</li>
              </ul>
            </div>
            <div className="slide">
              <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="slide-right" d="M8.00001 26.6598L9.30196 28L19.5975 18.0003L9.30196 8L8.00001 9.34046L16.9146 18.0003L8.00001 26.6598Z" fill="black" />
              </svg>
            </div>
          </div>
          <div id="skills" className="skills">
            <p className="skill linux">
              <img src="./static/skills/linux.svg" role="presentation" alt="" />
              Linux
            </p>
            <p className="skill prog">
              <img src="./static/skills/cpp.svg" role="presentation" alt="" />
              C/C++
            </p>
            <p className="skill script">
              <img src="./static/skills/python.svg" role="presentation" alt="" />
              Python
            </p>
            <p className="skill prog">
              <img src="./static/skills/java.svg" role="presentation" alt="" />
              Java
            </p>
            <p className="skill web">
              <img src="./static/skills/html.svg" role="presentation" alt="" />
              HTML/CSS
            </p>
            <p className="skill script web">
              <img src="./static/skills/javascript.svg" role="presentation" alt="" />
              JavaScript
            </p>
            <p className="skill script">
              <img src="./static/skills/powershell.svg" role="presentation" alt="" />
              Powershell
            </p>
            <p className="skill script web">
              <img src="./static/skills/typescript.svg" role="presentation" alt="" />
              TypeScript
            </p>
            <p className="skill script linux">
              <img src="./static/skills/bash.svg" role="presentation" alt="" />
              Bash
            </p>
            <p className="skill web">
              <img src="./static/skills/markdown.svg" role="presentation" alt="" />
              Markdown
            </p>
            <p className="skill vcs">
              <img src="./static/skills/git.svg" role="presentation" alt="" />
              Git
            </p>
            <p className="skill db">
              <img src="./static/skills/cpp.svg" role="presentation" alt="" />
              SQL
            </p>
            <p className="skill db">
              <img src="./static/skills/firebase.svg" role="presentation" alt="" />
              Firebase
            </p>
            <p className="skill web framework">
              <img src="./static/skills/django.svg" role="presentation" alt="" />
              Django
            </p>
            <p className="skill web framework">
              <img src="./static/skills/nodejs.svg" role="presentation" alt="" />
              NodeJS
            </p>
            <p className="skill web framework">
              <img src="./static/skills/flask.svg" role="presentation" alt="" />
              Flask
            </p>
            <p className="skill web frontend">
              <img src="./static/skills/angular.svg" role="presentation" alt="" />
              Angular
            </p>
            <p className="skill web frontend">
              <img src="./static/skills/react.svg" role="presentation" alt="" />
              React
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section-heading">
          <h2 id="section-h2"><a href="#section-h2">What's new</a></h2>
          <a className="button" href="./posts">View all</a>
        </div>
        <div className="home-posts">
          <article className="card">
            <time>Jul 7, 2022</time>
            <h3><a href="./python-for-c-programmers">Python for C programmers</a></h3>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">Beginner</span>
            </div>
          </article>

          <article className="card">
            <time>Jun 5, 2022</time>
            <h3><a href="./TODO">My journey through Angular</a></h3>
            <div className="tags">
              <span className="tag">Front-end</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Walkthrough</span>
            </div>
          </article>

          <article className="card">
            <time>February 28, 2022</time>
            <h3><a href="./TODO">Introduction to Linux Terminal</a></h3>
            <div className="tags">
              <span className="tag">Command line</span>
              <span className="tag">Terminal</span>
              <span className="tag">Linux</span>
            </div>
          </article>

          <article className="card">
            <time>January 27, 2022</time>
            <h3><a href="./TODO">Installing Arch Linux on a Virtualbox VM</a></h3>
            <div className="tags">
              <span className="tag">Linux</span>
              <span className="tag">OS</span>
              <span className="tag">VM</span>
            </div>
          </article>

          <article className="card">
            <time>December 18, 2021</time>
            <h3><a href="./TODO">Creating a simple typing game webapp</a></h3>
            <div className="tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Events</span>
              <span className="tag">API</span>
            </div>
          </article>

          <article className="card">
            <time>August 17, 2020</time>
            <h3><a href="./first-coding-environment-setup">Setting up your first coding environment</a></h3>
            <div className="tags">
              <span className="tag">IDE</span>
              <span className="tag">C</span>
              <span className="tag">VSCode</span>
            </div>
          </article>
        </div>
      </section>

      <section className="container">
        <div className="section-heading">
          <h2 id="section-h3"><a href="#section-h3">Featured projects</a></h2>
          <a className="button" href="./projects">View all</a>
        </div>

        <div className="home-projects">
          <article className="anchored card">
            <div className="image-wrapper">
              <img src="./static/media/typewriter.webp" width="250" height="250" alt="Typewriter" />
            </div>
            <div className="proj-desc">
              <time>2022</time>
              <h3><a href="https://github.com/tripathics/typing-game" target="_blank" rel="noreferrer">Typing Game</a></h3>
              <p>A typing game for desktop and mobile</p>
            </div>
            <div className="anchored links">
              <a target="_blank" rel="noreferrer" href="https://github.com/tripathics/typing-game" className="button">Source</a>
              <a target="_blank" rel="noreferrer" href="https://tripathics.github.io/typing-game" className="button">Demo</a>
            </div>
          </article>

          <article className="anchored card">
            <div className="image-wrapper">
              <img src="./static/media/todo.webp" width="250" height="250" alt="Todo list" />
            </div>
            <div className="proj-desc">
              <time>2021</time>
              <h3><a href="https://github.com/tripathics/typing-game" target="_blank" rel="noreferrer">Todo List</a></h3>
              <p>Todo list CLI app</p>
            </div>
            <div className="anchored links">
              <a target="_blank" rel="noreferrer" href="https://github.com/tripathics/projects/tree/main/todo_list" className="button">Source</a>
            </div>
          </article>

          <article className="anchored card">
            <div className="image-wrapper">
              <img src="./static/media/filter.webp" width="250" height="250" alt="Camera" />
            </div>
            <div className="proj-desc">
              <time>2021</time>
              <h3><a href="https://github.com/tripathics/projects/tree/main/filter_more" target="_blank" rel="noreferrer">Filter</a></h3>
              <p>Apply filter to images from CLI</p>
            </div>
            <div className="anchored links">
              <a target="_blank" rel="noreferrer" href="https://github.com/tripathics/projects/tree/main/filter_more" className="button">Source</a>
            </div>
          </article>

          <article className="anchored card">
            <div className="image-wrapper">
              <img src="./static/media/dna.webp" width="250" height="250" alt="DNA clipart" />
            </div>
            <div className="proj-desc">
              <time>2021</time>
              <h3><a href="https://github.com/tripathics/projects/tree/main/filter_more" target="_blank" rel="noreferrer">dna.py</a></h3>
              <p>Identify people from their DNA sequence given a database</p>
            </div>
            <div className="anchored links">
              <a target="_blank" rel="noreferrer" href="https://github.com/tripathics/projects/tree/main/dna" className="button">Source</a>
            </div>
          </article>
        </div>
      </section>

      <section className="container resume">
        <div className="section-heading">
          <h2 id="section-h4"><a href="#section-h4" >Resume</a></h2>
          <a className="button" href="https://1drv.ms/b/s!AnLTSa_M6LzggsQ6jQZR5gu_Jln6xQ?e=Bdh9Ky" target="_blank" rel="noreferrer">Download .pdf</a>
        </div>
        <div className="image-wrapper">
          <img src="./static/Chandrashekhar_Tripathi-resume.webp" alt="resume" width="925" height="1196" />
        </div>
      </section>
    </div>
  )
}

export default Home