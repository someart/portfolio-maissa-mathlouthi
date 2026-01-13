const experiences = [
  {
    period: "Jan 2025 — Aug 2025",
    title: "Customer Service Agent",
    company: "Assist Digital",
    description:
      "Provided support to international customers by resolving booking issues and managing reservations. Handled inquiries efficiently in a fast-paced environment while maintaining high customer satisfaction. Strengthened communication, problem-solving, and conflict resolution skills.",
    skills: ["Customer Service", "Problem Solving", "Communication", "Conflict Resolution"],
  },
  {
    period: "Feb 2025 — May 2025",
    title: "Development Intern",
    company: "White Bulbul Solutions",
    description:
      "Developed GREEN, a digital-first coffee ordering platform featuring a smart chatbot for personalized suggestions, mobile-responsive design, and centralized order tracking.",
    skills: ["Next.js", "React", "Tailwind CSS", "Agile/SCRUM"],
  },
  {
    period: "Feb 2024 — May 2024",
    title: "Freelance Developer",
    company: "Red Dream Solutions",
    description:
      "Spearheaded the development of the company's website. Leveraging Figma designs as blueprints, utilized technologies like Next.js, GitLab, React, and Tailwind CSS to ensure seamless functionality and engaging animations. Integrated internationalization (i18n) for multilingual accessibility.",
    skills: ["Next.js", "React", "Tailwind CSS", "GitLab", "i18n"],
  },
  {
    period: "Feb 2023 — May 2023",
    title: "Development Intern",
    company: "Config.",
    description:
      "Designed the initial application layout according to project requirements. Developed a responsive front-end using HTML, CSS, JavaScript, Bootstrap and React. Back-end development using Node.js and MongoDB, ensuring seamless integration and functionality.",
    skills: ["React", "Node.js", "MongoDB", "Bootstrap", "JavaScript"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <article key={exp.title + exp.company} className="group">
                <div className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-8">
                  <div className="text-sm text-gray-500 font-mono">{exp.period}</div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title} · <span className="text-pink-400">{exp.company}</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 text-xs bg-pink-500/10 text-pink-400 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
