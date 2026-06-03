import { Metadata } from "next";
import { CardGrid } from "@/components/card-grid";
import { FormShell } from "@/components/forms";
import { DataFlywheel, MetricStrip } from "@/components/proof-modules";
import { PageHero, Section } from "@/components/section";
import { investorMoats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "The market thesis, defensibility, and strategic roadmap for the human context layer of AI agents."
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Infrastructure for the Agent Economy."
        body="Foundation models made AI capable. Agents make AI operational. Chaorda builds the layer that makes agents human-aware."
      >
        <div className="bg-porcelain p-5 shadow-polish ring-1 ring-boundary">
          <p className="technical-label text-ink">Investment Thesis</p>
          <p className="mt-4 text-xl font-semibold leading-tight text-ink sm:text-2xl">
            Human state is the ultimate data moat.
          </p>
          <div className="mt-5 border-t border-boundary pt-4">
            <p className="mono-table text-[10px] text-muted uppercase tracking-wider">Focus: Infrastructure & Data Moats</p>
          </div>
        </div>
      </PageHero>

      <Section
        eyebrow="Market Thesis"
        title="Context is the next bottleneck."
        body="As agents move from simple RAG to complex reasoning, the lack of real-time human context becomes the primary failure point."
      >
        <MetricStrip />
      </Section>

      <Section
        className="bg-paper/40"
        eyebrow="Defensibility"
        title="Proprietary Moat Stack."
      >
        <CardGrid items={investorMoats} />
      </Section>

      <Section
        eyebrow="The Pivot"
        title="From education to infrastructure."
        body="Chaorda has evolved from teaching AI to building the foundational layer that helps AI understand people."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Infrastructure First",
              body: "Building deep tech layers rather than shallow application wrappers."
            },
            {
              title: "Consent Architecture",
              body: "Privacy-by-design ensures enterprise scalability and trust."
            },
            {
              title: "Legible Emotion",
              body: "Converting subjective signals into objective runtime parameters."
            }
          ].map((item) => (
            <article key={item.title} className="bg-porcelain p-5 ring-1 ring-boundary shadow-technical">
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Flywheel" title="Data compounds through deployment.">
        <DataFlywheel />
      </Section>

      <Section
        className="bg-paper/40"
        eyebrow="Access"
        title="Investor Data Room."
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-porcelain p-6 ring-1 ring-boundary shadow-technical">
            <FormShell
              title="Data Room Access"
              description="Institutional access is manually approved."
              variant="investor"
            />
          </div>
          <div className="bg-ink p-6 text-porcelain shadow-polish">
            <p className="technical-label text-amber">Strategic Inquiries</p>
            <h3 className="mt-4 text-xl font-semibold">Join the Human Layer.</h3>
            <p className="mt-3 text-sm text-porcelain/60">
              We are currently reviewing pre-seed and strategic partnership inquiries for the Q3 deployment cycle.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="flex justify-between border-b border-porcelain/10 pb-2">
                <span className="text-[10px] uppercase text-porcelain/40">Technical Review</span>
                <span className="text-xs">Operational</span>
              </div>
              <div className="flex justify-between border-b border-porcelain/10 pb-2">
                <span className="text-[10px] uppercase text-porcelain/40">Data Room</span>
                <span className="text-xs">Secured</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}