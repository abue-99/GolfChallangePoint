import "./globals.css";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export const metadata = {
  title: "Golf Challenge Point",
  description: "Training Log & Performance Tracking"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="flex">
          {/* Desktop Sidebar */}
          <Sidebar />

          {/* Main Area */}
          <div className="flex-1 min-h-screen">
            {/* Mobile Topbar */}
            <Topbar />

            {/* Actual Page */}
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}