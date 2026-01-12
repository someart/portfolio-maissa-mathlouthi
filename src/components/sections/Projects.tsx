export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with secure payment integration',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Security Dashboard',
      description: 'Real-time security monitoring and threat detection',
      tech: ['React', 'Python', 'TensorFlow'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with animations and dark mode',
      tech: ['Next.js', 'Tailwind', 'Framer Motion'],
      link: '#'
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-pink-400 hover:text-pink-300 transition">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
