import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <main className="flex items-center justify-center p-8">
      <div className="flex items-start gap-x-20 max-w-6xl">
        <div className="w-2/3 flex flex-col gap-y-4 text-xl">
          <h1 className="text-5xl">Hi, my name&apos;s Sadit!</h1>
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
          <p className="text-3xl">
            Things I&apos;ve worked on in the past include...
          </p>
          <ul className="list-disc list-inside space-y-2">
            <a
              href="https://github.com/sadithussain/cuny-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <li>
                Creating a{" "}
                <span className="font-semibold text-slate-300">RAG</span>{" "}
                chatbot for CUNY freshmen
              </li>
            </a>
            <a
              href="https://github.com/sadithussain/vibe-coder-vsc-extension-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <li>
                Constructed a{" "}
                <span className="font-semibold text-slate-300">VSC</span>{" "}
                extension that allows you to use your own{" "}
                <span className="font-semibold text-slate-300">Gemini API</span>
              </li>
            </a>
            <a
              href="https://github.com/sadithussain/sadithussain.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <li>
                Developed my personal portfolio using{" "}
                <span className="font-semibold text-slate-300">Next.js</span>{" "}
                and{" "}
                <span className="font-semibold text-slate-300">
                  Tailwind CSS
                </span>
              </li>
            </a>
            <a
              href="https://github.com/sadithussain/discord-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <li>
                Programmed a Discord bot using{" "}
                <span className="font-semibold text-slate-300">Node.js</span>{" "}
                and the{" "}
                <span className="font-semibold text-slate-300">
                  Discord API
                </span>
              </li>
            </a>
          </ul>
          <p>Click one of the icons below to connect with me!</p>
          <div className="flex gap-x-2 py-2">
            <a
              href="https://www.linkedin.com/in/sadithussain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="linkedIn.png"
                alt="LinkedIn Profile"
                width={40}
                height={40}
              ></Image>
            </a>
            <a
              href="https://github.com/sadithussain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="github.png"
                alt="GitHub Profile"
                width={40}
                height={40}
              ></Image>
            </a>
            <a href="mailto:sadithussain1@gmail.com" className="inline-block">
              <Image
                src="email.png"
                alt="Email Hyperlink"
                width={40}
                height={40}
              ></Image>
            </a>
            <p className="text-xs">(sadithussain1@gmail.com)</p>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src="sadit_linked_in.jpg"
            alt="Sadit's Linked In Photo"
            width={350}
            height={350}
          ></Image>
        </div>
      </div>
    </main>
  );
};

export default Home;
