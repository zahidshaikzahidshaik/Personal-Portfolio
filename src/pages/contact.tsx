
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Contact = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-20 animate-fade-in">
    <Card className="w-full max-w-lg mx-auto rounded-3xl bg-white/90 dark:bg-black/30 border border-blue-100/60 dark:border-blue-900/70 shadow-xl">
      <CardHeader>
        <CardTitle className="font-playfair text-blue-700 text-2xl md:text-3xl text-center">Contact</CardTitle>
        <CardDescription className="text-center mb-2">
          Let’s connect! For work or collaboration, send a message.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3 items-center justify-center mb-1">
          <li>
            <a href="mailto:zahid@email.com" className="text-blue-600 underline font-sans font-medium text-base hover:text-blue-800 transition-colors">zahid@email.com</a>
          </li>
          <li>
            <span className="text-gray-500 text-sm">Location: Remote / Worldwide</span>
          </li>
          {/* Add more contact methods if needed */}
        </ul>
        <p className="text-center text-muted-foreground text-base mt-3">Or reach out on LinkedIn, GitHub &mdash; links coming soon!</p>
      </CardContent>
    </Card>
  </main>
);

export default Contact;
