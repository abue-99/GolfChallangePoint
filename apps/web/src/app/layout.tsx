import "./globals.css";
import { Inter } from "next/font/google";
import HeaderAndSidebarLayout from "@/components/HeaderAndSidebarLayout";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Golf Challenge Point",
  description: "Golf Challenge Point – Coaching, Training, Performance Insights",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <HeaderAndSidebarLayout>
          {children}
        </HeaderAndSidebarLayout>
      </body>
    </html>
  );
}
