import { Code, Smartphone, Globe, Users } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building modern web applications with React, Next.js, Node.js, and TypeScript.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native and Expo.",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "Fluent in Arabic (Native), English (Professional), and French (Working proficiency).",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Strong communicator experienced in Agile/SCRUM methodologies and collaborative development.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              Master's graduate in Computer Systems and Network Security with a strong foundation in web development.
              Passionate about designing user-centered digital platforms by combining technical skills, problem-solving
              abilities, and creativity.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-gray-950 border border-gray-800 hover:border-pink-500/50 transition-colors group"
              >
                <item.icon className="h-8 w-8 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
