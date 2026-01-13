"use client"

import { Github, ExternalLink, Star, GitFork, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
}

const GITHUB_USERNAME = "someart"

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
        if (!response.ok) throw new Error("Failed to fetch repos")
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError("Unable to load GitHub repositories")
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  // Language color mapping
  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    Python: "bg-green-500",
    HTML: "bg-orange-500",
    CSS: "bg-purple-500",
    Java: "bg-red-500",
    "C++": "bg-pink-600",
    C: "bg-gray-500",
  }

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">GitHub Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Live projects from my GitHub profile showcasing my work in web development and cybersecurity.
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>View all repositories on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 text-pink-400 animate-spin" />
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-20">
            <p className="text-gray-400">{error}</p>
          </div>
        )}

        {/* Repos grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="group bg-gray-950 border border-gray-800 rounded-lg overflow-hidden hover:border-pink-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-gray-400" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors truncate">
                        {repo.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {repo.description || "No description available"}
                  </p>

                  {/* Topics/Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span key={topic} className="px-2 py-1 text-xs bg-pink-500/10 text-pink-400 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer with stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className={`h-3 w-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`} />
                          <span className="text-xs text-gray-400">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-gray-400">
                        <Star className="h-3.5 w-3.5" />
                        <span className="text-xs">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <GitFork className="h-3.5 w-3.5" />
                        <span className="text-xs">{repo.forks_count}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-pink-400 transition-colors p-1"
                          aria-label="View live site"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-400 transition-colors p-1"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
