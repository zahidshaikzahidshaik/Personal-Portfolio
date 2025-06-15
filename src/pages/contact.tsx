
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
      <Card className="w-full max-w-lg mx-auto rounded-3xl bg-white/95 dark:bg-black/40 border-none shadow-2xl px-8 py-10 flex flex-col items-center gap-2">
        <h1 className="font-playfair text-blue-800 text-4xl text-center font-extrabold mb-2">
          Contact
        </h1>
        <p className="text-center mb-4 text-base text-gray-600 dark:text-gray-300">
          Let’s connect! For work or collaboration, send me a message.
        </p>
        <a
          href="mailto:zahid@email.com"
          className="text-blue-700 underline font-sans font-bold text-lg hover:text-blue-900 transition-colors mb-1"
        >
          zahid@email.com
        </a>
        <div className="text-blue-800 font-medium text-sm mb-3">
          Location: Remote / Worldwide
        </div>
        <div className="text-center text-base text-gray-600 dark:text-gray-300 mt-4">
          Or reach out on LinkedIn, GitHub — links coming soon!
        </div>
      </Card>
    </main>
  );
};

export default Contact;
