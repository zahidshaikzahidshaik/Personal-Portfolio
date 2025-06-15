
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const education = [
  {
    institution: "Your University Name",
    degree: "Bachelor of Technology in Computer Science",
    period: "2019 - 2023",
  },
];

const About = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-20 animate-fade-in">
    <Card className="w-full max-w-2xl mx-auto bg-white/90 dark:bg-black/30 border border-blue-100/60 dark:border-blue-900/70 shadow-xl rounded-3xl">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl md:text-4xl text-blue-700 text-center">About Me</CardTitle>
        <CardDescription className="text-center text-lg text-muted-foreground">
          A quick introduction and my academic background.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center md:flex-row md:items-center md:gap-8">
          <img
            src="/lovable-uploads/19950a5b-fdfb-452d-a9d1-d18dfaafbbff.png"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md mb-4 md:mb-0"
          />
          <div className="flex-1">
            <p className="mb-3 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200 text-center md:text-left">
              Hi, I’m Zahid — a passionate software developer focused on <span className="font-semibold text-blue-700">frontend, backend, and data-driven solutions</span>. I thrive on delivering quality code, clean interfaces, and collaborating with creative teams.
            </p>
            <ul className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
              <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">React</li>
              <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Python</li>
              <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Spark</li>
              <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">SQL</li>
              {/* Add more skills if needed */}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-playfair text-xl text-blue-800 mb-4 text-center md:text-left">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold text-blue-700">{edu.degree}</p>
              <p className="text-blue-800">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </main>
);

export default About;

