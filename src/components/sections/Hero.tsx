export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-purple-400">Maissa Mathlouthi</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer & Cybersecurity Specialist
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Building secure, scalable applications while protecting digital assets
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600/10 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
