"use client";
import emailjs from "emailjs-com";
import React from "react";

export default function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.currentTarget,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      },
      (error) => {
        alert("Failed to send message");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Get In Touch
        </h2>

        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
 