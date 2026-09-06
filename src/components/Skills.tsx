"use client";

import { useState } from "react";

const skillset: {
  skills: Record<string, { id: string; name: string }>;
  categories: Record<string, { id: string; name: string; skillsLs: string[] }>;
} = {
  skills: {
    angular: { id: "angular", name: "Angular" },
    bash: { id: "bash", name: "Bash" },
    cpp: { id: "cpp", name: "C/C++" },
    django: { id: "django", name: "Django" },
    firebase: { id: "firebase", name: "Firebase" },
    flask: { id: "flask", name: "Flask" },
    git: { id: "git", name: "Git" },
    html: { id: "html", name: "HTML/CSS" },
    java: { id: "java", name: "Java" },
    javascript: { id: "javascript", name: "JavaScript" },
    linux: { id: "linux", name: "Linux" },
    lua: { id: "lua", name: "Lua" },
    markdown: { id: "markdown", name: "Markdown" },
    nodejs: { id: "nodejs", name: "NodeJS" },
    python: { id: "python", name: "Python" },
    react: { id: "react", name: "ReactJS" },
    sql: { id: "cpp", name: "SQL" },
    typescript: { id: "typescript", name: "TypeScript" },
    neovim: { id: "neovim", name: "Neovim" },
  },
  categories: {
    all: {
      id: "all",
      name: "All",
      skillsLs: [
        "react",
        "bash",
        "cpp",
        "django",
        "firebase",
        "flask",
        "git",
        "html",
        "java",
        "javascript",
        "linux",
        "markdown",
        "nodejs",
        "python",
        "angular",
        "typescript",
        "sql",
        "lua",
        "neovim",
      ],
    },
    linux: { id: "linux", name: "Linux", skillsLs: ["linux", "bash"] },
    prog: {
      id: "prog",
      name: "Programming languages",
      skillsLs: ["cpp", "java"],
    },
    script: {
      id: "script",
      name: "Scripting languages",
      skillsLs: ["python", "javascript", "typescript", "bash"],
    },
    web: {
      id: "web",
      name: "Web",
      skillsLs: [
        "html",
        "javascript",
        "typescript",
        "markdown",
        "django",
        "nodejs",
        "flask",
        "angular",
        "react",
      ],
    },
    vcs: { id: "vcs", name: "Version Control", skillsLs: ["git"] },
    db: { id: "db", name: "Database", skillsLs: ["sql", "firebase"] },
    framework: {
      id: "framework",
      name: "Web framework",
      skillsLs: ["django", "nodejs", "flask"],
    },
    frontend: {
      id: "frontend",
      name: "Frontend framework",
      skillsLs: ["react", "angular"],
    },
  },
};

function getImgSrg(id: string): string {

  return ''
}

const Skills = () => {
  const [currCategory, setCurrCategory] = useState("all");

  const skillCategoryComp = (
    <div className="category-wrapper">
      <ul className="category">
        {Object.keys(skillset.categories).map((id) => (
          <li id={id} key={id}>
            <button
              type="button"
              className={id === currCategory ? "active" : ""}
              onClick={() => {
                setCurrCategory(id);
              }}
            >
              {skillset.categories[id].name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  const skillsComp = (
    <div className="skills">
      {skillset.categories[currCategory].skillsLs.map((id, i) => (
        <p key={i} className="skill">
          <img src={`/skills/${skillset.skills[id].id}.svg`} alt="" />
          {skillset.skills[id].name}
        </p>
      ))}
    </div>
  );

  return (
    <div className="skills-section">
      {skillCategoryComp}
      {skillsComp}
    </div>
  );
};

export default Skills;
