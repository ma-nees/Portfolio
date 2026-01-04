import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim().length < 5) {
      toast.error("Message must be at least 5 characters.");
      return;
    }

    setLoading(true);

    const payload = {
      access_key: "40f8e81e-5997-4775-bafa-47f88aebbf8b", // 🔑 PUT YOUR KEY HERE
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: "New Portfolio Contact Message",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/maneessahani" },
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/ma_neess/" },
    { icon: Mail, href: "#" },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">

      {/* FLOATING ICONS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary opacity-20"
            initial={{ y: 100, x: Math.random() * window.innerWidth }}
            animate={{ y: [-40, -800], opacity: [0.3, 0] }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Send className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

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
            LET'S CONNECT
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-cyan" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl glow-cyan max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900/60 border border-primary/30 text-white rounded-lg focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900/60 border border-primary/30 text-white rounded-lg focus:ring-2 focus:ring-primary"
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-neutral-900/60 border border-primary/30 text-white rounded-lg focus:ring-2 focus:ring-primary resize-none"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: !loading ? 1.08 : 1 }}
              whileTap={{ scale: !loading ? 0.95 : 1 }}
              className="w-full py-4 bg-primary text-background rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-background border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>

          </form>
        </motion.div>

        <div className="flex justify-center mt-12 gap-6">
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.href}
                whileHover={{ scale: 1.2 }}
                className="p-4 glass rounded-full hover:glow-purple"
              >
                <Icon className="w-6 h-6 text-primary" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
