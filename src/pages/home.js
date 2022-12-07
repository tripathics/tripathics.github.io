import { useState } from "react"

const Decoration = () => {
  return (
    <div className="images">
      <div className="image"><img src="./static/square/1.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/2.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/3.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/4.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/5.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/6.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/7.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/8.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/9.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/10.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/11.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/12.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/13.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/14.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/15.jpg" alt="" /></div>
      <div className="image"><img src="./static/square/16.jpg" alt="" /></div>
    </div>
  )
}

const Skills = (props) => {
  const skillset = {
    skills: {
      angular: { id: 'angular', name: 'Angular' },
      bash: { id: 'bash', name: 'Bash' },
      cpp: { id: 'cpp', name: 'C/C++' },
      django: { id: 'django', name: 'Django' },
      firebase: { id: 'firebase', name: 'Firebase' },
      flask: { id: 'flask', name: 'Flask' },
      git: { id: 'git', name: 'Git' },
      html: { id: 'html', name: 'HTML/CSS' },
      java: { id: 'java', name: 'Java' },
      javascript: { id: 'javascript', name: 'JavaScript' },
      linux: { id: 'linux', name: 'Linux' },
      markdown: { id: 'markdown', name: 'Markdown' },
      nodejs: { id: 'nodejs', name: 'NodeJS' },
      powershell: { id: 'powershell', name: 'Powershell' },
      python: { id: 'python', name: 'Python' },
      react: { id: 'react', name: 'ReactJS' },
      typescript: { id: 'typescript', name: 'TypeScript' },
      sql: {id: 'cpp', name: 'SQL'}
    },
    categories: {
      all: { id: 'all', name: 'All' , skillsLs: ["angular", "bash", "cpp", "django", "firebase", "flask", "git", "html", "java", "javascript", "linux", "markdown", "nodejs", "powershell", "python", "react", "typescript", "sql"] },
      linux: { id: 'linux', name: 'Linux', skillsLs: ['linux', 'bash'] },
      prog: { id: 'prog', name: 'Programming languages', skillsLs: ['cpp', 'java'] },
      script: { id: 'script', name: 'Scripting languages', skillsLs: ['python', 'javascript', 'powershell', 'typescript', 'bash'] },
      web: { id: 'web', name: 'Web', skillsLs: ['html', 'javascript', 'typescript', 'markdown', 'django', 'nodejs', 'flask', 'angular', 'react'] },
      vcs: { id: 'vcs', name: 'Version Control', skillsLs: ['git'] },
      db: { id: 'db', name: 'Database', skillsLs: ['sql', 'firebase'] },
      framework: { id: 'framework', name: 'Web framework', skillsLs: ['django', 'nodejs', 'flask'] },
      frontend: { id: 'frontend', name: 'Frontend framework', skillsLs: ['react', 'angular'] },
    }
  }

  const [currCategory, setCurrCategory] = useState('all');

  const skillCategoryComp = (
    <div className="category-wrapper">
      <ul className="category">
        {Object.keys(skillset.categories).map(id => (
          <li onClick={() => { setCurrCategory(id) }}
            id={id}
            key={id}
            className={id === currCategory ? 'active' : ''}
          >
            {skillset.categories[id].name}
          </li>
        ))}
      </ul>
    </div>
  )

  const skillsComp = (
    <div className="skills">
      {skillset.categories[currCategory].skillsLs.map((id) => (
        <p className="skill">
          <img src={`./static/skills/${skillset.skills[id].id}.svg`} alt="" />
          {skillset.skills[id].name}
        </p>
      ))}
    </div>
  )

  return (
    <div className="skills-section">
      {skillCategoryComp}
      {skillsComp}
    </div>
  )
}

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
        <Decoration />
      </section>

      <section className="container">
        <h2 id="section-h1"><a href="#section-h1">Skills</a></h2>
        <Skills />
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