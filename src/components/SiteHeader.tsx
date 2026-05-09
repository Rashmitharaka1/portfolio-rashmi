import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 flex justify-center">
      <div
        className="glass-strong rounded-full px-3 py-2 flex items-center gap-2 w-full max-w-3xl"
        style={{
          background: "oklch(0.16 0.04 275 / 0.5)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
        }}
      >
        <Link to="/" className="flex items-center gap-2 px-3 py-1.5 group">
          <span
            className="w-8 h-8 rounded-full grid place-content-center text-white font-bold text-sm"
            style={{ background: "var(--gradient-primary)" }}
          >
            R
          </span>
          <span className="font-display font-semibold hidden sm:inline">Rashmi<span className="gradient-text">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 rounded-full text-sm text-foreground/75 hover:text-foreground hover:bg-white/10 transition-colors"
              activeProps={{ className: "px-4 py-2 rounded-full text-sm text-white bg-white/15" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="mailto:rashmitharaka509@gmail.com"
          className="hidden md:inline-flex ml-2 items-center gap-2 text-sm text-white px-5 py-2 rounded-full glow"
          style={{ background: "var(--gradient-primary)" }}
        >
          Hire me
        </a>
        <button
          className="md:hidden ml-auto w-10 h-10 rounded-full grid place-content-center hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden absolute top-20 inset-x-4 rounded-3xl p-4 flex flex-col gap-1 border border-white/10 shadow-2xl"
          style={{ background: "oklch(0.16 0.04 275)" }}
        >
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-2xl text-sm hover:bg-white/10"
              activeProps={{ className: "px-4 py-3 rounded-2xl text-sm bg-white/15" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="mailto:rashmitharaka509@gmail.com"
            className="mt-2 text-center text-sm text-white px-5 py-3 rounded-2xl"
            style={{ background: "var(--gradient-primary)" }}
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
