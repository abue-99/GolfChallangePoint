import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Challangepoint MVP",
  description: "Coach planning, Player logging, Calendar DnD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen">
            {/* Sidebar links */}
            <Sidebar />

            {/* Hauptinhalt rechts */}
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}