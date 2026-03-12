import React from 'react';

interface SocialProofProps {
    lang: 'ar' | 'en';
}

const SocialProof: React.FC<SocialProofProps> = ({ lang }) => {
    const content = {
        ar: {
            label: "TRUSTED BY SAUDI BRANDS · ثقة العلامات السعودية",
            title: "علامات وثقت بنا.",
            cards: [
                {
                    quote: "Smart Trust غيّرت تصوير منتجاتنا بالكامل.\nما كان يكلفنا ٥٠٬٠٠٠ ريال في الاستوديو\nبات يكلف أقل بكثير ويبدو أفضل.",
                    name: "مدير العمليات، علامة فاخرة سعودية",
                    tag: "تصوير منتجات AI"
                },
                {
                    quote: "حملتنا في رمضان وصلت لـ ٢.٤ مليون شخص\nفي الأسبوع الأول.\nالمحتوى كان سعودياً لأنه صُنع هنا.",
                    name: "مدير تسويق، علامة مطاعم رياض",
                    tag: "سوشيال ميديا + حملات"
                },
                {
                    quote: "أطلقنا صور متجرنا الإلكتروني كاملاً\nفي ٧٢ ساعة. كل منتج، كل زاوية، كل حجم.",
                    name: "مؤسس، علامة أزياء سعودية",
                    tag: "الحملة الشاملة"
                }
            ]
        },
        en: {
            label: "TRUSTED BY SAUDI BRANDS",
            title: "Brands That Trusted Us.",
            cards: [
                {
                    quote: "Smart Trust completely changed our product photography.\nWhat cost us 50,000 SAR in the studio\nnow costs far less and looks better.",
                    name: "Operations Manager, Saudi Luxury Brand",
                    tag: "AI Product Photography"
                },
                {
                    quote: "Our Ramadan campaign reached 2.4 million people\nin the first week.\nThe content was Saudi because it was made here.",
                    name: "Marketing Manager, Riyadh Restaurant Brand",
                    tag: "Social Media + Campaigns"
                },
                {
                    quote: "We launched all our e-commerce store photos\nin 72 hours. Every product, angle, and size.",
                    name: "Founder, Saudi Fashion Brand",
                    tag: "Full Campaign"
                }
            ]
        }
    };

    const t = content[lang];

    return (
        <section className="py-24 md:py-32 bg-obsidian text-ivory">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <p className="text-champagne/50 font-mono text-[12px] uppercase mb-4 tracking-widest">{t.label}</p>
                    <h2 className="text-5xl md:text-[56px] font-serif italic text-champagne leading-tight">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {t.cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-[#0D0D12] border border-champagne/20 rounded-[2rem] p-8 md:p-10 flex flex-col hover:-translate-y-2 hover:border-champagne/60 transition-all duration-500 group shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_-15px_rgba(201,168,76,0.1)]"
                        >
                            <div className="text-champagne text-4xl font-serif leading-none mb-6">"</div>

                            <p className="text-[17px] text-ivory/80 leading-relaxed font-sans whitespace-pre-line mb-10 flex-1">
                                {card.quote}
                            </p>

                            <div className="mt-auto">
                                <p className="text-sm text-ivory/50 font-sans mb-4">{card.name}</p>
                                <div className="inline-block px-4 py-1.5 rounded-full border border-champagne/30 text-champagne font-mono text-xs bg-champagne/5">
                                    {card.tag}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
