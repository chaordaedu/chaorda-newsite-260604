import { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CardGrid } from "@/components/card-grid";
import { InstitutionalRoadmap, InstitutionalValidation } from "@/components/proof-modules";
import { PageHero, Section } from "@/components/section";
import {
  investmentStructures,
  proprietaryAssets,
  riskMitigation
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Institutional Investors",
  description:
    "Institutional investment thesis for Chaorda's human understanding infrastructure."
};

export default function InvestorsPage() {
  return (
    <>
      {/* SECTION A: Institutional Positioning */}
      <PageHero
        eyebrow="Institutional IR"
        title="Where AI Innovation Meets Institutional Risk Discipline"
        body="Leveraging proprietary AI technology, venture validation, and South Korea's innovation ecosystem to build long-term enterprise value."
      />

      {/* SECTION B: Institutional Validation */}
      <InstitutionalValidation
        title="Validated by Korea's Innovation Ecosystem"
        showKPIs={false}
      />

      {/* SECTION C: Proprietary AI Assets & Enterprise Value */}
      <Section
        className="bg-paper/40"
        eyebrow="Proprietary Technology"
        title="Proprietary Technology with Residual Enterprise Value."
        body="Chaorda is led by advanced AI researchers and engineers developing internal technology stacks focused on human-state prediction and behavioral intelligence."
      >
        <CardGrid items={proprietaryAssets} />
      </Section>

      {/* SECTION D: Financial Stability & Non-Dilutive Capital */}
      <Section
        eyebrow="Capital Efficiency"
        title="Supported by Non-Dilutive Innovation Funding."
        body="Selected and supported through national innovation programs, Chaorda leverages competitive technology and commercialization funding to extend operational runway and reduce shareholder dilution."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Operational Runway", value: "Extended" },
            { label: "Shareholder Dilution", value: "Reduced" },
            { label: "R&D Continuity", value: "Increased" },
            { label: "Commercialization", value: "Enhanced" }
          ].map((item) => (
            <div key={item.label} className="bg-porcelain p-4 border border-boundary">
              <p className="technical-label text-[9px]">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION E: Risk Mitigation Framework */}
      <Section
        className="bg-paper/40"
        eyebrow="Governance"
        title="Designed for Capital Preservation."
        body="Disciplined capital allocation and structured risk management frameworks protect institutional interest while enabling innovation scale."
      >
        <CardGrid items={riskMitigation} columns="4" />
      </Section>

      {/* SECTION F: Flexible Investment Structures */}
      <Section
        eyebrow="Structured Capital"
        title="Flexible Structures for Institutional Capital."
        body="Investment structures can be tailored to investor objectives and risk preferences, ensuring alignment with long-term capital providers."
      >
        <CardGrid items={investmentStructures} />
      </Section>

      {/* SECTION G: Path to Sustainable Cash Flow */}
      <Section
        className="bg-paper/40"
        eyebrow="Commercialization"
        title="Path to Sustainable Cash Flow."
        body="A structured transition from innovation funding toward sustainable operating cash flow across enterprise, education, and healthcare sectors."
      >
        <InstitutionalRoadmap />
      </Section>

      {/* SECTION H: Institutional Transparency */}
      <Section
        eyebrow="Reporting"
        title="Transparency & Reporting."
        body="Chaorda maintains institutional-grade reporting standards to ensure continuous alignment with LPs and private credit investors."
      >
        <div className="border-grid grid-cols-2 lg:grid-cols-5 bg-porcelain">
          {[
            "Institutional reporting standards",
            "KPI monitoring",
            "Product milestones",
            "Governance updates",
            "Commercialization metrics"
          ].map((item) => (
            <div key={item} className="p-4 text-center">
              <p className="technical-label text-[9px] text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL SECTION: Institutional Engagement */}
      <section className="bg-ink px-6 py-20 text-porcelain sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="technical-label text-amber mb-4">Institutional Engagement</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Partnering with Long-Term Capital
          </h2>
          <p className="mt-6 text-lg text-porcelain/60">
            We welcome discussions with institutional investors, private credit managers, family offices, and strategic partners seeking exposure to validated AI infrastructure opportunities.
          </p>
          <p className="mt-8 text-xs text-porcelain/40 italic">
            Additional materials may be made available following an initial qualification process.
          </p>
        </div>
      </section>
    </>
  );
}
