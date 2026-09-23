# Vuvuzela DMF 🚀

> **Next-Generation Performance Digital Marketing & Bespoke Web Engineering Agency**

Vuvuzela DMF is a high-converting, performance-driven digital marketing agency web platform. Engineered with a bespoke glassmorphic design system, an interactive ROI forecasting engine, a dynamic Sniro-inspired FAQ accordion, a multi-step project brief generator, and a seamless two-way Light/Dark theme system (with Light theme as default).

---

## ✨ Features

- **🌓 Full Dual-Theme System (Light Mode Default)**:
  - Boots in an ultra-clean Light Theme with deep obsidian typography, crisp card elevations, and subtle borders.
  - Seamless toggle to Dark Theme with radiant border glows and glassmorphism tokens.
  - Instant toggle button mounted in both desktop floating navbar and mobile navigation drawer with `localStorage` persistence.

- **📊 Interactive Growth ROI Calculator**:
  - Real-time monthly revenue and ad spend projection sliders.
  - Dynamic calculations for pipeline return on ad spend (ROAS), customer acquisition cost (CAC) reduction, and payback timeline.

- **❓ Sniro-Inspired FAQ Accordion**:
  - Sleek, centered layout replicating modern accordion mechanics.
  - Circular SVG plus/minus (`+` / `-`) toggle buttons.
  - Smooth dynamic `scrollHeight` animation.
  - Active item transforms into an elevated card with shadow and accent highlight.
  - Accordion auto-collapse logic (only one item active at a time).
  - Open-by-default initial state.

- **📋 "Growth Blueprint" Multi-Step Brief Modal**:
  - Interactive project discovery workflow.
  - Captures target advertising channels, monthly budgets, timeline milestones, and company details.
  - Built-in validation and confirmation flow.

- **💬 Omnichannel Lead Capture & WhatsApp Integration**:
  - Floating speed-to-lead WhatsApp triage widget.
  - Direct strategy call booking CTAs throughout the page.

- **📱 100% Mobile & Tablet Optimized**:
  - Fully responsive glassmorphism navigation bar with animated mobile drawer.
  - Fluid typography, touch-friendly interactive targets, and zero horizontal overflow.

---

## 🛠️ Technology Stack

- **Core**: Vanilla JavaScript (ES Modules) — zero framework overhead.
- **Styling**: Vanilla CSS with modern custom properties (CSS design tokens in `cliste-tokens.css` and utilities in `cliste.css`).
- **Build Tool**: [Vite](https://vitejs.dev/) (blazing-fast bundling and HMR).
- **Icons & Graphics**: Inline SVG vector icons.
- **Package Manager**: [pnpm](https://pnpm.io/) (or npm / yarn).

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `pnpm` (or `npm`) installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github-second:Lekki-BC/vuvuzeladmf.git
cd vuvuzela
pnpm install
```

### Development Server

Start the local Vite development server:

```bash
pnpm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build

Compile and optimize assets for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

---

## 📁 Project Structure

```text
vuvuzela/
├── dist/                      # Compiled production assets
├── public/                    # Static assets & icons
├── src/
│   ├── components/            # Modular UI components
│   │   ├── AITeamSection.js       # Strategic growth architecture & pillars
│   │   ├── AuroraBg.js            # Ambient gradient background effects
│   │   ├── BriefModal.js          # Multi-step onboarding brief modal
│   │   ├── FAQSection.js          # Sniro-inspired FAQ accordion
│   │   ├── GlassmorphismNav.js    # Floating navbar & mobile drawer
│   │   ├── ROICalculatorSection.js# Interactive growth & pipeline calculator
│   │   └── Router.js              # View assembler & component mounter
│   ├── scripts/
│   │   └── theme.js               # Theme state management & event dispatcher
│   ├── styles/
│   │   ├── cliste-tokens.css      # Design tokens (colors, radii, shadows)
│   │   └── cliste.css             # Component stylesheets & animations
│   └── main.js                # App entry point
├── index.html                 # Main HTML template & SEO meta tags
├── package.json
└── README.md
```

---

## 📄 License

Private & Proprietary © Vuvuzela DMF. All rights reserved.
