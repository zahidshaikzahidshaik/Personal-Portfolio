
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Contact = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 md:py-28 animate-fade-in">
    <Card className="w-full max-w-lg mx-auto rounded-3xl bg-white/95 dark:bg-black/40 border border-blue-200/80 dark:border-blue-900/80 shadow-xl">
      <CardHeader>
        <CardTitle className="font-playfair text-blue-800 text-3xl text-center">Contact</CardTitle>
        <CardDescription className="text-center mb-2">
          Let’s connect! For work or collaboration, send a message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3 items-center justify-center mb-1">
          <li>
            <a href="mailto:zahid@email.com" className="text-blue-700 underline font-sans font-semibold text-base hover:text-blue-800 transition-colors">zahid@email.com</a>
          </li>
          <li>
            <span className="text-gray-500 text-sm">Location: Remote / Worldwide</span>
          </li>
        </ul>
        <p className="text-center text-muted-foreground text-base mt-3">
          Or reach out on LinkedIn, GitHub &mdash; links coming soon!
        </p>
      </CardContent>
    </Card>
  </main>
);

export default Contact;
