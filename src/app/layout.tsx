import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Narmathi GP",
  description:
    "Portfolio of Narmathi GP, a Backend-focused Full Stack Developer skilled in Node.js, Next.js, Prisma, and PostgreSQL.",
  keywords: [
    "Backend Developer",
    "Full Stack Developer",
    "Node.js",
    "Next.js",
    "Prisma",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Narmathi GP" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}