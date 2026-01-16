import { ArrowDown, Code2, GraduationCap, Heart, FileText, Download } from "lucide-react";
const MyStory = () => {
  return (
    <div className="bg-background">
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <p className="text-primary font-medium tracking-wider uppercase text-sm">
              

                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-foreground"> Front-End Developer </span>
                  <br />
                  <span className="text-gradient"> & Creative Thinker</span>
                </h1>
              </div>
              
             <p className="text-muted-foreground max-w-md leading-relaxed">
               Specializing in building scalable, responsive front-end solutions with a 
               strong focus on usability, performance, and clean design.
              </p>
            </div>
{/* Photo Section */}
<div className="flex justify-center lg:justify-end animate-scale-in mt-100">
  <div className="relative">
    {/* Outer Glow Border */}
    <div className="absolute -inset-4 rounded-3xl border-2 border-primary/30 animate-glow-pulse" />
    
    {/* Image Container */}
    <div className="w-853 h-460 md:w-953 md:h-[530px] rounded-3xl overflow-hidden glass glow animate-float relative shadow-2xl">
      <img 
        src="/img.jpg" 
        alt="Nardos Walelegn" 
        className="w-full h-full object-cover antialiased brightness-[1.05] contrast-[1.05]" 
        style={{ imageRendering: 'auto' }}
      />
    </div>
  </div>
</div>
          </div>
          
          {/* Scroll indicator pointing to Bio Part */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
            <a href="#mystory" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
              <span className="text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100">About Me</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: BIO (ID: mystory) --- */}
      <section id="mystory" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-4xl md:text-6xl font-bold">
My <span className="text-gradient">Journey</span></h2>
              <div className="prose prose-invert lg:prose-xl">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I’m <span className="font-semibold text-gradient">Nardos Walelegn</span>,  
                  a Front-End Developer who loves turning designs into beautiful,  
                  responsive user experiences. To me, code is where creativity comes alive.
                </p>
              </div>

              {/* Detail Cards */}
              <div className="grid sm:grid-cols-2 gap-4"> 
                <div className="p-6 glass rounded-2xl border border-white/5 space-y-3 hover:border-primary/30 transition-colors">
                  <Heart className="w-8 h-8 text-pink-400" />
                  <h3 className="font-bold text-lg text-foreground">My Passion</h3>
                  <p className="text-sm text-muted-foreground">I truly love "playing with code"—experimenting with layouts and turning ideas into interfaces.</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-gradient mb-4">My TechStack</h2>
  <p className="text-muted-foreground mb-6">
    The languages, frameworks, and tools I use to craft responsive and modern web experiences.
  </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "Next.js", "Tailwind CSS", "JavaScript", "Visual Studio Code", "Responsive Design"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume Buttons */}
              <div className="pt-6 flex flex-wrap gap-4">
                <a 
                  href="/resume.odt" 
                  target="_blank" 
                  className="flex items-center gap-2 px-6 py-3 glass rounded-xl hover:border-primary/50 transition-all font-medium text-foreground"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  View Resume
                </a>
              </div>

              <p className="text-muted-foreground italic border-l-4 border-primary pl-6 py-2">
   “Design is not just what it looks like and feels like. Design is how it works.”
— Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyStory;