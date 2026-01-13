import { Shield, Code, Lock, Globe } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building modern web applications with React, Next.js, Node.js, and TypeScript.",
  },
  {
    icon: Shield,
    title: "Application Security",
    description: "Conducting security assessments, penetration testing, and secure code reviews.",
  },
  {
    icon: Lock,
    title: "Security Architecture",
    description: "Designing secure systems and implementing defense-in-depth strategies.",
  },
  {
    icon: Globe,
    title: "Cloud Security",
    description: "Securing cloud infrastructure on AWS, Azure, and GCP environments.",
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
              With over 8 years of experience spanning web development and cybersecurity, I bridge the gap between
              building great products and keeping them secure.
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
