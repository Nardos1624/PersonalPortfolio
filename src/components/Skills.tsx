import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React", icon: "⚛️", level: 95, color: "from-blue-400" },
  { name: "Next.js", icon: "▲", level: 90, color: "from-white" },
  { name: "TypeScript", icon: "📘", level: 89, color: "from-blue-600" },
  { name: "JavaScript", icon: "📜", level: 95, color: "from-yellow-400" },
  { name: "Tailwind CSS", icon: "🎨", level: 98, color: "from-cyan-400" },
];

const Skills = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container max-w-6xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3">Expertise</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter italic">
            Skills & <span className="text-gradient">Tech</span>
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`relative group glass rounded-[2rem] p-8 border border-white/5 hover:border-primary/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Subtle Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

              <div className="relative z-10">
                <div className="flex justify-between items-end mb-6">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase opacity-70">Stack</span>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">{skill.name}</h3>
                  </div>
                  <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                    {skill.icon}
                  </span>
                </div>
                
                {/* Advanced Progress Bar */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-[2px] flex-grow bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} to-primary transition-all duration-[1.5s] ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 500}ms`
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold tracking-tighter uppercase opacity-50">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;