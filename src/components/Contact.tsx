import { useEffect, useRef, useState } from "react";
import { Mail,Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent! (Simulation)");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgb(255,182,193)]/50 to-transparent" />
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
  Available for hire
  </p>

  <div className="space-y-3">
    {/* LinkedIn */}
    <a
  href="https://www.linkedin.com/in/nardos-walelegn-2ba81b305"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="visit my linkedIn profile"
      className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
      
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <Linkedin className="w-5 h-5" />
      </div>
       <span>LinkedIn</span>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Nardos1624"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-colors"
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <Github className="w-5 h-5" />
      </div>

      <span>GitHub</span>
    </a>
<a
  href="tel:+251960246425"
  aria-label="Call me"
  className="group flex items-center gap-3 text-sm font-medium transition-all hover:text-primary hover:translate-x-1"
>
  <div className="p-2 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
    <Phone className="w-5 h-5" />
  </div>
  <span>Call Me</span>
</a>
  </div>
</div> 
        </div>
      </div>
    </section>
  );
};

export default Contact;