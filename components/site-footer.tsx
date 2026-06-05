import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-boundary bg-porcelain px-6 py-16 text-ink sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 lg:flex-row">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded bg-ink text-[14px] font-bold text-porcelain">
              C
            </span>
            <span className="technical-label text-ink tracking-[0.3em] text-sm font-bold">Chaorda</span>
          </div>
          <p className="mt-8 text-base leading-relaxed text-ink/60">
            Human intelligence infrastructure for the next generation of AI agents.
            Building the runtime layer for human state and behavior modeling.
          </p>
        </div>
        
        <div className="flex flex-col gap-10 sm:min-w-[200px]">
          <h2 className="technical-label text-ink font-bold opacity-40">Navigation</h2>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink/50 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mx-auto mt-24 max-w-7xl border-t border-ink/5 pt-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p className="mono-table text-[11px] text-ink/30 tracking-widest uppercase">
            © 2026 Chaorda Inc. | Human Intelligence Infrastructure
          </p>
          <p className="mono-table text-[11px] text-ink/30 tracking-widest uppercase">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
