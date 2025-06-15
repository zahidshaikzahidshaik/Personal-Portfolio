import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Add the new project with all required details
const projects = [
  {
    title: "Task Management App using React.js",
    description: "A task management application built using React.js that allows users to create, update, and delete tasks. Features task prioritization, due date reminders, progress tracking, and real-time notifications.",
    tech: ["React.js", "JavaScript", "CSS", "Local Storage"],
    github: "", // Add link if available
    demo: ""
  },
  {
    title: "Ecommerce Sales Analysis using Apache Spark",
    description: "An analysis of ecommerce sales data using Apache Spark to gain insights into sales trends and patterns. Includes data cleaning, customer behavior analysis, visualization of key metrics, and seasonal trend analysis.",
    tech: ["Apache Spark", "PySpark", "Data Analysis", "Python"],
    github: "https://github.com/zahidshaikzahidshaik/Ecommerce-Sales-Analysis.git",
    demo: ""
  },
  {
    title: "Skill Compass Resume",
    description: "A modern, AI-powered resume analyzer designed to help job seekers enhance their resumes and gain insights into their skills. Features resume upload, AI-driven analysis, skill highlighting, improvement suggestions, and tailored recommendations.",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/zahidshaikzahidshaik/skill-compass-resume.git",
    demo: "https://ai-resume-analysis.netlify.app/"
  },
  {
    title: "Project One",
    description: "A web app built with React and Python API that showcases dynamic data visualization.",
  },
  {
    title: "Portfolio Site",
    description: "This very portfolio—responsive, themed, and fast!",
  },
  {
    title: "Lovable AI Portfolio Editor",
    description: "An interactive editor web app that helps users build stunning portfolios with real-time AI-powered editing. Supports live preview, drag-and-drop sections, and beautiful dark/light themes.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "AI"],
    github: "",
    demo: ""
  },
];

const gradientArr = [
  "from-blue-400/80 to-cyan-300/80",
  "from-violet-400/80 to-blue-300/80",
  "from-indigo-400/80 to-blue-700/80",
  "from-yellow-300/80 to-blue-200/80"
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
          className={`rounded-2xl group shadow-xl border-none bg-gradient-to-br ${gradientArr[i % gradientArr.length]} dark:from-blue-900 dark:to-blue-800 relative overflow-hidden flex flex-col hover:scale-[1.04] hover:shadow-2xl transition-transform animate-fade-in`}
        >
          <CardHeader>
            <CardTitle className="font-playfair text-lg text-blue-800 group-hover:text-blue-900">{proj.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-blue-900/90 dark:text-blue-100">{proj.description}</CardDescription>
            {proj.tech && (
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech.map(tech => (
                  <span key={tech} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full font-semibold">{tech}</span>
                ))}
              </div>
            )}
            {(proj.github || proj.demo) && (
              <div className="flex gap-4 mt-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded font-bold transition"
                  >
                    GitHub
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-700 text-white px-3 py-1 rounded font-bold transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </main>
);

export default Projects;
