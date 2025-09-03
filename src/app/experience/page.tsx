import React from "react";
import Image from "next/image";

const experienceData = [
  {
    title: "AI Engineer Intern",
    company: "HIPE Network",
    companyLink: "https://thehipe.org/",
    dates: "July 2025 - August 2025",
    location: "New York, NY",
    description: [
      "Engineered a full-stack Retrieval-Augmented Generation (RAG) chatbot using Python, LangChain, and the Google Gemini API to deliver accurate, context-aware answers for incoming CUNY freshmen.",
      "Built a dynamic knowledge base by designing a data pipeline to process PDFs and CSVs, embedding content into a Chroma vector database for rapid semantic search.",
      "Implemented a multi-tier filtering system enabling users to scope results by specific CUNY school and content category, improving response relevance and user experience.",
    ],
  },
];

const Experience = () => {
  return (
    <main className="flex flex-col items-center gap-y-8 p-8 w-full">
      <h1 className="text-5xl font-bold">Experience</h1>
      <div className="w-full max-w-4xl">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="group flex gap-x-6 rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-800/50"
          >
            <div className="flex-grow">
              <h2 className="text-2xl font-bold transition-colors group-hover:text-slate-300">
                {experience.title}
              </h2>
              <ul className="list-disc list-outside pl-4 mt-2 space-y-2 text-slate-300">
                {experience.description.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-lg font-semibold">
                <a
                  href={experience.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {experience.company}
                </a>
              </p>

              <p className="text-sm text-slate-400 mt-1">{experience.dates}</p>
              <p className="text-sm text-slate-400">{experience.location}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;
