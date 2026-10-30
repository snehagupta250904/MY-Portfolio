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
            <svg
              aria-hidden="true"
              className="mr-2 h-5 w-5 rounded-sm bg-white p-0.5"
              viewBox="0 0 24 24"
              fill="#0A66C2"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={PORTFOLIO_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-slate-400 px-8 py-3 font-medium text-slate-300 transition hover:border-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <svg
              aria-hidden="true"
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.202 2.398.1 2.651.64.701 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a
            href="/resume.pdf"
            download="Sneha-Gupta-Resume.pdf"
            className="inline-flex items-center justify-center rounded-lg border-2 border-secondary-500 px-8 py-3 font-medium text-white transition hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            <svg
              aria-hidden="true"
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M8 13h8M8 17h8" />
            </svg>
            Download Resume
          </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
