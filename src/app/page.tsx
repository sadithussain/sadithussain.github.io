import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-8 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-y-12 md:gap-y-0 md:gap-x-20 max-w-6xl w-full">
        <div className="w-full md:w-2/3 flex flex-col gap-y-4 text-base md:text-xl order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, my name&apos;s Sadit!
          </h1>
          <p>
            I&apos;m a full-stack and AI developer in NYC studying{" "}
            <span className="font-semibold text-slate-300">
              Computer Science
            </span>{" "}
            at the{" "}
            <span className="font-semibold text-slate-300">
              Rochester Institute of Technology
            </span>{" "}
            as a 2nd year.
          </p>
          <p>
            Right now, I&apos;m working on improving my backend skills by
            working on projects using{" "}
            <span className="font-semibold text-slate-300">MySQL</span> and{" "}
            <span className="font-semibold text-slate-300">MongoDB</span>.
          </p>
          <p className="text-2xl md:text-3xl font-semibold mt-4">
            Things I&apos;ve worked on in the past include...
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <a
                href="https://github.com/sadithussain/cuny-chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:underline text-base md:text-xl"
              >
                Creating a{" "}
                <span className="font-semibold text-slate-300">RAG</span>{" "}
                chatbot for CUNY freshmen
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sadithussain/vibe-coder-vsc-extension-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:underline text-base md:text-xl"
              >
                Constructed a{" "}
                <span className="font-semibold text-slate-300">VSC</span>{" "}
                extension that allows you to use your own{" "}
                <span className="font-semibold text-slate-300">Gemini API</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sadithussain/sadithussain.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:underline text-base md:text-xl"
              >
                Developed my personal portfolio using{" "}
                <span className="font-semibold text-slate-300">Next.js</span>{" "}
                and{" "}
                <span className="font-semibold text-slate-300">
                  Tailwind CSS
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sadithussain/discord-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:underline text-base md:text-xl"
              >
                Programmed a Discord bot using{" "}
                <span className="font-semibold text-slate-300">Node.js</span>{" "}
                and the{" "}
                <span className="font-semibold text-slate-300">
                  Discord API
                </span>
              </a>
            </li>
          </ul>

          <p className="mt-6 text-xl">
            Click one of the icons below to connect with me!
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 items-center">
            <a
              href="https://www.linkedin.com/in/sadithussain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/linkedIn.png"
                alt="LinkedIn Profile"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://github.com/sadithussain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/github.png"
                alt="GitHub Profile"
                width={36}
                height={36}
              />
            </a>
            <a href="mailto:sadithussain1@gmail.com" className="inline-block">
              <Image
                src="/email.png"
                alt="Email Hyperlink"
                width={36}
                height={36}
              />
            </a>
            <p className="text-sm md:text-base text-slate-400 ml-2">
              (sadithussain1@gmail.com)
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center items-center order-1 md:order-2">
          <Image
            src="/sadit_linked_in.jpg"
            alt="Sadit's Linked In Photo"
            width={300}
            height={300}
            className="rounded-full md:rounded-lg shadow-lg max-w-xs w-full h-auto"
          ></Image>
        </div>
      </div>
    </main>
  );
};

export default Home;
