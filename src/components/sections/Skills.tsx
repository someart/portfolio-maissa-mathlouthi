export default function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'Python', level: 80 },
    { name: 'Cybersecurity', level: 85 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-pink-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-pink-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
