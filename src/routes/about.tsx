import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/rashmi-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Rashmi Tharaka | Project Manager" },
      { name: "description", content: "About Rashmi Tharaka Sewwandi: education, methodology, skills and certifications." },
    ],
  }),
  component: About,
});

const skillGroups = [
  { icon: "fa-diagram-project", title: "Project Management Tools", items: ["Jira", "Trello", "Microsoft Project", "Notion", "Confluence", "Google Workspace", "Microsoft 365"] },
  { icon: "fa-recycle", title: "Methodologies", items: ["Agile", "Scrum", "Kanban", "SDLC", "Requirements Engineering", "Sprint Planning", "Backlog Management"] },
  { icon: "fa-chart-column", title: "Data & Analysis", items: ["Power BI", "Excel", "KPI Tracking", "Dashboards", "Project Metrics"] },
  { icon: "fa-code", title: "Technical", items: ["Java", "JavaScript", "React.js", "Node.js", "Tailwind CSS", "Laravel", "REST APIs", "MySQL", "MongoDB"] },
];

const soft = [
  { icon: "fa-crown", label: "Leadership" },
  { icon: "fa-arrows-rotate", label: "Adaptability" },
  { icon: "fa-handshake-angle", label: "Conflict Resolution" },
  { icon: "fa-magnifying-glass", label: "Attention to Detail" },
  { icon: "fa-comments", label: "Stakeholder Comms" },
  { icon: "fa-clock", label: "Time Management" },
  { icon: "fa-shield-halved", label: "Risk Management" },
  { icon: "fa-brain", label: "Critical Thinking" },
];

const certs = [
  { name: "Project Management", by: "Simplilearn", year: "2026" },
  { name: "API Fundamentals Student Expert", by: "Postman", year: "2025" },
  { name: "Computer Architecture", by: "Saylor Academy", year: "2025" },
  { name: "Software Testing", by: "Simplilearn", year: "2025" },
  { name: "Agile Project Management", by: "HP LIFE", year: "2025" },
  { name: "ML for Beginners", by: "SoloLearn", year: "2025" },
  { name: "Introduction to Cloud Computing", by: "Simplilearn", year: "2025" },
];

function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] -top-40 right-0" style={{ background: "var(--purple)" }} />
      <div className="blob w-[400px] h-[400px] top-1/2 -left-40" style={{ background: "var(--blue)" }} />

      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] opacity-50 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
              <div className="relative glass-strong rounded-[2rem] p-3">
                <img src={portrait} alt="Rashmi Tharaka" className="w-full aspect-[4/5] object-cover rounded-[1.5rem]" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About Me</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
              Ambitious. <span className="gradient-text">Detail-obsessed.</span> Always shipping.
            </h1>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm an undergraduate at Sabaragamuwa University of Sri Lanka studying Computing & Information Systems - with a clear north star: becoming a Project Manager who delivers calmly, clearly, and consistently.
              </p>
              <p>
                Across academic projects, I've coordinated Agile teams, planned sprints, tracked deliverables, and made sure the quiet work - communication, governance, follow-through - actually happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Education <span className="gradient-text">Timeline</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              year: "2023 — Present",
              title: "BSc. (Hons) Computing & Information Systems",
              place: "Sabaragamuwa University of Sri Lanka",
              details: ["Undergraduate - focus on Project Management, Business Analytics & Software Engineering"],
            },
            {
              year: "2018 — 2020",
              title: "G.C.E. Advanced Level - Physical Science",
              place: "Siridhamma College",
              details: ["Combined Mathematics — B", "Chemistry — C", "Physics — C", "Z-Score: 1.0027"],
            },
            {
              year: "2017",
              title: "G.C.E. Ordinary Level",
              place: "Siridhamma College",
              details: ["8 A's incl. Mathematics, English & Science", "1 C — Art"],
            },
          ].map((e) => (
            <div key={e.title} className="glass rounded-3xl p-7">
              <p className="text-xs text-primary uppercase tracking-wider font-mono">{e.year}</p>
              <h3 className="font-display text-xl font-semibold mt-3">{e.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{e.place}</p>
              <ul className="mt-4 space-y-1.5">
                {e.details.map((d) => (
                  <li key={d} className="text-sm text-foreground/80 flex gap-2">
                    <i className="fa-solid fa-check text-primary text-xs mt-1.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Toolkit</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Skills & <span className="gradient-text">Tools</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="glass rounded-3xl p-7">
              <h3 className="font-display text-xl font-semibold mb-5">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft skills */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Operating Principles</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Soft <span className="gradient-text">Skills</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {soft.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
              <p className="text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certs */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Achievements</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Certifi<span className="gradient-text">cations</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {certs.map((c) => (
            <div key={c.name} className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{c.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.by}</p>
              </div>
              <span className="text-xs text-primary font-mono">{c.year}</span>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
