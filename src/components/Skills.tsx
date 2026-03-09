"use client";

import { useEffect, useRef, useState } from "react";

const frontendSkills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "CodeIgniter", icon: "devicon-codeigniter-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
];

const backendSkills = [
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  {
    name: "Fastify",
    icon: null,
    svgPath:
      "M23.245 6.49L24 4.903l-.563-.312-1.842 1.648L18.622.464l-.498.207 1.043 4.924-2.746 2.458-.107-.07L12.1 4.122l-.476.235.918 5.81-7.616 6.816L.458 23.35l.264.186 7.098-4.728 6.95-2.9 5.708 1.458.296-.438-3.39-3.893-.072-.1 2.458-2.746 4.925 1.042.206-.497-5.775-2.973 1.648-1.842-.312-.563-1.587.755-.71-.71.755-1.587-.563-.312zm-4.453-.084l-1.728 1.546-.585-.855 1.546-1.384.767.693zm-.463 2.936l-.585-.855 1.546-1.384.767.694-1.728 1.545zm-2.17 1.942l-.584-.856 1.545-1.384.767.694-1.729 1.546zm-2.17 1.942l-.585-.855 1.546-1.384.766.694-1.728 1.545zm-2.168 1.944l-.585-.856 1.546-1.384.766.694-1.728 1.546zm-2.17 1.942l-.585-.856 1.546-1.384.767.694-1.728 1.546z",
  },
  {
    name: "Prisma",
    icon: null,
    svgPath:
      "M21.807 18.285L13.553.756a1.324 1.324 0 00-1.129-.754 1.31 1.31 0 00-1.206.626l-8.952 14.5a1.356 1.356 0 00.016 1.455l4.376 6.778a1.408 1.408 0 001.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 01-.575-.52l3.85-18.438c.072-.345.549-.4.696-.08l7.992 17.4a.456.456 0 01-.384.65z",
  },
];

const databaseSkills = [
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
];

interface SkillItem {
  name: string;
  icon: string | null;
  svgPath?: string;
}

function SkillCard({ skill, delay }: { skill: SkillItem; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `translateY(-4px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`skill-card-animate tilt-reset bg-bg-card border border-border rounded-xl py-6 px-3 flex flex-col items-center gap-3 hover:border-accent hover:shadow-[0_8px_32px_rgba(124,92,252,0.10)] transition-[border,box-shadow] duration-300 cursor-default ${visible ? "visible" : ""}`}
      style={{ perspective: "600px" }}
    >
      <div
        className="animate-float"
        style={{ animationDelay: `${delay * 0.02}s` }}
      >
        {skill.icon ? (
          <i
            className={`${skill.icon} text-4xl ${
              skill.name === "Next.js" || skill.name === "Express"
                ? "!text-text-primary"
                : ""
            }`}
          />
        ) : (
          <svg
            className="w-9 h-9 text-text-secondary hover:text-accent-light transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={skill.svgPath} />
          </svg>
        )}
      </div>
      <span className="text-xs font-medium text-text-secondary">
        {skill.name}
      </span>
    </div>
  );
}

function CategoryBlock({
  icon,
  title,
  skills,
  baseDelay,
}: {
  icon: string;
  title: string;
  skills: SkillItem[];
  baseDelay: number;
}) {
  return (
    <div className="reveal">
      <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2.5">
        <span className="text-xl">{icon}</span> {title}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3.5">
        {skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            delay={baseDelay + i * 100}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-tight text-text-primary">
            Tech Stack
          </h2>
          <div
            className="section-underline w-12 h-[3px] rounded-full mx-auto mt-4"
            style={{
              background:
                "linear-gradient(135deg, #7c5cfc 0%, #3b82f6 50%, #06b6d4 100%)",
            }}
          />
        </div>

        <div className="flex flex-col gap-14">
          <CategoryBlock
            icon="⚡"
            title="Frontend"
            skills={frontendSkills}
            baseDelay={0}
          />
          <CategoryBlock
            icon="🔧"
            title="Backend"
            skills={backendSkills}
            baseDelay={0}
          />
          <CategoryBlock
            icon="🗄️"
            title="Database"
            skills={databaseSkills}
            baseDelay={0}
          />
        </div>
      </div>
    </section>
  );
}
