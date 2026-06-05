import type { CardItem } from "@/lib/content";

type CardGridProps = {
  items: CardItem[];
  columns?: "2" | "3" | "4";
};

export function CardGrid({ items, columns = "4" }: CardGridProps) {
  const grid = {
    "2": "lg:grid-cols-2",
    "3": "lg:grid-cols-3",
    "4": "lg:grid-cols-4"
  };

  return (
    <div className={`border-grid sm:grid-cols-2 ${grid[columns]}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className="group p-6 transition-all duration-300 hover:bg-white/[0.03] hover:shadow-glow"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              {item.meta ? (
                <span className="technical-label text-amber font-bold opacity-80">
                  {item.meta}
                </span>
              ) : (
                <span />
              )}
              {Icon ? (
                <span className="grid size-10 place-items-center rounded bg-white/5 text-porcelain ring-1 ring-white/10 transition-colors group-hover:bg-amber group-hover:text-ink">
                  <Icon aria-hidden="true" size={18} />
                </span>
              ) : null}
            </div>
            <h3 className="text-lg font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-60">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}
