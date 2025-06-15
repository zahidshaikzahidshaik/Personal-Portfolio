
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  // Example placeholder projects
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

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-20 animate-fade-in">
      <h1 className="font-playfair text-2xl md:text-4xl text-blue-700 font-bold text-center mb-8">Projects</h1>
      <p className="max-w-2xl text-muted-foreground text-center mb-10 text-base md:text-lg">
        A collection of my favorite projects. More coming soon!
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <Card key={i} className="rounded-2xl bg-white/90 border border-blue-100/60 dark:bg-black/30 dark:border-blue-900/70 shadow-lg transition-transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <CardTitle className="font-playfair text-lg text-blue-700">{proj.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground">{proj.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Projects;
