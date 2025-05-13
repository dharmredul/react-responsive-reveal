
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-muted/30 py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-10">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden aspect-square bg-gradient-to-br from-primary to-primary/50 p-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="John Doe"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div
            ref={elementRef}
            className={`md:col-span-2 space-y-6 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Hello! I'm John Doe, a passionate frontend developer with 5+ years of experience specializing in creating responsive, user-friendly web applications. I focus on writing clean, efficient code and crafting intuitive user interfaces.
              </p>
              <p>
                My journey in web development started at the University of Technology, where I earned my Bachelor's degree in Computer Science. Since then, I've worked with various startups and established companies to deliver high-quality web solutions.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, writing technical articles on my blog, or exploring new technologies. I'm always eager to learn and stay up-to-date with the latest trends in web development.
              </p>
              <p className="italic">
                Fun fact: I've built over 30 side projects, and I'm an avid rock climber on weekends!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
