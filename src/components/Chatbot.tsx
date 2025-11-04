import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Mail, Linkedin, Github, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// =====================
// Type Definitions
// =====================
type FlowKey =
  | "greeting"
  | "skills"
  | "experience"
  | "education"
  | "projects"
  | "contact"
  | "github";

interface Option {
  text: string;
  next: FlowKey;
  action?: "downloadResume";
}

interface Message {
  type: "user" | "bot";
  text: string;
  timestamp: Date;
  options?: Option[];
}

// =====================
// Personal Information
// =====================
const PERSONAL_INFO = {
  name: "Terrance's Personal Assistant",
  title: "Full Stack Developer",
  email: "Tarrancesiyabonga@gmail.com",
  linkedin: "linkedin.com/in/alexjohnson",
  github: "github.com/alexjohnson",
  availability: "Available for new opportunities",
  location: "Pretoria, South Africa",
};

// =====================
// Conversation Flows
// =====================
const CONVERSATION_FLOWS: Record<FlowKey, { message: string; options: Option[] }> = {
  greeting: {
    message: `Hello! 👋 I am ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}. I assist visitors in learning about Terrance's background and professional skills. What would you like to explore today?`,
    options: [
      { text: "Skills & Expertise", next: "skills" },
      { text: "Work Experience", next: "experience" },
      { text: "Education", next: "education" },
      { text: "Contact Info", next: "contact" },
    ],
  },
  skills: {
    message:
      "Terrance has extensive experience in modern web development. His expertise includes:\n\n• Frontend: React, TypeScript, Three.js, Tailwind CSS, and style plugins\n• Backend: Node.js, MySQL, REST APIs\n• Cloud Services: Cloudinary\n• Tools: Git, GitHub, Render, Netlify, Vercel\n\nHe is committed to building scalable, user-friendly applications with clean code and best practices.",
    options: [
      { text: "Tell me about projects", next: "projects" },
      { text: "Work Experience", next: "experience" },
      { text: "Get in touch", next: "contact" },
      { text: "Back to menu", next: "greeting" },
    ],
  },
  experience: {
    message:
      "💼 During his WIL at a citrus farm, Terrance noticed that the farm’s location was hard to find and the website was outdated. To address this, he developed a modern website that improves accessibility for students and provides an online platform to market the farm.",
    options: [
      { text: "View Terrance's skills", next: "skills" },
      { text: "See projects", next: "projects" },
      { text: "Back to menu", next: "greeting" },
    ],
  },
  education: {
    message:
      "🎓 Terrance has completed several courses on Udemy, focusing on React and Tailwind CSS. He gained practical skills by building hands-on projects that demonstrate his proficiency in modern web development.",
    options: [
      { text: "View Terrance's skills", next: "skills" },
      { text: "Work Experience", next: "experience" },
      { text: "Get in touch", next: "contact" },
      { text: "Back to menu", next: "greeting" },
    ],
  },
  projects: {
    message:
      "🚀 Notable projects include:\n\n1. Real-Time Chat App – A full-stack application built with React and Node.js, featuring fast real-time communication using socket.io.\n\n2. Dashboard App – A frontend analytics dashboard for visualizing data and insights.\n\n3. Animation App – A project exploring web animations and user-friendly interactive tools.\n\nTerrance enjoys creating solutions that solve real-world problems effectively.",
    options: [
      { text: "Check his GitHub", next: "github" },
      { text: "View his skills", next: "skills" },
      { text: "Get in touch", next: "contact" },
      { text: "Back to menu", next: "greeting" },
    ],
  },
  contact: {
    message: `📬 Connect with Terrance! You can reach him through the following channels:\n\n📧 Email: ${PERSONAL_INFO.email}\n💼 LinkedIn: ${PERSONAL_INFO.linkedin}\n💻 GitHub: ${PERSONAL_INFO.github}\n📍 Location: ${PERSONAL_INFO.location}\n\n✅ He is currently available for new opportunities and typically responds within 24 hours.`,
    options: [
      { text: "View his skills", next: "skills" },
      { text: "Work Experience", next: "experience" },
      { text: "Start over", next: "greeting" },
    ],
  },
  github: {
    message:
      "You can explore Terrance's code and projects on GitHub. He believes in learning publicly and contributing to the developer community. Feel free to browse his repositories:\n\n" +
      `${PERSONAL_INFO.github}`,
    options: [
      { text: "View his skills", next: "skills" },
      { text: "Get in touch", next: "contact" },
      { text: "Back to menu", next: "greeting" },
    ],
  },
};

// =====================
// Chatbot Component
// =====================
interface ChatbotProps {
  initialOpen?: boolean;
}

export default function Chatbot({ initialOpen = false }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => addBotMessage("greeting"), 500);
    }
  }, [isOpen]);

  const addBotMessage = (flowKey: FlowKey) => {
    setIsTyping(true);

    setTimeout(() => {
      const flow = CONVERSATION_FLOWS[flowKey];
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: flow.message,
          options: flow.options,
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleOptionClick = (option: Option) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: option.text, timestamp: new Date() },
    ]);

    setTimeout(() => addBotMessage(option.next), 500);
  };

  const resetChat = () => {
    setMessages([]);
    setTimeout(() => addBotMessage("greeting"), 300);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </Button>
            <div className="absolute -top-2 -right-2 h-4 w-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)]"
          >
            <Card className="flex flex-col h-[600px] max-h-[80vh] shadow-2xl overflow-hidden border-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-white/80">{PERSONAL_INFO.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                {messages.map((message, index) => (
                  <motion.div
                    key={`${message.timestamp.getTime()}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div className={`max-w-[80%] ${message.type === "user" ? "order-1" : ""}`}>
                      <div
                        className={`rounded-2xl px-4 py-3 ${message.type === "user"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-white shadow-md border border-gray-100"
                          }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>

                      {/* Quick Reply Options */}
                      {message.options && message.type === "bot" && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.options.map((option) => (
                            <Button
                              key={`${option.text}-${option.next}`}
                              onClick={() => handleOptionClick(option)}
                              variant="outline"
                              size="sm"
                              className="rounded-full text-xs bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                            >
                              {option.text}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white shadow-md border border-gray-100 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Footer with social links */}
              <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-center gap-2">
                <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Email">
                  <Mail className="w-4 h-4 text-gray-600" />
                </a>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="LinkedIn">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
                <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="GitHub">
                  <Github className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
