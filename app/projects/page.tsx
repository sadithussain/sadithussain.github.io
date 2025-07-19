import React from "react";

const projectData = [
  {
    title: "Vibe Coder - AI Assistant",
    description:
      "A VS Code extension that allows you to use your own Google Gemini API Key to query your own model.",
    technologies: [
      "TypeScript",
      "Node.js",
      "VS Code API",
      "Webview API",
      "Gemini API",
    ],
    githubLink: "https://github.com/sadithussain/vibe-coder", // <-- Replace with your actual repo link
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=SaditHussain.vibe-coder-sadit", // You can link to the VS Code Marketplace page here once it's published
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
    githubLink: "https://github.com/sadithussain/discord-bot", // <-- IMPORTANT: Replace this link
    liveLink: null,
  },
  {
    title: "Calculator Application",
    description:
      "Developed a calculator with a functioning GUI that can evaluate long expressions, going beyond single-operation limits.",
    technologies: ["Python", "Tkinter"],
    githubLink: "https://github.com/sadithussain/calculator", // <-- IMPORTANT: Replace this link
    liveLink: null, // Add a live demo link if you have one
  },
  // Add more projects here in the future!
];

const Projects = () => {
  return (
    <main className="w-full justify-center p-4 pt-8 md:pt-12 lg:pt-16">
      <div className="mx-auto max-w-6xl">
        <div
          id="projects-list"
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-lg transition-transform hover:scale-105"
            >
              <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
              <p className="mb-4 flex-grow text-slate-300">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-sky-900/50 px-3 py-1 text-sm font-semibold text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto flex items-center space-x-4 pt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-300 transition-colors hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Code</span>
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
