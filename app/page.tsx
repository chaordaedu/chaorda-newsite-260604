import { Metadata } from "next";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/button-link";
import { CardGrid } from "@/components/card-grid";
import { CodeTabs } from "@/components/code-tabs";
import {
  BehaviorComparison,
  DataFlywheel,
  HumanLayerProblem,
  InstitutionalValidation,
  MetricStrip
} from "@/components/proof-modules";
import { Section } from "@/components/section";
import { SignalField } from "@/components/signal-field";
import { coreCapabilities, useCases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Human Understanding Infrastructure",
  description:
    "AI agents need to understand humans. Chaorda builds human understanding infrastructure for AI agents."
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (Dark) */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-48">
        <div className="hero-radial absolute inset-0 -z-10 opacity-60" />
        <div className="ambient-grid absolute inset-0 -z-10" />
        
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-amber">
              The Agent Infrastructure Company
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-porcelain sm:text-6xl lg:text-7xl">
              The Missing Layer in the Agent Stack: <span className="text-amber">HUMAN INTELLIGENCE.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-porcelain/60 sm:text-xl">
              AI agents today can reason and act, but they are contextually blind. Chaorda builds the human intelligence layer—converting real-time signals into actionable behavioral insights.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/investors" className="px-8 py-4">Review the thesis</ButtonLink>
              <ButtonLink href="/infrastructure" variant="secondary" className="px-8 py-4 bg-white/5 border-white/10 text-white hover:bg-white/10">
                Explore infrastructure
              </ButtonLink>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="float-slow w-full max-w-[640px] lg:scale-110">
              <SignalField />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Validation (Dark) */}
      <Section theme="dark" title="Validated by Korea's Innovation Ecosystem">
        <InstitutionalValidation noHeader={true} />
      </Section>

      {/* 3. The Bottleneck (Light) - 2:1 Rhythm */}
      <Section
        theme="light"
        eyebrow="The Bottleneck"
        title="Agents miss the human state."
        body="Interaction quality is the final frontier. We make frustration, trust, and uncertainty legible for the agent runtime."
      >
        <HumanLayerProblem />
      </Section>

      {/* 4. Infrastructure (Dark) */}
      <Section
        theme="dark"
        eyebrow="Infrastructure"
        title="Human Context Infrastructure."
      >
        <CardGrid items={coreCapabilities} />
      </Section>

      {/* 5. Proof of Concept (Dark) */}
      <Section
        theme="dark"
        eyebrow="Proof of Concept"
        title="From transaction to interaction."
        body="The platform detects preference drift and interaction friction, enabling agents to adjust strategy before a session fails."
      >
        <BehaviorComparison />
      </Section>

      {/* 6. Deployment (Light) - 2:1 Rhythm & Inversion */}
      <Section
        theme="light"
        eyebrow="Deployment"
        title="Infrastructure-grade SDK."
        body="Integrate human state predictions into your existing agent stack with <50ms latency."
      >
        <CodeTabs />
      </Section>

      {/* 7. Markets (Dark) */}
      <Section
        theme="dark"
        eyebrow="Markets"
        title="High-stakes interactions."
        body="From enterprise customer experience to digital health, Chaorda powers agents that need to understand how humans feel."
      >
        <CardGrid items={useCases.slice(0, 4)} columns="4" />
      </Section>

      {/* 8. Defensibility (Dark) */}
      <Section
        theme="dark"
        eyebrow="Defensibility"
        title="The Data Flywheel."
        body="Consented interaction data compounds across industries, creating a proprietary moat of state-prediction accuracy."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start mt-8">
          <DataFlywheel />
          <MetricStrip />
        </div>
      </Section>
    </>
  );
}
