'use client';

import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/someart", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/maissa-mathlouthi", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/Maissa_mathlouthi", label: "Instagram" },
  { icon: Mail, href: "mailto:maissamth@gmail.com", label: "Email" },
]

declare global {
  interface Window {
    VANTA: {
      NET: (options: any) => any;
    };
  }
} 

export default function Hero() {
 {/* const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js';
        
        vantaScript.onload = () => {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xff3f81,
            backgroundColor: 0x11091d,
            points: 10,
            maxDistance: 20,
            spacing: 15,
            showDots: true
          });
        };
        
        document.body.appendChild(vantaScript);
      };
      
      document.body.appendChild(threeScript);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []); */}

  return (
    <section 
     // ref={vantaRef}
      className="min-h-screen flex items-center justify-center relative relative min-h-screen overflow-hidden bg-slate-950"
    >
       <div className="absolute inset-0">
        {/* Gradient mesh background using Tailwind */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/20 via-slate-950 to-slate-950" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600/25 rounded-full blur-3xl animate-pulse [animation-delay:0.5s]" />

        {/* Decorative dots using Tailwind positioning */}
        <div className="absolute top-[10%] left-[15%] w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute top-[20%] left-[45%] w-1 h-1 bg-pink-400 rounded-full animate-ping [animation-delay:0.3s]" />
        <div className="absolute top-[35%] left-[75%] w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping [animation-delay:0.6s]" />
        <div className="absolute top-[55%] left-[25%] w-1 h-1 bg-pink-400 rounded-full animate-ping [animation-delay:0.9s]" />
        <div className="absolute top-[70%] left-[65%] w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping [animation-delay:1.2s]" />
        <div className="absolute top-[85%] left-[35%] w-1 h-1 bg-pink-400 rounded-full animate-ping [animation-delay:1.5s]" />
        <div className="absolute top-[15%] left-[85%] w-1 h-1 bg-pink-400 rounded-full animate-ping [animation-delay:1.8s]" />
        <div className="absolute top-[45%] left-[5%] w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping [animation-delay:2.1s]" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I am <span className="text-pink-500 ">Maissa Mathlouthi</span>
        </h1>
        <div className="text-xl md:text-2xl text-white mb-8 h-16 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Cybersecurity Specialist',
              2000,
              'Designer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            className="text-white font-bold  "
          />
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Building secure, scalable applications while protecting digital assets
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Site still under Development
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-pink-600 text-pink-500 hover:bg-pink-600/10 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
        {/* Social Links */}
          <div className="flex items-center justify-center pt-8 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors p-3 hover:bg-white/5 rounded-lg"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
      </div>
    </section>
  );
}