
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => (
  <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-20 animate-fade-in">
    <Card className="w-full max-w-2xl mx-auto bg-white/90 dark:bg-black/30 border border-blue-100/60 dark:border-blue-900/70 shadow-xl rounded-3xl">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl md:text-4xl text-blue-700 text-center">About Me</CardTitle>
        <CardDescription className="text-center text-lg text-muted-foreground">
          Get to know more about my skills, passions, and journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-3 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200 text-center">
          Hi, I’m Zahid &mdash; a frontend and Python developer passionate about <span className="font-semibold text-blue-700">code that delivers impact</span>.
        </p>
        <ul className="flex flex-wrap gap-2 justify-center mb-4">
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">React</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Python</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Spark</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">SQL</li>
          {/* Add more skills if needed */}
        </ul>
        <p className="text-center text-gray-500 dark:text-gray-300 text-sm md:text-base">
          I thrive on solving real-world problems, building slick interfaces, and collaborating with creative teams. 
          <br />
          <span className="text-blue-600 font-medium">Let’s build something amazing together!</span>
        </p>
      </CardContent>
    </Card>
  </main>
);

export default About;
