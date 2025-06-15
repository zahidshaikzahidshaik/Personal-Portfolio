
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certificates = [
  { provider: "Udemy", name: "React - The Complete Guide (incl Hooks, Redux)" },
  { provider: "AICTE", name: "Python for Data Science" },
  { provider: "Swayam", name: "Big Data Analytics with Spark" },
];

const Certificates = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 md:py-28 animate-fade-in">
    <h1 className="font-playfair text-3xl md:text-5xl text-blue-800 font-bold text-center mb-8">
      Certificates
    </h1>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full max-w-3xl">
      {certificates.map((c, i) => (
        <Card key={i} className="rounded-2xl bg-white/95 border border-blue-200/50 dark:bg-black/40 dark:border-blue-900/60 shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle className="text-blue-800 text-lg">{c.provider}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-muted-foreground text-base">{c.name}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </main>
);

export default Certificates;
