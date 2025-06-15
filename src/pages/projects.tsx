
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
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
    // ...add more here as needed
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 md:py-28 animate-fade-in">
      <h1 className="font-playfair text-3xl md:text-5xl text-blue-800 font-bold text-center mb-8">Projects</h1>
      <p className="max-w-2xl text-muted-foreground text-center mb-10 text-base md:text-lg">
        A collection of my favorite projects. More coming soon!
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <Card key={i} className="rounded-2xl bg-white/95 dark:bg-black/40 border border-blue-200/60 dark:border-blue-900/60 shadow-xl transition-transform hover:scale-105 animate-fade-in">
            <CardHeader>
              <CardTitle className="font-playfair text-lg text-blue-800">{proj.title}</CardTitle>
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
