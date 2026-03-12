import React from 'react';

interface CTAProps {
    lang: 'ar' | 'en';
}

const CTACcloser: React.FC<CTAProps> = ({ lang }) => {
    const content = {
        ar: {
            headline: "منافسوك يستخدمون الذكاء الاصطناعي الآن.",
            subhead: "وأنت؟",
            body: "مكالمة واحدة. بدون التزام.\nسنريك بالضبط ما يمكن أن تبنيه Smart Trust\nلعلامتك التجارية في ٣٠ يوماً.",
            btn1: "احجز استشارة مجانية",
            btn2: "شاهد أعمالنا أولاً ←",
            trust: "بدون عقود · أول تسليم خلال ٤٨ ساعة · خبراء السوق السعودي والخليجي"
        },
        en: {
            headline: "Your competitors are using AI right now.",
            subhead: "Are you?",
            body: "One call. No commitment.\nWe'll show you exactly what Smart Trust can build\nfor your brand in 30 days.",
            btn1: "Book Free Strategy Call",
            btn2: "See Our Work First →",
            trust: "NO CONTRACTS · 48H FIRST DELIVERY · SAUDI MARKET EXPERTS"
        }
    };

    const t = content[lang];

    return (
        <section className="relative py-32 md:py-48 bg-obsidian text-ivory w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Parallax Image Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1549487288-5cbf471f00af?auto=format&fit=crop&q=80"
                    alt="Riyadh Kingdom Centre night aerial"
                    className="w-full h-full object-cover object-center opacity-[0.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                <h3 className="text-2xl md:text-[24px] font-sans font-bold text-ivory/40 mb-4">{t.headline}</h3>
                <h2 className="text-7xl md:text-[76px] font-serif italic text-champagne mb-12">{t.subhead}</h2>

                <p className="text-[18px] text-ivory/55 leading-relaxed font-sans max-w-[560px] mx-auto whitespace-pre-line mb-16">
                    {t.body}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 bg-champagne text-obsidian rounded-full font-bold text-[16px] xl:text-[18px] hover:scale-105 transition-transform duration-300 font-sans"
                    >
                        {t.btn1}
                    </a>
                    <a
                        href="#work"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-champagne text-champagne rounded-full font-bold text-[16px] xl:text-[18px] hover:bg-champagne/10 transition-colors duration-300 font-sans"
                    >
                        {t.btn2}
                    </a>
                </div>

                <div className="text-[11px] font-mono text-ivory/30 tracking-widest uppercase">
                    {t.trust}
                </div>
            </div>
        </section>
    );
};

export default CTACcloser;
