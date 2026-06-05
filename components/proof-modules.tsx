import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { metrics, validationKPIs, ecosystemValidations, roadmapSteps } from "@/lib/content";
import { Section } from "./section";

export function InstitutionalRoadmap() {
  return (
    <div className="border-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {roadmapSteps.map((item, index) => (
        <div key={item.step} className="relative p-6 flex flex-col justify-between min-h-[160px] bg-white/5 hover:bg-white/10 transition-colors">
          <div>
            <span className="technical-label text-amber/60">{item.step}</span>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider">{item.title}</h3>
            <p className="mt-2 text-xs leading-relaxed opacity-60">{item.body}</p>
          </div>
          {index < roadmapSteps.length - 1 && (
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
              <div className="bg-ink border border-white/10 rounded-full p-1 shadow-glow">
                <ArrowRight size={12} className="text-amber" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function InstitutionalValidation({
  title = "Proven Through Institutional Recognition.",
  showKPIs = true,
  noHeader = false
}: {
  title?: string;
  showKPIs?: boolean;
  noHeader?: boolean;
}) {
  return (
    <>
      {showKPIs && (
        <div className="border-grid grid-cols-1 sm:grid-cols-3 bg-white/[0.02] text-porcelain mb-12">
          {validationKPIs.map((kpi) => (
            <div key={kpi.label} className="p-10 text-center border-white/5">
              <p className="mono-table text-5xl font-bold tracking-tight text-white">{kpi.value}</p>
              <p className="technical-label mt-3 text-amber font-bold">{kpi.label}</p>
            </div>
          ))}
        </div>
      )}

      {!noHeader ? (
        <div className="mt-16">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-amber">
            Trust & Authority
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl mb-12">
            {title}
          </h2>
          <div className="border-grid sm:grid-cols-2 lg:grid-cols-3">
            {ecosystemValidations.map((item) => (
              <article
                key={item.title}
                className="p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 bg-white/5 hover:bg-white/10 border-white/5"
              >
                <div>
                  {item.icon && (
                    <item.icon className="text-amber mb-6" size={28} />
                  )}
                  <h3 className="text-sm font-bold uppercase tracking-widest">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-60">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="border-grid sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemValidations.map((item) => (
            <article
              key={item.title}
              className="p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 bg-white/5 hover:bg-white/10 border-white/5"
            >
              <div>
                {item.icon && (
                  <item.icon className="text-amber mb-6" size={28} />
                )}
                <h3 className="text-sm font-bold uppercase tracking-widest">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-60">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
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
    <div className="border-grid grid-cols-1 lg:grid-cols-3 bg-current/5">
      {columns.map((column) => (
        <article
          key={column.title}
          className="p-8 border-current/10"
        >
          <h3 className="technical-label font-bold mb-6">{column.title}</h3>
          <ul className="grid gap-4">
            {column.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm opacity-80">
                <CheckCircle2 className="text-amber" size={16} />
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
    <div className="border-grid grid-cols-2 lg:grid-cols-6 bg-white/5">
      {steps.map((step, index) => (
        <div key={step} className="group relative p-6 transition-all hover:bg-white/10">
          <div className="flex h-full min-h-[120px] flex-col justify-between">
            <span className="technical-label text-amber font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-6 text-[14px] font-semibold leading-tight">{step}</p>
          </div>
          {index < steps.length - 1 ? (
            <div className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-ink p-1 text-amber shadow-glow lg:block hidden">
              <ArrowRight size={12} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function MetricStrip() {
  return (
    <div className="border-grid sm:grid-cols-2 lg:grid-cols-4 bg-white/5">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="p-6 transition-colors hover:bg-white/10"
        >
          <p className="mono-table text-3xl font-bold">{metric.value}</p>
          <p className="technical-label mt-2 text-amber font-bold">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export function BehaviorComparison() {
  return (
    <div className="border-grid lg:grid-cols-2 bg-white/5">
      <article className="p-8 border-white/5">
        <p className="technical-label opacity-60 mb-6">
          Standard agent
        </p>
        <div className="border-l-2 border-white/20 bg-white/5 p-4 rounded-r">
          <p className="technical-label text-[10px] opacity-40">User Input</p>
          <p className="mt-2 text-sm font-medium">{`"I'm fine. Just send the result."`}</p>
        </div>
        <div className="mt-6 bg-white/10 p-4 rounded border border-white/5">
          <p className="technical-label text-[10px] opacity-40">Default Response</p>
          <p className="mt-2 text-sm leading-relaxed opacity-60">{`"Here is the result."`}</p>
        </div>
      </article>
      <article className="p-8 relative overflow-hidden bg-amber/5 group">
        <div className="relative z-10">
          <p className="technical-label text-amber font-bold mb-6">
            Chaorda-aware agent
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Pacing erratic", "Corrections repeated", "Confidence drop"].map(
              (item) => (
                <div key={item} className="rounded-full bg-amber/10 border border-amber/20 px-3 py-1 text-[10px] font-bold text-amber uppercase tracking-wider">
                  {item}
                </div>
              )
            )}
          </div>
          <div className="bg-ink p-5 text-porcelain shadow-polish border border-amber/30 rounded-lg">
            <p className="technical-label text-[10px] text-amber font-bold mb-2">Adaptive response strategy</p>
            <p className="mt-1 text-sm leading-relaxed">{`"I'll keep this concise. The result is below, and I can show the assumptions or escalate to a specialist if this is time-sensitive."`}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </article>
    </div>
  );
}
