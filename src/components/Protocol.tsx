import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProtocolProps {
    lang: 'ar' | 'en';
}

const Protocol: React.FC<ProtocolProps> = ({ lang }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card') as any[];

            cards.forEach((card: any, index) => {
                if (index === cards.length - 1) return; // don't animate the last card

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: 'blur(10px)',
                    scrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top bottom",
                        end: "top top",
                        scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const content = {
        ar: [
            {
                step: "٠١",
                title: "نفهم علامتك في ٤٨ ساعة",
                enTitle: "We Learn Your Brand in 48 Hours",
                desc: "مكالمة واحدة. بريف واحد.\nنرسم موقعك في السوق، منافسيك،\nجمهورك، وأهداف حملتك.\nثم نبني — لا نخطط فقط.",
                img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80"
            },
            {
                step: "٠٢",
                title: "نبني وأنت نائم",
                enTitle: "We Build While You Sleep",
                desc: "محرك الإنتاج بالذكاء الاصطناعي لدينا\nيولد صور الحملة، كونسبتات الفيديو،\nكوبي الإعلانات، وتقويم المحتوى —\nيصل إلى بريدك خلال ٤٨ ساعة.",
                img: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80"
            },
            {
                step: "٠٣",
                title: "نطلق، نقيس، ونكبّر",
                enTitle: "We Launch, Measure, and Scale",
                desc: "كل حملة تُتابَع. كل رقم يُرفَع.\nنُحسّن كل أسبوع حتى تنخفض\nتكلفة النتيجة ويرتفع تذكّر علامتك.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            }
        ],
        en: [
            {
                step: "01",
                title: "We Learn Your Brand in 48 Hours",
                enTitle: "Discovery & Strategy",
                desc: "One call. One brief.\nWe map your market position, competitors,\naudience, and campaign goals.\nThen we build — we don't just plan.",
                img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&q=80"
            },
            {
                step: "02",
                title: "We Build While You Sleep",
                enTitle: "AI Production",
                desc: "Our AI production engine\ngenerates campaign visuals, video concepts,\nad copy, and content calendar —\narriving in your inbox within 48 hours.",
                img: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80"
            },
            {
                step: "03",
                title: "We Launch, Measure, and Scale",
                enTitle: "Launch & Scale",
                desc: "Every campaign monitored. Every metric tracked.\nWe optimize weekly to decrease\nCPA and increase brand recall.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            }
        ]
    };

    const t = content[lang];

    return (
        <section id="process" ref={containerRef} className="bg-obsidian relative">
            <div className="container mx-auto">
                {t.map((card, i) => (
                    <div
                        key={i}
                        className="protocol-card min-h-screen sticky top-0 flex items-center justify-center p-6 lg:p-12"
                        style={{ zIndex: i + 1 }}
                    >
                        <div className="w-full max-w-6xl h-[80vh] bg-[#080810] border border-champagne/10 rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row">
                            {/* Background texture with very low opacity */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={card.img}
                                    alt="Protocol background"
                                    className="w-full h-full object-cover opacity-[0.08] mix-blend-screen"
                                />
                            </div>

                            {/* Content Split */}
                            <div className="relative z-10 p-12 lg:p-20 flex flex-col justify-center flex-1 h-full">
                                <div className="text-champagne font-mono text-xl mb-6">{card.step}</div>
                                <h3 className="text-4xl md:text-[48px] font-sans font-bold text-ivory leading-tight mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-ivory/40 font-mono text-sm mb-8 uppercase tracking-wider">{card.enTitle}</p>
                                <p className="text-[18px] text-ivory/65 leading-relaxed font-sans whitespace-pre-line max-w-lg">
                                    {card.desc}
                                </p>
                            </div>

                            {/* Abstract Visuals Area */}
                            <div className="relative z-10 flex-1 hidden md:flex items-center justify-center h-full border-l border-champagne/10 border-opacity-50">
                                {i === 0 && (
                                    <div className="relative w-64 h-64">
                                        <div className="absolute inset-0 border border-champagne/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                        <div className="absolute inset-4 border border-champagne/50 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
                                        <div className="absolute inset-12 border-2 border-champagne rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(201,168,76,0.2)]">
                                            <div className="w-2 h-2 bg-champagne rounded-full"></div>
                                        </div>
                                    </div>
                                )}

                                {i === 1 && (
                                    <div className="relative w-64 h-64 flex flex-col justify-between overflow-hidden">
                                        {/* Grid dots */}
                                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-2 opacity-50">
                                            {Array.from({ length: 36 }).map((_, idx) => (
                                                <div key={idx} className="bg-champagne/20 rounded-full w-2 h-2 m-auto"></div>
                                            ))}
                                        </div>
                                        {/* Scanning line */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-champagne shadow-[0_0_15px_rgba(201,168,76,1)] animate-[scan_3s_ease-in-out_infinite]"></div>
                                    </div>
                                )}

                                {i === 2 && (
                                    <div className="relative w-full h-40 flex items-center p-8">
                                        <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                                            <path
                                                d="M0,20 L50,20 L60,0 L70,40 L80,20 L200,20"
                                                fill="none"
                                                stroke="#C9A84C"
                                                strokeWidth="2"
                                                className="animate-[dash_2s_linear_infinite]"
                                                strokeDasharray="200"
                                                strokeDashoffset="200"
                                            />
                                            <circle cx="200" cy="20" r="3" fill="#C9A84C" className="animate-pulse" />
                                        </svg>
                                        <style>{`
                      @keyframes dash {
                        to { stroke-dashoffset: 0; }
                      }
                      @keyframes scan {
                        0% { top: 0; opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { top: 100%; opacity: 0; }
                      }
                    `}</style>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Protocol;
