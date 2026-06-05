import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-boundary bg-ink px-6 py-10 text-porcelain sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row">
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
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-porcelain/10 pt-6">
        <p className="mono-table text-[10px] text-porcelain/40">© 2020 Chaorda Inc.</p>
      </div>
    </footer>
  );
}
