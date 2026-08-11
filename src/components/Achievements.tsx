"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/utils/constants";

/**
 * Achievements Section Component
 * Displays hackathons, competitions, and milestones
 * Content is easily editable via constants.ts
 */
export function Achievements() {
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
      className="bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-20 dark:from-slate-900 dark:to-slate-950 sm:px-6 lg:px-8"
      id="achievements"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl">
            Achievements & Milestones
          </h2>
        </motion.div>

        <div className="space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="group rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-800/30 p-6 backdrop-blur transition hover:from-primary-900/30 hover:to-secondary-900/30 dark:from-slate-800/50 dark:to-slate-800/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-primary-300">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300">
                      {achievement.description}
                    </p>
                  </div>
                  <span className="ml-4 whitespace-nowrap rounded-full bg-primary-600/20 px-4 py-2 text-sm font-medium text-primary-300">
                    {achievement.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add new achievement prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mt-12 rounded-lg border-2 border-dashed border-slate-600 p-6 text-center dark:border-slate-700">
            <p className="text-slate-400">
              💡 Add more achievements by editing the ACHIEVEMENTS array in{" "}
              <code className="text-primary-400">src/utils/constants.ts</code>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
