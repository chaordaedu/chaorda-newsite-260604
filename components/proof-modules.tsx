import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { metrics, validationKPIs, ecosystemValidations, roadmapSteps } from "@/lib/content";
import { Section } from "./section";

export function InstitutionalRoadmap() {
  return (
    <div className="border-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {roadmapSteps.map((item, index) => (
        <div key={item.step} className="relative bg-porcelain p-6 flex flex-col justify-between min-h-[160px]">
          <div>
            <span className="technical-label text-clay/50">{item.step}</span>
            <h3 className="mt-4 text-sm font-semibold text-ink uppercase tracking-wider">{item.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">{item.body}</p>
          </div>
          {index < roadmapSteps.length - 1 && (
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <div className="bg-porcelain border border-boundary rounded-full p-1 shadow-technical">
                <ArrowRight size={12} className="text-moss" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function InstitutionalValidation({ title = "Proven Through Institutional Recognition." }: { title?: string }) {
  return (
    <>
      <div className="border-grid grid-cols-1 sm:grid-cols-3 bg-ink text-porcelain">
        {validationKPIs.map((kpi) => (
          <div key={kpi.label} className="p-8 text-center border-ink/10">
            <p className="mono-table text-4xl font-bold tracking-tight text-white">{kpi.value}</p>
            <p className="technical-label mt-2 text-porcelain/40">{kpi.label}</p>
          </div>
        ))}
      </div>

      <Section
        eyebrow="Trust & Authority"
        title={title}
        body="Chaorda's infrastructure and market thesis have been rigorously validated by Korea's leading venture capital and government innovation programs."
      >
        <div className="border-grid sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemValidations.map((item) => (
            <article
              key={item.title}
              className="bg-porcelain p-6 flex flex-col justify-between min-h-[180px] transition-colors hover:bg-paper/30"
            >
              <div>
                {item.icon && (
                  <item.icon className="text-moss mb-4" size={24} />
                )}
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">{item.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

export function HumanLayerProblem() {
  const columns = [
    {
      title: "Agents today",
      items: ["Retrieve", "Reason", "Act"]
    },
    {
      title: "Missing layer",
      items: ["Frustration", "Trust readiness", "Preference drift"]
    },
    {
      title: "Chaorda adds",
      items: ["Predict state", "Adapt behavior", "Preserve consent"]
    }
  ];

  return (
    <div className="border-grid grid-cols-1 lg:grid-cols-3">
      {columns.map((column) => (
        <article
          key={column.title}
          className="bg-porcelain p-5"
        >
          <h3 className="technical-label text-ink">{column.title}</h3>
          <ul className="mt-4 grid gap-2">
            {column.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-muted">
                <CheckCircle2 className="text-moss" size={14} />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function DataFlywheel() {
  const steps = [
    "Enterprise deployments",
    "Human-agent interaction data",
    "Better state prediction",
    "Adaptive runtime policies",
    "Higher retention",
    "More deployments"
  ];

  return (
    <div className="border-grid grid-cols-2 lg:grid-cols-6">
      {steps.map((step, index) => (
        <div key={step} className="group relative bg-porcelain p-4 transition-colors hover:bg-paper/30">
          <div className="flex h-full min-h-[100px] flex-col justify-between">
            <span className="technical-label text-clay/60 group-hover:text-clay">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-[13px] font-medium leading-tight text-ink">{step}</p>
          </div>
          {index < steps.length - 1 ? (
            <div className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-boundary bg-porcelain p-0.5 text-moss/50 lg:block hidden">
              <ArrowDown className="-rotate-90" size={12} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function MetricStrip() {
  return (
    <div className="border-grid sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-porcelain p-4 transition-colors hover:bg-paper/30"
        >
          <p className="mono-table text-2xl font-bold text-ink">{metric.value}</p>
          <p className="technical-label mt-1 text-[9px]">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export function BehaviorComparison() {
  return (
    <div className="border-grid lg:grid-cols-2">
      <article className="bg-porcelain p-5">
        <p className="technical-label text-clay/80">
          Standard agent
        </p>
        <div className="mt-4 border-l-2 border-boundary bg-paper/50 p-3">
          <p className="technical-label text-[9px]">User Input</p>
          <p className="mt-1 text-xs font-medium text-ink">{`"I'm fine. Just send the result."`}</p>
        </div>
        <div className="mt-3 bg-graphite p-3 text-porcelain">
          <p className="technical-label text-[9px] text-porcelain/40">Default Response</p>
          <p className="mt-1 text-xs leading-relaxed">{`"Here is the result."`}</p>
        </div>
      </article>
      <article className="bg-porcelain p-5 ring-1 ring-amber/20 inset-0 pointer-events-none relative">
        <div className="pointer-events-auto">
          <p className="technical-label text-moss">
            Chaorda-aware agent
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Pacing erratic", "Corrections repeated", "Confidence drop"].map(
              (item) => (
                <div key={item} className="rounded bg-paper px-2 py-1 text-[10px] font-medium text-ink ring-1 ring-ink/5">
                  {item}
                </div>
              )
            )}
          </div>
          <div className="mt-3 bg-ink p-3 text-porcelain shadow-polish">
            <p className="technical-label text-[9px] text-amber">Adaptive response strategy</p>
            <p className="mt-1 text-xs leading-relaxed">{`"I'll keep this concise. The result is below, and I can show the assumptions or escalate to a specialist if this is time-sensitive."`}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
