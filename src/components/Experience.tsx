"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    date: "2026 — Present",
    description:
      "Designing and developing end-to-end web applications using modern technologies such as React, Next.js, and Node.js. Building scalable REST APIs, managing relational databases, and ensuring high performance, security, and maintainability. Collaborating with clients to transform business requirements into reliable digital solutions.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript", "Prisma"],
  },
  {
    role: "E-Commerce Web Developer",
    company: "Appteq Technology Solutions",
    date: "2024 — 2025",
    description:
      "Developed and maintained e-commerce platforms with features such as product catalogs, shopping carts, payment integration, and order management. Focused on responsive design, performance optimization, and user-friendly customer experiences to improve engagement and conversions.",
    tags: [
      "Codeigniter",
      "React",
      "Bootstrap",
      "JavaScript",
      "REST APIs",
      "MySQL",
    ],
  },
  {
    role: "Frontend UI/UX Developer",
    company: "Appteq Technology Solutions",
    date: "2023 — 2024",
    description:
      "Created responsive and visually engaging user interfaces using HTML, CSS, and JavaScript. Worked closely with designers to translate UI/UX concepts into functional web components while ensuring accessibility, cross-browser compatibility, and smooth user interactions.",
    tags: ["HTML", "CSS", "JavaScript", "Codeigniter"],
  },
];
function ExpCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
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
      { threshold: 0.2 },
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`exp-card-animate relative mb-12 last:mb-0 group ${visible ? "visible" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Marker with pulse */}
      <div
        className={`timeline-marker absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-bg-primary border-[3px] border-accent z-10 transition-all duration-300 group-hover:bg-accent group-hover:shadow-[0_0_16px_var(--color-accent-glow)]`}
      />

      {/* Card */}
      <div className="bg-bg-card border border-border rounded-xl p-7 transition-all duration-300 group-hover:border-accent group-hover:translate-x-1 group-hover:shadow-[0_8px_32px_rgba(124,92,252,0.08)]">
        <div className="flex items-baseline gap-3 flex-wrap mb-1">
          <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
          <span className="text-sm text-accent-light font-medium">
            {exp.company}
          </span>
        </div>
        <span className="inline-block font-mono text-xs text-text-muted mb-3">
          {exp.date}
        </span>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.72rem] font-medium text-accent-light bg-accent-subtle px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    if (!lineRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 md:py-32 bg-bg-secondary">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-tight text-text-primary">
            Experience
          </h2>
          <div
            className="section-underline w-12 h-[3px] rounded-full mx-auto mt-4"
            style={{
              background:
                "linear-gradient(135deg, #7c5cfc 0%, #3b82f6 50%, #06b6d4 100%)",
            }}
          />
        </div>

        {/* Timeline */}
        <div ref={lineRef} className="relative max-w-[720px] mx-auto pl-10">
          {/* Animated timeline line */}
          <div
            className={`timeline-line absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full ${lineVisible ? "visible" : ""}`}
            style={{
              background:
                "linear-gradient(to bottom, var(--color-accent), var(--color-border))",
            }}
          />

          {experiences.map((exp, i) => (
            <ExpCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
