import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroProps {
    lang: 'ar' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-element', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });

            gsap.from('.stat-pill', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.6,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, [lang]);

    const content = {
        ar: {
            line1: 'علامتك التجارية تستحق',
            line2: 'حملة تُباع.',
            line3: 'نبني محتوى مدعوم بالذكاء الاصطناعي\nللعلامات التجارية السعودية التي تريد أن تُتذكر.\nصور · إعلانات · حملات · سوشيال ميديا',
            pills: ['48h ⚡ وقت التسليم', '٣٠+ علامة سعودية', '٢.٤M وصول رمضان'],
            cta: 'شاهد أعمالنا'
        },
        en: {
            line1: 'Your brand deserves',
            line2: 'Campaigns That Sell.',
            line3: 'We build AI-powered content, ads, and campaigns\nfor Saudi brands that want to be remembered.\nVisuals · Ads · Campaigns · Social Media',
            pills: ['48h ⚡ Delivery', '30+ Saudi Brands', '2.4M Ramadan Reach'],
            cta: 'See Our Work'
        }
    };

    const t = content[lang];

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-end pb-24 lg:pb-32 pt-32 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-obsidian">
                <img
                    src="https://images.unsplash.com/photo-1583307567705-72db858eed92?auto=format&fit=crop&q=80"
                    alt="Riyadh skyline night Kingdom Centre Saudi Arabia"
                    className="w-full h-full object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent z-10 bottom-0 h-full"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-20">
                <div className="max-w-4xl space-y-4 md:space-y-6">
                    <h1 className="hero-element text-ivory font-bold text-5xl md:text-[72px] leading-tight font-sans">
                        {t.line1}
                    </h1>
                    <h2 className="hero-element text-champagne font-serif italic text-6xl md:text-[96px] leading-tight">
                        {t.line2}
                    </h2>
                    <p className="hero-element text-ivory/60 text-lg md:text-xl whitespace-pre-line leading-relaxed max-w-2xl font-sans mt-4">
                        {t.line3}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-6">
                        {t.pills.map((pill, i) => (
                            <div key={i} className="stat-pill border border-champagne text-champagne bg-obsidian rounded-full px-4 py-2 font-mono text-sm leading-none flex items-center justify-center">
                                {pill}
                            </div>
                        ))}
                    </div>

                    <div className="hero-element pt-8">
                        <a href="#work" className="inline-flex items-center justify-center bg-champagne text-obsidian px-8 py-4 rounded-full font-bold md:text-lg hover:scale-105 transition-transform duration-300">
                            {t.cta}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
