import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveBackground from "@/components/LiveBackground";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "Dhanush | Computer Science Engineering Student & Developer",
  description:
    "Personal portfolio of Dhanush, Computer Science Engineering Student at Sahyadri College of Engineering and Management (CGPA: 8.85). Showcasing real-world software engineering projects, IJIRT research publication, and technical skills.",
  keywords: [
    "Dhanush",
    "Computer Science Engineering",
    "Sahyadri College",
    "Software Developer",
    "Dynamic Train ETA",
    "VoltCharge",
    "CampusLoop",
    "IJIRT Research",
    "Mangalore",
  ],
  authors: [{ name: "Dhanush" }],
  creator: "Dhanush",
  openGraph: {
    title: "Dhanush | Computer Science Engineering Student & Developer",
    description:
      "Computer Science Engineering student at Sahyadri College of Engineering and Management. Building practical software in transit analytics, full-stack development, and applied AI.",
    url: "https://dhanush-portfolio.vercel.app",
    siteName: "Dhanush Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
        {/* Initial Session-Scoped Sleek Preloader */}
        <Preloader />

        {/* Lenis Smooth Inertial Scrolling Provider */}
        <SmoothScrollProvider>
          {/* Top Fixed Cyan Scroll Progress Indicator */}
          <ScrollProgress />

          {/* Fixed Technical Grid & Cursor Spotlight Layer */}
          <LiveBackground />

          {/* High-priority Interactive Foreground Layer */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh", flex: 1 }}>
            <Navbar />
            <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
