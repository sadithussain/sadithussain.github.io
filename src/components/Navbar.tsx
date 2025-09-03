import Link from "next/link";
import React from "react";

const linkStyles = `
    relative
    after:content-['']
    after:absolute
    after:bg-slate-300
    after:h-1
    after:w-0
    after:bottom-0
    after:left-0
    after:transition-all
    after:duration-300
    hover:after:w-full
    hover:text-slate-300
    inline-flex
    gap-x-1
  `;

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 py-8 text-3xl">
      <div className="">
        <Link href="/" className={`${linkStyles} font-bold`}>
          Sadit Hussain
        </Link>
      </div>

      <div className="flex gap-x-8">
        <Link href="/skills" className={linkStyles}>
          Skills
        </Link>
        <Link href="/experience" className={linkStyles}>
          Experience
        </Link>
        <Link href="/projects" className={linkStyles}>
          Projects
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
