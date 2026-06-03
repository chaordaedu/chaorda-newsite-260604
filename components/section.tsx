type SectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  body,
  children,
  className = ""
}: SectionProps) {
  return (
    <section
      className={`px-6 py-12 text-ink sm:px-10 lg:px-16 lg:py-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl lg:mb-10">
          {eyebrow ? (
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-moss/80">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-2xl font-semibold leading-tight text-current sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          {body ? (
            <p className="mt-4 text-sm leading-relaxed text-current/70 sm:text-base lg:max-w-2xl">
              {body}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, body, children }: PageHeroProps) {
  return (
    <section className="px-6 pb-10 pt-24 sm:px-10 lg:px-16 lg:pb-16 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-moss/80">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {body}
          </p>
        </div>
        {children ? <div>{children}</div> : null}
      </div>
    </section>
  );
}
