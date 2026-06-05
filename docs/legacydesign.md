# Legacy Design Specifications (Archived 2026-06-05)

이 문서는 새로운 다크 모드 및 애니메이션 디자인을 적용하기 전의 원본 디자인 사양을 기록합니다. 언제든 이 사양을 바탕으로 원래의 "Institutional & Minimal White" 스타일로 복구할 수 있습니다.

## 1. Core Color Palette (Tailwind Config)
- **Ink (Primary Text):** `#121212`
- **Porcelain (Primary Background):** `#FDFDFB`
- **Paper (Secondary Background):** `#F7F5EF`
- **Boundary (Borders):** `#D8D3C7`
- **Muted (Secondary Text):** `#5F5A52`
- **Moss (Accent - Eyebrows):** `#6E7D56`
- **Amber (Accent - CTA/Highlights):** `#FFBF00`
- **Amethyst:** `#4B0082`

## 2. Typography & Global Styles (globals.css)
- **Base Font:** Inter (Sans-serif)
- **Serif Font:** Georgia / Times New Roman
- **Mono Font:** JetBrains Mono
- **Background:** `#fdfdfb` (Porcelain)
- **Text Color:** `#121212` (Ink)
- **Selection Color:** `rgba(255, 191, 0, 0.35)` (Amber-based)

### Custom CSS Classes
- `.ambient-grid`: 24px 간격의 아주 연한 그리드 배경 (`rgba(18, 18, 18, 0.04)`)
- `.hero-radial`: Porcelain 배경 위에 Amethyst, Amber, Moss 색상의 아주 연한 radial-gradient 중첩
- `.glass-panel`: `bg-porcelain/70` + `backdrop-blur(20px)` + `border-ink/8`
- `.border-grid`: `#d8d3c7` 색상의 상단/좌측 경계선이 있는 그리드 레이아웃

## 3. Component Structures

### SiteHeader
- **Background:** `bg-porcelain/80` with `backdrop-blur-xl`
- **Border:** `border-b border-boundary`
- **Logo:** `bg-ink` 배경에 `text-porcelain` 글자 'C'
- **Navigation:** `text-muted`, 활성화 시 `bg-paper text-ink`

### SiteFooter
- **Background:** `bg-ink`
- **Text:** `text-porcelain`
- **Logo:** `bg-porcelain` 배경에 `text-ink` 글자 'C'

### Section
- **Padding:** `px-6 py-12` (Desktop: `px-16 py-16`)
- **Eyebrow:** `text-[10px] font-bold uppercase tracking-[0.2em] text-moss/80`
- **Title:** `text-2xl` (Desktop: `text-4xl`), `font-semibold`, `text-ink`
- **Body:** `text-sm` (Desktop: `text-base`), `text-current/70`

### PageHero
- **Padding:** `pt-24 pb-10` (Desktop: `pt-32 pb-16`)
- **Title:** `text-4xl` (Desktop: `text-6xl`), `font-semibold`, `leading-[1.1]`

## 4. Layout Logic
- 기본적으로 모든 섹션은 **White/Porcelain** 배경을 사용.
- 강조 섹션(카드 그리드 등)에 `bg-paper/40`을 사용하여 미세한 대비를 줌.
- 최하단 CTA 섹션에만 `bg-ink` (Dark)를 사용하여 마무리.
