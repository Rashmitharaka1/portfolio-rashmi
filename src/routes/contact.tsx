import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Rashmi Tharaka | Project Manager" },
      { name: "description", content: "Let's deliver something great together. Connect with Rashmi Tharaka — Project Manager — via email, WhatsApp, or schedule a discovery call." },
    ],
  }),
  component: Contact,
});

const quickInfo = [
  { icon: "fa-bolt", title: "Quick Response", desc: "Replies within 24 hours on business days" },
  { icon: "fa-circle-check", title: "Available for Projects", desc: "PM internships, Agile delivery & coordination" },
  { icon: "fa-location-dot", title: "Galle, Sri Lanka", desc: "Remote-first · GMT+5:30 · Global teams" },
  { icon: "fa-handshake", title: "Engagement Models", desc: "Internships · Contract · Project-based" },
];

const channels = [
  {
    icon: "fa-envelope",
    title: "Send an Email",
    desc: "Best for project briefs & detailed scopes",
    action: "rashmitharaka509@gmail.com",
    href: "mailto:rashmitharaka509@gmail.com?subject=Project%20Inquiry",
    cta: "Write Email",
  },
  {
    icon: "fa-whatsapp",
    brand: true,
    title: "WhatsApp Message",
    desc: "Quick chat for urgent matters & status checks",
    action: "+94 76 978 7029",
    href: "https://wa.me/94769787029",
    cta: "Open WhatsApp",
  },
  {
    icon: "fa-calendar-check",
    title: "Schedule a Discovery Call",
    desc: "30-min call to align on goals, scope & timeline",
    action: "Pick a time slot",
    href: "https://calendly.com/",
    cta: "Book a Call",
  },
];

const workWith = [
  { icon: "fa-rocket", title: "Startups & Founders", desc: "MVP planning, sprint cadence and delivery rhythm." },
  { icon: "fa-users-gear", title: "Engineering Teams", desc: "Scrum facilitation, backlog grooming, ceremonies." },
  { icon: "fa-chart-line", title: "Product Owners", desc: "Roadmap shaping, KPI tracking and reporting." },
];

const process = [
  { step: "01", title: "Discover", desc: "Understand goals, stakeholders and constraints." },
  { step: "02", title: "Plan", desc: "Scope, milestones, risks and a clear delivery plan." },
  { step: "03", title: "Execute", desc: "Run sprints, unblock the team, track velocity." },
  { step: "04", title: "Deliver", desc: "Demo, retrospect and ship measurable outcomes." },
];

const socials = [
  { icon: "fa-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/rashmitharaka" },
  { icon: "fa-github", label: "GitHub", href: "https://github.com/Rashmitharaka1" },
  {
  icon: "fa-envelope",
  label: "Gmail",
  href: "mailto:rashmitharaka509@gmail.com",
},
  ];

function Contact() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="blob w-[500px] h-[500px] -top-20 -left-40" style={{ background: "var(--purple)" }} />
      <div className="blob w-[400px] h-[400px] bottom-0 -right-40" style={{ background: "var(--blue)" }} />

      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-12 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Currently accepting Q2 / Q3 project inquiries
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Let's Deliver Something <span className="gradient-text">Great Together</span>
          </h1>
          <p className="mt-5 text-foreground/70 text-lg leading-relaxed">
            Have a project that needs structure, momentum and a steady delivery cadence? I help teams move from ambiguity to outcomes - through Agile planning, clear communication and accountable execution.
          </p>
        </div>

        {/* Quick info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
          {quickInfo.map((q) => (
            <div key={q.title} className="glass rounded-2xl p-6">
              <div className="w-12 h-12 rounded-2xl grid place-content-center text-white" style={{ background: "var(--gradient-primary)" }}>
                <i className={`fa-solid ${q.icon}`} />
              </div>
              <p className="mt-4 font-display font-semibold">{q.title}</p>
              <p className="text-sm text-foreground/65 mt-1">{q.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12 w-full">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Connect</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Choose Your Preferred Way to <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto">
            Pick the channel that fits - I'll respond with next steps, a short brief template, or a calendar slot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass-strong rounded-3xl p-7 group hover:bg-white/10 transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl grid place-content-center text-white text-xl" style={{ background: "var(--gradient-primary)" }}>
                <i className={`${c.brand ? "fa-brands" : "fa-solid"} ${c.icon}`} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
              <p className="text-sm text-foreground/65 mt-1">{c.desc}</p>
              <p className="mt-4 text-sm text-primary break-all">{c.action}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 group-hover:text-primary transition-colors">
                {c.cta} <i className="fa-solid fa-arrow-right text-xs" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Who I work with */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12 w-full">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Collaboration</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Who I Love to <span className="gradient-text">Work With</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {workWith.map((w) => (
            <div key={w.title} className="glass rounded-3xl p-7">
              <div className="w-12 h-12 rounded-2xl grid place-content-center text-white" style={{ background: "var(--gradient-primary)" }}>
                <i className={`fa-solid ${w.icon}`} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
              <p className="text-sm text-foreground/65 mt-2 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-12 w-full">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">How We'll Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">A Simple, Transparent <span className="gradient-text">Process</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {process.map((p) => (
            <div key={p.step} className="glass rounded-2xl p-6">
              <p className="font-mono text-xs text-primary">{p.step}</p>
              <p className="mt-3 font-display font-semibold text-lg">{p.title}</p>
              <p className="text-sm text-foreground/65 mt-2 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to include */}
      <section className="mx-auto max-w-5xl px-6 md:px-10 py-12 w-full">
        <div className="glass-strong rounded-3xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl grid place-content-center text-white shrink-0" style={{ background: "var(--gradient-primary)" }}>
              <i className="fa-solid fa-clipboard-list" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Sending a Project Brief? Include These.</h3>
              <p className="text-sm text-foreground/65 mt-1">A few details upfront help me reply with a meaningful next step.</p>
            </div>
          </div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "Project goal & success criteria",
              "Team size & current stage",
              "Target timeline / key milestones",
              "Tools you currently use (Jira, Trello, Notion…)",
              "Budget range or engagement model",
              "Anything blocking you right now",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 glass rounded-xl p-3">
                <i className="fa-solid fa-check text-primary mt-1" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Socials */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 py-12 w-full">
        <div className="glass rounded-3xl p-8 text-center">
          <p className="font-display text-xl font-semibold">Or connect with me on social media</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-12 h-12 rounded-full glass-strong grid place-content-center text-lg hover:bg-white/15 transition-colors"
              >
                <i className={`fa-brands ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
