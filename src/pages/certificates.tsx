
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certificates = [
  { provider: "Udemy", name: "React - The Complete Guide (incl Hooks, Redux)", color: "bg-orange-200 text-orange-800" },
  { provider: "AICTE", name: "Python for Data Science", color: "bg-green-200 text-green-800" },
  { provider: "Swayam", name: "Big Data Analytics with Spark", color: "bg-blue-200 text-blue-800" },
];

const Certificates = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
    <h1 className="font-playfair text-4xl md:text-5xl text-blue-800 font-extrabold text-center mb-8 tracking-tight">
      Certificates
    </h1>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 w-full max-w-3xl">
      {certificates.map((c, i) => (
        <Card key={i} className="rounded-2xl bg-white/95 border-none dark:bg-black/40 shadow-xl transition-transform hover:scale-105 animate-fade-in p-1">
          <CardHeader className="flex-row items-center gap-2 py-3 px-5">
            <span className={`font-bold text-xs rounded-lg px-3 py-1 mr-2 ${c.color}`}>{c.provider}</span>
            <CardTitle className="font-playfair text-blue-800 text-base">{c.name}</CardTitle>
          </CardHeader>
          <CardContent />
        </Card>
      ))}
    </div>
  </main>
);

export default Certificates;
