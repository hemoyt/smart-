import React from 'react';
import { Camera, Zap, Crown, Check } from 'lucide-react';
import Floating3DBackground from './Floating3DBackground';

interface ServicesProps {
    lang: 'ar' | 'en';
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
    const content = {
        ar: {
            label: "SAUDI MARKET PRICING · بالريال السعودي",
            title: "اختر سلاحك.",
            cards: [
                {
                    id: 'visuals',
                    iconName: 'camera',
                    name: "Visual Engine",
                    badge: "الأساسي",
                    subtitle: "صور منتجات AI + حملات",
                    features: [
                        "٢٠ صورة AI للمنتجات شهرياً",
                        "٣ أنماط بصرية لكل منتج",
                        "حقوق استخدام تجاري كامل",
                        "تسليم خلال ٤٨ ساعة",
                        "جاهز لميتا وسناب وتيك توك"
                    ],
                    price: "يبدأ من ٤٬٩٩٩ ريال / شهر",
                    cta: "ابدأ الصور",
                    isHero: false
                },
                {
                    id: 'content',
                    iconName: 'zap',
                    name: "Content Machine",
                    badge: "الأكثر طلباً ✦",
                    subtitle: "سوشيال ميديا + إعلانات + فيديو",
                    features: [
                        "٣٠ منشوراً شهرياً (إنستغرام، تيك توك، سناب، لينكدإن)",
                        "٤ إعلانات ميتا شهرياً",
                        "٢ كونسبت فيديو شهرياً",
                        "جلسة استراتيجية شهرية",
                        "تقرير أداء تفصيلي"
                    ],
                    price: "يبدأ من ٩٬٩٩٩ ريال / شهر",
                    cta: "أطلق المحتوى",
                    isHero: true
                },
                {
                    id: 'full',
                    iconName: 'crown',
                    name: "Full Campaign",
                    badge: "الشامل",
                    subtitle: "شريك تسويق رقمي متكامل",
                    features: [
                        "كل شيء في Visual Engine + Content Machine",
                        "مدير حساب مخصص",
                        "صفحات هبوط احترافية",
                        "بناء حملات مخصصة",
                        "دعم أولوية ٢٤ ساعة",
                        "تقارير أسبوعية مفصلة"
                    ],
                    price: "تسعير مخصص",
                    cta: "تحدث معنا",
                    isHero: false
                }
            ]
        },
        en: {
            label: "SAUDI MARKET PRICING · SAR",
            title: "Choose Your Weapon.",
            cards: [
                {
                    id: 'visuals',
                    iconName: 'camera',
                    name: "Visual Engine",
                    badge: "Essential",
                    subtitle: "AI Product Photography & Campaigns",
                    features: [
                        "20 AI product photos per month",
                        "3 visual styles per product",
                        "Full commercial usage rights",
                        "48-hour delivery",
                        "Ready for Meta, Snap, TikTok"
                    ],
                    price: "Starting 4,999 SAR / month",
                    cta: "Start Visuals",
                    isHero: false
                },
                {
                    id: 'content',
                    iconName: 'zap',
                    name: "Content Machine",
                    badge: "Most Popular ✦",
                    subtitle: "Social Media + Ads + Video",
                    features: [
                        "30 posts/month (IG, TikTok, Snap, LinkedIn)",
                        "4 Meta ads/month",
                        "2 video concepts/month",
                        "Monthly strategy session",
                        "Detailed performance report"
                    ],
                    price: "Starting 9,999 SAR / month",
                    cta: "Launch Content",
                    isHero: true
                },
                {
                    id: 'full',
                    iconName: 'crown',
                    name: "Full Campaign",
                    badge: "Comprehensive",
                    subtitle: "Complete Digital Marketing Partner",
                    features: [
                        "Everything in Visual Engine + Content Machine",
                        "Dedicated account manager",
                        "Professional landing pages",
                        "Custom campaign building",
                        "24/7 priority support",
                        "Detailed weekly reporting"
                    ],
                    price: "Custom Pricing",
                    cta: "Talk To Us",
                    isHero: false
                }
            ]
        }
    };

    const t = content[lang];

    const getIcon = (name: string, isHero: boolean) => {
        const color = isHero ? "text-obsidian" : "text-champagne";
        switch (name) {
            case 'camera': return <Camera size={28} className={color} />;
            case 'zap': return <Zap size={28} className={color} />;
            case 'crown': return <Crown size={28} className={color} />;
            default: return null;
        }
    };

    return (
        <section className="py-24 bg-obsidian text-ivory relative overflow-hidden">
            <Floating3DBackground variant="subtle" />
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 relative z-10">
                    <p className="text-champagne/60 font-mono text-sm uppercase mb-4 tracking-widest">{lang === 'ar' ? 'خدماتنا' : 'OUR SERVICES'}</p>
                    <h2 className="text-4xl md:text-[48px] font-sans font-bold leading-tight">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
                    {t.cards.map((card) => (
                        <div
                            key={card.id}
                            className={`rounded-[2rem] p-8 md:p-10 flex flex-col h-full relative group transition-transform duration-500 hover:-translate-y-2
                ${card.isHero
                                    ? 'bg-gradient-to-br from-champagne/90 to-champagne/70 text-obsidian shadow-[0_0_40px_rgba(201,168,76,0.15)] lg:scale-105 z-10'
                                    : 'bg-[#080810] border border-champagne/20 hover:border-champagne/40'}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-4 rounded-xl ${card.isHero ? 'bg-obsidian/10' : 'bg-obsidian'}`}>
                                    {getIcon(card.iconName, card.isHero)}
                                </div>

                                <div className={`px-3 py-1 rounded-full font-mono text-xs font-bold leading-none flex items-center h-6
                  ${card.isHero ? 'bg-obsidian text-champagne' : 'bg-obsidian text-champagne border border-champagne/30'}`}>
                                    {card.badge}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold font-sans mb-1">{card.name}</h3>
                            <p className={`font-mono text-sm mb-8 ${card.isHero ? 'text-obsidian/70' : 'text-ivory/50'}`}>
                                {card.subtitle}
                            </p>

                            <div className="flex-1 space-y-4 mb-10">
                                {card.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check size={18} className={`shrink-0 mt-0.5 ${card.isHero ? 'text-obsidian' : 'text-champagne'}`} />
                                        <span className={`text-[15px] leading-relaxed font-sans ${card.isHero ? 'text-obsidian/90 font-medium' : 'text-ivory/80'}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-current border-opacity-10">
                                <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95
                  ${card.isHero
                                        ? 'bg-obsidian text-champagne hover:scale-[1.03]'
                                        : 'bg-transparent border border-champagne text-champagne hover:bg-champagne hover:text-obsidian'}`}>
                                    {card.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
