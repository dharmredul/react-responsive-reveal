
import { Github, ExternalLink } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demoLink,
  githubLink,
  index,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={elementRef}
      className={`project-card h-full flex flex-col ${
        isVisible
          ? `animate-fade-in`
          : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex gap-4 mt-auto">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline !py-2 !px-3 text-sm flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !py-2 !px-3 text-sm flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce admins with analytics, inventory management, and order processing features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
      tech: ["React", "JavaScript", "CSS3", "Firebase"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A mobile-responsive finance tracker that helps users manage expenses, set budgets, and visualize spending habits.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A weather application with 7-day forecasts, location-based weather data, and interactive weather maps.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8",
      tech: ["React", "JavaScript", "CSS3", "Weather API"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title" ref={elementRef}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
