import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SeasonalProps {
    lang: 'ar' | 'en';
}

const SeasonalCampaigns: React.FC<SeasonalProps> = ({ lang }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.season-card');

            gsap.from(cards, {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const content = {
        ar: {
            title: "نحن هنا للمواسم السعودية.",
            cards: [
                {
                    id: 'ramadan',
                    title: "رمضان كريم",
                    stat: "أعلى معدل مشاركة في السنة",
                    detail: "محتوى رمضاني يبدأ قبل ٦ أسابيع من الهلال",
                    bg: "bg-gradient-to-br from-amber-900/60 to-obsidian"
                },
                {
                    id: 'eid',
                    title: "عيد مبارك",
                    stat: "أعلى معدل شراء في السنة",
                    detail: "حملات الهدايا والعروض جاهزة قبل أسبوعين",
                    bg: "bg-gradient-to-br from-yellow-700/60 to-obsidian"
                },
                {
                    id: 'national',
                    title: "٢٣ سبتمبر",
                    stat: "فخر وطني = مشاركة عالية",
                    detail: "محتوى وطني يعكس هوية العلامة وروح المملكة",
                    bg: "bg-gradient-to-br from-green-900/60 to-obsidian"
                },
                {
                    id: 'whitefriday',
                    title: "الجمعة البيضاء",
                    stat: "أعلى يوم مبيعات في المملكة",
                    detail: "حملات العروض والإعلانات جاهزة في الوقت الصح",
                    bg: "bg-gradient-to-br from-slate-900/80 to-obsidian"
                }
            ]
        },
        en: {
            title: "We Live for Saudi Seasons.",
            cards: [
                {
                    id: 'ramadan',
                    title: "Ramadan Kareem",
                    stat: "Highest engagement of the year",
                    detail: "Ramadan content starts 6 weeks before the crescent",
                    bg: "bg-gradient-to-br from-amber-900/60 to-obsidian"
                },
                {
                    id: 'eid',
                    title: "Eid Mubarak",
                    stat: "Highest purchase rate of the year",
                    detail: "Gift campaigns and offers ready two weeks prior",
                    bg: "bg-gradient-to-br from-yellow-700/60 to-obsidian"
                },
                {
                    id: 'national',
                    title: "September 23",
                    stat: "National pride = high engagement",
                    detail: "Patriotic content reflecting brand identity & Kingdom's spirit",
                    bg: "bg-gradient-to-br from-green-900/60 to-obsidian"
                },
                {
                    id: 'whitefriday',
                    title: "White Friday",
                    stat: "Highest sales day in the Kingdom",
                    detail: "Offer campaigns and ads ready exactly on time",
                    bg: "bg-gradient-to-br from-slate-900/80 to-obsidian"
                }
            ]
        }
    };

    const t = content[lang];

    return (
        <section ref={containerRef} className="py-24 bg-obsidian text-ivory">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl md:text-[40px] font-sans font-bold mb-16 max-w-2xl">{t.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {t.cards.map((card) => (
                        <div
                            key={card.id}
                            className={`season-card ${card.bg} border border-champagne/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:border-champagne/30 transition-all duration-500`}
                        >
                            {/* Abstract decorative element based on card type */}
                            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity rtl:left-6 rtl:right-auto">
                                {card.id === 'ramadan' && (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-champagne">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                )}
                                {card.id === 'eid' && (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-champagne flex gap-2">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                )}
                                {card.id === 'national' && (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white relative top-0 overflow-visible">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                        <line x1="4" y1="22" x2="4" y2="15" />
                                    </svg>
                                )}
                                {card.id === 'whitefriday' && (
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white font-bold">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    </svg>
                                )}
                            </div>

                            <h3 className="text-3xl font-bold font-sans mb-4 group-hover:text-champagne transition-colors">{card.title}</h3>
                            <p className="text-ivory/80 font-mono text-[14px] mb-8 font-medium bg-obsidian/30 inline-block px-3 py-1 rounded border border-ivory/10 tracking-widest leading-relaxed">
                                {card.stat}
                            </p>
                            <p className="text-ivory/60 text-[16px] leading-relaxed font-sans max-w-sm">
                                {card.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeasonalCampaigns;
