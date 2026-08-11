# Sneha Gupta's Portfolio Website - Copilot Instructions

## Project Overview
A modern, responsive Next.js portfolio website for a B.Tech final-year engineering student specializing in AI and Python development. Features dark mode toggle, GitHub API integration, smooth animations, and full mobile-first responsiveness.

## Key Requirements
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS + custom CSS modules for animations
- **Theme**: Modern dark theme (default) with light mode option
- **Features**:
  - Hero section with LinkedIn/GitHub links
  - About section with professional bio
  - Skills grid (Python, MySQL, Git, AI tools)
  - Projects fetched live from GitHub API
  - Achievements/Hackathons placeholder
  - Dark mode toggle with system preference detection
  - Smooth scroll-reveal animations
  - Full SEO optimization
  - Error boundaries for GitHub API failures
  - Fully responsive (mobile-first)
  - Pixel-perfect design with proper spacing and contrast

## Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion (optional) or CSS animations
- **API**: GitHub REST API (client-side fetching)
- **Icons**: Heroicons or React Icons
- **Theme**: next-themes for dark mode

## Project Structure
```
new portfolio/
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ErrorBoundary.tsx
│   ├── hooks/
│   │   └── useGithubRepos.ts
│   ├── utils/
│   │   └── constants.ts
│   └── styles/
│       └── animations.module.css
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Completion Checklist
- [x] Project requirements clarified
- [ ] Next.js project scaffolded
- [ ] Components created (Hero, About, Skills, Projects, Achievements, Footer, ThemeToggle)
- [ ] GitHub API integration implemented
- [ ] Dark mode toggle with persistence
- [ ] Scroll animations and effects
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] SEO optimized (metadata, structured data)
- [ ] Error handling and boundaries
- [ ] Performance optimized (lazy loading, image optimization)
- [ ] Production build tested
- [ ] README and documentation complete

## Important Notes
- GitHub API fetch has a rate limit (60 requests/hour for unauthenticated). Add graceful fallback with static repo list if needed.
- All content is editable via component props or constants.ts file
- Dark mode preference persists in localStorage
- Mobile-first responsive design using Tailwind breakpoints
- Animations are subtle and professional, not distracting

## Run Commands
```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Production server
npm start

# Lint and format
npm run lint
```
