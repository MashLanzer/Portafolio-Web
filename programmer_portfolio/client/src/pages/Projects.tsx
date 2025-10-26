import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration, product management, and user authentication.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛍️',
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      image: '✓',
      link: '#',
      github: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization capabilities.',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'API'],
      image: '📊',
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with user profiles, messaging, and content sharing features.',
      tags: ['React', 'MongoDB', 'Express', 'Socket.io'],
      image: '💬',
      link: '#',
      github: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Intelligent chat application powered by AI with natural language processing capabilities.',
      tags: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
      image: '🤖',
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations and interactive elements.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      image: '🎨',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in full-stack development and design
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                {project.image}
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-semibold text-sm"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

