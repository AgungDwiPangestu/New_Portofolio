import React from "react";

function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 0 0-3.162 19.495c.5.092.683-.217.683-.482 0-.237-.009-.866-.013-1.699-2.782.604-3.369-1.341-3.369-1.341-.455-1.157-1.111-1.466-1.111-1.466-.909-.62.069-.607.069-.607 1.005.071 1.534 1.032 1.534 1.032.893 1.53 2.343 1.087 2.914.832.091-.647.35-1.087.636-1.337-2.221-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025a9.56 9.56 0 0 1 2.503-.337c.849.004 1.705.115 2.504.337 1.91-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.395.1 2.648.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.936.359.31.678.923.678 1.86 0 1.343-.012 2.425-.012 2.757 0 .267.18.578.688.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-0">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Agung Dwi Pangestu
            </h3>
            <p className="mt-1 text-slate-400 text-sm">Backend Developer</p>
          </div>

          {/* Social Links */}
          <nav aria-label="Social links" className="flex items-center gap-3">
            <a
              href="https://github.com/AgungDwiPangestu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-bounce w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <IconGitHub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/agungdwipangestu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-bounce w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <IconLinkedIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:agung.dwi23@students.utdi.ac.id"
              aria-label="Email"
              className="icon-bounce w-10 h-10 rounded-xl bg-slate-800 hover:bg-red-500 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <IconMail className="w-5 h-5" />
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} Agung Dwi Pangestu. All rights
              reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with
              <span className="text-red-400">♥</span>
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
