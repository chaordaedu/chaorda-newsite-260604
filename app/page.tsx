import { Metadata } from "next";
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
      <section className="hero-radial px-6 pb-12 pt-24 sm:px-10 lg:px-16 lg:pb-16 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-moss/80">
              The Agent Infrastructure Company
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              The Missing Layer in the Agent Stack: <span className="text-amethyst">HUMAN EMOTION.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              AI agents today can reason and act, but they are emotionally blind. Chaorda builds the human context layer—converting real-time multimodal signals into actionable state predictions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/investors">Review the thesis</ButtonLink>
              <ButtonLink href="/infrastructure" variant="secondary">
                Explore infrastructure
              </ButtonLink>
            </div>
          </div>
          <div className="float-slow lg:scale-105">
            <SignalField />
          </div>
        </div>
      </section>

      <InstitutionalValidation />

      <Section
        eyebrow="The Bottleneck"
        title="Agents miss the human state."
        body="Interaction quality is the final frontier. We make frustration, trust, and uncertainty legible for the agent runtime."
      >
        <HumanLayerProblem />
      </Section>

      <Section
        className="bg-paper/40"
        eyebrow="Infrastructure"
        title="Human Context Infrastructure."
      >
        <CardGrid items={coreCapabilities} />
      </Section>

      <Section
        eyebrow="Proof of Concept"
        title="From transaction to interaction."
        body="The platform detects preference drift and interaction friction, enabling agents to adjust strategy before a session fails."
      >
        <BehaviorComparison />
      </Section>

      <Section
        className="bg-ink text-porcelain"
        eyebrow="Deployment"
        title="Infrastructure-grade SDK."
        body="Integrate human state predictions into your existing agent stack with <50ms latency."
      >
        <CodeTabs />
      </Section>

      <Section
        eyebrow="Markets"
        title="High-stakes interactions."
        body="From enterprise customer experience to digital health, Chaorda powers agents that need to understand how humans feel."
      >
        <CardGrid items={useCases.slice(0, 4)} columns="4" />
      </Section>

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-moss/80">
              Defensibility
            </p>
            <h2 className="text-balance text-2xl font-semibold leading-tight text-ink sm:text-3xl lg:text-4xl">
              The Data Flywheel.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Consented interaction data compounds across industries, creating a proprietary moat of state-prediction accuracy.
            </p>
          </div>
          <div className="grid gap-6">
            <DataFlywheel />
            <MetricStrip />
          </div>
        </div>
      </div>
    </>
  );
}
