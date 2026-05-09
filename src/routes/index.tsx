import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/rashmi-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rashmi Tharaka | Project Manager " },
      { name: "description", content: "Aspiring Project Manager bridging Agile teams, sprint planning and delivery excellence." },
    ],
  }),
  component: Index,
});

const pmSkills = [
  { label: "Agile & Scrum", desc: "Sprint planning, daily standups, retrospectives and backlog grooming." },
  { label: "Sprint Planning", desc: "Breaking down epics into shippable stories with clear acceptance criteria." },
  { label: "Stakeholder Communication", desc: "Translating business needs into technical roadmaps everyone aligns on." },
  { label: "Risk Management", desc: "Proactive identification, mitigation plans and contingency tracking." },
  { label: "KPI & Metrics Tracking", desc: "Velocity, burndown, cycle time and delivery health dashboards." },
  { label: "Team Coordination", desc: "Cross-functional collaboration across engineering, design and QA." },
  { label: "Jira · Trello · Notion", desc: "Project tooling for backlogs, roadmaps, and async documentation." },
  { label: "Requirements Engineering", desc: "Clarifying scope, capturing user stories and managing change." },
];

const projects = [
  { t: "CircadiaLux", s: "Smart Healthcare Lighting", d: "Coordinated a 5-person Agile team across IoT, ML and frontend. Ran sprint planning and stakeholder demos.", tags: ["Scrum Lead", "5 Sprints", "IoT + ML"] },
  { t: "Convo", s: "Real-time Chat App", d: "Solo end-to-end delivery on the MERN stack — scoped backlog, planned releases, shipped on schedule.", tags: ["Solo PM", "MERN"] },
  { t: "WorkWise", s: "Employee Management", d: "Defined requirements, prioritized features and tracked progress through a Kanban workflow.", tags: ["Kanban", "Stakeholder Demos"] },
  { t: "MentorMatchAI", s: "AI Matching Platform", d: "Managed scope and integration milestones across ML and product surfaces.", tags: ["Roadmap", "AI Integration"] },
];

function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] -top-40 -left-40" style={{ background: "var(--blue)" }} />
      <div className="blob w-[600px] h-[600px] top-40 -right-60" style={{ background: "var(--purple)" }} />

      <SiteHeader />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 pt-32 md:pt-40 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Project Manager opportunities
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Hi, I'm <span className="gradient-text">Rashmi</span><br />
              Project Manager
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-xl">
              I coordinate Agile teams, plan sprints, manage risk, and turn ambiguous goals into delivered outcomes. Based in Sri Lanka, working with the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/Rashmi-Tharaka-CV.pdf" download className="rounded-full text-white px-6 py-3 text-sm inline-flex items-center gap-2 glow"
                style={{ background: "var(--gradient-primary)" }}>
                <i className="fa-solid fa-download" /> Download CV
              </a>
              <Link to="/contact" className="glass rounded-full px-6 py-3 text-sm flex items-center gap-2 hover:bg-white/10">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="reveal relative flex justify-center">
            <div className="relative float">
              <div className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
              <div className="relative glass-strong rounded-[2rem] p-3">
                <img
                  src={portrait}
                  alt="Rashmi Tharaka Sewwandi"
                  className="w-full max-w-sm aspect-[4/5] object-cover rounded-[1.5rem]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 text-xs">
                Project Manager
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 glass-strong rounded-2xl px-4 py-3 text-xs">
                Business Analytics
              </div>
              <div className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 text-xs">
                BSc Computing & IS
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "6+", v: "Projects Delivered" },
            { k: "7", v: "Certifications" },
            { k: "Agile", v: "Methodology" },
            { k: "BSc", v: "Computing & IS" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-5 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text">{s.k}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PM Skills */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Project Management</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Core <span className="gradient-text">Capabilities</span></h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            The disciplines I bring to every delivery - from kickoff through retrospective.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pmSkills.map((s, idx) => (
            <div key={s.label} className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <p className="font-mono text-xs text-primary mb-3">0{idx + 1}</p>
              <p className="font-display font-semibold text-lg">{s.label}</p>
              <p className="text-sm text-foreground/65 mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Selected Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Recent <span className="gradient-text">Projects</span></h2>
          </div>
          <Link to="/work" className="hidden md:inline-flex items-center gap-2 text-sm hover:text-primary">
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.t} className="glass rounded-3xl p-7 hover:bg-white/10 transition-colors">
              <h3 className="font-display text-2xl font-bold">{p.t}</h3>
              <p className="text-primary text-sm mt-1">{p.s}</p>
              <p className="text-foreground/70 mt-3 leading-relaxed text-sm">{p.d}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 md:px-10 py-20">
        <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="blob w-[300px] h-[300px] -top-20 left-1/2 -translate-x-1/2" style={{ background: "var(--purple)" }} />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">
              Let's build something <span className="gradient-text">remarkable</span>.
            </h2>
            <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
              Open to internships and collaborations in project management, Agile delivery, and product coordination.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 rounded-full text-white px-7 py-3 text-sm glow"
              style={{ background: "var(--gradient-primary)" }}>
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
