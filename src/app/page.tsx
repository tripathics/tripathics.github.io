import { PostCard, ProjectCard } from "@/components/Card";
import Decoration from "@/components/Decoration";
import { Heading } from "@/components/Heading";
import Skills from "@/components/Skills";
import { projectsList } from "@/data/projectsList";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts(3);

  return (
    <div className="home-component">
      <header className="head-container hero">
        <h1 className="hero-heading" id="hello">
          <a href="#hello">Hello!</a>
        </h1>

        <p className="hero-description">
          I&apos;m Chandrashekhar. I like pop music, coding, sketching and
          shooting photos. I also write sometimes. &#128518;
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
            .slice(0, 5)
            .filter((project) => project.highlight)
            .map((project, i) => (
              <ProjectCard {...project} key={i} />
            ))}
        </div>
      </section>
    </div>
  );
}
