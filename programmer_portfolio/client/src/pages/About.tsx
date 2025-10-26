import { Code2, Palette, Zap, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Code2, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { icon: Cpu, title: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { icon: Palette, title: 'Design', items: ['UI/UX Design', 'Figma', 'Responsive Design', 'Animation'] },
    { icon: Zap, title: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">
              Passionate developer with expertise in building modern web applications
            </p>
          </div>

          {/* About content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional web applications. With over 5 years of experience in web development, I've worked on projects ranging from small startups to large-scale applications.
              </p>
              <p className="text-foreground leading-relaxed">
                My journey in tech started with a curiosity about how things work. Now, I focus on writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <p className="text-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors duration-300"
                  >
                    <Icon className="text-primary mb-4" size={32} />
                    <h4 className="text-lg font-semibold mb-3">{skill.title}</h4>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

