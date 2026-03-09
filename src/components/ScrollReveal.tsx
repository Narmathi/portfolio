"use client";

import { useEffect } from "react";

/**
 * Client-side component that initializes the IntersectionObserver
 * for all `.reveal` elements on the page. Mount once in the page.
 */
export default function ScrollReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const delay = parseInt(el.dataset.delay || "0", 10);
                        setTimeout(() => el.classList.add("visible"), delay);
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach((el, i) => {
            // Auto-stagger siblings
            const siblings = el.parentElement?.querySelectorAll(".reveal");
            if (siblings) {
                const idx = Array.from(siblings).indexOf(el);
                (el as HTMLElement).dataset.delay = String(idx * 80);
            }
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
