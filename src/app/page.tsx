import { PostCard, ProjectCard } from "@/components/Card";
import Decoration from "@/components/Decoration";
import { Heading } from "@/components/Heading";
import Skills from "@/components/Skills";
import { projectsList } from "@/data/projectsList";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="home-component">
      <header className="head-container hero">
        <h1 className="hero-heading" id="hello">
          <a href="#hello">Hello!</a>
        </h1>

        <p className="hero-description">
          I&apos;m Chandrashekhar. I like pop music, coding, sketching and shooting photos. I also write sometimes.
          &#128518;
        </p>
      </header>

      <section className="container">
        <Decoration />
      </section>

      <section className="container">
        <Heading id="skills" title="Things I use daily" />
        <Skills />
      </section>

      <section className="container">
        <Heading id="posts" title="What's new" pageLink="/posts" />

        <div className="home-posts">
          {posts.map((post, i) => (
            <PostCard {...post} key={i} />
          ))}
        </div>
      </section>

      <section className="container">
        <Heading
          id="featuredProjects"
          title="Featured projects"
          pageLink="/projects"
        />

        <div className="home-projects">
          {projectsList
            .filter((project) => project.highlight)
            .filter((_, i) => i < 4)
            .map((project, i) => (
              <ProjectCard {...project} key={i} />
            ))}
        </div>
      </section>

      <section className="container resume">
        <Heading
          id="resume"
          title="Resume"
          extLinkText="View PDF"
          extLink="https://raw.githubusercontent.com/tripathics/resume/7d73cc617db7e93212b576f35e8e79301ee46f45/Chandrashekhar.pdf"
        />
        <div className="image-wrapper">
          <img src="/resume.webp" alt="resume" width="925" height="1196" />
        </div>
      </section>
    </div>
  );
}
