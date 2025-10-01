import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/widgets/header/Header";
import { ThemeProvider } from "./providers";

export const metadata: Metadata = {
  title: "Jungyu's Blog",
  description: "Personal tech blog by Jungyu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <Header />
          <main className="mx-auto max-w-3xl px-5 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
