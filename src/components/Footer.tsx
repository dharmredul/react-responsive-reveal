
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/90 text-secondary-foreground py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-70 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">John Doe</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Creating beautiful, accessible, and performant web experiences with modern technologies.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@johndoe.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="/resume.pdf" className="text-muted-foreground hover:text-primary transition-colors">Resume</a>
            </nav>
          </div>

          {/* Newsletter/Contact Column */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Get In Touch</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <a href="mailto:hello@johndoe.com">
              <Button variant="outline" className="hover:bg-primary hover:text-white border-primary/20">
                Contact Me
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-muted/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground order-2 md:order-1">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 order-1 md:order-2">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Designed with <span className="text-primary">♥</span>
            </p>
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="icon" 
              className="rounded-full h-8 w-8 bg-primary/5 border-primary/20 hover:bg-primary hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
