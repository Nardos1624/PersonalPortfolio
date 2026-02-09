import { ArrowDown, Code2, GraduationCap, Heart, FileText, Download } from "lucide-react";

const MyStory = () => {
  return (
    <div className="bg-background">
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      >
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container max-w-6xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8 animate-slide-in-left text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs opacity-80">
                  Available for Hire
                </p>
                <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight">
                  <span className="text-foreground">Front-End</span>
                  <br />
                  <span className="text-gradient">Developer</span>
                </h1>
              </div>
              
              <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 text-lg leading-relaxed opacity-90">
               Specializing in building scalable, responsive front-end solutions with a strong focus on usability, performance, and clean design.


              </p>
            </div>

            {/* Photo Section - Optimized for Depth */}
          {/* Advanced Photo Section */}
<div className="flex justify-center lg:justify-end animate-scale-in relative">
  <div className="relative group">
    
    {/* 1. Decorative "Code" Tag - Floats behind image */}
    <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
    <div className="absolute -top-10 -right-10 hidden md:flex items-center gap-2 px-4 py-2 glass rounded-2xl border border-white/10 shadow-xl animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
      <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-tighter">Status: Creative</span>
    </div>

    {/* 2. Layered Frames (The "Advanced" part) */}
    <div className="relative z-10">
      {/* Primary Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-primary via-accent/50 to-primary rounded-[70px] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
      
      {/* Secondary "Glass" Offset Frame */}
      <div className="absolute inset-4 -right-4 -bottom-4 border border-white/10 rounded-[60px] glass opacity-50 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

      {/* 3. The Main Image Container with "Squircle" Mask */}
      <div className="w-[300px] h-[400px] md:w-[420px] md:h-[540px] rounded-[60px] overflow-hidden border border-white/20 relative shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] bg-neutral-900">
        <img 
          src="/images/img.jpg" 
          alt="Nardos Walelegn" 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 grayscale-[30%] group-hover:grayscale-0"
        />
        
        {/* Advanced Gradient Overlay (Darkens bottom for text/depth) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        
        {/* Interactive Badge inside image */}
        <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/10 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-[10px] text-white/70 uppercase tracking-widest mb-1"></p>
          <p className="text-white font-bold text-sm">Front end developer</p>
        </div>
      </div>
    </div>

    {/* 4. Floating Tech Orbitals (Small decorative circles) */}
    <div className="absolute -bottom-4 -left-4 w-12 h-12 glass rounded-full flex items-center justify-center border border-white/20 shadow-lg animate-bounce z-20" style={{ animationDuration: '3s' }}>
      <Code2 className="w-5 h-5 text-primary" />
    </div>
  </div>
</div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in hidden md:block">
            <a href="#mystory" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-all group">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: BIO --- */}
      <section id="mystory" className="py-32 px-6 relative scroll-mt-24">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                My <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                I’m <span className="font-semibold text-foreground border-b-2 border-primary/30">Nardos Walelegn</span>,  
                 a Front-End Developer who loves turning designs into beautiful, responsive user experiences. To me, code is where creativity comes alive.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6"> 
              <div className="p-8 glass rounded-3xl border border-white/5 hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">My Passion</h3>
                <p className="text-muted-foreground leading-relaxed">I truly love "playing with code"—experimenting with layouts and turning ideas into interfaces.</p>
              </div>
              
              <div className="p-8 glass rounded-3xl border border-white/5 hover:bg-white/5 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                {/* <h3 className="font-bold text-xl mb-2">Philosophy</h3> */}
                <p className="text-muted-foreground leading-relaxed">Writing clean, maintainable code that prioritizes the user's journey above all.</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary" />
                The Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS",  "Javascript","TypeScript","Visual Studio Code","Responsive Design"].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 bg-secondary/50 backdrop-blur-md border border-white/5 rounded-2xl text-sm font-medium hover:border-primary/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-10">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-2xl hover:opacity-90 transition-all font-bold"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </a>
              <blockquote className="text-muted-foreground italic text-sm border-l-2 border-primary/50 pl-6">
                “Design is not just what it looks like... Design is how it works.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyStory;