import Link from "next/link";

const EMAIL = "sadithussain1@gmail.com";
const GITHUB_URL = "https://github.com/sadithussain";
const LINKEDIN_URL = "https://www.linkedin.com/in/sadithussain";

type NavLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  accent: "blue" | "violet" | "emerald" | "amber";
  links?: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    name: "SUSpend",
    tagline: "Corporate expense auditing platform.",
    description:
      "Full-stack web app that analyzes transactions and flags risky spending, with a review workflow for human approvers.",
    stack: ["Next.js", "Flask", "Tailwind CSS"],
    accent: "blue",
  },
  {
    name: "Full-Stack Calendar",
    tagline: "Scheduling app with natural-language event creation.",
    description:
      "Calendar platform with secure accounts and chat-style commands that create and edit events automatically.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL"],
    accent: "violet",
  },
  {
    name: "RAG Chatbot",
    tagline: "Chatbot that answers from your own documents.",
    description:
      "Built during my internship at HIPE Network. Answers questions using content from web pages, PDFs, and spreadsheets.",
    stack: ["Python", "LangChain", "Chroma DB"],
    accent: "emerald",
  },
];

type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  summary: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI Fellow",
    organization: "Break Through Tech AI",
    period: "March 2026 — Present",
    summary:
      "Selected for an industry-aligned fellowship focused on applied machine learning and real-world AI engineering.",
  },
  {
    role: "Computer Science Tutor",
    organization: "Rochester Institute of Technology",
    period: "January 2026 — Present",
    summary:
      "Lead weekly peer sessions that help students strengthen programming and problem-solving fundamentals.",
  },
  {
    role: "RAG Chatbot Engineer Intern",
    organization: "HIPE Network",
    period: "June 2025 — August 2025",
    summary:
      "Built a production chatbot that answers questions from company documents and web content.",
  },
];

const ACCENT_STYLES: Record<Project["accent"], string> = {
  blue: "from-sky-400/20 via-sky-400/5 to-transparent",
  violet: "from-violet-400/20 via-violet-400/5 to-transparent",
  emerald: "from-emerald-400/20 via-emerald-400/5 to-transparent",
  amber: "from-amber-400/20 via-amber-400/5 to-transparent",
};

const ACCENT_DOTS: Record<Project["accent"], string> = {
  blue: "bg-sky-400",
  violet: "bg-violet-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
};

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <BackgroundGrid />
      <SiteHeader />
      <main className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col gap-28 px-6 pb-28 pt-28 sm:px-10 sm:pt-32">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.1),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.8), transparent 75%)",
        }}
      />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[rgb(10,15,28)]/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="#about"
          className="font-mono text-sm tracking-tight text-zinc-200 transition-colors hover:text-white"
        >
          <span className="text-sky-400">{">"}</span> sadit.hussain
          <span className="animate-pulse text-sky-400">_</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-1.5 font-mono text-xs text-black transition-colors hover:bg-zinc-200"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-1.5 font-mono text-xs text-black transition-colors hover:bg-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-white px-4 py-1.5 font-mono text-xs text-black transition-colors hover:bg-zinc-200"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pt-4 sm:pt-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          Available for Summer 2026 internships
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Sadit Hussain
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-zinc-300">
          I&rsquo;m a Computer Science student at RIT who builds full-stack web
          apps, often with a practical AI layer on top. I care about shipping
          software that&rsquo;s genuinely useful and easy to use.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            See Projects
            <span aria-hidden>→</span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading eyebrow="Projects" title="What I've built" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ACCENT_STYLES[project.accent]} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          <span
            className={`h-1.5 w-1.5 rounded-full ${ACCENT_DOTS[project.accent]}`}
          />
          Project
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-zinc-300">
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.links && project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs text-zinc-400">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <ol className="relative space-y-6 border-l border-white/10 pl-6">
        {EXPERIENCE.map((item) => (
          <li key={`${item.role}-${item.organization}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
            />
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-sky-300">
                {item.organization}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {item.summary}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center sm:px-10">
        <span>
          © {new Date().getFullYear()} Sadit Hussain
        </span>
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="transition-colors hover:text-white"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
