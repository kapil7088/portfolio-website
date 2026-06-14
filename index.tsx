import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapil Pandey — Java Developer & CSE Student" },
      {
        name: "description",
        content:
          "Portfolio of Kapil Pandey — Computer Science Engineering student at GL Bajaj, Java developer, and DSA enthusiast building modern web and blockchain projects.",
      },
      { name: "keywords", content: "Kapil Pandey, Java Developer, DSA, Portfolio, GL Bajaj, Computer Science, Web Developer, Blockchain" },
      { property: "og:title", content: "Kapil Pandey — Java Developer & CSE Student" },
      { property: "og:description", content: "Java developer & DSA enthusiast — building responsive, modern web experiences." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kapil Pandey — Java Developer & CSE Student" },
      { name: "twitter:description", content: "Java developer & DSA enthusiast — building responsive, modern web experiences." },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kapil Pandey",
          jobTitle: "Computer Science Student & Java Developer",
          email: "mailto:pandeykapil7088@gmail.com",
          alumniOf: "GL Bajaj Group of Institutions, Mathura",
          url: "/",
          sameAs: [
            "https://linkedin.com/in/kapil-pandey-8a0a57328",
            "https://github.com/kapil7088",
            "https://leetcode.com/u/Kapil_7088/",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "dsa", label: "DSA" },
  { id: "profiles", label: "Profiles" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { group: "Programming", items: ["Java"] },
  { group: "Core CS", items: ["DSA", "OOPs", "Operating Systems", "DBMS", "Computer Networks"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Tools", items: ["Git", "GitHub"] },
  { group: "Domains", items: ["Java Development", "Web Development", "Blockchain Development"] },
];

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    desc: "Modern responsive personal portfolio with glassmorphism, smooth animations and a mobile-first layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "from-indigo-500 to-violet-500",
  },
  {
    title: "Web Development Projects",
    desc: "A collection of responsive web apps with interactive UIs — focused on accessibility and clean UX.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "DSA Journey",
    desc: "Solving Data Structures & Algorithms problems in Java daily — sharpening problem solving and complexity intuition.",
    tags: ["Java", "DSA", "Problem Solving"],
    accent: "from-sky-500 to-indigo-500",
  },
];

const ACHIEVEMENTS = [
  { icon: "🎓", title: "Amazon ML Summer School Applicant", desc: "Applied to Amazon's competitive ML Summer School — actively expanding into ML fundamentals." },
  { icon: "🏆", title: "Consistent DSA Practice", desc: "Daily problem-solving streak on LeetCode across arrays, trees, graphs & DP." },
  { icon: "☕", title: "Java Proficiency", desc: "Strong grasp of Java fundamentals, OOPs, collections and core APIs." },
  { icon: "🚀", title: "Engineering Mindset", desc: "Clean code, readability, and scalable solutions — built to ship." },
];

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (loading) return;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      io.disconnect();
      spy.disconnect();
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
        <div className="relative grid place-items-center">
          <div className="h-20 w-20 rounded-full border-2 border-white/10" />
          <div className="absolute h-20 w-20 animate-spin rounded-full border-2 border-transparent border-t-[#8b9eff] border-r-[#c89bff]" />
          <div className="absolute font-mono text-sm grad-text font-semibold">KP</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,.6)]" : ""
          }`}
          style={{ width: "calc(100% - 2rem)" }}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl grad-bg font-display text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(124,92,255,.7)]">
              KP
            </span>
            <span className="hidden font-display text-sm font-semibold sm:block">Kapil Pandey</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === n.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="hidden rounded-lg grad-bg px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(124,92,255,.7)] transition-transform hover:-translate-y-0.5 md:inline-flex md:items-center md:gap-2"
            >
              <span aria-hidden>↓</span> Resume
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden"
            >
              <div className="flex h-3 w-5 flex-col justify-between">
                <span className={`h-0.5 w-full bg-foreground transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
                <span className={`h-0.5 w-full bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-foreground transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mx-4 mt-2 rounded-2xl glass p-3 md:hidden">
            <div className="grid">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-lg grad-bg px-3 py-3 text-center text-sm font-semibold text-white"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blob blob bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
            <div className="reveal">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="relative grid h-2 w-2 place-items-center">
                    <span className="absolute h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="absolute h-2 w-2 rounded-full bg-emerald-400 pulse-ring" />
                  </span>
                  Open to internships &amp; SDE opportunities
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-200">
                  <span aria-hidden>🎓</span> Amazon ML Summer School Applicant
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1.5 text-xs font-semibold text-fuchsia-200">
                  <span aria-hidden>⚡</span> DSA Enthusiast
                </div>
              </div>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Hi, I'm <span className="grad-text">Kapil Pandey</span>
                <br />
                <span className="text-foreground/90">I build with</span>{" "}
                <span className="grad-text">Java &amp; the Web.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Computer Science Engineering undergrad at GL Bajaj — passionate about{" "}
                <span className="text-foreground">Java development</span>,{" "}
                <span className="text-foreground">DSA</span>, and crafting modern{" "}
                <span className="text-foreground">web &amp; blockchain</span> experiences.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl grad-bg px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(124,92,255,.8)] transition-transform hover:-translate-y-0.5"
                >
                  <span aria-hidden>↓</span> Download Resume
                </a>
                <a
                  href="#projects"
                  className="rounded-xl glass px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl glass px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>

              <dl className="mt-12 grid max-w-md grid-cols-3 gap-4">
                {[
                  { k: "2028", v: "Graduating" },
                  { k: "3+", v: "Projects" },
                  { k: "Daily", v: "DSA Practice" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl glass p-4">
                    <dt className="font-display text-2xl font-bold grad-text">{s.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto hidden md:block">
              <div className="relative h-80 w-80 lg:h-96 lg:w-96">
                <div className="absolute inset-0 blob grad-bg opacity-30 blur-2xl" />
                <div className="absolute inset-4 blob grad-bg float grid place-items-center shadow-[0_30px_80px_-20px_rgba(124,92,255,.6)]">
                  <span className="font-display text-7xl font-bold text-white drop-shadow-lg lg:text-8xl">KP</span>
                </div>
                <div className="absolute -right-3 top-6 rounded-xl glass px-3 py-2 text-xs font-mono">
                  <span className="text-emerald-400">{"{ "}</span>java<span className="text-emerald-400">{" }"}</span>
                </div>
                <div className="absolute -left-3 bottom-10 rounded-xl glass px-3 py-2 text-xs font-mono">
                  <span className="text-fuchsia-400">&lt;/&gt;</span> web
                </div>
                <div className="absolute -bottom-3 right-12 rounded-xl glass px-3 py-2 text-xs font-mono">
                  ⛓ blockchain
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="mt-20 overflow-hidden border-y border-white/5 py-5">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-xl font-semibold text-muted-foreground/60">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {["Java", "DSA", "Spring Boot", "HTML", "CSS", "JavaScript", "Git", "Blockchain", "DBMS", "OOPs", "Problem Solving"].map((t) => (
                  <span key={t} className="flex items-center gap-12">
                    <span>{t}</span>
                    <span className="text-fuchsia-400/60">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative px-6 pb-4">
        <div className="mx-auto -mt-10 max-w-6xl">
          <div className="grad-border grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "2028", v: "Expected Graduation", icon: "🎓" },
              { k: "100+", v: "DSA Problems Solved", icon: "🧠" },
              { k: "3+", v: "Featured Projects", icon: "🚀" },
              { k: "Daily", v: "Coding Streak", icon: "🔥" },
            ].map((s) => (
              <div key={s.v} className="reveal group relative bg-card/60 p-6 transition-colors hover:bg-white/[0.04]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-3xl font-bold grad-text sm:text-4xl">{s.k}</div>
                    <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.v}</div>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-xl glass text-lg transition-transform group-hover:scale-110">
                    {s.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 — About" title={<>About <span className="grad-text">me</span></>}>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="reveal md:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground font-semibold">Computer Science &amp; Engineering</span> undergraduate at{" "}
              <span className="text-foreground font-semibold">GL Bajaj Group of Institutions, Mathura</span>. I love turning ideas
              into clean, working software — whether that's a Java backend, a responsive web UI, or exploring how blockchains work
              under the hood.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My focus right now: mastering <span className="text-foreground">Data Structures &amp; Algorithms</span>, building
              meaningful projects, and continuously leveling up as a software engineer.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["🎯", "Problem solver at heart"],
                ["💡", "Always learning new tech"],
                ["🤝", "Team-friendly collaborator"],
                ["⚡", "Clean &amp; efficient code"],
              ].map(([icon, t]) => (
                <div key={t} className="flex items-center gap-3 rounded-xl glass px-4 py-3 glow-hover">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-medium" dangerouslySetInnerHTML={{ __html: t }} />
                </div>
              ))}
            </div>
          </div>
          <div className="reveal md:col-span-2">
            <div className="grad-border p-6 glow-hover">
              <h3 className="font-display text-lg font-semibold">Quick facts</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["Name", "Kapil Pandey"],
                  ["Role", "CSE Student · Java Dev"],
                  ["College", "GL Bajaj, Mathura"],
                  ["Degree", "B.Tech CSE"],
                  ["Graduation", "2028"],
                  ["Email", "pandeykapil7088@gmail.com"],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="text-right font-medium">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="02 — Education" title={<>My <span className="grad-text">journey</span></>}>
        <ol className="relative mx-auto max-w-3xl border-l border-white/10 pl-6">
          {[
            {
              year: "2024 — 2028",
              title: "B.Tech in Computer Science & Engineering",
              place: "GL Bajaj Group of Institutions, Mathura",
              desc: "Building strong CS fundamentals — DSA, OOPs, OS, DBMS, Computer Networks — alongside hands-on dev work.",
              live: true,
            },
            {
              year: "Class XII",
              title: "Senior Secondary (PCM)",
              place: "Physics · Chemistry · Mathematics",
              desc: "Foundation in mathematical reasoning and problem solving.",
            },
            {
              year: "Class X",
              title: "Secondary Education",
              place: "Built early interest in computers & logic.",
              desc: "First spark for software and the world of programming.",
            },
          ].map((e, i) => (
            <li key={i} className="reveal mb-10 last:mb-0">
              <span
                className={`absolute -left-[11px] grid h-5 w-5 place-items-center rounded-full grad-bg ${
                  e.live ? "pulse-ring" : ""
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <div className="grad-border p-6 glow-hover">
                <div className="text-xs font-mono text-muted-foreground">{e.year}</div>
                <h3 className="mt-1 font-display text-xl font-semibold">{e.title}</h3>
                <div className="mt-1 text-sm grad-text font-medium">{e.place}</div>
                <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="03 — Skills" title={<>Technical <span className="grad-text">toolkit</span></>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((g) => (
            <div key={g.group} className="reveal grad-border p-6 glow-hover">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">{g.group}</h3>
                <span className="rounded-full glass px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  {g.items.length}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium transition-colors hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="04 — Projects" title={<>Selected <span className="grad-text">work</span></>}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="reveal grad-border overflow-hidden glow-hover">
              <div className={`relative h-40 bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 20%, white 0, transparent 40%)" }} />
                <div className="absolute bottom-3 left-4 font-mono text-xs text-white/80">project</div>
                <div className="absolute right-3 top-3 rounded-md bg-black/30 px-2 py-1 font-mono text-[10px] text-white backdrop-blur">
                  ./{p.title.toLowerCase().split(" ")[0]}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="https://github.com/kapil7088"
                    target="_blank" rel="noreferrer"
                    className="text-sm font-semibold grad-text hover:opacity-80"
                  >
                    View on GitHub →
                  </a>
                  <span className="text-[10px] font-mono text-muted-foreground">2025</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" eyebrow="05 — Achievements" title={<>What drives <span className="grad-text">me</span></>}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="reveal grad-border p-6 glow-hover">
              <div className="grid h-12 w-12 place-items-center rounded-xl grad-bg text-2xl shadow-[0_10px_30px_-10px_rgba(124,92,255,.7)]">
                {a.icon}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* DSA + INTERESTS */}
      <Section id="dsa" eyebrow="06 — DSA Journey" title={<>Building <span className="grad-text">problem-solving</span> muscle</>}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="reveal grad-border p-8 glow-hover">
            <h3 className="font-display text-xl font-semibold">Daily DSA in Java</h3>
            <p className="mt-3 text-muted-foreground">
              I solve Data Structures &amp; Algorithms problems in Java consistently — focusing on
              clean, optimal solutions and deepening intuition for time &amp; space complexity.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ["Arrays", "Strings", "Hashing"],
                ["Trees", "Graphs", "DP"],
                ["Recursion", "Stacks", "Queues"],
              ].flat().map((t) => (
                <span key={t} className="rounded-lg glass px-2 py-2 text-xs font-medium">{t}</span>
              ))}
            </div>
            <div className="mt-6 font-mono text-xs text-muted-foreground">
              <span className="text-emerald-400">$</span> java Solve.java <span className="text-fuchsia-400">--today</span>
            </div>
          </div>

          <div id="interests" className="reveal grad-border p-8 glow-hover">
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">07 — Interests</div>
            <h3 className="mt-2 font-display text-xl font-semibold">Where I want to grow</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: "☕", t: "Java Development" },
                { icon: "⛓️", t: "Blockchain" },
                { icon: "🌐", t: "Web Development" },
                { icon: "🛠️", t: "Software Engineering" },
              ].map((i) => (
                <div key={i.t} className="flex items-center gap-3 rounded-xl glass p-4">
                  <span className="text-2xl">{i.icon}</span>
                  <span className="text-sm font-semibold">{i.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CODING PROFILES */}
      <Section id="profiles" eyebrow="08 — Coding Profiles" title={<>Where I <span className="grad-text">code &amp; ship</span></>}>
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal grad-border p-8 glow-hover">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> coding journey
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold">Daily reps. Real progress.</h3>
            <p className="mt-3 text-muted-foreground">
              I actively solve Data Structures &amp; Algorithms problems in{" "}
              <span className="text-foreground">Java</span> — practicing on{" "}
              <span className="text-foreground">LeetCode</span> and following the{" "}
              <span className="text-foreground">NeetCode roadmap</span> to sharpen problem
              solving and prepare for software engineering interviews.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "Java", v: "Primary lang" },
                { k: "LeetCode", v: "Daily practice" },
                { k: "NeetCode", v: "Roadmap" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl glass p-3">
                  <div className="font-display text-sm font-bold grad-text">{s.k}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal grad-border p-8 glow-hover">
            <h3 className="font-display text-xl font-semibold">Focus areas</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Arrays", "Strings", "Hashing", "Two Pointers", "Sliding Window", "Binary Search", "Linked Lists", "Trees", "Graphs", "Recursion", "Backtracking", "DP", "Greedy", "Stacks", "Queues"].map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium transition-colors hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-black/40 p-4 font-mono text-xs leading-relaxed">
              <div><span className="text-muted-foreground">// today.java</span></div>
              <div><span className="text-fuchsia-400">class</span> <span className="text-sky-300">Solve</span> {"{"}</div>
              <div className="pl-4"><span className="text-fuchsia-400">public static void</span> <span className="text-sky-300">main</span>(String[] args) {"{"}</div>
              <div className="pl-8">System.out.println(<span className="text-emerald-300">"one more problem 🚀"</span>);</div>
              <div className="pl-4">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "LeetCode",
              handle: "@Kapil_7088",
              url: "https://leetcode.com/u/Kapil_7088/",
              desc: "Daily DSA grind — arrays, trees, graphs, DP and beyond.",
              gradient: "from-amber-500 to-orange-600",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.115 6.226l-3.736 4.01a5.586 5.586 0 0 0-1.388 2.46 5.547 5.547 0 0 0-.146 1.572 5.6 5.6 0 0 0 .195 1.348 5.554 5.554 0 0 0 1.34 2.343l4.246 4.567c.387.415.93.65 1.493.65.564 0 1.106-.235 1.493-.65l4.246-4.567a.75.75 0 0 0-1.098-1.022L9.51 21.504a.532.532 0 0 1-.39.17.532.532 0 0 1-.39-.17l-4.245-4.566a4.054 4.054 0 0 1-.978-1.71 4.087 4.087 0 0 1 .135-2.527 4.06 4.06 0 0 1 1.013-1.788l3.737-4.01 5.41-5.78a.531.531 0 0 1 .39-.17.531.531 0 0 1 .39.17l5.41 5.78a.75.75 0 0 0 1.097-1.022L15.18.438A1.374 1.374 0 0 0 14.22 0Zm.516 12.34a.75.75 0 0 0-.75.75v.001H8.616a.75.75 0 0 0 0 1.5h4.633v.001a.75.75 0 0 0 .75-.75v-.001h5.25a.75.75 0 0 0 0-1.5h-5.25v-.001Z" />
                </svg>
              ),
              stats: [["Lang", "Java"], ["Mode", "Daily"]],
            },
            {
              name: "GitHub",
              handle: "@kapil7088",
              url: "https://github.com/kapil7088",
              desc: "Project repos, experiments and open-source explorations.",
              gradient: "from-zinc-500 to-zinc-800",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.65.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.93.13 2.82.38 2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.34.76 1.02.76 2.06v3.05c0 .3.21.65.78.54 4.46-1.5 7.68-5.7 7.68-10.65C23.25 5.48 18.27.5 12 .5Z" />
                </svg>
              ),
              stats: [["Repos", "Active"], ["Focus", "Web · Java"]],
            },
            {
              name: "LinkedIn",
              handle: "kapil-pandey",
              url: "https://linkedin.com/in/kapil-pandey-8a0a57328",
              desc: "Professional network — open to internships & SDE roles.",
              gradient: "from-sky-500 to-blue-700",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.74v20.51C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z" />
                </svg>
              ),
              stats: [["Status", "Open"], ["Roles", "SDE · Intern"]],
            },
          ].map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="reveal group grad-border overflow-hidden glow-hover"
            >
              <div className={`relative h-28 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 80% 20%, white 0, transparent 45%)" }} />
                <div className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-xl bg-black/30 text-white backdrop-blur transition-transform group-hover:scale-110">
                  {p.icon}
                </div>
                <div className="absolute bottom-3 left-4 font-mono text-[11px] text-white/80">profile</div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{p.handle}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stats.map(([k, v]) => (
                    <span key={k} className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-mono text-muted-foreground">
                      <span className="text-foreground">{k}:</span> {v}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold grad-text">Visit profile →</span>
                  <span className="text-[10px] font-mono text-muted-foreground">external ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="09 — Contact" title={<>Let's <span className="grad-text">build</span> something</>}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal grad-border p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> available now
            </div>
            <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Open to internships &amp; SDE roles</h3>
            <p className="mt-3 text-muted-foreground">
              Recruiters and teams — I'd love to hear about internship programs, campus ambassador roles,
              and any chance to grow as a software engineer. I reply within 24 hours.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Email", value: "pandeykapil7088@gmail.com", href: "mailto:pandeykapil7088@gmail.com", icon: "✉" },
                { label: "Location", value: "Mathura, India", href: "#", icon: "📍" },
                { label: "LinkedIn", value: "kapil-pandey", href: "https://linkedin.com/in/kapil-pandey-8a0a57328", icon: "in" },
                { label: "GitHub", value: "kapil7088", href: "https://github.com/kapil7088", icon: "gh" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl glass p-4 transition-colors hover:bg-white/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg grad-bg text-sm font-bold text-white">{c.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{c.label}</span>
                    <span className="block truncate text-sm font-semibold">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:pandeykapil7088@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl grad-bg px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(124,92,255,.8)] transition-transform hover:-translate-y-0.5"
              >
                ✉ Send an email
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>

          <form
            className="reveal grad-border p-8 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const name = (f.elements.namedItem("name") as HTMLInputElement).value;
              const email = (f.elements.namedItem("email") as HTMLInputElement).value;
              const message = (f.elements.namedItem("message") as HTMLTextAreaElement).value;
              window.location.href = `mailto:pandeykapil7088@gmail.com?subject=${encodeURIComponent(
                `Portfolio inquiry from ${name}`,
              )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
            }}
          >
            <h3 className="font-display text-2xl font-bold">Send a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">Quick form — opens in your mail app.</p>
            <div className="mt-6 grid gap-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Your name</span>
                <input name="name" required className="w-full rounded-lg glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="Jane Recruiter" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</span>
                <input name="email" type="email" required className="w-full rounded-lg glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="you@company.com" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</span>
                <textarea name="message" required rows={4} className="w-full resize-none rounded-lg glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="Tell me about the role or opportunity…" />
              </label>
              <button
                type="submit"
                className="rounded-xl grad-bg px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(124,92,255,.8)] transition-transform hover:-translate-y-0.5"
              >
                Send message →
              </button>
            </div>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg grad-bg text-[11px] font-bold text-white">KP</span>
            <span>© {new Date().getFullYear()} Kapil Pandey. Crafted with Java energy.</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/kapil7088" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href="https://linkedin.com/in/kapil-pandey-8a0a57328" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href="mailto:pandeykapil7088@gmail.com" className="hover:text-foreground">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
