"use client";

import { useEffect, useRef, useState } from "react";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface Project {
  title: string;
  label: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  svgIcon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    label: "Bike Essentials & Accessories",
    description:
      "E-commerce platform for bike accessories built with CI4, featuring OTP login via 2Factor and Razorpay payments.Supports product filters, cart checkout, and inventory management.Fast, secure, and optimized for real-world store operations.",
    tech: ["Codeigniter 4", "2 Factor", "Razorpay", "Admin Control"],
    github: "#",
    live: "https://adventureshoppe.com/",
    svgIcon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full"
      >
        <rect x="8" y="8" width="64" height="48" rx="4" />
        <line x1="8" y1="20" x2="72" y2="20" />
        <circle cx="16" cy="14" r="2" fill="currentColor" />
        <circle cx="22" cy="14" r="2" fill="currentColor" />
        <circle cx="28" cy="14" r="2" fill="currentColor" />
        <rect x="16" y="28" width="20" height="4" rx="1" opacity="0.5" />
        <rect x="16" y="36" width="40" height="4" rx="1" opacity="0.3" />
        <rect x="16" y="44" width="30" height="4" rx="1" opacity="0.3" />
        <rect x="20" y="64" width="40" height="8" rx="4" />
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    label: "Eco-Friendly Products",
    description:
      "Built using CodeIgniter 4, this fully featured e-commerce project includes a robust admin panel, 2Factor SMS authentication, JWT-secured APIs, and Razorpay payment gateway integration.It also supports flat discounts for new customers, automated order handling, and a seamless shopping experience.",
    tech: ["Codeigniter 4", "2 Factor", "Razorpay", "Admin Control"],
    github: "#",
    live: "https://smileaf.in/",
    svgIcon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full"
      >
        <rect x="8" y="12" width="64" height="56" rx="4" />
        <rect x="8" y="12" width="18" height="56" rx="4" />
        <line x1="32" y1="24" x2="64" y2="24" opacity="0.5" />
        <rect x="32" y="30" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="50" y="30" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="32" y="48" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="50" y="48" width="14" height="14" rx="2" opacity="0.3" />
        <line x1="14" y1="24" x2="20" y2="24" opacity="0.5" />
        <line x1="14" y1="30" x2="20" y2="30" opacity="0.3" />
        <line x1="14" y1="36" x2="20" y2="36" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Areca Leaf Plates Website",
    label: "Featured Project",
    description:
      "A responsive CodeIgniter 4 website showcasing eco-friendly areca leaf plates and sustainable bio-products. Built with SEO optimization to highlight the brand’s mission of promoting a greener, biodegradable lifestyle.",
    tech: ["CodeIgniter 4", "Responsive Design", "SEO Optimization"],
    github: "#",
    live: "https://cactusintl.com/",
    svgIcon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full"
      >
        <rect x="8" y="8" width="64" height="48" rx="4" />
        <path d="M8 20 L40 42 L72 20" opacity="0.3" />
        <line x1="8" y1="20" x2="72" y2="20" />
        <rect x="20" y="64" width="16" height="8" rx="3" opacity="0.5" />
        <rect x="44" y="64" width="16" height="8" rx="3" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Tours & Travels Platform",
    label: "Travels Platform",
    description:
      "Dynamic tours and travel website where admins can create, update, and manage tour packages, destinations, pricing, and itinerary details through a secure dashboard.",
    tech: ["Ci4", "REST API", "MySQL", "Admin Panel"],
    github: "#",
    live: "https://santhoshholidays.com/",
    svgIcon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full"
      >
        <rect x="8" y="12" width="64" height="56" rx="4" />
        <rect x="8" y="12" width="18" height="56" rx="4" />
        <line x1="32" y1="24" x2="64" y2="24" opacity="0.5" />
        <rect x="32" y="30" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="50" y="30" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="32" y="48" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="50" y="48" width="14" height="14" rx="2" opacity="0.3" />
        <line x1="14" y1="24" x2="20" y2="24" opacity="0.5" />
        <line x1="14" y1="30" x2="20" y2="30" opacity="0.3" />
        <line x1="14" y1="36" x2="20" y2="36" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Hostel Management System",
    label: "Featured Project",
    description:
      "A full-stack web application to efficiently manage multiple hostels. It handles hostel details like floors, rooms, and beds, while providing automated rent calculations and secure tenant management with JWT-based authentication.",
    tech: ["React", "MUI", "NodeJS", "JWT", "MySQL"],
    github: "https://github.com/Narmathi/Hostel_Management",
    live: "#",
    svgIcon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full"
      >
        <rect x="8" y="8" width="64" height="48" rx="4" />
        <path d="M8 20 L40 42 L72 20" opacity="0.3" />
        <line x1="8" y1="20" x2="72" y2="20" />
        <rect x="20" y="64" width="16" height="8" rx="3" opacity="0.5" />
        <rect x="44" y="64" width="16" height="8" rx="3" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Landscape Architecture Platform",
    label: "Landscape Architecture",
    description:
      "Dynamic website for a leading US landscape architecture firm, featuring admin-controlled pages, service management, and modern responsive UI built with CI4, Bootstrap, and MySQL.",
    tech: ["CI4", "Bootstrap", "MySQL", "Admin Panel"],
    github: "#",
    live: "https://louiscontinolandscaping.com/",
    svgIcon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full"
      >
        <rect x="8" y="12" width="64" height="56" rx="4" />
        <rect x="8" y="12" width="18" height="56" rx="4" />
        <line x1="32" y1="24" x2="64" y2="24" opacity="0.5" />
        <rect x="32" y="30" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="50" y="30" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="32" y="48" width="14" height="14" rx="2" opacity="0.3" />
        <rect x="50" y="48" width="14" height="14" rx="2" opacity="0.3" />
        <line x1="14" y1="24" x2="20" y2="24" opacity="0.5" />
        <line x1="14" y1="30" x2="20" y2="30" opacity="0.3" />
        <line x1="14" y1="36" x2="20" y2="36" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Turf Construction Company – Sports Turf Solutions",
    label: "Featured Project",
    description:
      "Static website for a professional turf construction company offering installation, maintenance, and customization of sports turfs. Built with responsive Bootstrap UI and SEO-optimized pages for better reach.",
    tech: ["CI4", "SEO"],
    github: "https://www.srsportscorp.com/",
    live: "#",
    svgIcon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full"
      >
        <rect x="8" y="8" width="64" height="48" rx="4" />
        <path d="M8 20 L40 42 L72 20" opacity="0.3" />
        <line x1="8" y1="20" x2="72" y2="20" />
        <rect x="20" y="64" width="16" height="8" rx="3" opacity="0.5" />
        <rect x="44" y="64" width="16" height="8" rx="3" opacity="0.5" />
      </svg>
    ),
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 1;
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 200);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      id={`project${index + 1}`}
      className={`project-card-animate project-card-shimmer bg-bg-card border border-border rounded-2xl overflow-hidden transition-all duration-400 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(124,92,252,0.10)] grid grid-cols-1 md:grid-cols-[1fr_1.2fr] ${isEven ? "md:[direction:rtl]" : ""} ${visible ? "visible" : ""}`}
    >
      {/* Image placeholder */}
      <div
        className={`bg-gradient-to-br from-bg-secondary to-bg-card-hover flex items-center justify-center min-h-[200px] md:min-h-[260px] p-8 ${
          isEven ? "md:[direction:ltr]" : ""
        }`}
      >
        <div className="w-[120px] h-[120px] text-text-muted opacity-50 hover:opacity-80 hover:text-accent-light hover:scale-110 transition-all duration-500">
          {project.svgIcon}
        </div>
      </div>

      {/* Info */}
      <div
        className={`p-8 flex flex-col justify-center ${isEven ? "md:[direction:ltr]" : ""}`}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[0.72rem] text-accent font-medium uppercase tracking-wider">
            {project.label}
          </span>
          <div className="flex gap-2">
            <a
              href={project.github}
              className="text-text-muted hover:text-accent-light hover:bg-accent-subtle p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="View source on GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={project.live}
              target="_blank"
              className="text-text-muted hover:text-accent-light hover:bg-accent-subtle p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              aria-label="View live demo"
            >
              <ExternalIcon />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-text-primary mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[0.72rem] font-medium text-accent-light bg-accent-subtle px-3 py-1 rounded-full hover:bg-accent hover:text-white transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-tight text-text-primary">
            Projects
          </h2>
          <div
            className="section-underline w-12 h-[3px] rounded-full mx-auto mt-4"
            style={{
              background:
                "linear-gradient(135deg, #7c5cfc 0%, #3b82f6 50%, #06b6d4 100%)",
            }}
          />
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
