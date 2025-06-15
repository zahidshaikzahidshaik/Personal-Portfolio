
export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    title: "Data Science Intern",
    company: "ABC Analytics",
    period: "June 2023 - Sep 2023",
    description:
      "Built ML models for real client data. Automated ETL pipelines using Python and Spark.",
  },
  {
    title: "Software Engineering Intern",
    company: "XYZ Tech",
    period: "Jan 2023 - May 2023",
    description:
      "Worked on UI for a customer dashboard, improved performance, and created reusable React components.",
  },
];
