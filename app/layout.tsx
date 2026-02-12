import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "바이브 코딩 포트폴리오",
  description: "바이브 코딩의 개발 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <header className="border-b border-border bg-background/80 px-6 py-4 backdrop-blur">
          <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
            <span className="text-sm font-semibold tracking-tight">
              바이브 코딩
            </span>
            <nav className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="#projects" className="hover:text-foreground">
                프로젝트
              </a>
              <a href="#contact" className="hover:text-foreground">
                연락하기
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
