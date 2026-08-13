import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Narmathi GP | Full Stack Developer",
  description:
    "Portfolio of Narmathi GP, a Full Stack Developer skilled in JavaScript, React.js, Next.js and Node.js.",
  keywords: [
    "Full Stack Developer",
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
