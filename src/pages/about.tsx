
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const education = [
  {
    institution: "Your University Name",
    degree: "Bachelor of Technology in Computer Science",
    period: "2019 - 2023",
  },
];

const skills = [
  "React", "Python", "Spark", "SQL"
];

const About = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 md:py-32 animate-fade-in bg-gradient-to-br from-blue-50 via-white to-blue-200 dark:from-black dark:via-slate-900 dark:to-blue-900">
    <Card className="w-full max-w-4xl mx-auto shadow-2xl rounded-3xl border-0 bg-white/80 dark:bg-black/50 py-0 px-0 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-0">
      {/* Floating profile photo */}
      <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center p-8 md:pt-14 md:pl-12 md:pr-4 z-10">
        <div className="relative -mt-16 md:mt-0 md:-ml-8 h-40 w-40 md:h-48 md:w-48 rounded-full shadow-xl bg-gradient-to-t from-blue-300/50 to-blue-700/70 border-4 border-white overflow-hidden">
          <img
            src="/lovable-uploads/19950a5b-fdfb-452d-a9d1-d18dfaafbbff.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-1 p-6 md:p-12 flex flex-col gap-4">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="font-playfair text-blue-800 text-3xl md:text-4xl text-left">About Me</CardTitle>
          <CardDescription className="text-blue-900/80 dark:text-blue-100 text-base md:text-lg text-left mt-1">
            Software developer passionate about <span className="font-semibold text-blue-800">frontend, backend, and data-driven solutions</span>.
            Focused on quality code, clean interfaces, and working with creative teams.
          </CardDescription>
        </CardHeader>
        {/* Skills badges */}
        <div>
          <h2 className="font-playfair text-xl text-blue-800 mb-2 mt-1">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold shadow hover:scale-105 transition">{skill}</li>
            ))}
          </ul>
        </div>
        {/* Education */}
        <div>
          <h2 className="font-playfair text-xl text-blue-800 mb-2">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-1">
              <p className="font-semibold text-blue-700">{edu.degree}</p>
              <p className="text-blue-800">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </main>
);

export default About;
