import Link from "next/link";
import React from "react";

const Navbar = () => {
  const linkStyles = `
    relative py-1 no-underline decoration-transparent
    after:content-[''] 
    after:absolute 
    after:w-[105%] 
    after:left-1/2 
    after:-translate-x-1/2 
    after:bg-gray-400/50
    after:transition-all after:duration-300 after:ease-in-out

    // Default underline state for mobile and up
    after:h-[5px]
    after:bottom-2.5

    // Large screen override for the default underline
    lg:after:h-[6px]
    lg:after:bottom-3

    // Hover effect for medium screens and up ONLY
    md:hover:after:h-[24px]
    md:hover:after:bottom-2

    // Hover effect override for large screens
    lg:hover:after:h-[30px]
    lg:hover:after:bottom-2.5
  `;
  return (
    <nav
      className="flex flex-col md:flex-row justify-center items-center 
                 space-y-4 md:space-y-0 md:space-x-8 lg:space-x-10 
                 py-5 
                 text-xl md:text-2xl lg:text-[30px] 
                 font-bold"
    >
      <Link href="./" className={linkStyles}>
        Home
      </Link>
      <Link href="./projects" className={linkStyles}>
        Projects
      </Link>
      <a
        href="./resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyles}
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
