import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js 15 and TypeScript, featuring optimized static routing and a mobile-responsive design.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Nardos1624/NardiShop",
    live: "https://nardi-shop-c44c.vercel.app/",
    index: "01"
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background Grid Pattern (Modern Polish) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Case Studies</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            Selected <span className="text-gradient">Works.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative glass rounded-[2.5rem] p-10 border border-white/5 hover:border-primary/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Project Index Number - Top Right */}
              <span className="absolute top-8 right-10 text-6xl font-black text-white/[0.03] group-hover:text-primary/10 transition-colors duration-700">
                {project.index}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                   <div className="p-3 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                     <ArrowUpRight className="w-6 h-6 text-primary" />
                   </div>
                   <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light opacity-80">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono font-bold px-3 py-1 bg-white/5 text-muted-foreground border border-white/10 rounded-md tracking-tighter uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;