import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quizzical | Brandon Nielsen",
  description: "Quizzical, a quiz web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${karla.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
