# Product Requirements Document (PRD)

## Document Control
* **Title:** Chaorda Corporate Website & Developer Platform
* **Product Version:** 2.0 (Rebrand: AI Education to Human Emotion Prediction Infrastructure)
* **Status:** Draft / Ready for Engineering Review
* **Author:** Product Strategy Lead
* **Target Release Date:** Q3 2026

---

## 1. Executive Summary & Pivot Paradigm

### 1.1 Vision Statement
Chaorda is transitioning from an AI education company into a deeply technical, frontier AI startup building the emotional intelligence (EQ) infrastructure for the next generation of artificial intelligence. The new corporate website must signal this transformation to institutional venture capitalists, enterprise product buyers, and machine learning engineers. 

The digital storefront must establish that Chaorda does not build simple chatbots; it develops the underlying neural architectures, real-time predictive runtimes, and proprietary multimodal preference data assets required to give AI agents true emotional resonance and predictive empathy.

### 1.2 Core Positioning Strategy
* **The Problem:** Current Foundation Models and LLMs are emotionally blind. They parse semantic meaning but completely miss the non-verbal, physical, and micro-behavioral preference cues that dictate true human alignment, leading to rigid, transactional, and low-retention agent interactions.
* **The Solved State:** Chaorda captures dynamic, multi-channel user preference data (vocal tone, micro-expressions, interactive pacing, text inflection) to predict real-time human emotional states and drive hyper-adaptive AI agent systems.
* **Primary Value Proposition:** *The Emotional Layer of Artificial Intelligence.* We provide the real-time infrastructure to transform conversational interfaces into empathetic, hyper-aligned partners.

### 1.3 Strategic Industry Benchmarks
* **OpenAI:** For technical authority, clean layout density, and prominent API/Research launch structure.
* **Anthropic:** For intellectual depth, academic rigor, trust framing, and humanistic typography.
* **Runway:** For immersive, premium dark aesthetics and immediate, unassailable visual proof of complex multimodal model capabilities.

---

## 2. Target Persona Profiles

### 2.1 Persona 1: The Tier-1 Institutional Investor (The VC)
* **Objectives:** Identify foundational infrastructure plays; evaluate technical moats, data defensibility, team credibility, and scalability.
* **Core Question:** *"Is this a thin wrapper or a defensible frontier layer with a proprietary data flywheel?"*
* **Platform Path:** Home $ightarrow$ Investor Narrative Summary $ightarrow$ Research & Dataset Architecture $ightarrow$ Request Private Data Room Access.

### 2.2 Persona 2: The Enterprise Product Architect (The Buyer)
* **Objectives:** Integrate high-retention, empathetic features into existing commercial agent products (e.g., customer service systems, digital health coaches, immersive gaming companion frameworks).
* **Core Question:** *"Is the SDK stable, latency-optimized, secure, and easily integrated into our existing agent stacks?"*
* **Platform Path:** Home $ightarrow$ Technology Stack Breakdown $ightarrow$ API Documentation / SDK Quickstart $ightarrow$ Sandbox API Token Generation.

### 2.3 Persona 3: The Applied ML Research Engineer (The Recruit / Advocate)
* **Objectives:** Evaluate the technical integrity of the underlying model weights, data collection ethics, and optimization layers.
* **Core Question:** *"Are they solving a novel architecture problem at scale under ethical, privacy-first parameters?"*
* **Platform Path:** Home $ightarrow$ Research Papers $ightarrow$ Model Architecture Specs $ightarrow$ Careers Dashboard.

---

## 3. High-Level Information Architecture (Sitemap)

The platform structural flow is divided into a three-funnel architecture to address all key personas seamlessly:

```
[Main Navigation Bar]
 ├── Technology
 │    ├── Multimodal Ingestion Layer
 │    ├── Chaorda-EQ Neural Architecture
 │    └── Empathetic Agent Runtime SDK
 ├── Solutions
 │    ├── Enterprise Customer Experience
 │    ├── Digital Health & Adaptive Coaching
 │    └── Interactive Entertainment & Companions
 ├── Research & Privacy
 │    ├── Dataset Flight Control & Moat Flywheel
 │    └── Ethical Alignment & Consent Protocols
 └── Company
      ├── About Us (The Pivot Story)
      └── Investor Relations & Secure Data Room
```

---

## 4. Epic & Feature Requirements

### Epic 1: The Immersive Homepage Experience (Conversion Hub)
* **FR-1.1: WebGL "Emotional Ambient" Hero Canvas**
    * *Description:* The top section must feature an interactive, real-time WebGL mesh simulation that represents the machine perception of human emotion.
    * *Behavior:* The mesh must respond subtly to scroll speed, cursor acceleration, and user hover paths. It transitions smoothly from structured geometric states (representing analytical reasoning) to fluid, soft radial movements (representing emotional alignment).
    * *Technical Constraint:* Must be written in vanilla WebGL or optimized Three.js. Strict performance budget: < 1.5MB total asset size, target 60fps on modern mobile and desktop browsers. No client-side heavy computing that causes frame drops.
* **FR-1.2: Split-Screen Behavioral Validation Block**
    * *Description:* A direct comparison element showing the structural superiority of Chaorda over vanilla LLMs.
    * *Left Panel:* Displays static text input representing a typical tone-deaf AI system outputting cold, transactional data.
    * *Right Panel:* Displays Chaorda’s processing pipeline. Visualizes fake telemetry data (Vocal Tone Shift: -12%, Facial Tension Index: High, Inter-keystroke Pacing: Erratic) and outputs a deeply contextualized, adaptive empathetic agent response.

### Epic 2: The Technical Infrastructure & SDK Documentation
* **FR-2.1: The Three-Tier Architectural Interactive Map**
    * *Description:* A technical stack explorer that breaks down our proprietary core layers.
    * *Tier 1: Multimodal Ingestion Layer:* Explains how unstructured audio, video vectors, and telemetry are synthesized.
    * *Tier 2: Chaorda-EQ Foundation Weights:* Visualizes our proprietary fine-tuning layers optimized for psychological sentiment and emotional drift prediction.
    * *Tier 3: Empathetic Agent Runtime SDK:* Showcases a live code snippet block.
* **FR-2.2: Dual-Tab Interactive Developer Playground Block**
    * *Description:* An embedded code execution preview block showing how simple it is to deploy a Chaorda Agent.
    * *Features:* Tab toggle between `TypeScript` and `Python`. Includes a copy-to-clipboard button and tooltips explaining variables like `chaorda.initializeAgent({ emotionalAwareness: true })`.

### Epic 3: The Data Flywheel & Investor Narrative Hub
* **FR-3.1: The Defensive Moat Visualization**
    * *Description:* A stylized interaction chart proving the scale and compound value of our data capture loop.
    * *Narrative Path:* Visualizes the virtuous circle: More interactions generate proprietary multimodal preference datasets $ightarrow$ updates model accuracy $ightarrow$ drives enterprise agent retention $ightarrow$ unlocks larger market shares.
* **FR-3.2: Secure Investor Data Room Request Engine**
    * *Description:* A secure gateway for institutional venture capitalists looking to verify our series metrics.
    * *Fields:* Full Name, Fund Name, Corporate Email Address, LinkedIn Profile URL, Check Size Appetite, NDA Electronic Signature Checkbox.
    * *Integration:* Must automatically route data to the CRM platform and trigger an internal Slack alert to the executive team for manual approval.

### Epic 4: The Ethical Frontier & Privacy Dashboard
* **FR-4.1: The Explicit Consent Manifesto**
    * *Description:* Because emotion tracking is highly sensitive, Chaorda must position itself as an industry leader in biometric data privacy.
    * *Features:* Clear, cryptographic zero-knowledge proof (ZKP) processing visualization, showcasing that user emotional telemetry is tokenized locally on the edge and never stored as raw visual/audio recordings on centralized servers.

---

## 5. Non-Functional Requirements (NFRs)

### 5.1 Performance & Core Web Vitals
* **LCP (Largest Contentful Paint):** $\leq$ 1.2 seconds on broadband; $\leq$ 2.4 seconds on mid-tier 4G mobile devices.
* **FID (First Input Delay):** $\leq$ 50 milliseconds across all interactive components.
* **CLS (Cumulative Layout Shift):** Absolute score of 0.00. No dynamic asset loading should shift textual elements or CTA paths.

### 5.2 Accessibility (WCAG 2.2 AA Compliance)
* **Contrast Ratios:** Text to background contrast must maintain a minimum ratio of 4.5:1. Essential graphical boundaries must maintain a 3:1 ratio.
* **Keyboard Navigation:** Every element, including code selectors, interactive pipeline diagrams, and form dropdowns, must be completely operable using standard keyboard focus states.

### 5.3 Security & Infrastructure Compliance
* **Hosting Architecture:** High-availability edge hosting via global networks (e.g., Vercel Edge Network or AWS CloudFront).
* **Encryption Standards:** HTTPS enforcement via TLS 1.3. All private data room lead generation submissions must be encrypted at rest using AES-256 protocols.

---

## 6. Visual Direction & Design Tokens

The visual style is characterized as **Humanistic Neo-Brutalism**—fusing structural engineering authority with soft, organic psychological presence.

### 6.1 Color Architecture
* **Surface Grounding Layer:** Rich, dark charcoal slate (`#121212`) or soft academic off-white (`#FDFDFB`). Stark pure whites and glowing blue neon tones are explicitly banned to prevent looking like standard SaaS wrappers.
* **The Ambient Accents:** Deep Amethyst Purple (`#4B0082`) and Warm Liquid Amber (`#FFBF00`). These accents are rendered as soft, dynamic, blurred radial gradients moving smoothly in the background layer to indicate emotional presence.

### 6.2 Typography Paradigm
* **Primary Technical Headings:** Bold, structured neo-grotesque sans-serif (`PP Neue Montreal` or `Inter Tight`). Designed to project cutting-edge algorithmic authority and infrastructure scaling power.
* **Secondary Context / Editorial Quotes:** Sharply tracked, premium, elegant serif typeface (`Ogg` or `Untitled Serif`). Designed to mirror Anthropic’s human-aligned, safe, and elite academic tone.

---

## 7. Metrics & Analytics Framework

To validate the success of the rebranded platform, the following key performance indicators (KPIs) will be tracked post-launch:

| Metric | Business Target | Measurement Tool | Target Audience Group |
| :--- | :--- | :--- | :--- |
| **Developer Interaction Rate** | 15% click-through rate on code blocks or Playground toggles. | PostHog / Segment | Enterprise Engineers / Tech Architects |
| **Data Room Qualification Rate** | $\geq$ 4% of total Company page visits convert to qualified VC leads. | HubSpot CRM Analytics | Institutional Investors |
| **Page-1 Scroll Depth Index** | 65% of unique homepage visitors reach Section 4 (The Data Flywheel). | Hotjar Heatmaps | General Traffic / All Personas |
| **Average Global Page Latency** | FCP achieved under 800ms worldwide. | Vercel Analytics / Datadog | All Personas |
