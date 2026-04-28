"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 10, label: "Projects Built" },
  { target: 3, label: "Years Experience" },
  { target: 2, label: "E-commerce" },
  { target: 1, label: "Microservices" },
];

function AnimatedCounter({
  target,
  inView,
}: {
  target: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1400;
    const start = performance.now();

    function step(current: number) {
      const elapsed = current - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, target]);

  return <>{count}</>;
}

export default function About() {
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 md:py-30 bg-bg-secondary">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          {/* <span className="font-mono text-sm font-medium text-accent block mb-3">
                        01
                    </span> */}
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-tight text-text-primary">
            About Me
          </h2>
          <div
            className="section-underline w-12 h-[3px] rounded-full mx-auto mt-4"
            style={{
              background:
                "linear-gradient(135deg, #7c5cfc 0%, #3b82f6 50%, #06b6d4 100%)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
          {/* Text */}
          <div className="reveal space-y-5">
            <p className="text-text-secondary text-[1.02rem] leading-relaxed">
              Hi, I&apos;m{" "}
              <strong className="text-text-primary font-semibold">
                Narmathi
              </strong>
              , a Full Stack Developer with 3+ years of experience building
              responsive and scalable web applications.
            </p>

            <p className="text-text-secondary text-[1.02rem] leading-relaxed">
              I specialize in{" "}
              <strong className="text-text-primary font-semibold">
                React.js and JavaScript
              </strong>
              , creating user-friendly interfaces and integrating REST APIs to
              deliver seamless user experiences.
            </p>

            <p className="text-text-secondary text-[1.02rem] leading-relaxed">
              I have developed real-world applications including e-commerce
              platforms and interactive web solutions with strong focus on
              usability and performance.
            </p>

            <p className="text-text-secondary text-[1.02rem] leading-relaxed">
              I also have experience working with{" "}
              <strong className="text-text-primary font-semibold">
                Node.js, Fastify, Prisma, and PostgreSQL
              </strong>
              , which helps me understand backend systems and build efficient
              frontend integrations.
            </p>

            <p className="text-text-secondary text-[1.02rem] leading-relaxed">
              My focus is on writing clean, maintainable code and building{" "}
              <strong className="text-text-primary font-semibold">
                fast, scalable, and user-friendly applications
              </strong>
              .
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-bg-card border border-border rounded-xl p-7 text-center hover:border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <span
                  className="stat-glow text-4xl font-extrabold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #c4b5fd 0%, #93c5fd 50%, #67e8f9 100%)",
                  }}
                >
                  <AnimatedCounter target={stat.target} inView={inView} />
                </span>
                <span className="text-lg font-bold text-accent">+</span>
                <span className="block text-xs text-text-muted mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
