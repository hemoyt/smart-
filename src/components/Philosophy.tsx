import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Floating3DBackground from './Floating3DBackground';

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyProps {
    lang: 'ar' | 'en';
}

const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Fade up line by line logic
            const elements = gsap.utils.toArray('.phil-line');
            gsap.from(elements, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    scrub: 1,
                },
                y: 40,
                opacity: 0,
                stagger: 0.2,
                ease: 'power2.out',
            });

            const bodyElements = gsap.utils.toArray('.phil-body span');
            gsap.from(bodyElements, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 85%',
                    end: 'bottom 50%',
                    scrub: 1,
                },
                opacity: 0,
                y: 20,
                stagger: 0.1,
                ease: 'power1.out',
            });

        }, containerRef);

        return () => ctx.revert();
    }, [lang]);

    const content = {
        ar: {
            s1_ar: "معظم الوكالات تعطيك محتوى.",
            s1_en: "Most agencies give you content.",
            s2_1: "نحن نعطيك ",
            s2_2: "نتائج",
            s2_3: ".",
            s3_ar: "معظم الوكالات تفهم السوق العالمي.",
            s3_en: "Most agencies understand global markets.",
            s4_1: "نحن نفهم ",
            s4_2: "السوق السعودي",
            s4_3: ".",
            body_ar: "Smart Trust مبنية لسوق واحد. المملكة العربية السعودية. كل حملة، كل صورة، كل كلمة مصممة للمستهلك السعودي — ليس مُكيَّفة. مبنية من الصفر. رمضان. العيد. اليوم الوطني. الجمعة البيضاء. نحن هنا لأننا نفهم هذه اللحظات.",
            body_en: "Built for one market. Saudi Arabia. Every campaign engineered for Saudi consumers. Not adapted. Built from the ground up."
        },
        en: {
            s1_ar: "Most agencies give you content.",
            s1_en: "",
            s2_1: "We give you ",
            s2_2: "results",
            s2_3: ".",
            s3_ar: "Most agencies understand global markets.",
            s3_en: "",
            s4_1: "We understand ",
            s4_2: "the Saudi market",
            s4_3: ".",
            body_ar: "Built for one market. Saudi Arabia. Every campaign engineered for Saudi consumers. Not adapted. Built from the ground up. Ramadan. Eid. National Day. White Friday. We are here because we understand these moments.",
            body_en: ""
        }
    };

    const t = content[lang];

    // Helper to split text to spans for word-by-word animation
    const splitText = (text: string) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-1 rtl:ml-1 rtl:mr-0">{word}</span>
        ));
    };

    return (
        <section ref={containerRef} className="py-32 bg-obsidian text-ivory relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Parallax texture */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80"
                    alt="dark Arabian marble with gold veining"
                    className="w-full h-full object-cover opacity-10 grayscale hover:grayscale-0 transition-all duration-[3s]"
                />
                <div className="absolute inset-0 bg-obsidian mix-blend-multiply opacity-50"></div>
            </div>

            <Floating3DBackground variant="subtle" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
                <div className="space-y-12 mb-16">
                    <div className="phil-line">
                        <p className="text-lg text-ivory/35 font-sans mb-1">{t.s1_ar}</p>
                        {t.s1_en && <p className="text-sm text-ivory/20 font-sans">{t.s1_en}</p>}
                    </div>

                    <div className="phil-line">
                        <h2 className="text-5xl md:text-[68px] font-serif italic leading-tight">
                            {t.s2_1} <span className="text-champagne not-italic font-bold font-sans">{t.s2_2}</span>{t.s2_3}
                        </h2>
                    </div>

                    <div className="phil-line">
                        <p className="text-lg text-ivory/35 font-sans mb-1 mt-12">{t.s3_ar}</p>
                        {t.s3_en && <p className="text-sm text-ivory/20 font-sans">{t.s3_en}</p>}
                    </div>

                    <div className="phil-line">
                        <h2 className="text-5xl md:text-[68px] font-serif italic leading-tight">
                            {t.s4_1} <span className="text-champagne not-italic font-bold font-sans">{t.s4_2}</span>{t.s4_3}
                        </h2>
                    </div>
                </div>

                <div ref={textRef} className="max-w-[600px] mx-auto mt-16 phil-body">
                    <p className="text-[16px] text-ivory/55 leading-relaxed font-sans mb-4">
                        {splitText(t.body_ar)}
                    </p>
                    {t.body_en && (
                        <p className="text-[14px] text-ivory/30 leading-relaxed font-sans mt-6">
                            {splitText(t.body_en)}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
