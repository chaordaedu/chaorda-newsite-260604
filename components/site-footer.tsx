import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-boundary bg-porcelain px-6 py-16 text-ink sm:px-10 lg:px-12">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-between gap-12 lg:flex-row">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded bg-ink text-[12px] font-bold text-porcelain">
              C
            </span>
            <span className="technical-label text-ink tracking-widest text-xs">Chaorda</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/60">
            Human understanding infrastructure for the next generation of AI agents.
            Building the runtime layer for human state and behavior modeling.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 sm:gap-24">
          <div>
            <h2 className="technical-label text-ink font-bold">Navigation</h2>
            <ul className="mt-6 grid gap-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/50 transition hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="technical-label text-ink font-bold">Connect</h2>
            <ul className="mt-6 grid gap-2.5">
              <li>
                <a href="#" className="text-sm text-ink/50 hover:text-ink">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-sm text-ink/50 hover:text-ink">Twitter / X</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-t border-ink/10 pt-8">
        <p className="mono-table text-[10px] text-ink/40 tracking-wider">
          © 2026 Chaorda Inc. | ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
