
export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Phishing URL Detection",
    description:
      "Machine Learning powered Django app to detect phishing URLs with real-world dataset. Achieved 97% accuracy using SVM.",
    image: "photo-1488590528505-98d2b5aba04b",
    tech: ["Python", "Django", "ML"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "E-commerce Sales Analysis",
    description:
      "Big data project using PySpark to analyze and visualize sales datasets. Ran on a Spark cluster for scale.",
    image: "photo-1487058792275-0ad4aaf24ca7",
    tech: ["PySpark", "Python"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Weather App",
    description:
      "Weather dashboard using Python, Flask, and OpenWeatherMap API. Clean UI + code snippets available.",
    image: "photo-1461749280684-dccba630e2f6",
    tech: ["Python", "Flask", "API"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Internship Form UI",
    description:
      "Sleek React frontend for internship applications. Demoes my UI and form validation skills.",
    image: "photo-1581091226825-a6a2a5aee158",
    tech: ["React", "TypeScript", "UI"],
    github: "https://github.com/",
    demo: "",
  }
];
