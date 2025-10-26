import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                I create beautiful, responsive web applications with modern technologies. Let's build something amazing together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Code snippet showcase */}
          <div className="hidden md:block animate-slide-in-right">
            <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm overflow-hidden hover:border-primary transition-colors duration-300 animate-glow">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-muted" />
              </div>
              <pre className="text-muted-foreground">
                <code>{`const developer = {
  name: "Your Name",
  skills: ["React", "TypeScript", "Node.js"],
  passion: "Building amazing web apps",
  available: true
};

developer.skills.forEach(skill => {
  console.log(\`Mastering \${skill}\`);
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

