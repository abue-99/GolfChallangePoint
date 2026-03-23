import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });


<h1 className="text-3xl font-semibold tracking-tight text-[var(--golf-heading)]">
  Golf Challenge Point – Dashboard
</h1>

export const metadata = {
  title: "Golf Challenge Point",
  description: "Golf Challenge Point – Coaching, Training, Performance Insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}