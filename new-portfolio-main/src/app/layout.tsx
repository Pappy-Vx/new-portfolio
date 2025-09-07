import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kolapo Kolawole — The Software Engineer",
  description: "Kolapo Kolawole is a Lagos-based software engineer, a co-founder, and a solution-oriented developer for fintech industries.",
   icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
