
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    period: "2023 - Present",
    desc: "Building performant user interfaces with React and Tailwind; collaborating with designers and backend engineers.",
  },
  {
    role: "Python Developer",
    company: "DataOps Co.",
    period: "2021 - 2023",
    desc: "Developed scalable data processing pipelines using Spark and Python.",
  },
];

const Experience = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 md:py-28 animate-fade-in">
    <h1 className="font-playfair text-3xl md:text-5xl text-blue-800 font-bold text-center mb-8">Experience</h1>
    <p className="max-w-2xl text-muted-foreground text-center mb-8 text-base md:text-lg">
      Timeline of my work &amp; key roles.
    </p>
    <div className="space-y-8 w-full max-w-xl mx-auto">
      {experiences.map((exp, i) => (
        <Card key={i} className="border-l-4 border-blue-700 bg-white/90 dark:bg-black/40 rounded-2xl shadow-lg px-1">
          <CardHeader className="pb-2">
            <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
              <CardTitle className="font-playfair text-lg text-blue-800">{exp.role}</CardTitle>
              <span className="text-xs text-blue-600 font-bold">{exp.period}</span>
            </div>
            <span className="block text-blue-800 font-medium text-sm">{exp.company}</span>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm md:text-base">{exp.desc}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </main>
);

export default Experience;
