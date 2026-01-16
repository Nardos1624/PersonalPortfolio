'use client'
import { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
const navLinks = [
  { label: "My Story", href: "#mystory" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.odt" }, 
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    },
    {
      threshold: 0.6, 
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "py-6"}`}>
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <a href="#mystory" className="flex items-center gap-3 text-2xl font-bold text-gradient group">
          <span>Nardos</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Resume" ? "_blank" : undefined}
              rel={link.label === "Resume" ? "noopener noreferrer" : undefined}
              className={`font-medium transition-colors flex items-center gap-1.5
    ${
      activeSection === link.href
        ? "text-primary"
        : "text-muted-foreground hover:text-primary"
    }
  `}
            >
              {link.label === "Resume" && <FileText className="w-4 h-4" />}
              {link.label}
            </a>
          ))}

          {/* 2. Improved Hire Me Button */}
          <a
            href="#contact"
            className="group px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:glow transition-all flex items-center gap-2"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-scale-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Resume" ? "_blank" : undefined}
            className={`font-medium py-2 flex items-center gap-2 transition-colors
  ${
    activeSection === link.href
      ? "text-primary"
      : "text-foreground hover:text-primary"
  }
`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label === "Resume" && <FileText className="w-4 h-4 text-primary" />}
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-center mt-2"
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