import { useEffect, useState } from "react";
import { FALLBACK_REPOS } from "@/utils/constants";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

interface ApiRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

export function useGithubRepos(username: string, enabled: boolean = true) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // GitHub API endpoint for user repos
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: ApiRepository[] = await response.json();

        // Transform and sort by most recently updated
        const transformedRepos = data
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            updated_at: repo.updated_at,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
          }))
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

        setRepos(transformedRepos);
      } catch (err) {
        // On error, use fallback repos
        console.warn("Failed to fetch GitHub repos, using fallback data:", err);
        setError("Could not fetch repos from GitHub. Showing recent projects instead.");
        setRepos(
          FALLBACK_REPOS.map((repo) => ({
            id: Math.random(),
            ...repo,
            url: repo.url || "#",
            stargazers_count: 0,
            forks_count: 0,
          }))
        );
      } finally {
        setLoading(false);
      }
    };

    // Add delay to avoid too frequent API calls
    const timeout = setTimeout(fetchRepos, 300);
    return () => clearTimeout(timeout);
  }, [username, enabled]);

  return { repos, loading, error };
}
