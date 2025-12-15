import React from "react";
import { projects } from "../../data/projects";

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      aria-labelledby="projects-title"
      className="w-full py-16 md:py-24 bg-white/50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-sm font-medium text-blue-600 mb-2 tracking-wide uppercase">
            Portfolio
          </p>
          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold gradient-text"
          >
            Featured Projects
          </h2>
          <div className="section-divider mx-auto mt-4"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Backend-focused projects showcasing API development, database
            design, and server-side architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <article
              key={p.slug}
              className={`card-hover group bg-white border border-slate-100 rounded-2xl p-6 animate-fade-in-delay-${Math.min(
                index + 1,
                3
              )}`}
              aria-labelledby={`proj-${p.slug}-title`}
            >
              {/* Project Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <h3
                id={`proj-${p.slug}-title`}
                className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors"
              >
                {p.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {p.description}
              </p>

              <div className="mt-4">
                <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                  {p.tech.map((t) => (
                    <li key={t} className="tech-badge">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors link-underline"
                >
                  View on GitHub
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
