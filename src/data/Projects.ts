export interface project {
  name: string;
  skills?: string[];
  frontend: string;
  backend: string;
  image: string;
  project_link: string;
  id: number;
};

export const projectList: project[] = [
  {
    name: "Real time chatting app",
    skills: [
      "React",
      "Tailwindcss",
      "Zustand",
      "daisyui",
      "Axios",
      "Node.js",
      "MySQL",
      "Socket.io",
      "Socket.io-client",
      "JWT"
    ],
    frontend: "",
    backend: "",
    project_link: "",
    id: 1,
    image: "/assets/ChatApp.png",
  },
  {
    name: "Dashboard template",
    skills: [
      "React",
      "Tailwindcss",
      "Typescript",
      "Axios",
      "Node.js",
      "MySQL",
      "JWT"
    ],
    frontend: "",
    backend: "",
    project_link: "",
    id: 2,
    image: "/assets/Contract.png",
  },
  {
    name: "Animation App",
    skills: [
      "React",
      "Tailwindcss",
      "Gsap",
      "Framer-motion",
      "CSS"
    ],
    frontend: "",
    backend: "",
    project_link: "",
    id: 3,
    image: "/assets/Contract.png",
  },
  {
    name: "Movies API App",
    skills: [
      "React",
      "Tailwindcss",
      "Gsap",
      "Framer-motion",
      "CSS"
    ],
    frontend: "",
    backend: "",
    project_link: "",
    id: 4,
    image: "/assets/Contract.png",
  }
];
