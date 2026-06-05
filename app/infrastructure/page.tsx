import { Metadata } from "next";
import { CardGrid } from "@/components/card-grid";
import { CodeTabs } from "@/components/code-tabs";
import { DataFlywheel } from "@/components/proof-modules";
import { PageHero, Section } from "@/components/section";
import {
  platformFeatures,
  researchPillars,
  technologyLayers,
  useCases
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "The human context layer for AI agents: multimodal signal ingestion, state prediction, and adaptive runtime SDK."
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Human context as a service."
        body="Chaorda converts raw interaction signals into a high-fidelity context layer that agents use to adapt behavior in real-time."
      >
        <div className="bg-white/5 p-6 shadow-polish ring-1 ring-white/10 backdrop-blur-md">
          <p className="technical-label text-amber font-bold">Architecture Flow</p>
          <ol className="mt-6 grid gap-3">
            {[
              "Multimodal Signal Ingestion",
              "Privacy-Preserving Normalization",
              "Preference Drift Prediction",
              "Adaptive Policy Runtime"
            ].map((item, index) => (
              <li key={item} className="flex items-center gap-4 text-sm text-porcelain/60">
                <span className="mono-table grid size-7 place-items-center rounded bg-amber text-[11px] font-bold text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </PageHero>

      {/* 1. The Stack (Dark) */}
      <Section
        theme="dark"
        eyebrow="The Stack"
        title="Four layers of human understanding."
        body="Our infrastructure handles the complexity of signal processing, model inference, and policy execution so you don't have to."
      >
        <CardGrid items={technologyLayers} columns="2" />
      </Section>

      {/* 2. Capabilities (Dark) */}
      <Section
        theme="dark"
        eyebrow="Capabilities"
        title="Platform Features."
      >
        <CardGrid items={platformFeatures} />
      </Section>

      {/* 3. Research (Light) - 2:1 Rhythm */}
      <Section
        theme="light"
        eyebrow="Research"
        title="Scientific Pillars."
        body="Our models are grounded in peer-reviewed research on emotional state prediction and preference drift modeling."
      >
        <CardGrid items={researchPillars} />
      </Section>

      {/* 4. SDK (Dark) - Inverted from previous version (was bg-ink) */}
      <Section
        theme="dark"
        eyebrow="SDK"
        title="Low-latency runtime SDK."
        body="Deploy human context in minutes. The runtime handles edge-tokenization and real-time inference."
      >
        <CodeTabs />
      </Section>

      {/* 5. Use Cases (Dark) */}
      <Section
        theme="dark"
        eyebrow="Use Cases"
        title="Market expansion."
        body="The same human layer supports customer experience, digital health, and interactive entertainment."
      >
        <CardGrid items={useCases} />
      </Section>

      {/* 6. Evaluation (Light) - 2:1 Rhythm */}
      <Section
        theme="light"
        eyebrow="Evaluation"
        title="Measuring interaction risk."
      >
        <div className="overflow-hidden rounded-lg border border-boundary bg-porcelain shadow-polish">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-ink text-porcelain">
              <tr>
                <th className="p-4 technical-label text-porcelain">Metric</th>
                <th className="p-4 technical-label text-porcelain">Focus</th>
                <th className="p-4 technical-label text-porcelain">Risk Mitigated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-boundary">
              {[
                ["Prediction confidence", "Model certainty index", "False adaptation"],
                ["Escalation accuracy", "Handoff timing optimization", "User frustration"],
                ["Runtime Latency", "Decision speed (<50ms)", "Interaction drag"],
                ["Consent compliance", "Audit-trail integrity", "Privacy breach"]
              ].map(([metric, question, risk]) => (
                <tr key={metric} className="transition-colors hover:bg-paper/50">
                  <td className="p-4 font-bold text-ink">{metric}</td>
                  <td className="p-4 text-ink/70">{question}</td>
                  <td className="p-4 text-ink/60">{risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 7. Data Moat (Dark) */}
      <Section
        theme="dark"
        eyebrow="Data Moat"
        title="The compound effect."
        body="Every interaction strengthens the state-prediction models, creating a defensible barrier against general-purpose LLMs."
      >
        <DataFlywheel />
      </Section>
    </>
  );
}
