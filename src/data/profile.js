export const profile = {
  name: "M Rajesh",
  title: "Software Engineer",
  subtitle: "AI & Backend Engineering",
  experience: "5.4+",
  location: "Bangalore, Karnataka",
  email: "m.rajesh242@gmail.com",
  phone: "+91-9483685398",
  github: "https://github.com/itsmrajesh",
  linkedin: "https://www.linkedin.com/in/itsmrajesh/",
  summary:
    "Experienced Software Engineer specializing in backend engineering, microservices architecture, and AI-powered application development. Strong focus on Large Language Models (LLMs), agentic workflows, and intelligent automation systems. Building scalable AI solutions using Python, FastAPI, LangChain, Strands Agents, and MCP.",
}

export const skills = [
  {
    category: "AI & LLMs",
    items: [
      "LangChain",
      "Strands Agents",
      "MCP (Model Context Protocol)",
      "RAG",
      "Prompt Engineering",
      "Vector Databases",
      "Agentic Workflows",
    ],
  },
  {
    category: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "Go",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS Bedrock",
      "ECS Fargate",
      "Lambda",
      "API Gateway",
      "S3",
      "CDK",
      "Docker",
      "CI/CD",
    ],
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "Jira",
      "Postman",
      "GitHub Copilot",
      "Keycloak",
      "CouchDB",
      "PostgreSQL",
    ],
  },
]

export const experience = [
  {
    company: "Konovo",
    role: "Software Engineer - Product",
    period: "Apr 2024 - Present",
    location: "Bangalore",
    highlights: [
      "Developing AI-powered chatbot and agentic solutions using Python, Strands Agents, AWS services, and modern LLM frameworks",
      "Built and orchestrated agentic workflows with multi-step reasoning, tool orchestration, memory handling, and model-agnostic agent design",
      "Developed and deployed MCP servers using FastMCP for standardized tool interoperability in agentic ecosystems",
      "Integrated MCP servers into agentic workflows for dynamic tool discovery, invocation, and coordination across distributed AI systems",
      "Designed system architecture ensuring scalability, modularity, and seamless integration of AI and cloud-native components",
      "Deployed containerized LLM applications on AWS ECS (Fargate) with blue-green deployments for zero-downtime releases",
      "Implemented CI/CD pipelines using GitHub and AWS CDK for automated deployment across multiple environments",
    ],
  },
  {
    company: "Datma India Pvt Ltd",
    role: "Software Engineer - Product",
    period: "Jul 2022 - Mar 2024",
    location: "Bangalore",
    highlights: [
      "Led backend development for the Electronic Health Record (EHR) project, creating APIs for smooth data handling",
      "Developed a Java-based Keycloak extension to monitor user activities like logins and admin actions",
      "Created a Python SDK to simplify authorization and data access in Datma services",
      "Built an audit logging library in Go to track data transactions in line with FHIR standards",
    ],
  },
  {
    company: "i-exceed technologies",
    role: "Software Engineer - Product",
    period: "Sep 2020 - Jun 2022",
    location: "Bangalore",
    highlights: [
      "Worked as a Java (Spring Boot) Backend Developer on Appzillon web-IDE project",
      "Converted existing monolith application to microservices architecture using Spring Boot",
      "Handled API security with Keycloak and Spring Security",
      "Created API gateway for routing (spring-cloud-gateway) and Discovery server (Netflix Eureka)",
      "Integrated Git as a feature for managing all projects in web-IDE",
    ],
  },
]

export const projects = [
  {
    title: "Quiz Hub",
    description:
      "AI Quiz Generator - Full-stack quiz app using React, Python (FastAPI), LangChain, and PostgreSQL. Leverages OpenAI APIs to dynamically generate topic-based quizzes with difficulty control. Features Google OAuth and structured backend logic.",
    tech: ["React", "FastAPI", "LangChain", "PostgreSQL", "OpenAI"],
    link: "https://thequizhub.netlify.app/",
  },
]

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Nagarjuna College of Engineering and Technology",
  period: "Aug 2016 - May 2020",
  location: "Bangalore",
}

export const awards = [
  {
    title: "Employee of the Month",
    description:
      'Awarded "Employee of the Month" twice in recognition of outstanding contributions to projects and team success.',
  },
  {
    title: "Best Team",
    description:
      'Recognized as part of the "Best Team" for two consecutive quarters, demonstrating exceptional teamwork and project delivery.',
  },
  {
    title: "Most Promising New Comer",
    description:
      "Presented for demonstrating continued commitment to achieve excellence and success.",
  },
]
