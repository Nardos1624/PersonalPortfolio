'use client'

import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "My Story", href: "#mystory" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf" }, 
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 1. Intersection Observer Logic
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // threshold: 0.1 allows the color to change even at the bottom of the page
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        // Lower threshold is critical for the Contact section to trigger pink
        threshold: 0.1, 
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    // 2. Scroll Logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // 3. Combined Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "glass py-4 shadow-lg" : "py-6 bg-transparent"
    }`}>
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <a href="#home" className="flex items-center gap-3 text-2xl font-black tracking-tighter text-gradient group">
          <span>Nardos.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isResume = link.label === "Resume";
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                target={isResume ? "_blank" : undefined}
                rel={isResume ? "noopener noreferrer" : undefined}
                className={`font-medium transition-all duration-300 flex items-center gap-1.5 text-sm uppercase tracking-widest
                  ${isActive 
                    ? "text-primary scale-110" 
                    : "text-muted-foreground hover:text-primary"
                  }
                `}
              >
                {isResume && <FileText className="w-4 h-4" />}
                {link.label}
              </a>
            );
          })}

          {/* Hire Me Button */}
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground transition-transform active:scale-90" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-[2rem] border border-white/10 p-8 animate-scale-in shadow-2xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isResume = link.label === "Resume";
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isResume ? "_blank" : undefined}
                  rel={isResume ? "noopener noreferrer" : undefined}
                  className={`font-bold py-2 flex items-center justify-between transition-all
                    ${isActive ? "text-primary text-xl" : "text-foreground/70 text-lg"}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    {isResume && <FileText className="w-5 h-5 text-primary" />}
                    {link.label}
                  </div>
                  {isActive && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                </a>
              );
            })}
            <a
              href="#contact"
              className="px-5 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-center mt-4 shadow-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;