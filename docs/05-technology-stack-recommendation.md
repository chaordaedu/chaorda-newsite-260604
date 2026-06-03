# Technology Stack Recommendation

## Recommended Stack

| Layer | Recommendation | Rationale |
| --- | --- | --- |
| Framework | Next.js 15 | Production App Router, strong routing, metadata, server rendering, Vercel alignment |
| Language | TypeScript | Required for SDK-like UI, form models, reusable content systems |
| Styling | Tailwind CSS | Fast design-token implementation and responsive consistency |
| Routing | App Router | File-based pages, layouts, metadata, route-level optimization |
| Animation | Framer Motion or CSS-first motion | Use sparingly for premium transitions; CSS first where possible |
| 3D / WebGL | Three.js | Best fit for lightweight hero mesh and signal-field interaction |
| Icons | Lucide React | Clean, accessible icon set for controls and navigation |
| Forms | React Hook Form + Zod | Robust typed validation for investor and contact workflows |
| CRM | HubSpot or Salesforce | PRD requires lead routing and CRM capture |
| Alerts | Slack webhook via server route | Trigger internal review alerts for investor requests |
| Analytics | PostHog + Vercel Analytics | Funnel, scroll depth, playground interaction, Core Web Vitals |
| Hosting | Vercel Edge Network | Strong fit for Next.js and global edge delivery |
| Security | TLS 1.3, encrypted storage, server-only form handling | Required for sensitive investor and contact workflows |

## Architecture Recommendation

```text
Next.js App Router
├── Server-rendered marketing pages
├── Client-only interactive components
│   ├── WebGL hero
│   ├── Code playground tabs
│   └── Diagram interactions
├── Server actions or API routes
│   ├── Contact submission
│   ├── Investor data-room request
│   ├── CRM integration
│   └── Slack alert
└── Analytics instrumentation
    ├── Scroll depth
    ├── CTA clicks
    ├── Code copy events
    └── Form conversion events
```

## Performance Strategy

- Keep the first page payload small.
- Load Three.js only inside the hero client component.
- Respect `prefers-reduced-motion` and pause intensive animation when offscreen.
- Avoid large image dependencies unless they directly support product proof.
- Use server-rendered text for all key SEO and accessibility content.

## Security Strategy

- Never send investor form payloads directly from browser to third-party APIs.
- Use server route or server action as the controlled boundary.
- Encrypt sensitive submissions at rest.
- Add bot protection before production launch.
- Include audit trail for data-room approvals.

## Benchmark Alignment

- OpenAI: Next.js-style server-rendered editorial/product pages fit the clean content model.
- Anthropic: strong static/research content benefits from accessible, server-rendered pages.
- Perplexity: enterprise forms, security claims, FAQ, and analytics require typed validation and conversion tracking.
- Runway: Three.js supports immersive proof while keeping the app production-friendly.

