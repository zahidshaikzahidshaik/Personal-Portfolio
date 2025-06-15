
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RESUME_URL = "#"; // TODO: Replace with your public resume link

const Resume = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-20 animate-fade-in">
    <Card className="w-full max-w-md mx-auto rounded-3xl bg-white/90 dark:bg-black/30 border border-blue-100/60 dark:border-blue-900/70 shadow-lg">
      <CardHeader>
        <CardTitle className="font-playfair text-blue-700 text-2xl md:text-3xl text-center">Resume</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-base text-center">
          Download or view my latest resume to learn more about my skills, experience, and education.
        </p>
        <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base px-6 py-3 rounded-xl transition">
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

