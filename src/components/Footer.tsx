import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="mx-auto text-muted-foreground text-sm">
          <p className="container max-w-6xl ">
            © {currentYear} Nardos Walelegn | Front-End Developer.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
