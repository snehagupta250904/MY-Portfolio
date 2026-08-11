"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/utils/constants";

/**
 * Skills Section Component
 * Displays technical skills organized by category
 */
export function Skills() {
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
      id="skills"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold text-white sm:text-5xl">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="rounded-lg bg-slate-800/50 p-6 backdrop-blur dark:bg-slate-800/30">
                <h3 className="mb-4 text-lg font-semibold text-primary-400">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: groupIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 text-sm font-medium text-white">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
