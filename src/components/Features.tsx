import React, { useState, useEffect } from 'react';
import Floating3DBackground from './Floating3DBackground';

// Card 1 Shuffler component
const DiagnosticShuffler = ({ lang }: { lang: 'ar' | 'en' }) => {
    const [index, setIndex] = useState(0);
    const items = {
        ar: ["تصوير المنتجات", "موكاب الحملات", "صور المتاجر"],
        en: ["Product Photography", "Campaign Mockups", "E-commerce Heroes"]
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items[lang].length);
        }, 3000);
        return () => clearInterval(interval);
    }, [lang]);

    return (
        <div className="h-40 bg-obsidian/50 rounded-xl border border-champagne/10 flex flex-col items-center justify-center relative overflow-hidden mt-6 flex-1">
            {items[lang].map((item, i) => (
                <div
                    key={i}
                    className={`absolute transition-all duration-700 font-sans font-bold text-lg md:text-xl text-champagne text-center w-full px-4
            ${i === index ? 'opacity-100 translate-y-0 scale-100' :
                            i < index ? 'opacity-0 -translate-y-8 scale-95' : 'opacity-0 translate-y-8 scale-95'}`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

// Card 2 Typewriter component
const TelemetryTypewriter = ({ lang }: { lang: 'ar' | 'en' }) => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [text, setText] = useState('');

    const messages = {
        ar: [
            "جاري إنشاء محتوى رمضان لـ @علامتك...",
            "جدولة ٣٠ منشوراً لهذا الشهر...",
            "تحسين الكابشن للجمهور السعودي...",
            "إعلان ميتا جاهز للنشر...",
            "كونسبت ريلز جديد — جاهز للمراجعة...",
            "حملة العيد: اعتُمدت ✓"
        ],
        en: [
            "Generating Ramadan content...",
            "Scheduling 30 posts for this month...",
            "Optimizing captions for Saudi...",
            "Meta ad ready to publish...",
            "New Reels concept ready...",
            "Eid campaign: Approved ✓"
        ]
    };

    useEffect(() => {
        let currentMessage = messages[lang][messageIndex];
        let currentChar = 0;

        setText('');

        const typingInterval = setInterval(() => {
            if (currentChar <= currentMessage.length) {
                setText(currentMessage.slice(0, currentChar));
                currentChar++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setMessageIndex((prev) => (prev + 1) % messages[lang].length);
                }, 1500);
            }
        }, 50);

        return () => {
            clearInterval(typingInterval);
        };
    }, [lang, messageIndex]);

    return (
        <div className="h-40 bg-obsidian/50 rounded-xl border border-champagne/10 p-4 relative overflow-hidden mt-6 flex-1 flex flex-col font-mono text-left rtl:text-right">
            <div className="flex items-center gap-2 mb-4 text-xs text-champagne/60 border-b border-champagne/10 pb-2">
                <span className="w-2 h-2 rounded-full bg-champagne animate-pulse"></span>
                {lang === 'ar' ? 'مباشر' : 'LIVE'}
            </div>
            <div className="text-ivory/80 text-sm h-full flex items-start">
                <span className="text-champagne mr-2 rtl:ml-2 rtl:mr-0">{">"}</span> {text}
                <span className="inline-block w-2 h-4 bg-champagne ml-1 rtl:mr-1 rtl:ml-0 animate-pulse"></span>
            </div>
        </div>
    );
};

// Card 3 Scheduler component
const CursorProtocolScheduler = ({ lang }: { lang: 'ar' | 'en' }) => {
    const days = {
        ar: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
        en: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };

    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-40 bg-obsidian/50 rounded-xl border border-champagne/10 p-4 relative overflow-hidden mt-6 flex-1 flex flex-col justify-between" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex justify-between px-2">
                {days[lang].map((day, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300
            ${(step === 1 && i === 1) || (step === 2 && i === 4) ? 'bg-champagne text-obsidian' : 'bg-transparent text-ivory/40'}`}>
                        {day}
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4 relative z-0">
                <button className={`px-4 py-2 rounded text-sm font-bold transition-all duration-300 flex items-center gap-2
          ${step === 3 ? 'border border-green-500 text-green-500 bg-green-500/10 scale-105' : 'border border-champagne/30 text-champagne/60'}`}>
                    {step === 3 && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    )}
                    {step === 3 ? (lang === 'ar' ? 'تم النشر' : 'Published') : (lang === 'ar' ? 'نشر الحملة' : 'Publish Campaign')}
                </button>
            </div>

            {/* Cursor Element */}
            <div
                className="absolute w-4 h-4 transition-all duration-500 pointer-events-none z-10"
                style={{
                    top: step === 0 ? '80%' : step === 1 ? '16%' : step === 2 ? '16%' : '60%',
                    left: lang === 'ar' ?
                        (step === 0 ? '90%' : step === 1 ? '75%' : step === 2 ? '30%' : '50%') :
                        (step === 0 ? '90%' : step === 1 ? '25%' : step === 2 ? '70%' : '50%'),
                    transform: `translate(-50%, -50%)`,
                }}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-ivory drop-shadow-md">
                    <path d="M4 4L10.3705 22.3168C10.5186 22.7423 11.1278 22.7303 11.2558 22.2965L14.0722 12.7441L22.8427 9.28189C23.2384 9.12573 23.2106 8.56303 22.7984 8.44105L4 4Z" fill="currentColor" />
                </svg>
            </div>
        </div>
    );
};



interface FeaturesProps {
    lang: 'ar' | 'en';
}

const Features: React.FC<FeaturesProps> = ({ lang }) => {
    const content = {
        ar: {
            intro: "POWERED BY AI · BUILT FOR SAUDI",
            title: "أربعة أسلحة. وكالة واحدة.",
            cards: [
                {
                    title: "صور منتجات تبيع",
                    subtitle: "AI Visuals That Convert",
                    desc: "صور احترافية لمنتجاتك خلال 48 ساعة.\nبدون استوديو. بدون مصور. بدون انتظار."
                },
                {
                    title: "محتوى يوقف التمرير",
                    subtitle: "Content That Stops the Scroll",
                    desc: "محتوى موجه للجمهور السعودي على\nإنستغرام وتيك توك وسناب وميتا."
                },
                {
                    title: "حملاتك. دائماً في الموعد.",
                    subtitle: "Always On Time. Always On Brand.",
                    desc: "من البريف إلى النشر — كل حملة\nتُسلَّم في وقتها على كل المنصات."
                }
            ]
        },
        en: {
            intro: "POWERED BY AI · BUILT FOR SAUDI",
            title: "Four Weapons. One Agency.",
            cards: [
                {
                    title: "Product Visuals That Sell",
                    subtitle: "AI Visuals That Convert",
                    desc: "Professional product photos in 48 hours.\nNo studio. No photographer. No waiting."
                },
                {
                    title: "Scroll-Stopping Content",
                    subtitle: "Content That Stops the Scroll",
                    desc: "Content targeted at the Saudi audience on\nInstagram, TikTok, Snapchat, and Meta."
                },
                {
                    title: "Campaigns. Always on Time.",
                    subtitle: "Always On Time. Always On Brand.",
                    desc: "From brief to publishing — every campaign\ndelivered on time across all platforms."
                }
            ]
        }
    };

    const t = content[lang];

    return (
        <section id="services" className="py-24 bg-obsidian text-ivory relative overflow-hidden">
            <Floating3DBackground variant="prominent" />
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="mb-16 relative z-10">
                    <p className="text-champagne/60 font-mono text-[14px] uppercase mb-4 tracking-widest">{t.intro}</p>
                    <h2 className="text-4xl md:text-[48px] font-sans font-bold leading-tight">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-[#0D0D12] border border-champagne/20 rounded-[2rem] p-8 flex flex-col group hover:border-champagne/40 transition-colors duration-500 hover:-translate-y-1">
                        <h3 className="text-[22px] font-sans font-bold mb-1 group-hover:text-champagne transition-colors">{t.cards[0].title}</h3>
                        <p className="text-sm font-mono text-champagne/80 mb-4">{t.cards[0].subtitle}</p>
                        <p className="text-ivory/60 text-[16px] leading-relaxed whitespace-pre-line font-sans mb-4 flex-1">
                            {t.cards[0].desc}
                        </p>
                        <DiagnosticShuffler lang={lang} />
                    </div>

                    <div className="bg-[#0D0D12] border border-champagne/20 rounded-[2rem] p-8 flex flex-col group hover:border-champagne/40 transition-colors duration-500 hover:-translate-y-1">
                        <h3 className="text-[22px] font-sans font-bold mb-1 group-hover:text-champagne transition-colors">{t.cards[1].title}</h3>
                        <p className="text-sm font-mono text-champagne/80 mb-4">{t.cards[1].subtitle}</p>
                        <p className="text-ivory/60 text-[16px] leading-relaxed whitespace-pre-line font-sans mb-4 flex-1">
                            {t.cards[1].desc}
                        </p>
                        <TelemetryTypewriter lang={lang} />
                    </div>

                    <div className="bg-[#0D0D12] border border-champagne/20 rounded-[2rem] p-8 flex flex-col group hover:border-champagne/40 transition-colors duration-500 hover:-translate-y-1">
                        <h3 className="text-[22px] font-sans font-bold mb-1 group-hover:text-champagne transition-colors">{t.cards[2].title}</h3>
                        <p className="text-sm font-mono text-champagne/80 mb-4">{t.cards[2].subtitle}</p>
                        <p className="text-ivory/60 text-[16px] leading-relaxed whitespace-pre-line font-sans mb-4 flex-1">
                            {t.cards[2].desc}
                        </p>
                        <CursorProtocolScheduler lang={lang} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
