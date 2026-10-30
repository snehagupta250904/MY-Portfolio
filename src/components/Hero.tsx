"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_CONFIG } from "@/utils/constants";

/**
 * Hero Section Component
 * Displays name, tagline, and call-to-action buttons
 * Features smooth animations on load
 */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate on scroll
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;

      if (isVisible) {
        containerRef.current.classList.add("animate-fade-in");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary-500 opacity-10 blur-3xl"></div>
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-secondary-500 opacity-10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex w-full flex-col items-center">
          <div className="mb-6 overflow-hidden rounded-full ring-4 ring-white/15">
            <Image
              src="/profile.jpg"
              alt={`${PORTFOLIO_CONFIG.name} profile photo`}
              width={160}
              height={160}
              priority
              className="h-36 w-36 object-cover sm:h-40 sm:w-40"
            />
          </div>
          <div className="mb-6 space-y-4">
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              {PORTFOLIO_CONFIG.name}
            </h1>
            <p className="text-xl text-slate-300 sm:text-2xl">
              {PORTFOLIO_CONFIG.title}
            </p>
          </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-8 max-w-2xl text-base text-slate-400 sm:text-lg">
            I build practical solutions with AI and Python. Passionate about learning,
            coding, and creating impact through technology.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href={PORTFOLIO_CONFIG.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <span className="mr-2">💼</span>
            LinkedIn
          </a>
          <a
            href={PORTFOLIO_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-400 px-8 py-3 font-medium text-slate-300 transition hover:border-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <span className="mr-2">🐙</span>
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download="Sneha-Gupta-Resume.pdf"
            className="inline-flex items-center justify-center rounded-lg border-2 border-secondary-500 px-8 py-3 font-medium text-white transition hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Download Resume
          </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
            <div className="animate-bounce text-2xl">⬇</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
