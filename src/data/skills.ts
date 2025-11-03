
export interface Skill {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "devops" | "other";
}

export const skillsData: Skill[] = [
  { name: "React", level: 5, category: "frontend" },
  { name: "TypeScript", level: 2, category: "frontend" },
  { name: "TailwindCSS", level: 4, category: "frontend" },
  { name: "Three.js", level: 3, category: "frontend" },
  { name: "Framer-motion", level: 3, category: "frontend" },
  { name: "CSS", level: 4, category: "frontend" },
  { name: "HTML5", level: 4, category: "frontend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express", level: 4, category: "backend" },
  { name: "MySQL", level: 4, category: "backend" },
  { name: "Github", level: 5, category: "devops" },
  { name: "Netlify", level: 4, category: "devops" },
  { name: "Render", level: 4, category: "devops" },
  { name: "GSAP Animation", level: 3, category: "frontend" }
];
