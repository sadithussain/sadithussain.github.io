"use client";

import Link from "next/link";
import React, { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
  ];

  const resumeLink = {
    href: "/resume.pdf",
    label: "Resume",
  };

  return (
    <nav className="relative z-10">
      <div className="flex justify-between items-center px-6 md:px-20 py-8 text-2xl md:text-3xl">
        <div>
          <Link href="/" className={`${linkStyles} font-bold`}>
            Sadit Hussain
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyles}>
              {link.label}
            </Link>
          ))}
          <a
            href={resumeLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            {resumeLink.label}
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 flex flex-col items-center gap-y-6 py-6 text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkStyles}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={resumeLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
            onClick={() => setIsOpen(false)}
          >
            {resumeLink.label}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
