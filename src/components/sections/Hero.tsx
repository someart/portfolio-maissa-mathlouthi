'use client';

import { useEffect, useRef } from 'react';

// Type declarations for Vanta.js
declare global {
  interface Window {
    VANTA: {
      NET: (options: any) => any;
    };
  }
}

export default function Hero() {
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      // Load THREE.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      
      threeScript.onload = () => {
        // Load Vanta.js NET effect
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
  }, []);

  return (
    <section 
      ref={vantaRef}
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-pink-500">Maissa Mathlouthi</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer & Cybersecurity Specialist
        </p>
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
      </div>
    </section>
  );
}