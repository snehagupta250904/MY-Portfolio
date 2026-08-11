"use client";

import { ThemeProvider } from "next-themes";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

/**
 * Theme Provider Wrapper Component
 * Wraps next-themes ThemeProvider as a client component
 * Allows use of theme functionality in the entire app
 */
export default function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}
