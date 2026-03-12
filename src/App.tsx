import { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Services from './components/Services';
import ResultsTicker from './components/ResultsTicker';
import SocialProof from './components/SocialProof';
import SeasonalCampaigns from './components/SeasonalCampaigns';
import CTACcloser from './components/CTACcloser';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useLayoutEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-obsidian min-h-screen text-ivory font-sans overflow-x-hidden relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <Navbar lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Philosophy lang={lang} />
        <Protocol lang={lang} />
        <Services lang={lang} />
        <ResultsTicker lang={lang} />
        <SocialProof lang={lang} />
        <SeasonalCampaigns lang={lang} />
        <CTACcloser lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;
