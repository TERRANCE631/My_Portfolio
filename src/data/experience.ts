
export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechNova Solutions",
    location: "San Francisco, CA",
    startDate: "Jan 2021",
    endDate: "Present",
    description: "Lead developer for enterprise SaaS platform serving over 500K users.",
    responsibilities: [
      "Architected and implemented scalable microservices using Node.js and TypeScript",
      "Led a team of 5 developers to deliver features on time and within budget",
      "Integrated AI capabilities with OpenAI and custom ML models",
      "Optimized database performance resulting in 40% faster query times"
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "OpenAI API"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Frontiers",
    location: "Remote",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    description: "Developed modern web applications for clients across various industries.",
    responsibilities: [
      "Built responsive front-end interfaces using React and Next.js",
      "Developed RESTful APIs and GraphQL services",
      "Implemented CI/CD pipelines for automated testing and deployment",
      "Collaborated with designers to implement pixel-perfect UI components"
    ],
    technologies: ["React", "Next.js", "GraphQL", "Express", "MongoDB", "GitHub Actions"]
  },
  {
    title: "Frontend Developer",
    company: "WebSphere Inc.",
    location: "Seattle, WA",
    startDate: "Jun 2016",
    endDate: "Feb 2018",
    description: "Focused on creating responsive and accessible web interfaces.",
    responsibilities: [
      "Developed and maintained client-facing web applications",
      "Implemented responsive designs using modern CSS frameworks",
      "Optimized front-end performance and accessibility",
      "Collaborated with UX/UI team on design implementation"
    ],
    technologies: ["JavaScript", "React", "SASS", "Webpack", "Jest"]
  }
];
