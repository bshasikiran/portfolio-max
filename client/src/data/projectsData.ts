export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Hand Gesture Detection ML System",
    description: "Machine learning system for real-time hand gesture recognition using advanced computer vision techniques.",
    image: "gesture-recognition",
    tags: ["Mediapipe", "Hidden Markov Models"],
    github: "https://github.com/bshasikiran",
    inProgress: true
  },
  {
    id: 2,
    title: "Student Database Management System",
    description: "A comprehensive system for managing student data with user-friendly interface and advanced filtering options.",
    image: "database-management",
    tags: ["MySQL", "PHP"],
    github: "https://github.com/bshasikiran",
    demo: "#"
  },
  {
    id: 3,
    title: "Online Auction Website",
    description: "A secure online platform for hosting auctions with real-time bidding and notification systems.",
    image: "auction-website",
    tags: ["Django", "MySQL"],
    github: "https://github.com/bshasikiran",
    demo: "#"
  },
  {
    id: 4,
    title: "AI Chatbot for Customer Support",
    description: "Intelligent chatbot using natural language processing to provide instant customer support and assistance.",
    image: "ai-chatbot",
    tags: ["Django", "NLP"],
    github: "https://github.com/bshasikiran",
    demo: "#"
  },
  {
    id: 5,
    title: "Smart Contract for StarkNet",
    description: "Developing secure and efficient smart contracts for blockchain applications with gas optimization.",
    image: "smart-contract",
    tags: ["Cairo", "Solidity", "Web3"],
    github: "https://github.com/bshasikiran",
    demo: "#"
  }
];
