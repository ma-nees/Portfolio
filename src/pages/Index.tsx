import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          © 2024 Manish Sahani. Designed & Built with passion.
        </p>
      </footer>
    </div>
  );
};

export default Index;
