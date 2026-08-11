import type { Metadata, Viewport } from "next";
import { PORTFOLIO_CONFIG } from "@/utils/constants";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: `${PORTFOLIO_CONFIG.name} | ${PORTFOLIO_CONFIG.title}`,
  description: PORTFOLIO_CONFIG.description,
  keywords: [
    "B.Tech",
    "Engineering",
    "AI",
    "Python",
    "Software Engineer",
    "Portfolio",
    "Sneha Gupta",
  ],
  authors: [{ name: PORTFOLIO_CONFIG.name }],
  creator: PORTFOLIO_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sneha-portfolio.vercel.app", // Update with your domain
    siteName: `${PORTFOLIO_CONFIG.name}'s Portfolio`,
    title: `${PORTFOLIO_CONFIG.name} | ${PORTFOLIO_CONFIG.title}`,
    description: PORTFOLIO_CONFIG.description,
    images: [
      {
        url: "https://og-image.vercel.app/**Sneha%20Gupta**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg",
        width: 1200,
        height: 630,
        alt: PORTFOLIO_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@snehagupta", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://api.github.com" />
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23a855f7'>S</text></svg>" />
      </head>
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50">
        <ThemeProviderWrapper>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
