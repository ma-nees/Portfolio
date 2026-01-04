import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Neural Network Visualizer",
      description:
        "Interactive 3D visualization of neural networks using Three.js and WebGL",
      tags: ["React", "Three.js", "TypeScript"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "AI-Powered Chat Platform",
      description:
        "Real-time messaging app with AI chatbot integration and sentiment analysis",
      tags: ["Next.js", "OpenAI", "WebSocket"],
      gradient: "from-secondary to-accent",
    },
    {
      title: "Cyberpunk Dashboard",
      description:
        "Futuristic admin dashboard with real-time data visualization",
      tags: ["React", "D3.js", "Tailwind"],
      gradient: "from-accent to-primary",
    },
    {
      title: "Motion Design Studio",
      description:
        "Portfolio site with advanced animations and interactive elements",
      tags: ["Framer Motion", "React", "GSAP"],
      gradient: "from-primary to-accent",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Modern online store with seamless checkout and inventory management",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Music Visualization App",
      description:
        "Real-time audio visualization with particle effects and waveforms",
      tags: ["Web Audio API", "Canvas", "React"],
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 relative">
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
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-cyan" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isInView }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden hover:glow-cyan transition-all duration-300">
        <div
          className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow-cyan"
              >
                <ExternalLink className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow-cyan"
              >
                <Github className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-xs glass rounded-full border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
