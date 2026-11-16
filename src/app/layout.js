import "./globals.css";

export const metadata = {
  title: "Dhanush | Personal Portfolio",
  description: "Personal Portfolio of Dhanush - Computer Science Engineering Student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
