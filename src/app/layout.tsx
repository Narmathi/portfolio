import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Narmathi GP",
  description:
    "Portfolio of Narmathi GP, a Frontend-focused Developer skilled in React.js, JavaScript, and Node.js.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "JavaScript",
    "MERN Stack",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
