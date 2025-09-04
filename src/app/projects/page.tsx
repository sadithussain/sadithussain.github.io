import React from "react";
import Image from "next/image";

const projectData = [
  {
    title: "Visual Studio Code AI Extension",
    description:
      "A VS Code extension that allows you to use your own Google Gemini API Key to query your own model.",
    technologies: [
      "TypeScript",
      "Node.js",
      "VS Code API",
      "Webview API",
      "Gemini API",
    ],
    githubLink: "https://github.com/sadithussain/vibe-coder-vsc-extension-",
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=SaditHussain.vibe-coder-sadit",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio site built from the ground up to showcase my skills and projects. Designed to be fully responsive and deployed as a static site.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/sadithussain/sadithussain.github.io",
    liveLink: "https://sadithussain.github.io/",
  },
  {
    title: "Discord Bot",
    description:
      "A feature-rich bot built with Node.js to interact with the Discord API, providing moderation, utility, and server management tools.",
    technologies: ["JavaScript", "Node.js", "Discord.js", "Git"],
    githubLink: "https://github.com/sadithussain/discord-bot",
    liveLink: null,
  },
  {
    title: "Calculator Application",
    description:
      "Developed a calculator with a functioning GUI that can evaluate long expressions, going beyond single-operation limits.",
    technologies: ["Python", "Tkinter"],
    githubLink: "https://github.com/sadithussain/calculator",
    liveLink: null,
  },
];

const Projects = () => {
  return (
    <main className="flex flex-col items-center gap-y-8 p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl bg-gray-800 p-4 gap-y-3 transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p>{project.description}</p>

            <ul className="flex flex-row flex-wrap gap-3">
              {project.technologies.map((technology, i) => (
                <li
                  key={i}
                  className="rounded-full bg-sky-900 px-3 py-1 font-semibold"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <div className="flex flex-row flex-wrap gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-row flex-wrap items-center gap-x-1"
                >
                  <Image
                    src="github.png"
                    alt="GitHub Repository"
                    width={40}
                    height={40}
                  ></Image>{" "}
                  GitHub Repo
                </a>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-row flex-wrap items-center gap-x-1"
                >
                  <Image
                    src="go_to_page.png"
                    alt="Live Demo"
                    width={30}
                    height={30}
                  ></Image>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
