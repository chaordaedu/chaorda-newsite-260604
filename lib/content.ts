import {
  Activity,
  Brain,
  Building2,
  CircuitBoard,
  Code2,
  Database,
  FileText,
  HeartPulse,
  LockKeyhole,
  LucideIcon,
  Network,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Workflow,
  Zap
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type CardItem = {
  title: string;
  body: string;
  icon?: LucideIcon;
  meta?: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/investors", label: "Investors" }
];

export const coreCapabilities: CardItem[] = [
  {
    title: "Multimodal signal ingestion",
    body: "Normalize consented tone, pacing, text inflection, interaction friction, and expression-derived signals into a privacy-preserving event stream.",
    icon: Network
  },
  {
    title: "Preference drift modeling",
    body: "Detect when confidence, intent, attention, trust, or emotional state shifts during a human-agent interaction.",
    icon: Brain
  },
  {
    title: "Adaptive runtime SDK",
    body: "Expose behavior controls that let agents adjust tone, timing, escalation, and response strategy without rebuilding the application stack.",
    icon: Code2
  },
  {
    title: "Consent architecture",
    body: "Treat consent, modality controls, edge tokenization, audit trails, and deletion rights as part of the product layer.",
    icon: ShieldCheck
  }
];

export const technologyLayers: CardItem[] = [
  {
    meta: "Layer 01",
    title: "Consented interaction signals",
    body: "Chaorda starts with explicit user permission and captures only the modalities a deployment enables: text rhythm, voice tone, interaction pacing, corrections, and optional visual vectors.",
    icon: UserCheck
  },
  {
    meta: "Layer 02",
    title: "Human state prediction",
    body: "Signals are converted into uncertainty-aware predictions for frustration, overload, trust readiness, preference drift, and escalation risk.",
    icon: Activity
  },
  {
    meta: "Layer 03",
    title: "Adaptive policy runtime",
    body: "Prediction outputs flow into a runtime layer that controls how an AI agent responds, pauses, escalates, summarizes, or asks for clarification.",
    icon: Workflow
  },
  {
    meta: "Layer 04",
    title: "Privacy-preserving deployment",
    body: "Sensitive raw inputs stay outside the application layer where possible. Deployments use tokenized telemetry, retention controls, and audit-ready consent events.",
    icon: LockKeyhole
  }
];

export const platformFeatures: CardItem[] = [
  {
    title: "Runtime controls",
    body: "Set thresholds for escalation, pacing, confidence, tone adaptation, and reduced-adaptation modes.",
    icon: CircuitBoard
  },
  {
    title: "Agent stack compatibility",
    body: "Designed to sit beside existing model providers, orchestration frameworks, CRMs, support systems, and product telemetry.",
    icon: Workflow
  },
  {
    title: "Privacy modes",
    body: "Configure edge-tokenized, enterprise-retained, or minimal telemetry modes by deployment requirement.",
    icon: ShieldCheck
  },
  {
    title: "Outcome feedback",
    body: "Connect completion, escalation, retention, satisfaction, and recovery signals back into the improvement loop.",
    icon: Database
  }
];

export const researchPillars: CardItem[] = [
  {
    title: "Emotional state prediction",
    body: "Model uncertainty around frustration, trust, overload, and disengagement instead of forcing brittle emotion labels.",
    icon: HeartPulse
  },
  {
    title: "Preference drift",
    body: "Study how human preferences change within a session as context, confidence, and interaction quality shift.",
    icon: Activity
  },
  {
    title: "Consent-first datasets",
    body: "Create collection protocols that make modality, retention, deletion, and audit boundaries visible by design.",
    icon: ShieldCheck
  },
  {
    title: "Human-agent evaluation",
    body: "Measure whether adaptive policies improve outcomes without increasing false adaptation or manipulation risk.",
    icon: FileText
  }
];

export const useCases: CardItem[] = [
  {
    title: "Enterprise customer experience",
    body: "Help support agents detect frustration earlier, escalate at the right moment, and avoid cold transactional loops.",
    icon: Building2
  },
  {
    title: "Digital health and adaptive coaching",
    body: "Support sensitive interactions where pacing, uncertainty, encouragement, and handoff timing matter.",
    icon: HeartPulse
  },
  {
    title: "Interactive entertainment",
    body: "Give companions and characters a runtime understanding of trust, engagement, hesitation, and session momentum.",
    icon: Sparkles
  },
  {
    title: "Education and learning support",
    body: "Adapt explanations when learners show confusion, overload, repeated corrections, or rising confidence.",
    icon: Brain
  }
];

export const investorMoats: CardItem[] = [
  {
    title: "Data moat",
    body: "Human-agent interaction data becomes more valuable as deployments generate outcome-linked examples across industries.",
    icon: Database
  },
  {
    title: "Model moat",
    body: "Emotion-drift and preference-state models improve with longitudinal context, not isolated sentiment snapshots.",
    icon: Brain
  },
  {
    title: "Runtime moat",
    body: "Adaptive policies become embedded in agent stacks as teams tune escalation, timing, and response controls around Chaorda.",
    icon: Zap
  },
  {
    title: "Privacy moat",
    body: "Consent architecture, tokenization, and audit workflows make sensitive human understanding deployable in enterprise environments.",
    icon: ShieldCheck
  }
];

export const metrics = [
  { value: "<50ms", label: "target runtime decision latency" },
  { value: "4", label: "initial signal families" },
  { value: "0 raw", label: "biometric storage target" },
  { value: "AA", label: "accessibility baseline" }
];

export const typescriptSnippet = `import { Chaorda } from "@chaorda/runtime";

const runtime = Chaorda.initialize({
  apiKey: process.env.CHAORDA_API_KEY,
  product: "support-agent",
  privacyMode: "edge-tokenized",
  adaptation: {
    emotionalStatePrediction: true,
    preferenceDrift: true,
    escalationThreshold: 0.74
  }
});

const policy = await runtime.predictHumanState({
  sessionId: "session_91d",
  userMessage: "I'm fine. Just send the result.",
  interactionSignals: {
    pacing: "erratic",
    textInflection: "compressed",
    correctionCount: 3
  }
});

agent.respond({ strategy: policy.responseStrategy });`;

export const pythonSnippet = `from chaorda import Runtime

runtime = Runtime(
    api_key=os.environ["CHAORDA_API_KEY"],
    product="support-agent",
    privacy_mode="edge-tokenized",
)

policy = runtime.predict_human_state(
    session_id="session_91d",
    user_message="I'm fine. Just send the result.",
    interaction_signals={
        "pacing": "erratic",
        "text_inflection": "compressed",
        "correction_count": 3,
    },
)

agent.respond(strategy=policy.response_strategy)`;

export const faqs = [
  {
    question: "Is Chaorda a chatbot product?",
    answer:
      "No. Chaorda is an infrastructure and runtime layer that helps existing AI agents understand human state and adapt behavior."
  },
  {
    question: "Does Chaorda read emotions without consent?",
    answer:
      "No. The product architecture centers explicit consent, modality controls, privacy-preserving telemetry, and enterprise audit trails."
  },
  {
    question: "What is the first product wedge?",
    answer:
      "Real-time emotional state prediction for AI agents, exposed through an adaptive runtime SDK."
  }
];
