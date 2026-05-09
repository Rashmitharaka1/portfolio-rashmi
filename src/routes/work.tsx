import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import imgCircadia from "@/assets/proj-circadialux.png";
import imgEnrollment from "@/assets/proj-enrollment.png";
import imgConvo from "@/assets/proj-convo.png";
import imgWorkwise from "@/assets/proj-workwise.png";
import imgMentor from "@/assets/proj-mentormatch.png";
import imgTodo from "@/assets/proj-todo.png";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Rashmi Tharaka | Project Manager" },
      {
        name: "description",
        content:
          "Selected projects by Rashmi Tharaka — CircadiaLux, Convo, WorkWise, MentorMatchAI.",
      },
    ],
  }),
  component: Work,
});

const projects = [
  {
    n: "01",
    title: "CircadiaLux",
    sub: "Smart Healthcare Lighting",
    img: imgCircadia,
    period: "Feb — May 2025",
    role: "Scrum Lead · UI/UX · Frontend · Auth & RBAC",
    type: "Group Project (5 members)",
    body:
      "Intelligent lighting for healthcare environments using IoT sensors and ML to deliver circadian rhythm-based, personalized lighting.",
    stack: ["React.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/kavindalj/CircadiaLux",
    linkedin: "https://www.linkedin.com/posts/rashmitharaka_circadialux-capstoneproject-iotinnovation-activity-7360362576234377216-Ckhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFI1vLgBP4uInB6CfMw5IZsmqUGI3XQejLE",
  },
  {
    n: "02",
    title: "Student Enrollment & Degree Tracking",
    sub: "Graduate Studies Platform",
    img: imgEnrollment,
    period: "Apr — Sep 2025",
    role: "Requirements & Frontend (Laravel Blade)",
    type: "Group Project",
    body:
      "Full-stack web app streamlining graduate studies - candidate profile management, online application submission.",
    stack: ["Laravel", "MySQL", "Node.js"],
    github: "https://github.com/Sachindu-Nethmin/FOG-SM",
    
  },
  {
    n: "03",
    title: "Convo",
    sub: "Real-Time Chat Application",
    img: imgConvo,
    period: "Sep 2025 — Present",
    role: "Solo PM & Full-stack",
    type: "Individual",
    body:
      "A real-time chat app on the MERN stack with WebSocket transport.",
    stack: ["React.js", "Express.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Rashmitharaka1/Convo",
       },
  {
    n: "04",
    title: "WorkWise",
    sub: "Employee Management System",
    img: imgWorkwise,
    period: "Jul — Sep 2025",
    role: "Solo PM & Full-stack",
    type: "Individual",
    body:
      "Employee management system streamlining employees, departments, attendance and events.",
    stack: ["React.js", "Bootstrap", "Supabase"],
    github: "https://github.com/Rashmitharaka1/WorkWise",
    linkedin: "https://www.linkedin.com/posts/rashmitharaka_excited-to-share-my-latest-project-activity-7375614689956986882-Lmum?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFI1vLgBP4uInB6CfMw5IZsmqUGI3XQejLE",
  },
  {
    n: "05",
    title: "MentorMatchAI",
    sub: "Mentor–Mentee Matching",
    img: imgMentor,
    period: "Aug — Sep 2025",
    role: "PM & ML integration",
    type: "Individual",
    body:
      "AI-powered platform matching learners with industry mentors via embedding similarity.",
    stack: ["Streamlit", "FastAPI", "Supabase"],
    github: "https://github.com/Rashmitharaka1/MentorMatchAI",
    linkedin: "https://www.linkedin.com/posts/rashmitharaka_thrilled-to-share-my-project-mentormatchai-activity-7376537588477669376-TRPY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFI1vLgBP4uInB6CfMw5IZsmqUGI3XQejLE",
  },
  {
    n: "06", 
    title: "To-Do App",
    sub: "Role-Based To-Do Application",
    img: imgTodo,
    period: "Jan — Feb 2026",
    role: "PM & Full-stack",
    type: "Individual",
    body: "A role-based to-do management application with secure access.",
    stack: ["Next.js", "TailwindCSS", "NeonDB"],
    github: "https://github.com/Rashmitharaka1/To-do-Application",
      },
];

function Work() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="blob w-[500px] h-[500px] top-20 -right-40"
        style={{ background: "var(--blue)" }}
      />
      <div
        className="blob w-[400px] h-[400px] top-1/2 -left-40"
        style={{ background: "var(--purple)" }}
      />

      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
          Portfolio · 2025–2026
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
          Selected <span className="gradient-text">Work</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.n}
              className="glass rounded-3xl overflow-hidden hover:bg-white/10 transition-colors flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden max-h-44">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-xs font-mono text-muted-foreground">
                    № {p.n}
                  </p>
                  <p className="text-xs text-primary">{p.period}</p>
                </div>

                <h2 className="font-display text-2xl font-bold">
                  {p.title}
                </h2>
                <p className="text-primary text-sm mt-1">{p.sub}</p>

                <p className="text-foreground/70 text-sm mt-4 flex-1">
                  {p.body}
                </p>

                {/* Role + Type */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl p-3 bg-white/5 border border-white/10">
                    <p className="text-muted-foreground uppercase text-[10px]">
                      Role
                    </p>
                    <p className="mt-1">{p.role}</p>
                  </div>
                  <div className="rounded-xl p-3 bg-white/5 border border-white/10">
                    <p className="text-muted-foreground uppercase text-[10px]">
                      Type
                    </p>
                    <p className="mt-1">{p.type}</p>
                  </div>
                </div>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-strong grid place-content-center hover:bg-white/15 transition"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-github text-lg" />
                  </a>

                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-strong grid place-content-center hover:bg-white/15 transition"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in text-lg" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}