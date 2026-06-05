"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-boundary bg-porcelain/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2.5 rounded-md"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-7 place-items-center rounded bg-ink text-[11px] font-bold text-porcelain">
            C
          </span>
          <span className="technical-label text-ink tracking-widest">Chaorda</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`focus-ring rounded px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition ${
                      active
                        ? "bg-paper text-ink"
                        : "text-muted hover:bg-paper hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className="focus-ring grid size-10 place-items-center rounded-md border border-ink/10 bg-porcelain lg:hidden"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-ink/10 bg-porcelain px-6 py-5 lg:hidden"
        >
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring block rounded-md px-3 py-3 text-base text-ink hover:bg-paper"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
