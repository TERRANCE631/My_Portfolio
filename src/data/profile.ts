
export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export const profileData: ProfileData = {
  name: "Terrance",
  title: "Full Stack Developer & AI Enthusiast",
  summary: "Dedicated full stack developer. Good at crafting scalable web applications and AI-powered solutions. Passionate about creating intuitive user experiences and leveraging cutting-edge technologies to solve complex problems.",
  email: "Tarrancesiyabonga@gmail.com",
  phone: "+27 82 074 0026", 
  location: "Gauteng, Pretoria",
  website: null,
  github: "github.com/Terrance631",
  linkedin: "linkedin.com/in/Terrance",
  twitter: null
};
