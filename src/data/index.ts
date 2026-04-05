export const personal = {
  name: "Khandokar Ismail",
  title: "Full Stack Developer",
  // Corrected professional title based on actual skills
  subtitle: "Full Stack Engineer  ·  DevOps  ·  Cloud  ·  Observability",
  tagline: "Building Scalable Systems with Docker, Kubernetes & AWS",
  email: "ismailkhandokar0@gmail.com",
  phone: "+8801624904141",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/khandokarIsmailDev",
  linkedin: "https://linkedin.com/in/khandokar-ismail-87a280301",
  summary:
    "Full Stack Developer with 5+ years of production experience building microservice architectures, cloud-native applications, and DevOps pipelines. I take complete ownership of projects — from system design to deployment — with a strong focus on scalability, observability, and infrastructure automation.",
};

export const skills = [
  { name: "Node.js",         category: "Backend",    color: "#68a063" },
  { name: "React",           category: "Frontend",   color: "#61dafb" },
  { name: "Next.js",         category: "Frontend",   color: "#e8f0fe" },
  { name: "TypeScript",      category: "Language",   color: "#3178c6" },
  { name: "Docker",          category: "DevOps",     color: "#2496ed" },
  { name: "Kubernetes",      category: "DevOps",     color: "#326ce5" },
  { name: "AWS",             category: "Cloud",      color: "#ff9900" },
  { name: "Azure",           category: "Cloud",      color: "#0089d6" },
  { name: "Terraform",       category: "IaC",        color: "#7b42bc" },
  { name: "Pulumi",          category: "IaC",        color: "#8a3391" },
  { name: "NGINX",           category: "DevOps",     color: "#009639" },
  { name: "Redis",           category: "Database",   color: "#dc382d" },
  { name: "PostgreSQL",      category: "Database",   color: "#336791" },
  { name: "MongoDB",         category: "Database",   color: "#47a248" },
  { name: "RabbitMQ",        category: "Messaging",  color: "#ff6600" },
  { name: "OpenTelemetry",   category: "Monitoring", color: "#3d9be9" },
  { name: "Grafana",         category: "Monitoring", color: "#f46800" },
  { name: "GitHub Actions",  category: "CI/CD",      color: "#2088ff" },
  { name: "Linux",           category: "DevOps",     color: "#fcc624" },
  { name: "GraphQL",         category: "API",        color: "#e10098" },
];

export const projects = [
  {
    id: "ecommerce-microservices",
    title: "E-Commerce Microservice Backend",
    shortDesc:
      "Production-grade backend with 7 microservices, distributed tracing, and real-time monitoring.",
    description:
      "Architected and built a fully decoupled e-commerce backend consisting of 7 independently deployable microservices: auth, cart, order, product, payment, notification, and API gateway. Services communicate asynchronously via RabbitMQ. Redis caching reduced average API response time by ~40%. Full observability stack with OpenTelemetry + Grafana Tempo for distributed tracing across all services.",
    problem:
      "A monolithic e-commerce application was causing deployment bottlenecks, poor scalability under load, and zero visibility into inter-service failures.",
    solution:
      "Decomposed into 7 microservices with event-driven communication via RabbitMQ. Implemented Redis caching, containerized with Docker, and added end-to-end distributed tracing.",
    stack: ["Node.js", "RabbitMQ", "Redis", "Docker", "OpenTelemetry", "Grafana", "PostgreSQL"],
    github: "https://github.com/khandokarIsmailDev",
    featured: true,
  },
  {
    id: "aws-load-balancer",
    title: "AWS Infrastructure with Load Balancing",
    shortDesc:
      "Full cloud infrastructure provisioned with Pulumi on AWS, 6 containers with NGINX load balancing.",
    description:
      "Provisioned complete cloud infrastructure as code using Pulumi, deploying 3 frontend and 3 backend containers on AWS. Configured NGINX as a reverse proxy and load balancer for even traffic distribution and high availability.",
    problem:
      "Manual server provisioning was error-prone, slow, and impossible to reproduce across environments.",
    solution:
      "Infrastructure as Code with Pulumi on AWS. Containerized all services with Docker, configured NGINX load balancing, and made the entire stack deployable in a single command.",
    stack: ["AWS", "Pulumi", "Docker", "NGINX", "Node.js"],
    github: "https://github.com/khandokarIsmailDev",
    featured: true,
  },
  {
    id: "link-sharing-app",
    title: "Link Sharing Platform",
    shortDesc:
      "Full-stack link manager with drag-and-drop reordering, Cloudinary media, and responsive UI.",
    description:
      "Built a minimal yet feature-rich link-sharing platform. Users can add, reorder (drag-and-drop), and manage links with custom thumbnails. Cloudinary handles media uploads. Prisma ORM manages the PostgreSQL database.",
    problem: "No simple, self-hosted link sharing tool with clean UX existed.",
    solution:
      "Next.js full-stack app with Prisma + PostgreSQL, react-beautiful-dnd for reordering, Cloudinary for media.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "Cloudinary"],
    github: "https://github.com/khandokarIsmailDev",
    live: "https://github.com/khandokarIsmailDev",
    featured: false,
  },
];

export const experience = [
  {
    year: "2020 – Present",
    title: "Software Engineer",
    company: "i-studyabroad.org",
    location: "Remote · USA",
    description:
      "Sole developer responsible for the entire platform. Built and maintained frontend, backend, and cloud infrastructure. Implemented Docker containerization and GitHub Actions CI/CD, reducing deployment time by ~60%.",
    tags: ["Node.js", "React", "AWS", "Docker", "CI/CD"],
  },
  {
    year: "2019 – 2023",
    title: "Freelance Full Stack Developer",
    company: "Fiverr · Level One Seller",
    location: "Remote · International",
    description:
      "Delivered 20+ web applications for international clients with consistent 5-star ratings. Projects spanned e-commerce, SaaS, and portfolio sites using React, Node.js, and WordPress.",
    tags: ["React", "Node.js", "WordPress", "PostgreSQL"],
  },
];
