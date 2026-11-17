import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingDock from "@/components/FloatingDock";
import BackgroundMesh from "@/components/BackgroundMesh";

export const metadata = {
  title: "DHANUSH | Computer Science Engineering Student | Portfolio",
  description:
    "Personal portfolio of Dhanush, Computer Science Engineering Student at Sahyadri College of Engineering and Management. Showcasing software development projects, IJIRT research publication, international conference presentation, and technical skills.",
  keywords: [
    "Dhanush",
    "Computer Science Engineering",
    "Portfolio",
    "Sahyadri College",
    "Software Developer",
    "Dynamic Train ETA",
    "Sustainable Bharat",
    "CampusLoop",
    "IJIRT Research",
    "Mangalore",
  ],
  authors: [{ name: "Dhanush" }],
  creator: "Dhanush",
  openGraph: {
    title: "DHANUSH | Portfolio",
    description:
      "Computer Science Engineering student passionate about software development, problem-solving, and emerging technologies.",
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
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <BackgroundMesh />
        <Navbar />
        <main style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
          {children}
        </main>
        <Footer />
        <FloatingDock />
      </body>
    </html>
  );
}
