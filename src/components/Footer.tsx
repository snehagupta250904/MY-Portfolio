"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "@/utils/constants";

/**
 * Footer Component
 * Contact information and social links
 */
export function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 dark:bg-slate-950/50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 flex flex-col items-center gap-6 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">{PORTFOLIO_CONFIG.name}</h3>
              <p className="mt-2 text-sm text-slate-400">
                Building the future with code and creativity
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href={PORTFOLIO_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 transition hover:bg-primary-600"
              >
                <span className="text-xl">💼</span>
              </a>
              <a
                href={PORTFOLIO_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 transition hover:bg-secondary-600"
              >
                <span className="text-xl">🐙</span>
              </a>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                aria-label="Email"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 transition hover:bg-red-600"
              >
                <span className="text-xl">📧</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row">
            <div>
              <p>
                © {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-slate-300">
                About
              </a>
              <a href="#skills" className="hover:text-slate-300">
                Skills
              </a>
              <a href="#projects" className="hover:text-slate-300">
                Projects
              </a>
              <a href="#achievements" className="hover:text-slate-300">
                Achievements
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
            <p>
              Built with <span className="text-primary-400">Next.js</span> · Styled with{" "}
              <span className="text-secondary-400">Tailwind CSS</span> · Animated with{" "}
              <span className="text-primary-400">Framer Motion</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
