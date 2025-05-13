
import { ArrowRight } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Hero = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center bg-background pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div
            ref={elementRef}
            className={`space-y-6 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                John Doe
              </h1>
              <h2 className="text-xl sm:text-2xl text-primary font-medium">
                Frontend Developer | React Specialist
              </h2>
            </div>

            <p className="text-lg text-muted-foreground">
              Crafting responsive, user-centric web experiences with modern
              JavaScript frameworks and clean, accessible design.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="btn btn-primary flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <div
            className={`relative ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="bg-accent p-6 rounded-lg font-mono text-sm text-foreground overflow-hidden">
              <pre className="language-javascript">
                <code>
                  {`// Welcome to my portfolio
const developer = {
  name: 'John Doe',
  skills: ['React', 'TypeScript', 'Tailwind'],
  experience: '5+ years',
  loves: 'Clean Code',
  passion: 'Building intuitive UIs',
  
  sayHello: () => {
    console.log('Thanks for visiting!')
  }
};

developer.sayHello();`}
                </code>
              </pre>
              <div className="flex items-center mt-4">
                <div className="h-3 w-3 rounded-full bg-destructive mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
