import Link from "next/link";

const EMAIL = "sadithussain1@gmail.com";
const GITHUB_URL = "https://github.com/sadithussain";
const LINKEDIN_URL = "https://www.linkedin.com/in/sadithussain";

type NavLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  accent: "blue" | "violet" | "emerald" | "amber";
  featured?: boolean;
  links?: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    name: "SUSpend",
    tagline: "AI-powered corporate expense auditing platform.",
    description:
      "Full-stack auditing tool that analyzes transaction data and flags risky spending patterns. Integrates a local LLM through Ollama with Capital One's Nessie API to classify audit risk tiers and supports a dynamic ticket override workflow for human review.",
    stack: ["Next.js", "Flask", "Ollama", "Nessie API", "Tailwind CSS"],
    accent: "blue",
    featured: true,
  },
  {
    name: "Full-Stack Calendar",
    tagline: "Conversational scheduling backed by a secure Java API.",
    description:
      "Scheduling platform combining secure account management with natural-language event creation. Implements JWT authentication via Spring Security and integrates the Gemini API to translate conversational commands into structured calendar actions.",
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Spring Security", "Gemini API"],
    accent: "violet",
    featured: true,
  },
  {
    name: "RAG Chatbot",
    tagline: "Retrieval-augmented assistant over mixed-source content.",
    description:
      "Production RAG chatbot built at HIPE Network using LangChain and the Google Gemini API. Ingests web-scraped pages, PDFs, and CSVs into a Chroma vector store, with a multi-tier filtering system that sharpens retrieval precision and response quality.",
    stack: ["Python", "LangChain", "Gemini API", "Chroma DB"],
    accent: "emerald",
    featured: true,
  },
  {
    name: "SoundSense",
    tagline: "Audio classification with TensorFlow and CoreML.",
    description:
      "Machine learning pipeline for recognizing sound patterns from recorded data. Focused on model development, preprocessing, and packaging the system into a practical inference workflow for on-device use.",
    stack: ["TensorFlow", "CoreML", "Python"],
    accent: "amber",
  },
  {
    name: "U-Fund",
    tagline: "Community-driven funding platform.",
    description:
      "Collaborative platform built as part of a software engineering course focused on architecture and maintainability. Contributed to product structure, collaborative workflows, and scalable team-based development practices.",
    stack: ["Java", "Angular", "REST"],
    accent: "blue",
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
    role: "RAG Chatbot Engineer Intern",
    organization: "HIPE Network",
    period: "2025",
    summary:
      "Engineered a full-stack retrieval-augmented chatbot with Python, LangChain, and the Google Gemini API. Built a data pipeline that transforms web-scraped pages, PDFs, and CSVs into a Chroma vector database, and implemented a multi-tier filtering system to improve retrieval precision and response quality.",
  },
  {
    role: "Computer Science Tutor",
    organization: "Rochester Institute of Technology",
    period: "2025 — Present",
    summary:
      "Lead peer-focused study sessions and design interactive exercises that help students strengthen core programming and problem-solving skills. Partner with faculty to identify knowledge gaps and turn dense course material into approachable, structured practice.",
  },
  {
    role: "AI Fellow",
    organization: "Break Through Tech AI",
    period: "2026 — 2027",
    summary:
      "Selected for the Break Through Tech AI fellowship, an industry-aligned program centered on applied machine learning, technical mentorship, and building production-minded AI skills.",
  },
];

type SkillGroup = { label: string; items: string[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C", "SQL"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Flask", "PostgreSQL", "REST APIs", "JWT / Spring Security"],
  },
  {
    label: "AI / Data",
    items: [
      "LangChain",
      "Google Gemini API",
      "RAG Architecture",
      "Chroma DB",
      "Ollama",
      "TensorFlow",
      "CoreML",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Linux", "VS Code"],
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
  const featured = PROJECTS.filter((p) => p.featured);
  const secondary = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="relative flex flex-1 flex-col">
      <BackgroundGrid />
      <SiteHeader />
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-32 px-6 pb-32 pt-28 sm:px-10 sm:pt-32">
        <HeroSection />
        <ProjectsSection featured={featured} secondary={secondary} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="#top"
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
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-white/10 px-4 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white sm:inline-flex"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative pt-8 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Available for internships · Summer 2026
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Full-stack developer building{" "}
            <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              practical AI systems
            </span>
            .
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-zinc-400">
            I design and ship web applications that combine modern full-stack
            engineering with applied AI, from RAG chatbots and intelligent
            scheduling to automated auditing workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              View Projects
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
          </div>
        </div>
        <HeroCard />
      </div>
      <CredibilityStrip />
    </section>
  );
}

function HeroCard() {
  const lines = [
    { key: "role", value: "Full-Stack + AI Engineer" },
    { key: "school", value: "RIT · B.S. Computer Science" },
    { key: "grad", value: "Expected May 2028" },
    { key: "focus", value: "RAG · LLMs · Web Apps" },
  ];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_0_60px_-30px_rgba(96,165,250,0.35)]">
      <div className="mb-4 flex items-center gap-2 font-mono text-[11px] text-zinc-500">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2">~/profile.json</span>
      </div>
      <dl className="space-y-3 font-mono text-sm">
        {lines.map((line) => (
          <div
            key={line.key}
            className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-none last:pb-0"
          >
            <dt className="text-zinc-500">{line.key}</dt>
            <dd className="text-right text-zinc-200">{line.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CredibilityStrip() {
  const items = [
    "RIT Computer Science",
    "RAG Chatbot Engineer Intern",
    "Break Through Tech AI Fellow",
    "CS Tutor @ RIT",
  ];
  return (
    <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/5 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          {item}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProjectsSection({
  featured,
  secondary,
}: {
  featured: Project[];
  secondary: Project[];
}) {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading
        eyebrow="01 · Projects"
        title="Selected work"
        description="A mix of AI-integrated full-stack applications and ML experiments. Each one focuses on a specific engineering problem: retrieval quality, secure APIs, conversational UX, or model packaging."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} featured />
        ))}
      </div>
      {secondary.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondary.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] ${
        featured ? "min-h-[280px]" : "min-h-[220px]"
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${ACCENT_STYLES[project.accent]} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          <span className={`h-1.5 w-1.5 rounded-full ${ACCENT_DOTS[project.accent]}`} />
          {featured ? "Featured Project" : "Project"}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-zinc-300">{project.tagline}</p>
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

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading eyebrow="02 · About" title="Building software that’s useful in the real world." />
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-zinc-300">
          <p>
            I’m Sadit Hussain, a Computer Science student at Rochester Institute
            of Technology focused on building software that is both technically
            rigorous and useful in the real world. My work sits at the intersection
            of full-stack development and applied AI, where I enjoy turning complex
            ideas like retrieval-augmented generation, semantic search, and
            LLM-powered automation into products people can actually use.
          </p>
          <p>
            Outside of building projects, I also work as a Computer Science Tutor
            at RIT, where I lead study sessions, create interactive learning
            activities, and help students break down difficult technical concepts.
            That teaching experience has shaped how I build software: I care about
            clarity, thoughtful system design, and creating tools that make
            complicated workflows feel simple.
          </p>
          <p>
            Whether I’m engineering an AI expense auditing platform, building a
            smart scheduling system, or designing data pipelines for retrieval-based
            applications, I’m most excited by products that combine strong backend
            architecture, polished frontend experiences, and intelligent automation.
          </p>
        </div>
        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
            Currently
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
              <span>
                Studying full-stack and AI engineering at{" "}
                <span className="font-medium text-white">RIT</span>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              <span>
                Shipping RAG tooling at{" "}
                <span className="font-medium text-white">HIPE Network</span>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>
                Preparing for the{" "}
                <span className="font-medium text-white">Break Through Tech AI</span>{" "}
                fellowship.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <span>
                Open to internships focused on full-stack and AI engineering.
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading
        eyebrow="03 · Experience"
        title="Where I’ve been shipping and teaching."
      />
      <ol className="relative space-y-6 border-l border-white/10 pl-6">
        {EXPERIENCE.map((item) => (
          <li key={`${item.role}-${item.organization}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[27px] top-2 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
            />
            <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
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

function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading
        eyebrow="04 · Skills"
        title="Tools I reach for."
        description="Grouped by how I actually use them in projects, not just by keyword."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-14 sm:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_60%)]"
        />
        <div className="relative flex flex-col items-start gap-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
            05 · Contact
          </span>
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let’s build something useful.
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-zinc-400">
            I’m open to internships, collaborations, and conversations about
            full-stack and AI engineering. The fastest way to reach me is by
            email, or through any of the links below.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Email Me
              <span aria-hidden>→</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
            >
              View GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:text-white"
            >
              Connect on LinkedIn
            </a>
          </div>
          <p className="font-mono text-xs text-zinc-500">{EMAIL}</p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center sm:px-10">
        <span>© {new Date().getFullYear()} Sadit Hussain. Built with Next.js & Tailwind.</span>
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
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
