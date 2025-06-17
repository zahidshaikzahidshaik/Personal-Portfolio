import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Resume = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
    <Card className="w-full max-w-xl mx-auto rounded-3xl bg-white/95 dark:bg-black/40 border-none shadow-2xl px-8 py-10 flex flex-col items-center gap-4">
      <CardHeader className="pb-2 text-center">
        <CardTitle className="font-playfair text-blue-800 font-extrabold text-3xl">Resume</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 p-0">
        <p className="text-muted-foreground text-base text-center">
          Download or view my latest resume below.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-700 text-white font-bold text-base px-7 py-3 rounded-xl shadow-lg animate-fade-in">
          <a href="/zahid_hussain_cv.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
            <ExternalLink className="ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  </main>
);

export default Resume;
