
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// New experiences array based on user input
const experiences = [
  {
    role: "FrontEnd Developer Intern",
    company: "Renu Sharma Foundation",
    location: "San Francisco, CA",
    period: "Feb 2025 - June 2025",
    points: [
      "Led a team of 5 developers in building scalable web applications using React and Node.js",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Architected microservices infrastructure that improved system reliability by 30%",
      "Mentored junior developers and conducted code reviews to maintain code quality"
    ]
  },
  {
    role: "Python Developer Intern",
    company: "M",
    location: "Bangalore, India",
    period: "Summer 2019",
    points: [
      "Developed RESTful APIs using Express.js and MongoDB",
      "Created responsive UI components with React and Material UI",
      "Participated in Agile development processes including daily stand-ups and sprint planning",
      "Collaborated with the QA team to identify and fix bugs"
    ]
  },
];

const Experience = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
    <h1 className="font-playfair text-4xl md:text-5xl font-extrabold text-blue-800 mb-5 tracking-tight text-center">Experience</h1>
    <p className="text-muted-foreground text-center mb-10 text-base md:text-lg max-w-2xl">
      A timeline of my work and key roles.
    </p>
    <div className="w-full max-w-2xl flex flex-col gap-6 relative">
      {/* Vertical line for timeline effect */}
      <div className="absolute left-4 top-6 bottom-6 w-1 bg-blue-200 dark:bg-blue-800/50 rounded-lg z-0 hidden md:block" />
      {experiences.map((exp, i) => (
        <Card
          key={i}
          className={`relative z-10 rounded-2xl shadow-lg border-none bg-white/95 dark:bg-black/40
            flex md:ml-6 transition-transform hover:scale-[1.025] hover:shadow-2xl hover:-translate-y-1 group animate-fade-in`}
        >
          {/* Dot indicator */}
          <span className="absolute -left-6 top-8 w-5 h-5 bg-blue-700 border-4 border-white dark:border-black rounded-full shadow-md hidden md:block group-hover:scale-110 transition" />
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-1">
              <CardTitle className="font-playfair text-xl text-blue-800">{exp.role}</CardTitle>
              <span className="text-xs bg-blue-100 text-blue-700 font-bold rounded px-2 py-1">{exp.period}</span>
            </div>
            <span className="block text-blue-700 font-medium text-sm">{exp.company}, {exp.location}</span>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-blue-900/80 dark:text-blue-100 text-md md:text-base space-y-1 pl-1">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </main>
);

export default Experience;
