"use client";

import { useEffect, useState, useMemo } from "react";

function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

function TypewriterRole() {
  const roles = [
    "Full Stack Developer",
    "Responsive UI/UX Specialist",
    "Backend API Engineer",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === target) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? target.substring(0, displayText.length - 1)
            : target.substring(0, displayText.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <div className="flex items-center justify-center gap-1 mb-6">
      <span className="text-xl font-medium text-text-secondary font-mono">
        {displayText}
      </span>
      <span
        className="font-mono text-accent inline-block w-[2px] h-6 bg-accent"
        style={{ animation: "cursor-blink 1s step-end infinite" }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-[120px] pb-20"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Ambient glow blobs */}
      <div
        className="absolute w-[500px] h-[500px] -top-[120px] -right-[60px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: "rgba(124, 92, 252, 0.12)",
          animation: "glow-drift 12s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] -bottom-[80px] -left-[40px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: "rgba(59, 130, 246, 0.10)",
          animation: "glow-drift 14s ease-in-out infinite alternate-reverse",
        }}
      />

      {/* Content — staggered animation */}
      <div className="hero-animate text-center max-w-[700px] relative z-10">
        {/* Greeting */}
        <p className="text-base font-medium text-accent-light tracking-[2px] uppercase mb-3">
          Hello, I&apos;m
        </p>

        {/* Name with gradient shimmer */}
        <h1
          className="animate-gradient-shift- text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-[-2px] leading-[1.05] mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
          style={{ backgroundSize: "200% 200%" }}
        >
          Narmathi GP
        </h1>

        {/* Typewriter role */}
        <div>
          <TypewriterRole />
        </div>

        {/* Description */}
        <p className="text-[1.05rem] text-text-secondary max-w-[540px] mx-auto mb-10 leading-relaxed">
          I craft seamless UIs with React ,Next.js & Codeigniter and engineer
          robust APIs with Node & CodeIgniter. SEO-friendly, scalable, and
          high-performance digital solutions. Engineered for growth and
          <br />
          long-term success.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            id="viewWorkBtn"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-lg bg-accent text-white shadow-[0_4px_24px_var(--color-accent-glow)] hover:bg-accent-light hover:shadow-[0_6px_32px_var(--color-accent-glow)] hover:-translate-y-0.5 transition-all duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            id="contactBtn"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-lg bg-transparent text-text-primary border-[1.5px] border-border-hover hover:border-accent hover:text-accent-light hover:bg-accent-subtle hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-[60px] left-1/2 -translate-x-1/2">
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-accent), transparent)",
              animation: "scroll-pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
