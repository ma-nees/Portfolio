import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      description: "Leading innovative projects with cutting-edge technologies",
      icon: Rocket,
    },
    {
      year: "2022",
      title: "UI/UX Specialist",
      description: "Crafting beautiful and intuitive user experiences",
      icon: Palette,
    },
    {
      year: "2020",
      title: "Web Developer",
      description: "Building responsive and performant web applications",
      icon: Code2,
    },
    {
      year: "2018",
      title: "Started Coding Journey",
      description: "Fell in love with creating digital experiences",
      icon: Zap,
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl font-black mb-6 gradient-text"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-cyan" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-3xl mb-20 glow-cyan"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              I am Full-Stack Developer, UI/UX Designer & Data Analyst skilled in building scalable applications and data-driven solutions. Strong understanding of modern frameworks, user-centric design principles, and analytical tools to enhance performance and deliver measurable impact in today’s digital ecosystem.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent glow-cyan hidden md:block" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                  className={`flex items-center mb-16 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="glass p-6 rounded-2xl hover:glow-purple transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center gap-4 mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <div className="md:ml-auto" />
                            <div className="text-2xl font-bold text-accent">{item.year}</div>
                          </>
                        ) : (
                          <>
                            <div className="text-2xl font-bold text-accent">{item.year}</div>
                            <div className="md:mr-auto" />
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-16 h-16 glass rounded-full glow-cyan group-hover:glow-purple transition-all duration-300 shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
