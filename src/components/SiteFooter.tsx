export function SiteFooter() {
  return (
    <footer className="mt-32 px-4 pb-8">
      <div className="mx-auto max-w-7xl glass rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-display text-2xl">Rashmi <span className="gradient-text">Tharaka</span></p>
            <p className="text-muted-foreground mt-2">Project Manager · Sri Lanka</p>
            <p className="text-muted-foreground mt-4 text-xs">Building bridges between teams, ideas, and outcomes.</p>
          </div>
          <div className="space-y-2">
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Contact</p>
            <a href="mailto:rashmitharaka509@gmail.com" className="block hover:text-primary transition-colors">
              rashmitharaka509@gmail.com
            </a>
            <a href="tel:+94769787029" className="block hover:text-primary transition-colors">
              +94 76 978 7029
            </a>
          </div>
          <div className="space-y-2">
            <p className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-3">Elsewhere</p>
            <a href="https://www.linkedin.com/in/rashmitharaka" className="block hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/Rashmitharaka1" className="block hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-5 text-center text-xs text-muted-foreground">
          © 2026 Rashmi Tharaka Sewwandi - Crafted with intention.
        </div>
      </div>
    </footer>
  );
}
