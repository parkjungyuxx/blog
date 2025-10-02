import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "micky.log",
  description: "Personal tech blog by micky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-dvh antialiased bg-gray-100 text-black">
        {children}
      </body>
    </html>
  );
}
