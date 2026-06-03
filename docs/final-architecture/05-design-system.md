# Design System

## Design Thesis

The design system should make Chaorda feel like an infrastructure company for the human layer of AI: precise, calm, technical, and trustworthy.

The visual language should not imitate a general AI lab or a consumer AI app. It should make invisible human-agent signals legible without making the company feel like a surveillance product.

## Design Principles

1. Infrastructure first.
2. Human, not sentimental.
3. Technical, not cold.
4. Trustworthy before spectacular.
5. Motion explains signal behavior.
6. Privacy is visible in the product language.
7. Category clarity beats visual novelty.

## Visual Personality

| Attribute | Direction |
| --- | --- |
| Overall | Calm technical authority |
| Human layer | Warm, precise, restrained |
| Motion | Signal-field behavior, not cinematic spectacle |
| Typography | Clear infrastructure-grade sans with selective editorial serif |
| Layout | Spacious, gridded, direct |
| Trust | Consent and privacy shown through system diagrams |

## Color Tokens

| Token | Hex | Role |
| --- | --- | --- |
| Ink | `#121212` | Primary text, dark surfaces |
| Graphite | `#1D1D1B` | Technical panels |
| Porcelain | `#FDFDFB` | Primary page background |
| Paper | `#F7F5EF` | Warm secondary background |
| Signal Amethyst | `#4B0082` | Human-state signal accent |
| Consent Amber | `#FFBF00` | Consent, active state, verified controls |
| Trust Moss | `#6E7D56` | Privacy, research, ethics |
| Human Clay | `#B66B48` | Warmth, human context |
| Boundary | `#D8D3C7` | Lines and separators |
| Muted Text | `#5F5A52` | Secondary copy |

## Color Rules

- Avoid bright SaaS blue as a primary accent.
- Avoid neon gradients.
- Avoid a one-note purple identity.
- Use amethyst as a signal accent, not a full brand wash.
- Use amber to indicate consent, verification, and active controls.
- Use moss for privacy and research trust.

## Typography

Primary:

- Inter, Inter Tight, or licensed PP Neue Montreal equivalent.
- Use for navigation, headings, body, forms, tables, and technical surfaces.

Secondary:

- Editorial serif such as Ogg, Untitled Serif, or Georgia fallback.
- Use only for short strategic lines, research quotes, and company manifesto copy.

Rules:

- No negative letter spacing.
- No viewport-based font scaling.
- Use compact technical headings inside dense UI surfaces.
- Reserve large type for page heroes only.

## Layout System

| Element | Rule |
| --- | --- |
| Max content width | 1200-1280px |
| Mobile gutters | 24px |
| Tablet gutters | 40px |
| Desktop gutters | 64px |
| Section spacing | 72px mobile, 112px desktop |
| Card radius | 8px maximum |
| Grid | 12 columns desktop, 6 tablet, 4 mobile |

## UI Surfaces

Use cards only for:

- Repeated items
- Forms
- Code blocks
- Metric modules
- Diagram nodes
- FAQ items

Do not use cards for full page sections.

## Motion System

Motion should communicate signal change:

- State drift
- Confidence change
- Consent activation
- Runtime adaptation
- Data flowing through infrastructure layers

Rules:

- Respect `prefers-reduced-motion`.
- Keep transitions under 250ms for UI controls.
- Use slower ambient motion only for hero signal fields.
- Pause offscreen animations.
- Do not use decorative background blobs.

## Accessibility

- Target WCAG 2.2 AA.
- Text contrast minimum: 4.5:1.
- Graphical boundaries minimum: 3:1.
- Every diagram must have a text equivalent.
- Every interactive control must be keyboard accessible.
- Do not communicate state through color alone.

## Imagery And Visual Systems

Primary visual mode:

- Abstract but readable signal diagrams.
- Human-agent interaction flows.
- Runtime and data architecture maps.
- Consent and privacy processing diagrams.

Avoid:

- Stock photos of people looking emotional.
- Therapy-style wellness imagery.
- Surveillance camera imagery.
- Generic robot/human handshake visuals.
- Cinematic AI spectacle disconnected from product proof.

