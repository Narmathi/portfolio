"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full h-[72px] z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/85 backdrop-blur-2xl shadow-[0_1px_0_var(--color-border)]"
          : ""
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="logo-animate font-mono text-lg font-semibold text-text-primary hover:text-accent-light transition-colors tracking-tight"
          aria-label="Home"
        >
          <span className="text-accent">&lt; </span>Portfolio
          <span className="text-accent-light"> | </span>Narmathi GP
          <span className="text-accent"> /&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-text-primary bg-accent-subtle"
                    : "text-text-secondary hover:text-text-primary hover:bg-accent-subtle"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Narmathi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex text-text-secondary hover:text-accent-light hover:bg-accent-subtle p-2 rounded-lg transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            onClick={toggleMobile}
            className="flex md:hidden flex-col gap-[5px] p-1.5 z-[1001]"
            aria-label="Toggle navigation"
          >
            <span
              className={`w-[22px] h-[2px] bg-text-primary rounded transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-[22px] h-[2px] bg-text-primary rounded transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-[22px] h-[2px] bg-text-primary rounded transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 right-0 w-[280px] h-screen bg-bg-primary/97 backdrop-blur-2xl border-l border-border flex flex-col justify-center items-center gap-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className={`text-base font-medium px-6 py-3 rounded-lg transition-all duration-200 ${
              activeSection === item.href.slice(1)
                ? "text-text-primary bg-accent-subtle"
                : "text-text-secondary hover:text-text-primary hover:bg-accent-subtle"
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://github.com/Narmathi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-text-secondary hover:text-accent-light hover:bg-accent-subtle p-3 rounded-lg transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
