// components/skills-section.tsx

const developmentSkills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 85 },
  { name: "PostgreSQL / MongoDB", level: 82 },
  { name: "AWS / Cloud Services", level: 80 },
]

const securitySkills = [
  { name: "Penetration Testing", level: 92 },
  { name: "Secure Code Review", level: 95 },
  { name: "OWASP Top 10", level: 98 },
  { name: "Threat Modeling", level: 88 },
  { name: "Incident Response", level: 85 },
  { name: "Compliance (SOC2, ISO27001)", level: 80 },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-pink-700 to-pink-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A unique combination of development and security skills that enables me to build secure applications from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-l-2 border-pink-800 pl-4">Development</h3>
            <div className="space-y-4">
              {developmentSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-l-2 border-pink-800 pl-4">Cybersecurity</h3>
            <div className="space-y-4">
              {securitySkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}