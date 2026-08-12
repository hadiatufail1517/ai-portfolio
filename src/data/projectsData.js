export const projectsData = [
  {
    id: "ai-interview",
    title: "AI Interview Platform",
    featured: true,
    rank: 1,
    shortDescription: "An AI-powered mock interview platform designed to help candidates practice realistic technical and behavioral interviews with automated evaluation.",
    category: "Full-Stack & AI",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "JWT", "AI APIs"],
    overview: "The AI Interview Platform is a MERN-based mock interview platform engineered to simulate real-world technical and behavioral interview sessions. It provides end-to-end interview workflows including resume uploading, dynamic AI question synthesis based on role and experience, interactive timed interview sessions, and automated response scoring with actionable feedback.",
    problem: "Candidates preparing for competitive software engineering interviews often lack realistic, low-pressure practice environments that provide objective, structured, and instant feedback on their technical answers and pacing.",
    solution: "A complete full-stack web platform where candidates can customize mock interview parameters, upload resumes to contextualize questions, complete timed response sessions, and receive instant AI-driven evaluation reports through a personalized dashboard.",
    keyFeatures: [
      "Authentication & authorization for secure candidate account management",
      "Candidate profiles with resume upload and profile customization",
      "Interview setup with customizable target role and difficulty selection",
      "Dynamic AI question generation tailored to the candidate's profile",
      "Interactive interview session engine capturing candidate responses in real time",
      "Integrated countdown timer for authentic interview pacing",
      "Automated answer evaluation assessing technical depth and clarity",
      "Constructive feedback breakdown highlighting strengths and areas for improvement",
      "Comprehensive candidate dashboard displaying session history and performance metrics"
    ],
    contribution: [
      "Engineered the candidate authentication and profile management module",
      "Implemented resume upload handling and parsed context for session setup",
      "Built the interactive interview session engine with timer and answer capture",
      "Integrated AI services for dynamic question generation and response scoring",
      "Designed the candidate dashboard interface to track performance metrics"
    ],
    technicalImplementation: "Developed using the MERN stack (MongoDB, Express, React, Node.js). The frontend uses React with modular component architecture and responsive design. The backend provides RESTful API endpoints for authentication, profile data persistence, and interview session state management. Asynchronous AI services handle question generation and evaluation pipelines.",
    challenges: "Managing real-time interview state transitions while maintaining timer accuracy and handling asynchronous AI evaluation responses reliably across varying network latencies.",
    screenshots: [
      { id: "ai-interview-1", title: "Candidate Dashboard & Setup", filename: "dashboard.png", description: "Candidate dashboard displaying interview history, profile status, and interview configuration setup." },
      { id: "ai-interview-2", title: "Active Interview Session & Timer", filename: "session.png", description: "Interactive interview session screen showing real-time AI-generated questions and active countdown timer." },
      { id: "ai-interview-3", title: "Evaluation & Feedback View", filename: "evaluation.png", description: "Comprehensive answer evaluation report detailing response scores and targeted feedback." }
    ],
    githubUrl: null, // Editable repository link
    liveUrl: null    // Editable live deployment link
  },
  {
    id: "ai-capstone",
    title: "AI Capstone",
    featured: true,
    rank: 2,
    shortDescription: "A comprehensive artificial intelligence capstone project demonstrating practical AI modeling, data processing, and algorithmic problem solving.",
    category: "AI & Machine Learning",
    technologies: ["Python", "Machine Learning", "NLP", "React", "Node.js"],
    overview: "The AI Capstone project explores practical applications of artificial intelligence and machine learning methodologies. Developed as a major software engineering milestone, it integrates computational models with modern development workflows to process complex data and solve real-world problems.",
    problem: "Real-world engineering workflows frequently require intelligent data analysis and automated decision support that standard rule-based software cannot provide.",
    solution: "An integrated AI architecture that combines data preprocessing pipelines, trained machine learning models, and intuitive user interfaces to deliver intelligent automated outputs.",
    keyFeatures: [
      "Data ingestion, cleaning, and preprocessing pipelines",
      "Machine learning / NLP model integration for intelligent computation",
      "Modular architecture allowing easy parameter tuning and model updates",
      "Evaluation routines to validate model performance and output accuracy",
      "Structured documentation and reproducible experiment workflows"
    ],
    contribution: [
      "Designed and implemented core algorithmic pipelines and data structures",
      "Configured model training, validation, and evaluation routines",
      "Structured project repository following software engineering best practices",
      "Documented technical specifications and execution steps"
    ],
    technicalImplementation: "Built using Python with scientific computing libraries alongside modern web interfaces. The system is designed with modular layers separating data processing, model inference, and presentation components.",
    challenges: "Ensuring model consistency across diverse input datasets and optimizing inference execution times.",
    screenshots: [
      { id: "ai-capstone-1", title: "Model Architecture & Pipeline Overview", filename: "pipeline.png", description: "Pipeline architecture demonstrating data flow from input to model inference." },
      { id: "ai-capstone-2", title: "Execution & Evaluation Results", filename: "evaluation.png", description: "Detailed performance evaluation and output metrics display." }
    ],
    githubUrl: "https://github.com/hadiatufail1517/ai-capstone",
    liveUrl: null
  },
  {
    id: "ai-capstone-setup",
    title: "AI Capstone Setup (SE-Assist)",
    featured: true,
    rank: 3,
    shortDescription: "An AI-driven software engineering automation platform designed to streamline requirement processing, SRS generation, UML modeling, and testing workflows.",
    category: "AI & Software Engineering Tools",
    technologies: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "NLP"],
    overview: "AI Capstone Setup (SE-Assist) is an intelligent software engineering assistant that automates critical phases of the software development lifecycle (SDLC). By leveraging natural language processing and modern full-stack technologies, it assists engineering teams in transforming raw requirements into structured SRS documents, UML diagrams, and automated test cases.",
    problem: "Software requirement analysis, documentation drafting, and UML diagram creation are traditionally time-consuming, error-prone, and prone to traceability gaps.",
    solution: "An integrated platform that processes natural language requirements to automatically generate Software Requirements Specifications (SRS), UML diagrams, automated test artifacts, and maintain end-to-end traceability across project artifacts.",
    keyFeatures: [
      "Intelligent requirement processing and natural language parsing",
      "Automated Software Requirements Specification (SRS) generation",
      "UML diagram generation based on processed system requirements",
      "Automated test case generation and testing automation support",
      "End-to-end requirement traceability across generated artifacts",
      "Development automation utilities to accelerate project kickoff"
    ],
    contribution: [
      "Collaborated on designing the hybrid React and Python/FastAPI architecture",
      "Implemented UI workflows for uploading and structuring requirement specifications",
      "Developed backend pipelines connecting NLP models to SRS and UML generator services",
      "Configured database schemas to maintain traceability links between requirements and outputs"
    ],
    technicalImplementation: "Built with a dual-service architecture: a React client for the user interface, Node.js and Python (FastAPI) services for NLP and AI-driven generation pipelines, with MongoDB handling artifact storage and document metadata.",
    challenges: "Structuring unstructured text inputs into strict, standards-compliant SRS sections and generating valid UML definitions deterministically.",
    screenshots: [
      { id: "ai-capstone-setup-1", title: "Requirement Processing Workspace", filename: "requirements.png", description: "Input and parsing interface for raw software requirements." },
      { id: "ai-capstone-setup-2", title: "SRS & UML Generation View", filename: "srs-uml.png", description: "Automated generation preview showing structured SRS sections and UML diagrams." },
      { id: "ai-capstone-setup-3", title: "Traceability Matrix & Test Automation", filename: "traceability.png", description: "Traceability matrix mapping requirements to generated test cases and diagrams." }
    ],
    githubUrl: "https://github.com/hadiatufail1517/ai-capstone-setup",
    liveUrl: null
  },
  {
    id: "pharmacare",
    title: "Pharmacare",
    featured: true,
    rank: 4,
    shortDescription: "A full-stack pharmacy and healthcare management web application built with React, Node.js, Express, and MongoDB.",
    category: "Full-Stack Web Development",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    overview: "Pharmacare is a full-stack web application developed to manage pharmacy operations, inventory tracking, and customer-facing healthcare services. It utilizes a clean client-server architecture to provide responsive user interfaces backed by a scalable REST API and persistent database storage.",
    problem: "Manual pharmacy record management and fragmented inventory tracking can lead to stock discrepancies, delayed dispensing, and inefficient operational workflows.",
    solution: "A unified full-stack system providing structured inventory control, order management, and secure data access through a modern React frontend and Express/MongoDB backend.",
    keyFeatures: [
      "Full-stack client-server architecture with React and Express",
      "Structured MongoDB database models for inventory and operational records",
      "RESTful API endpoints for CRUD operations and data synchronization",
      "Responsive user interface designed for desktop and mobile devices",
      "Modular backend service layers ensuring code maintainability and separation of concerns"
    ],
    contribution: [
      "Developed responsive frontend views using React and modern CSS",
      "Implemented RESTful API endpoints in Express.js for data operations",
      "Designed and structured MongoDB schemas and data models",
      "Integrated frontend client with backend services for seamless state updates"
    ],
    technicalImplementation: "Organized into a distinct client and server project structure. The client is built with React components managing UI state and API requests. The server is built with Node.js and Express.js, featuring controller-based routing and Mongoose models for MongoDB data persistence.",
    challenges: "Designing clean data schemas that accommodate inventory updates accurately while maintaining responsive UI rendering across operations.",
    screenshots: [
      { id: "pharmacare-1", title: "Pharmacy Management Dashboard", filename: "dashboard.png", description: "Overview of key metrics, inventory counts, and operational summaries." },
      { id: "pharmacare-2", title: "Inventory & Catalog View", filename: "inventory.png", description: "Structured product catalog and stock management interface." }
    ],
    githubUrl: null, // Editable repository link
    liveUrl: null
  },
  {
    id: "bug-tracking",
    title: "Bug Tracking System",
    featured: true,
    rank: 5,
    shortDescription: "A robust software issue and bug tracking web application built with React, Tailwind CSS, Node.js, Express, MongoDB, and secure JWT authentication.",
    category: "Full-Stack Web Development",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    overview: "The Bug Tracking System is a dedicated issue management application built to help software development teams log, track, assign, and resolve bugs efficiently. It features secure user authentication and a responsive user interface.",
    problem: "Development teams need a focused, lightweight system to capture, categorize, and track bugs through their lifecycle without the overhead of overly complex project management tools.",
    solution: "A streamlined bug tracking application featuring secure user authentication with password hashing, issue status management, severity tags, and clear resolution workflows.",
    keyFeatures: [
      "Secure user authentication with JWT tokens and bcrypt password encryption",
      "Comprehensive bug tracking functionality (create, view, update, resolve bugs)",
      "Issue categorization by severity, status, and assignment",
      "Modern and responsive interface styled with Tailwind CSS",
      "Persistent MongoDB storage for issue logs and user records"
    ],
    contribution: [
      "Built the full authentication flow using JWT and bcrypt in Node.js/Express",
      "Developed interactive React components with Tailwind CSS for issue management",
      "Designed MongoDB data models for issues, categories, and user associations",
      "Created RESTful endpoints for bug filtering, status updates, and reporting"
    ],
    technicalImplementation: "Built using the MERN stack with Tailwind CSS styling. User passwords are encrypted with bcrypt before saving to MongoDB, and protected routes are secured via JWT bearer tokens. React state handles dynamic filtering and real-time issue updates.",
    challenges: "Implementing secure authentication middleware and managing multi-state issue transitions seamlessly across the client and server.",
    screenshots: [
      { id: "bug-tracking-1", title: "Issue Dashboard & Overview", filename: "dashboard.png", description: "Central view of active, in-progress, and resolved issues." },
      { id: "bug-tracking-2", title: "Bug Detail & Status Management", filename: "issue-detail.png", description: "Detailed bug report page showing reproduction steps, severity, and status controls." }
    ],
    githubUrl: "https://github.com/hadiatufail1517/Bug-Tracking",
    liveUrl: null
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    featured: false,
    rank: 6,
    shortDescription: "An intelligent conversational chatbot application designed for natural language query handling and interactive messaging.",
    category: "AI & NLP Application",
    technologies: ["Python", "NLP", "JavaScript", "REST API", "HTML/CSS"],
    overview: "The AI Chatbot application provides an interactive conversational interface that processes user queries and returns relevant, context-aware responses. It demonstrates the practical application of NLP principles and real-time frontend messaging.",
    problem: "Users often need fast, automated answers to common inquiries without waiting for manual human assistance.",
    solution: "A responsive chatbot application capable of interpreting user input intent and providing structured, accurate conversational responses in real time.",
    keyFeatures: [
      "Real-time conversational chat interface with dynamic message bubbles",
      "Natural language query parsing and intent identification",
      "Modular response generation engine",
      "Clean, accessible layout with smooth scrolling and message history",
      "Easily configurable knowledge and response rules"
    ],
    contribution: [
      "Built the conversational user interface and chat history state handling",
      "Configured query parsing logic and automated response mappings",
      "Implemented input sanitization and responsive layout styling"
    ],
    technicalImplementation: "Developed with clean component structures for message rendering and asynchronous API handling for conversational dispatching.",
    challenges: "Handling ambiguous user prompts and delivering quick response latencies in the client view.",
    screenshots: [
      { id: "chatbot-1", title: "Chat Interface & Conversation Stream", filename: "chat-view.png", description: "Interactive conversational window displaying user queries and system responses." }
    ],
    githubUrl: "https://github.com/hadiatufail1517/chatbot",
    liveUrl: null
  },
  {
    id: "paf-portal",
    title: "PAF Portal",
    featured: false,
    rank: 7,
    shortDescription: "A dedicated institutional portal web application designed for streamlined information access, user management, and portal operations.",
    category: "Web Application",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    overview: "The PAF Portal is a structured web application engineered to facilitate portal workflows, user administration, and institutional data access. It centralizes administrative tasks into a clean, modern interface.",
    problem: "Decentralized information systems create friction for users looking for timely portal updates, resources, and administrative tools.",
    solution: "A centralized web portal offering structured navigation, role-based access to resources, and clear administrative management views.",
    keyFeatures: [
      "Centralized user dashboard and portal navigation",
      "Structured resource management and announcement workflows",
      "Role-appropriate content viewing and data protection",
      "Responsive layout for mobile and desktop access"
    ],
    contribution: [
      "Constructed modular React views for portal navigation and announcements",
      "Structured server endpoints for portal data retrieval and updates",
      "Optimized layout responsiveness across various display sizes"
    ],
    technicalImplementation: "Built using React on the frontend with a Node.js/Express backend, providing structured JSON APIs for portal resources and user management.",
    challenges: "Structuring multi-tiered information hierarchies into a clean, uncluttered user interface.",
    screenshots: [
      { id: "paf-portal-1", title: "Portal Dashboard", filename: "portal-dashboard.png", description: "Overview of portal resources, announcements, and navigation options." }
    ],
    githubUrl: "https://github.com/hadiatufail1517/PAF-Portal",
    liveUrl: null
  },
  {
    id: "foundation-assignment",
    title: "Foundation Assignment",
    featured: false,
    rank: 8,
    shortDescription: "A foundational software engineering assignment demonstrating core programming algorithms, object-oriented concepts, and clean coding standards.",
    category: "Software Engineering Fundamentals",
    technologies: ["JavaScript", "HTML", "CSS", "Problem Solving", "Git"],
    overview: "The Foundation Assignment repository encompasses fundamental software engineering exercises, data structure implementations, and algorithmic problem-solving tasks. It highlights core competency in code organization and analytical thinking.",
    problem: "Mastering complex software architectures requires a rock-solid understanding of foundational programming concepts, clean design, and modular code.",
    solution: "A well-structured codebase demonstrating implementation of fundamental computational algorithms, test routines, and clean documentation.",
    keyFeatures: [
      "Implementation of fundamental data structures and algorithmic routines",
      "Modular and cleanly commented codebase following conventions",
      "Structured test scenarios validating correctness of implementations",
      "Version controlled repository with clear commit progression"
    ],
    contribution: [
      "Engineered algorithmic solutions adhering to optimal time and space complexity",
      "Authored clean modular functions with comprehensive internal documentation",
      "Maintained version control best practices throughout the repository"
    ],
    technicalImplementation: "Structured with pure modular scripts and test harnesses focusing on algorithmic correctness and readability.",
    challenges: "Optimizing algorithmic solutions for edge cases while ensuring rigorous code clarity.",
    screenshots: [
      { id: "foundation-assignment-1", title: "Code Structure & Output", filename: "code-overview.png", description: "Structured codebase overview and algorithmic execution flow." }
    ],
    githubUrl: "https://github.com/hadiatufail1517/foundation-assignment",
    liveUrl: null
  },
  {
    id: "ai-portfolio",
    title: "AI Portfolio",
    featured: false,
    rank: 9,
    shortDescription: "A modern software portfolio application showcasing AI-powered applications, software projects, and interactive developer profiles.",
    category: "AI & Web Development",
    technologies: ["React", "JavaScript", "AI Integration", "CSS", "Vite"],
    overview: "The AI Portfolio project is a modern web application designed to present software engineering projects and AI innovations with high visual polish, structured case studies, and responsive design.",
    problem: "Software engineers need an engaging, modern way to present both full-stack software and AI capabilities to recruiters and engineering peers.",
    solution: "A dynamic portfolio interface featuring interactive project cards, structured case studies, technical skill matrices, and seamless navigation.",
    keyFeatures: [
      "Clean light-mode user interface with custom color accents",
      "Interactive project grid with case-study deep dives",
      "Organized technical skill classification and details",
      "Fully responsive design optimized for desktop and mobile devices",
      "Accessible markup with keyboard navigation support"
    ],
    contribution: [
      "Designed and developed the component architecture and routing system",
      "Built dynamic data models to support effortless project additions",
      "Implemented accessibility standards and responsive UI layouts"
    ],
    technicalImplementation: "Built with React and Vite, utilizing React Router for seamless client-side page transitions and Vanilla CSS for precise design token control.",
    challenges: "Achieving high aesthetic quality and fast page load performance without relying on heavy third-party UI dependencies.",
    screenshots: [
      { id: "ai-portfolio-1", title: "Portfolio Interface", filename: "portfolio-view.png", description: "Clean, responsive portfolio layout presenting projects and skills." }
    ],
    githubUrl: "https://github.com/hadiatufail1517/ai-portfolio",
    liveUrl: null
  }
];
