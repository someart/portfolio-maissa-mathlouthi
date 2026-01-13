"use client";
import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react"

const contactLinks = [
  { icon: Mail, label: "Email", value: "maissamth@gmail.com", href: "mailto:maissamth@gmail.com" },
  { icon: Github, label: "GitHub", value: "@someart", href: "https://github.com/someart" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "maissa-mathlouthi",
    href: "https://www.linkedin.com/in/maissa-mathlouthi",
  },
  { icon: Phone, label: "Phone", value: "+216 534 909 569", href: "tel:+216534909569" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-lg mx-auto">
          Interested in collaborating on a project or just want to say hi? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-950 border border-gray-800 rounded-lg hover:border-pink-500/50 transition-colors group"
                >
                  <link.icon className="h-6 w-6 text-gray-500 group-hover:text-pink-400 transition-colors flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">{link.label}</div>
                    <div className="text-sm text-white">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

         
          </div>

          {/* Right side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-600"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-600"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-pink-600"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        

        <footer className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Maissa Mathlouthi. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
}