import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-ink text-porcelain hover:bg-graphite focus-visible:outline-amber",
    secondary:
      "border border-boundary bg-porcelain text-ink hover:bg-paper focus-visible:outline-amber",
    dark: "bg-porcelain text-ink hover:bg-paper focus-visible:outline-amber"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={13} />
    </Link>
  );
}
