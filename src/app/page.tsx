/** */
export default function Home() {
  return (
    // Main container - adjusted top padding to be smaller and more responsive
    <main className="flex w-full justify-center p-4 pt-8 md:pt-12 lg:pt-16">
      <div
        id="about-me"
        // Corrected responsive layout classes for proper stacking and spacing
        className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-12 lg:gap-16 xl:gap-20"
      >
        <div
          id="about-me-text"
          // Corrected responsive text alignment
          className="max-w-3xl space-y-6 text-center md:text-left"
        >
          {/* Large, attention-grabbing heading */}
          <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
            Hi, I&apos;m Sadit!
          </h1>

          {/* Paragraphs with responsive font size */}
          <p className="text-lg md:text-xl">
            I&apos;m currently a Computer Science student at the City College of
            New York.
          </p>
          <p className="text-lg md:text-xl">
            I&apos;m interested in front-end development and artificial
            intelligence.
          </p>
          <p className="text-lg md:text-xl">
            I love programming due to its power to solve complex problems and
            turn ideas into reality.
          </p>

          {/* Final call-to-action paragraph */}
          <p className="pt-4 text-lg font-semibold md:text-xl">
            I&apos;d love to talk, so if you want to get in contact, refer to my
            contact section or click the icons below!
          </p>
          <div className="flex items-center justify-center space-x-6 pt-6 md:justify-start">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/sadithussain/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="h-8 w-8 transition-opacity hover:opacity-75"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/sadithussain"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <svg
                className="h-8 w-8 transition-opacity hover:opacity-75"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* Email Icon */}
            <a href="mailto:sadithussain1@gmail.com" aria-label="Email Me">
              <svg
                className="h-8 w-8 transition-opacity hover:opacity-75"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Added flex-shrink-0 to this container to prevent it from being squished */}
        <div className="flex-shrink-0">
          <img
            id="about-me-image"
            src="/sadit_face.jpg"
            alt="Me."
            className="h-48 w-48 rounded-full object-cover shadow-lg md:h-64 md:w-64 lg:h-72 lg:w-72"
          />
        </div>
      </div>
    </main>
  );
}
