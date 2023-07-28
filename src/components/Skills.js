import React from "react"
import { useState } from "react";

const Skills = () => {
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
      sql: { id: 'cpp', name: 'SQL' }
    },
    categories: {
      all: { id: 'all', name: 'All', skillsLs: ["react", "bash", "cpp", "django", "firebase", "flask", "git", "html", "java", "javascript", "linux", "markdown", "nodejs", "powershell", "python", "angular", "typescript", "sql"] },
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
          <li id={id} key={id}>
            <button type="button" className={id === currCategory ? 'active' : ''} onClick={() => { setCurrCategory(id) }}>
              {skillset.categories[id].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )

  const skillsComp = (
    <div className="skills">
      {skillset.categories[currCategory].skillsLs.map((id, i) => (
        <p key={i} className="skill">
          <img src={`./skills/${skillset.skills[id].id}.svg`} alt="" />
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

export default Skills;