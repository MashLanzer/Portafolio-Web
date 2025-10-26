import { Code2, Palette, Zap, Smartphone, Database, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies like React, Node.js, and TypeScript.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interface design with focus on user experience and accessibility.',
      features: ['Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'App Store Optimization'],
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Robust database architecture and optimization for scalable applications.',
      features: ['SQL & NoSQL', 'Database Optimization', 'Data Migration'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improve your application performance with advanced optimization techniques.',
      features: ['Code Splitting', 'Caching Strategy', 'Load Testing'],
    },
    {
      icon: Shield,
      title: 'Security & DevOps',
      description: 'Secure your application with best practices and modern DevOps solutions.',
      features: ['Security Audit', 'CI/CD Pipeline', 'Cloud Deployment'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/50">
      <div className="container">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your ideas to life
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}

