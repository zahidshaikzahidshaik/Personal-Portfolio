
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certificates = [
  { provider: "Udemy", name: "React - The Complete Guide (incl Hooks, Redux)" },
  { provider: "AICTE", name: "Python for Data Science" },
  { provider: "Swayam", name: "Big Data Analytics with Spark" },
];

const Certificates = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-20 animate-fade-in">
    <h1 className="font-playfair text-2xl md:text-4xl text-blue-700 font-bold text-center mb-8">
      Certificates
    </h1>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full max-w-3xl">
      {certificates.map((c, i) => (
        <Card key={i} className="rounded-2xl bg-white/90 border border-blue-100/60 dark:bg-black/30 dark:border-blue-900/70 shadow-md animate-fade-in">
          <CardHeader>
            <CardTitle className="text-blue-700 text-lg">{c.provider}</CardTitle>
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
