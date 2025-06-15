
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Project One",
    description: "A web app built with React and Python API that showcases dynamic data visualization.",
  },
  {
    title: "Project Two",
    description: "An automation script leveraging Spark for fast ETL workflows.",
  },
  {
    title: "Portfolio Site",
    description: "This very portfolio—responsive, themed, and fast!",
  },
];

const gradientArr = [
  "from-blue-400/80 to-cyan-300/80",
  "from-violet-400/80 to-blue-300/80",
  "from-indigo-400/80 to-blue-700/80",
];

const Projects = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
    <h1 className="font-playfair text-4xl md:text-5xl text-blue-800 font-extrabold mb-5 tracking-tight">Projects</h1>
    <p className="max-w-2xl text-muted-foreground text-center mb-10 text-base md:text-lg">
      A collection of my favorite projects. More coming soon!
    </p>
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl mx-auto">
      {projects.map((proj, i) => (
        <Card
          key={i}
          className={`rounded-2xl group shadow-xl border-none bg-gradient-to-br ${gradientArr[i % gradientArr.length]} dark:from-blue-900 dark:to-blue-800 relative overflow-hidden
            flex flex-col hover:scale-[1.04] hover:shadow-2xl transition-transform animate-fade-in`}
        >
          <CardHeader>
            <CardTitle className="font-playfair text-lg text-blue-800 group-hover:text-blue-900">{proj.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-blue-900/90 dark:text-blue-100">{proj.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </main>
);

export default Projects;
