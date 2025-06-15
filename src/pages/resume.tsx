
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RESUME_URL = "/lovable-uploads/zahid_resume.pdf"; // Use uploaded PDF

const Resume = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 md:py-28 animate-fade-in">
    <Card className="w-full max-w-lg mx-auto rounded-3xl bg-white/95 dark:bg-black/40 border border-blue-100/60 dark:border-blue-900/70 shadow-xl">
      <CardHeader>
        <CardTitle className="font-playfair text-blue-800 text-3xl text-center">Resume</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <p className="text-muted-foreground text-base text-center">
          Download or view my latest resume to learn more about my skills, experience, and education.
        </p>
        <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-base px-6 py-3 rounded-xl shadow-md transition">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            View Resume
            <ExternalLink className="ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  </main>
);

export default Resume;
