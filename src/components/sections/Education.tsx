import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic foundation in computer systems and network security.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-pink-500/50 transition-colors">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/25">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>

            <div className="ml-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Master's Degree in Computer Systems and Network Security
              </h3>
              <p className="text-pink-400 font-medium mb-4">
                Higher Institute of Applied Sciences and Technology of Mateur
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pink-400" />
                  <span>2023 - 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span>Bizerte, Tunisia</span>
                </div>
              </div>

              <p className="text-gray-300 mt-4 leading-relaxed">
                Specialized in network security, system administration, and secure software development. Built a strong
                foundation in cybersecurity principles while developing hands-on expertise in modern web frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
