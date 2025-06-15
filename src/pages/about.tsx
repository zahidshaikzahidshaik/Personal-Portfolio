
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const education = [
  {
    institution: "Your University Name",
    degree: "Bachelor of Technology in Computer Science",
    period: "2019 - 2023",
  },
];

const About = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 md:py-28 animate-fade-in">
    <Card className="w-full max-w-3xl mx-auto bg-white/95 dark:bg-black/40 border border-blue-200/70 dark:border-blue-900/80 shadow-2xl rounded-3xl p-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-tr from-blue-50 to-blue-200 dark:from-blue-900/15 dark:to-slate-950 p-8">
        <CardTitle className="font-playfair text-3xl md:text-5xl text-blue-800 text-center">
          About Me
        </CardTitle>
        <CardDescription className="text-center text-base md:text-xl text-muted-foreground">
          Short intro and academic journey.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-8 items-center md:items-start p-8 pt-6">
        {/* Profile photo */}
        <img
          src="/lovable-uploads/19950a5b-fdfb-452d-a9d1-d18dfaafbbff.png"
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-300 shadow-xl mb-3 md:mb-0"
        />
        <div className="flex-1">
          <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-200 text-center md:text-left font-medium">
            Hi, I’m Zahid — a passionate software developer focused on{" "}
            <span className="font-bold text-blue-700">frontend, backend, and data-driven solutions</span>.
            My goal: deliver quality code & clean interfaces while collaborating with creative teams.
          </p>
          {/* Skills badges */}
          <ul className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
            <li className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">React</li>
            <li className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">Python</li>
            <li className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">Spark</li>
            <li className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">SQL</li>
            {/* Add more skills if you'd like */}
          </ul>
          <div>
            <h2 className="font-playfair text-xl text-blue-800 mb-3">Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold text-blue-700">{edu.degree}</p>
                <p className="text-blue-800">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </main>
);

export default About;
