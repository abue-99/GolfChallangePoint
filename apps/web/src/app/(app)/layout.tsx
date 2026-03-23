import "../globals.css";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export const metadata = {
  title: "Golf Challenge Point",
  description: "Training Log & Performance Tracking"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <div className="flex min-h-screen">
          {/* Desktop Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Mobile Topbar */}
            <Topbar />

            {/* Page Content */}
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}