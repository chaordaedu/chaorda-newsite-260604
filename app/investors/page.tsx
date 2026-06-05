import { Metadata } from "next";
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
      {/* 1. Hero (Dark) */}
      <PageHero
        eyebrow="Institutional IR"
        title="Where AI Innovation Meets Institutional Risk Discipline"
        body="Leveraging proprietary AI technology, venture validation, and South Korea's innovation ecosystem to build long-term enterprise value."
      />

      {/* 2. Institutional Validation (Dark) */}
      <Section
        theme="dark"
        title="Validated by Korea's Innovation Ecosystem"
      >
        <InstitutionalValidation showKPIs={true} noHeader={true} />
      </Section>

      {/* 3. Proprietary Technology (Light) - 2:1 Rhythm */}
      <Section
        theme="light"
        eyebrow="Proprietary Technology"
        title="Proprietary Technology with Residual Enterprise Value."
        body="Chaorda is led by advanced AI researchers and engineers developing internal technology stacks focused on human-state prediction and behavioral intelligence."
      >
        <CardGrid items={proprietaryAssets} />
      </Section>

      {/* 4. Capital Efficiency (Dark) */}
      <Section
        theme="dark"
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
            <div key={item.label} className="bg-white/5 p-6 border border-white/10 backdrop-blur-sm">
              <p className="technical-label text-[9px] text-amber">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-porcelain">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Governance (Dark) */}
      <Section
        theme="dark"
        eyebrow="Governance"
        title="Designed for Capital Preservation."
        body="Disciplined capital allocation and structured risk management frameworks protect institutional interest while enabling innovation scale."
      >
        <CardGrid items={riskMitigation} columns="4" />
      </Section>

      {/* 6. Structured Capital (Light) - 2:1 Rhythm */}
      <Section
        theme="light"
        eyebrow="Structured Capital"
        title="Flexible Structures for Institutional Capital."
        body="Investment structures can be tailored to investor objectives and risk preferences, ensuring alignment with long-term capital providers."
      >
        <CardGrid items={investmentStructures} />
      </Section>

      {/* 7. Commercialization (Dark) */}
      <Section
        theme="dark"
        eyebrow="Commercialization"
        title="Path to Sustainable Cash Flow."
        body="A structured transition from innovation funding toward sustainable operating cash flow across enterprise, education, and healthcare sectors."
      >
        <InstitutionalRoadmap />
      </Section>

      {/* 8. Reporting (Dark) */}
      <Section
        theme="dark"
        eyebrow="Reporting"
        title="Transparency & Reporting."
        body="Chaorda maintains institutional-grade reporting standards to ensure continuous alignment with LPs and private credit investors."
      >
        <div className="border-grid grid-cols-2 lg:grid-cols-5 bg-white/5">
          {[
            "Institutional reporting standards",
            "KPI monitoring",
            "Product milestones",
            "Governance updates",
            "Commercialization metrics"
          ].map((item) => (
            <div key={item} className="p-6 text-center border-white/5">
              <p className="technical-label text-[9px] text-porcelain">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. Final Engagement (Light) - 2:1 Rhythm & Inversion */}
      <section className="bg-porcelain px-6 py-24 text-ink sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="technical-label text-moss mb-6 font-bold">Institutional Engagement</p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Partnering with Long-Term Capital
          </h2>
          <p className="mt-8 text-xl text-ink/60 max-w-2xl mx-auto">
            We welcome discussions with institutional investors, private credit managers, family offices, and strategic partners seeking exposure to validated AI infrastructure opportunities.
          </p>
          <p className="mt-12 text-xs text-ink/40 italic">
            Additional materials may be made available following an initial qualification process.
          </p>
        </div>
      </section>
    </>
  );
}
