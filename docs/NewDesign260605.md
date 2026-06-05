# New Design Strategy: Dark Mode & Scale-inspired Dynamic Interaction (2026-06-05)

## 1. Visual Identity Overhaul: Dark Mode Priority

현재의 화이트/라이트 그레이 톤 중심에서 벗어나, Scale.ai 및 Palantir와 같은 프리미엄 엔터프라이즈 AI 느낌을 주기 위해 **다크 모드(Dark Mode)**를 기본 테마로 설정합니다.

### 🎨 Color Palette Reconfiguration
- **Primary Background:** `#0A0A0A` (Deep Black)
- **Primary Text:** `#FFFFFF` (Pure White) / `#FDFDFB` (Porcelain)
- **Secondary Text:** `rgba(255, 255, 255, 0.6)` (Muted White)
- **Accent Color:** `#FFBF00` (Amber) - 기존의 기술적 신뢰도 강조 색상 유지
- **Inverted Section (Light):** `#FDFDFB` (Porcelain) 배경에 `#121212` (Ink) 텍스트

### 🔄 Section Alternation Logic
- **2:1 Dark-to-Light Rhythm:** 연속된 2개의 다크 섹션 뒤에 1개의 라이트 섹션을 배치하여 시각적 지루함을 방지하고 핵심 정보를 강조합니다.
- **Previous Inversion:** 기존에 `bg-ink` (검정 배경)였던 섹션은 이제 라이트 배경으로 반전시켜 디자인의 일관성을 유지합니다.

---

## 2. Investor Page: Scale.ai Style Dynamic Animations

Scale.com의 특징인 "스크롤에 따른 섹션 간 유기적 연결 및 동적 움직임"을 Investor 페이지에 적용합니다.

### 🎢 Key Animation Concepts
1. **Scroll-Linked Sticky Sections:**
   - 특정 섹션이 스크롤될 때 배경은 고정(Sticky)되어 있고, 텍스트나 카드가 위로 겹쳐지며 나타나는 효과.
   - 섹션 전환 시 배경색이 자연스럽게 변하는 그라데이션 트랜지션.

2. **Framer Motion Viewport Interaction:**
   - `whileInView`를 사용하여 요소가 화면에 들어올 때 `y: 0, opacity: 1` 뿐만 아니라 `scale`, `rotate` 등을 미세하게 조정하여 생동감 부여.
   - 각 카드 요소에 `staggerChildren`을 적용하여 순차적 등장 효과 극대화.

3. **Parallax Typography:**
   - 배경의 큰 타이포그래피나 기술적 그래픽이 스크롤 속도보다 느리게 움직여 공간감을 형성.

### 📍 Investor Page Implementation Plan
- **Hero Section:** 배경에 미세한 입자(Particles)나 그리드 애니메이션 배치. 스크롤 시 타이틀이 서서히 작아지며 다음 섹션으로 부드럽게 연결.
- **Institutional Validation (KPIs):** 숫자가 올라가는 카운팅 애니메이션과 함께 스크롤 시 카드가 좌우에서 중앙으로 모이는 연출.
- **Roadmap Section:** 수직 타임라인이 스크롤에 따라 그려지는 드로잉 애니메이션 적용.

---

## 3. Detailed Component Adjustments

### 🛠 UI Components
- **Site Header:** 다크 모드에 맞춰 투명도와 블러(Glassmorphism) 효과를 재조정.
- **CardGrid:** 기존의 경계선(Boundary) 중심 디자인에서 그림자와 빛(Glow) 효과를 활용한 심도 있는 디자인으로 변경.
- **Section Component:** `theme` prop을 추가하여 `dark` (default)와 `light` (inverted)를 손쉽게 전환할 수 있도록 구조 개선.

---

## 4. Next Steps (Implementation)

1. `tailwind.config.ts` 및 `globals.css`의 기본 색상 시스템을 다크 모드 중심으로 업데이트.
2. `Section` 컴포넌트에 테마 전환 로직 추가.
3. Framer Motion 라이브러리를 적극 활용하여 `investors/page.tsx`의 각 섹션에 동적 인터랙션 적용.
4. 2:1 비율에 맞춘 섹션 배경색 재배치.
