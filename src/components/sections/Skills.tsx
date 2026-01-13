const developmentSkills = [
  { name: "React.js / Next.js", level: 90 },
  { name: "React Native / Expo", level: 85 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "Node.js / MongoDB", level: 80 },
  { name: "Tailwind CSS / Bootstrap", level: 92 },
  { name: "HTML / CSS", level: 95 },
]

const cybersecuritySkills = [
  { name: "Network Security", level: 85 },
  { name: "Penetration Testing", level: 80 },
  { name: "Cryptography", level: 78 },
  { name: "Security Auditing", level: 82 },
  { name: "Firewall / IDS / IPS", level: 75 },
  { name: "OWASP Top 10", level: 85 },
]

const toolsSkills = [
  { name: "Git / GitHub / GitLab", level: 88 },
  { name: "Figma / Canva", level: 85 },
  { name: "Docker / VM / Hadoop", level: 70 },
  { name: "VS Code / Android Studio", level: 90 },
  { name: "Agile / SCRUM", level: 85 },
  { name: "Microsoft Office", level: 90 },
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
          className="h-full bg-gradient-to-r from-pink-600 to-pink-400 rounded-full transition-all duration-1000 ease-out"
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
            A unique combination of development and cybersecurity skills that enables me to build secure, modern
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-l-2 border-pink-500 pl-4">Development</h3>
            <div className="space-y-4">
              {developmentSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-l-2 border-pink-400 pl-4">Cybersecurity</h3>
            <div className="space-y-4">
              {cybersecuritySkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-l-2 border-pink-300 pl-4">Tools & Software</h3>
            <div className="space-y-4">
              {toolsSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
