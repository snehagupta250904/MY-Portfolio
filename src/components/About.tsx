"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/utils/constants";

/**
 * About Section Component
 * Displays professional bio and overview
 */
export function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;

      if (isVisible) {
        ref.current.classList.add("animate-fade-in");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="bg-slate-50 px-4 py-20 dark:bg-slate-800/50 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-8 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            {ABOUT_CONTENT.heading}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { label: "Years in Tech", value: "4+" },
            { label: "Projects Built", value: "20+" },
            { label: "Technologies", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-slate-700/50">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.value}
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
