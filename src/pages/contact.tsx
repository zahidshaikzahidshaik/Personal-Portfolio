
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Contact = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
    <Card className="w-full max-w-lg mx-auto rounded-3xl bg-white/95 dark:bg-black/40 border-none shadow-2xl px-8 py-10 flex flex-col items-center gap-4">
      <CardHeader>
        <CardTitle className="font-playfair text-blue-800 text-3xl text-center font-extrabold mb-2">Contact</CardTitle>
        <CardDescription className="text-center mb-2 text-base">
          Let’s connect! For work or collaboration, send me a message.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center w-full gap-2 p-0">
        <ul className="flex flex-col gap-3 items-center justify-center mb-1 w-full">
          <li>
            <a href="mailto:zahid@email.com" className="text-blue-700 underline font-sans font-semibold text-base hover:text-blue-900 transition-colors">zahid@email.com</a>
          </li>
          <li>
            <span className="text-blue-800 font-medium text-sm">Location: Remote / Worldwide</span>
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
