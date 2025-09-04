import React from "react";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Discord.js",
      "Tkinter",
    ],
  },
  {
    category: "AI/ML",
    skills: ["LangChain", "Google Gemini API", "RAG Architecture", "Chroma DB"],
  },
  {
    category: "Developer Tools & Platforms",
    skills: ["Git", "GitHub", "GitHub Actions", "VS Code", "Vercel"],
  },
];

const Skills = () => {
  return (
    <main className="flex flex-col items-center gap-y-8 p-4 md:p-8 w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-center">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="border border-slate-700 rounded-lg p-6 bg-slate-800/20"
          >
            <h2 className="text-2xl font-semibold text-slate-200">
              {item.category}
            </h2>
            <ul className="mt-4 text-lg text-left text-slate-300 space-y-2 list-disc list-inside">
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
