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
    skills: ["Git", "GitHub", "GitHub Actions"],
  },
];

const Skills = () => {
  return (
    <main className="flex flex-col items-center gap-y-8 p-8 w-full">
      <h1 className="text-5xl font-bold">Skills</h1>
      <div className="grid grid-cols-4 gap-8 w-full max-w-5xl">
        {skillsData.map((item, index) => (
          <div key={item.category}>
            <h2 className="text-2xl font-semibold">{item.category}</h2>
            <ul className="mt-4 text-lg text-left text-slate-300 space-y-2">
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
