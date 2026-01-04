import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React .js", level: 70, color: "primary" },
    // { name: "TypeScript", level: 90, color: "secondary" },
    { name: "UI/UX Design", level: 88, color: "accent" },
    { name: "Node.js & Express", level: 85, color: "primary" },
    { name: "Data Analysis (Python)", level: 90, color: "accent" },
    {name: "Database Management", level: 80, color: "primary" },
    {name:"Canva Designer",level:80,color:"primary"},
    { name: "Animation (Framer Motion)", level: 92, color: "accent" },
  ];

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />

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
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-cyan" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill, index, isInView }: any) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(skill.level);
      }, index * 100);
    }
  }, [isInView, skill.level, index]);

  const getGlowClass = (color: string) => {
    switch (color) {
      case "primary":
        return "glow-cyan";
      case "secondary":
        return "glow-purple";
      case "accent":
        return "glow-pink";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-semibold">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>

      <div className="h-4 glass rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full bg-${skill.color} ${getGlowClass(skill.color)} rounded-full relative`}
          style={{
            backgroundColor: `hsl(var(--${skill.color}))`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-glow" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
