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
            className="group bg-porcelain p-5 transition-colors hover:bg-paper/50"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              {item.meta ? (
                <span className="technical-label text-clay">
                  {item.meta}
                </span>
              ) : (
                <span />
              )}
              {Icon ? (
                <span className="grid size-8 place-items-center rounded bg-paper text-ink ring-1 ring-ink/5 transition-colors group-hover:bg-porcelain">
                  <Icon aria-hidden="true" size={15} />
                </span>
              ) : null}
            </div>
            <h3 className="text-base font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}
