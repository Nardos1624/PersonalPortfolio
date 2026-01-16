import { useEffect, useRef, useState } from "react";
const skills = [
  { name: "React", icon: "⚛️", level: 95 },
  { name: "Next.js", icon: "▲", level: 90 },
  { name: "TypeScript", icon: "📘", level: 89 },
  { name: "JavaScript", icon: "📜", level: 95 },
  { name: "Tailwind CSS", icon: "🎨", level: 98 },
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass rounded-2xl p-6 hover:glow hover:border-primary/50 transition-all duration-500 group cursor-default ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                />
              </div>
              <p className="text-right text-sm text-muted-foreground mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
