import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-boundary bg-ink px-6 py-10 text-porcelain sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded bg-porcelain text-[11px] font-bold text-ink">
              C
            </span>
            <span className="technical-label text-porcelain tracking-widest">Chaorda</span>
          </div>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-porcelain/60">
            Human understanding infrastructure for the next generation of AI agents.
            Building the runtime layer for human state and behavior modeling.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="technical-label text-porcelain/80">Navigation</h2>
            <ul className="mt-4 grid gap-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-porcelain/50 transition hover:text-porcelain"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="technical-label text-porcelain/80">Operational</h2>
            <ul className="mt-4 grid gap-1.5 text-xs text-porcelain/50">
              <li>Enterprise access</li>
              <li>Investor data room</li>
              <li>Research collaboration</li>
              <li>Privacy inquiry</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-porcelain/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-6">
          <p className="mono-table text-[10px] text-porcelain/40">© 2026 Chaorda Infra Inc.</p>
          <p className="mono-table text-[10px] text-porcelain/40">Uptime: 99.99%</p>
        </div>
        <div className="flex gap-4">
          <span className="technical-label text-[9px] text-amber/60">System: Operational</span>
          <span className="technical-label text-[9px] text-porcelain/40">Latency: &lt;50ms</span>
        </div>
      </div>
    </footer>
  );
}
