import {
  Activity,
  Award,
  Brain,
  Building2,
  CircuitBoard,
  Code2,
  Database,
  FileText,
  Globe,
  HeartPulse,
  LockKeyhole,
  LucideIcon,
  Network,
  Rocket,
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

export const validationKPIs = [
  { value: "3×", label: "Strategic Investments from CNTTECH" },
  { value: "5+", label: "National Innovation Programs Awarded" },
  { value: "Nationally", label: "Recognized Venture" }
];

export const ecosystemValidations: CardItem[] = [
  {
    title: "CNTTECH Strategic Investment",
    body: "Three rounds of strategic investment from CNTTECH, Korea's premier accelerator, validating the technical and market thesis of Chaorda.",
    icon: Building2
  },
  {
    title: "TIPS Program Selection",
    body: "Officially selected for the TIPS Program, South Korea's flagship government-backed technology commercialization and venture acceleration initiative.",
    icon: Award
  },
  {
    title: "Government Innovation Programs",
    body: "Supported through multiple national innovation, commercialization, and market expansion programs.",
    icon: Zap
  },
  {
    title: "Global Expansion Support",
    body: "Selected for government-supported international market development initiatives.",
    icon: Globe
  },
  {
    title: "Pre-TIPS Recognition",
    body: "Recognized for early-stage innovation and commercial potential through national startup support programs.",
    icon: ShieldCheck
  },
  {
    title: "Commercialization Programs",
    body: "Selected for and supported by Korea's most selective startup growth and commercialization acceleration initiatives.",
    icon: Rocket
  }
];

export const proprietaryAssets: CardItem[] = [
  {
    title: "Proprietary AI Engines",
    body: "Advanced internal technology stack developed by senior researchers for high-accuracy human-state prediction.",
    icon: Brain
  },
  {
    title: "Defensible IP",
    body: "Proprietary algorithms and datasets focused on behavioral intelligence and emotional understanding.",
    icon: LockKeyhole
  },
  {
    title: "Monetizable Assets",
    body: "Technological components designed with residual value and cross-industry licensing potential.",
    icon: Database
  },
  {
    title: "Enterprise Value",
    body: "Long-term value creation through the integration of proprietary human context layers into global agent stacks.",
    icon: Building2
  }
];

export const riskMitigation: CardItem[] = [
  {
    title: "Milestone-Based Capital Deployment",
    body: "Funding tied to measurable execution milestones to ensure disciplined resource allocation.",
    icon: Zap
  },
  {
    title: "Structured Governance",
    body: "Regular institutional reporting and oversight to maintain transparency and operational alignment.",
    icon: FileText
  },
  {
    title: "Third-Party Validation",
    body: "Subject to multiple independent investment and government selection processes for rigorous vetting.",
    icon: ShieldCheck
  },
  {
    title: "Diversified Commercialization",
    body: "Risk distribution across enterprise, healthcare, and platform opportunities.",
    icon: Network
  }
];

export const investmentStructures: CardItem[] = [
  {
    title: "Venture Debt",
    body: "Structured lending options with downside-focused economics and clear repayment profiles.",
    icon: Activity
  },
  {
    title: "Convertible Instruments",
    body: "Flexible participation in future value creation through standard institutional instruments.",
    icon: Workflow
  },
  {
    title: "Milestone-Based Drawdowns",
    body: "Capital deployment schedules linked directly to operational progress and value markers.",
    icon: Activity
  },
  {
    title: "Strategic Partnerships",
    body: "Long-term alignment through structured collaboration with institutional investors.",
    icon: Network
  }
];

export const roadmapSteps = [
  { step: "01", title: "Government-Supported R&D", body: "Innovation funding and technical validation." },
  { step: "02", title: "Commercialization", body: "B2B / B2G / Education / Healthcare." },
  { step: "03", title: "Recurring Revenue Expansion", body: "Scale across enterprise platforms." },
  { step: "04", title: "EBITDA-Positive Scale-Up", body: "Sustainable operating cash flow." }
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

export const teamMembers = [
  {
    name: "Chulho Bae",
    role: "CEO / Founder",
    bio: "Korea University. 16 years of Mathematics teaching and 20 years of Cultural/Musical industry experience. Specialized in translating human cognitive patterns and behavioral logic into mathematical frameworks for AI infrastructure.",
    focus: "Behavioral Logic",
    education: "Korea University, Daeil FLHS"
  },
  {
    name: "Hyunsik Yang",
    role: "CTO",
    bio: "AI Scientist, SNU Computer Science. Expert in GPU server management (Samsung DS Course). Published SCIE-level research. Leads the development of real-time state prediction engines and high-performance data pipelines.",
    focus: "AI Infrastructure",
    education: "Seoul National University"
  },
  {
    name: "Jungtae Lee",
    role: "CSO",
    bio: "Georgetown MBA, Korea University. Former Fidelity HQ, Microsoft APAC, Samsung Electronics, and iHeart Radio. Focuses on global strategic partnerships and market entry for human-centric interaction technologies.",
    focus: "Global Strategy",
    education: "Georgetown MBA, Korea University"
  }
];
