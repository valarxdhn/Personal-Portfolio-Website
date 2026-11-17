import fs from "fs";
import path from "path";
import AboutView from "@/components/AboutView";

export const metadata = {
  title: "About | Dhanush",
  description:
    "Academic background, software engineering interests, and research contributions of Dhanush, Computer Science Engineering Student at Sahyadri College.",
};

export default function AboutPage() {
  const resumeFilePath = path.join(process.cwd(), "public", "documents", "resume.pdf");
  const hasResumePdf = fs.existsSync(resumeFilePath);

  return <AboutView hasResumePdf={hasResumePdf} />;
}
