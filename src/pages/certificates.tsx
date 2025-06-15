
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certificates = [
  { 
    provider: "Udemy", 
    name: "React - The Complete Guide (incl Hooks, Redux)", 
    color: "bg-orange-200 text-orange-800" 
  },
  { 
    provider: "AICTE", 
    name: "Python for Data Science", 
    color: "bg-green-200 text-green-800" 
  },
  { 
    provider: "Swayam", 
    name: "Big Data Analytics with Spark", 
    color: "bg-blue-200 text-blue-800" 
  },
  // New certificates with links
  {
    provider: "Congnifyz",
    name: "Internship Certificate",
    color: "bg-purple-200 text-purple-800",
    link: "https://drive.google.com/file/d/1Fltr5Di6ee0yCy0mpnXFj7f-G7T0DNsG/view?usp=sharing"
  },
  {
    provider: "Full Stack Python",
    name: "Development Completion Certificate",
    color: "bg-cyan-200 text-cyan-800",
    link: "https://drive.google.com/file/d/1nrjVHUHSxJ0PJINf-H0b3srZdAapOwtj/view?usp=sharing"
  },
  {
    provider: "NPTEL",
    name: "Cloud Computing Completion Certificate",
    color: "bg-yellow-200 text-yellow-800",
    link: "https://drive.google.com/file/d/1zmEFYkYJFhcfGLI6qHITSrJJ7DuH8-EL/view?usp=sharing"
  },
  {
    provider: "Motion Cut",
    name: "Python Intern Certificate",
    color: "bg-pink-200 text-pink-800",
    link: "https://drive.google.com/file/d/1pQN4601ju831VmO8JnpS4ApVQ-WgHK5_/view?usp=sharing"
  },
  {
    provider: "Python Internship",
    name: "Programming Internship Certificate",
    color: "bg-green-100 text-green-700",
    link: "https://drive.google.com/file/d/1wXd4Z90rJLzlol7GZVnaBGpcNe4m6Xqf/view?usp=sharing"
  },
  {
    provider: "Renu Sharma Foundation",
    name: "Completion Certificate",
    color: "bg-blue-100 text-blue-800",
    link: "https://drive.google.com/file/d/1lRrmkO9LLlt792hka7E3o1LY9bapZGmJ/view?usp=sharing"
  },
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
            {c.link ? (
              <a 
                href={c.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-playfair text-blue-800 underline underline-offset-2 hover:text-blue-500 text-base"
              >
                {c.name}
              </a>
            ) : (
              <CardTitle className="font-playfair text-blue-800 text-base">{c.name}</CardTitle>
            )}
          </CardHeader>
          <CardContent />
        </Card>
      ))}
    </div>
  </main>
);

export default Certificates;
