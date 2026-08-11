"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import { PORTFOLIO_CONFIG } from "@/utils/constants";

/**
 * Projects Section Component
 * Fetches and displays GitHub repositories
 * Includes error handling with fallback repos
 */
export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { repos, loading, error } = useGithubRepos(PORTFOLIO_CONFIG.github, true);

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
      id="projects"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-4 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Featured Projects
          </h2>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-8 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
              <p className="font-medium">{error}</p>
            </div>
          </motion.div>
        )}

        {loading && (
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700"
              />
            ))}
          </div>
        )}

        {!loading && repos.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ translateY: -8 }}
              >
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg dark:bg-slate-700"
                >
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                      {repo.name.replace(/-/g, " ")}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
                      {repo.description || "No description available"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-600">
                    <div className="flex gap-3">
                      {repo.language && (
                        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-200">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2 text-xs text-slate-500 dark:text-slate-400">
                      {repo.stargazers_count > 0 && (
                        <span>⭐ {repo.stargazers_count}</span>
                      )}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mt-12 text-center">
            <a
              href={PORTFOLIO_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-3 font-medium text-white transition hover:shadow-lg"
            >
              View All Projects on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
