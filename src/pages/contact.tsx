
import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 md:py-28 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
      <Card className="w-full max-w-lg mx-auto rounded-3xl bg-white/95 dark:bg-black/40 border-none shadow-2xl px-8 py-10 flex flex-col items-center gap-3">
        <h1 className="font-playfair text-blue-900 text-5xl text-center font-extrabold mb-1 tracking-tight">
          Contact
        </h1>
        <p className="text-center mb-4 text-lg text-gray-700 dark:text-gray-200 font-sans">
          Let’s connect! For work or collaboration, send me a message.
        </p>
        <a
          href="mailto:shaikzahidhussain6@gmail.com"
          className="inline-flex items-center gap-2 text-blue-700 underline font-semibold text-lg hover:text-blue-900 transition-colors mb-1 font-sans"
        >
          <Mail className="w-5 h-5" />
          shaikzahidhussain6@gmail.com
        </a>
        <div className="inline-flex items-center gap-2 text-blue-800 font-medium text-base mb-2">
          <MapPin className="w-5 h-5" />
          Andhra Pradesh, India
        </div>
        <div className="text-center text-base text-gray-600 dark:text-gray-300 mt-4">
          Or reach out on LinkedIn, GitHub — links coming soon!
        </div>
      </Card>
    </main>
  );
};

export default Contact;
