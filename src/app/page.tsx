"use client";

import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";

/**
 * Home Page Component
 * Main entry point for the portfolio website
 * Composes all sections into a single-page experience
 */
export default function Home() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      {/* Fixed Theme Toggle */}
      <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Footer />
      </main>

      {/* Scroll to top button */}
      <ScrollToTop />
    </>
  );
}

/**
 * Scroll to Top Button Component
 * Appears when user scrolls down, returns to top on click
 */
function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("scroll-to-top");
      if (!button) return;

      if (window.scrollY > 300) {
        button.classList.remove("opacity-0", "pointer-events-none");
        button.classList.add("opacity-100");
      } else {
        button.classList.add("opacity-0", "pointer-events-none");
        button.classList.remove("opacity-100");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 z-40 rounded-lg bg-primary-600 p-3 text-white transition hover:bg-primary-700 opacity-0 pointer-events-none sm:right-6"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
