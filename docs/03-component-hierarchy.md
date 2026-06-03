# Component Hierarchy

## Application Shell

```text
RootLayout
├── SiteHeader
│   ├── BrandMark
│   ├── DesktopNav
│   ├── MobileNav
│   └── HeaderCTA
├── PageContent
└── SiteFooter
    ├── FooterBrand
    ├── FooterNavColumns
    ├── PolicyLinks
    └── SocialLinks
```

## Shared Page Components

```text
PageHero
├── Eyebrow
├── Title
├── Lead
├── CTAGroup
└── OptionalHeroVisual

SectionHeader
├── Eyebrow
├── Heading
└── SupportingText

ProofMetricGrid
├── ProofMetricCard
└── MetricFootnote

ContentBand
├── SectionHeader
└── SlotContent

CTASection
├── Heading
├── Body
└── CTAGroup
```

## Homepage Components

```text
HomePage
├── EmotionalAmbientHero
│   ├── WebGLCanvas
│   ├── HeroCopy
│   ├── SignalLegend
│   └── HeroCTAGroup
├── BehavioralValidationBlock
│   ├── VanillaLLMPanel
│   └── ChaordaRuntimePanel
├── ArchitecturePreview
│   └── ArchitectureLayerCard[]
├── SDKPreview
│   ├── CodeTabs
│   ├── CodeBlock
│   └── CopyButton
├── DataFlywheelPreview
├── PrivacyPreview
└── PersonaCTAGroup
```

## Technology Components

```text
TechnologyPage
├── ArchitectureMap
│   ├── LayerNode[]
│   └── DataFlowConnector[]
├── SignalProcessingTimeline
├── ModelArchitecturePanel
├── RuntimeSDKPanel
├── LatencyBudgetTable
└── SecurityProtocolGrid
```

## Research Components

```text
ResearchPage
├── ResearchPillarGrid
├── EmotionDriftModelDiagram
├── DatasetFlightControlPanel
├── EvaluationMatrix
├── ConsentProtocolExplainer
└── PublicationList
```

## Platform Components

```text
PlatformPage
├── SDKQuickstart
│   ├── LanguageTabs
│   ├── CodeBlock
│   └── CopyButton
├── RuntimeControlsGrid
├── APIModelExplorer
├── SandboxTokenForm
├── IntegrationChecklist
└── DeveloperFAQ
```

## Investors Components

```text
InvestorsPage
├── InvestorThesisHero
├── MarketTimingPanel
├── MoatStack
├── DataFlywheelDiagram
├── MetricsPlaceholderGrid
├── PrivacyAdvantagePanel
├── DataRoomRequestForm
└── InvestorFAQ
```

## Form Components

```text
FormShell
├── TextInput
├── SelectInput
├── TextArea
├── Checkbox
├── PrivacyNotice
├── SubmitButton
└── SubmissionState
```

## Benchmark Alignment

- OpenAI: component system supports editorial cards, news/research feeds, and dense footer navigation.
- Anthropic: research, commitments, and trust components are reusable across pages.
- Perplexity: forms, FAQ, security, and product proof components support enterprise conversion.
- Runway: hero visual and architecture diagrams provide premium technical presence.

