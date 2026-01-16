import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js 15 and TypeScript, featuring optimized static routing and a mobile-responsive design.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Nardos1624/NardiShop",
    live: "https://nardi-shop-c44c.vercel.app/",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container max-w-6xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass rounded-2xl p-8 hover:glow hover:border-primary/50 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank"        
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.live} 
                     target="_blank"          
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
