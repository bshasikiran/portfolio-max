export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  logo: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Upkody",
    position: "Data Science Intern",
    period: "June 2023 - August 2023",
    description: "Worked on developing a real-time hand gesture detection system using computer vision techniques. Created data visualizations to represent complex datasets in an intuitive manner.",
    logo: "UP",
    skills: ["Python", "Computer Vision", "Data Visualization"]
  },
  {
    id: 2,
    company: "TechnoHacks Edu Tech",
    position: "Web Development Intern",
    period: "January 2023 - March 2023",
    description: "Developed modern web applications using Tailwind CSS and JavaScript. Contributed to multiple projects and gained hands-on experience with front-end development.",
    logo: "TH",
    skills: ["JavaScript", "Tailwind CSS", "Web Development"]
  }
];
