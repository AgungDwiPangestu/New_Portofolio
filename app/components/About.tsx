"use client";
import React, { useState, useEffect } from "react";

const fullName = "Agung Dwi Pangestu";

export default function About() {
  const [displayedName, setDisplayedName] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingDone(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (isTypingDone) {
      // Stop blinking after typing is done
      const timeout = setTimeout(() => {
        setShowCaret(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500);

    return () => clearInterval(caretInterval);
  }, [isTypingDone]);

  return (
    <section aria-labelledby="about-title" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in order-2 md:order-1">
            <p className="text-sm font-medium text-blue-600 mb-2 tracking-wide uppercase">
              Backend Developer
            </p>
            <h1
              id="about-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="gradient-text">{displayedName}</span>
              <span
                className={`text-blue-500 ${
                  showCaret ? "opacity-100" : "opacity-0"
                }`}
              >
                |
              </span>
            </h1>
            <div className="section-divider mt-6 mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Backend-focused developer with a strong interest in building
              reliable APIs, designing clean data models, and writing
              maintainable server-side code.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Passionate about learning{" "}
              <span className="font-medium text-slate-800">
                database optimization
              </span>
              ,{" "}
              <span className="font-medium text-slate-800">authentication</span>
              , and{" "}
              <span className="font-medium text-slate-800">
                deployment best practices
              </span>
              .
            </p>
            {/* Tech Stack Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Node.js",
                "TypeScript",
                "Express",
                "PostgreSQL",
                "REST API",
              ].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in-delay-1">
            <div className="profile-placeholder w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">A</span>
                  </div>
                  <span className="text-slate-400 text-sm">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
