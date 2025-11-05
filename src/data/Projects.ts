export interface project {
  name: string;
  skills?: string[];
  frontend: string;
  backend: string;
  image: string;
  project_link: string;
  id: number;
  fullstack?: boolean;
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
    fullstack: true,
    frontend: "https://github.com/TERRANCE631/Real_Chat_Frontend",
    backend: "https://github.com/TERRANCE631/Real_Chat_Backend",
    project_link: "https://real-chat-frontend-three.vercel.app",
    id: 1,
    image: "/assets/ChatApp.png",
  },
  {
    name: "Dashboard template",
    skills: [
      "React",
      "Tailwindcss",
      "Typescript"
    ],
    fullstack: false,
    frontend: "https://github.com/TERRANCE631/Dashboard_Template_Updated",
    backend: "",
    project_link: "https://dashboard-template-updated.vercel.app",
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
    fullstack: false,
    frontend: "https://github.com/TERRANCE631/Animated_WebApp",
    backend: "",
    project_link: "https://animated-web-app-jade.vercel.app",
    id: 3,
    image: "/assets/Animated.png",
  }
];
