
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="font-bold text-xl mb-4">John Doe</div>
            <p className="text-muted-foreground text-sm mb-6 md:mb-0">
              Frontend Developer | React Specialist
            </p>
          </div>

          <div className="space-y-4 md:text-right">
            <nav className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">
                Home
              </a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            <button
              onClick={scrollToTop}
              className="bg-primary/20 text-primary hover:bg-primary hover:text-white p-2 rounded-full transition-colors inline-flex items-center justify-center md:ml-auto"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            Designed and built with <span className="text-primary">♥</span> by John Doe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
