import logo from "../assets/xmcp-logo.svg";
import githubIcon from "../assets/github.png";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md bg-black20 text-sm transition-colors
      ${scrolled ? "border-b border-white/0" : "border-b border-neutral-900"}`}
    >
      <div className="relative max-w-7xl mx-auto h-13.5 flex items-center justify-between px-6">

        {/* LEFT LINKS */}
        <div className="flex items-center gap-4 text-white -ml-32">
          {["Home", "Docs", "Examples", "Blog", "Showcase"].map((item) => (
            <a key={item} href="#" className="relative group">
              {item}
              <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer hover:opacity-80 transition">
          <img src={logo} alt="XMCP" className="h-6 w-auto opacity-100" />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 ml-auto">

          {/* SEARCH BOX */}
          <div className="flex items-center gap-2 border border-[#444444] px-2 py-[8px] text-[#7c7c7c] hover:bg-[#1a1a1a] transition cursor-pointer">
            <Search size={16} />
            <span className="hidden sm:inline">Search docs...</span>
            <span className="ml-3.5 text-[14px] text-white ">
              Ctrl K
            </span>
          </div>

          {/* ASK AI BUTTON */}
          <div className="flex items-center gap-5 border border-[#444444] px-2 py-[8px] text-[#7c7c7c] hover:bg-[#1a1a1a] transition cursor-pointer">
            <span className="hidden sm:inline">Ask AI</span>
            <span className="ml-4 text-[14px] text-white">
              Ctrl I
            </span>
          </div>

          {/* GITHUB ICON */}
          <a href="#" className="hover:opacity-80 transition invert-100 -mr-31.5 ml-0.5">
            <img src={githubIcon} alt="GitHub" className="h-5 w-5" />
          </a>

        </div>
      </div>
    </nav>
  );
}
