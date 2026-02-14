import { Search, Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 bg-black text-sm">
      <div className="relative max-w-7xl mx-auto h-14 flex items-center justify-between px-6">

        {/* LEFT LINKS */}
        <div className="flex items-center gap-6 text-neutral-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Examples</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Showcase</a>
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg tracking-wide">
          Xmcp
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">

          {/* SEARCH BOX */}
          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-md px-3 py-1.5 text-neutral-400">
            <Search size={16} />
            <span className="hidden sm:inline">Search docs...</span>
            <kbd className="ml-2 text-xs border border-neutral-700 rounded px-1.5 py-0.5">
              Ctrl K
            </kbd>
          </div>

          {/* ASK AI BUTTON */}
          <button className="border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 px-3 py-1.5 rounded-md text-neutral-300">
            Ask AI
            <span className="ml-2 text-xs border border-neutral-700 rounded px-1.5 py-0.5">
              Ctrl I
            </span>
          </button>

          {/* GITHUB ICON */}
          <a
            href="#"
            className="text-neutral-400 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}