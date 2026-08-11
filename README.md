# Sneha Gupta's Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode toggle, GitHub API integration, smooth animations, and full mobile-first responsiveness.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with smooth gradients and animations
- **Fully Responsive**: Mobile-first approach, optimized for all screen sizes
- **Dark Mode**: System preference detection with manual toggle persistence
- **GitHub Integration**: Live fetching of public repositories with fallback handling
- **Smooth Animations**: Scroll-reveal effects using Framer Motion
- **SEO Optimized**: Structured metadata, Open Graph, and Twitter cards
- **Performance**: Fast loading, optimized images, and efficient rendering
- **Accessible**: WCAG compliant with proper ARIA labels and focus management
- **Error Boundaries**: Graceful error handling with fallback content

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15+ with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Modules
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: Emoji + Heroicons concepts
- **API**: GitHub REST API (client-side)

## 📁 Project Structure

```
new portfolio/
├── .github/
│   └── copilot-instructions.md
├── .gitignore
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main page with all sections
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills grid
│   │   ├── Projects.tsx        # GitHub projects
│   │   ├── Achievements.tsx    # Achievements/milestones
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── ThemeToggle.tsx     # Dark mode toggle
│   │   └── ErrorBoundary.tsx   # Error handling
│   ├── hooks/
│   │   └── useGithubRepos.ts   # GitHub API hook
│   ├── utils/
│   │   └── constants.ts        # Content configuration
│   └── styles/
│       └── (CSS modules as needed)
├── public/                      # Static assets
├── .eslintrc.json
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new\ portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your portfolio** (Optional)
   Edit `src/utils/constants.ts` to customize:
   - Personal information
   - About content
   - Skills
   - Achievements
   - Fallback projects

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization Guide

### Update Your Information
Edit `src/utils/constants.ts`:

```typescript
export const PORTFOLIO_CONFIG = {
  name: "Your Name",
  title: "Your Title",
  github: "your-github-username",
  linkedin: "your-linkedin-id",
  email: "your-email@example.com",
  // ... more config
};
```

### Modify About Section
Update `ABOUT_CONTENT` in `constants.ts`:

```typescript
export const ABOUT_CONTENT = {
  heading: "About Me",
  paragraphs: [
    "Your bio paragraph 1...",
    "Your bio paragraph 2...",
    // Add more paragraphs as needed
  ],
};
```

### Add Skills
Update the `SKILLS` array in `constants.ts`:

```typescript
export const SKILLS = [
  { category: "Your Category", skills: ["Skill1", "Skill2", "Skill3"] },
  // Add more skill categories
];
```

### Add Achievements
Update the `ACHIEVEMENTS` array in `constants.ts`:

```typescript
export const ACHIEVEMENTS = [
  {
    title: "Achievement Title",
    description: "Description",
    date: "2024",
  },
  // Add more achievements
];
```

## 🎨 Customizing Design

### Colors
Edit `tailwind.config.ts` to customize color palette:
- `primary`: Purple gradient (default)
- `secondary`: Blue gradient (default)

### Animations
Animations are defined in `src/app/globals.css` and `tailwind.config.ts`. Modify keyframes or durations as needed.

### Fonts
Add custom fonts in `src/app/layout.tsx` or `tailwind.config.ts`.

## 🔧 Building & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
The project is optimized for any Node.js hosting platform (Netlify, GitHub Pages, Railway, etc.).

## 📊 Performance Optimizations

- Image optimization with Next.js Image component
- CSS and JS minification
- Code splitting and lazy loading
- Font optimization with system fonts
- Caching strategies via headers

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Focus management
- Error boundary recovery

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### GitHub API Rate Limit
If you hit the rate limit (60 requests/hour), the site automatically falls back to `FALLBACK_REPOS`. To increase the limit:
- Use a GitHub Personal Access Token (add to fetch headers)
- Implement server-side API route to cache responses

### Dark Mode Not Working
- Ensure `next-themes` is installed: `npm install next-themes`
- Check that `ThemeProvider` wraps your app in `layout.tsx`

### Projects Not Loading
- Check browser console for API errors
- Verify GitHub username in `constants.ts`
- Check GitHub API status

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

Feel free to fork, modify, and customize this portfolio for your use. If you find this template helpful, consider giving it a star! ⭐

## 📞 Contact

- **GitHub**: [github.com/snehagupta250904](https://github.com/snehagupta250904)
- **LinkedIn**: [linkedin.com/in/sneha-gupta-867288317](https://www.linkedin.com/in/sneha-gupta-867288317/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
