import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface FooterProps {
    lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
    const content = {
        ar: {
            brandDesc: "التسويق الرقمي بالذكاء الاصطناعي\nللعلامات السعودية.",
            services: {
                title: "خدماتنا",
                links: ["صور منتجات AI", "سوشيال ميديا", "إعلانات فيديو", "تصميم مواقع"]
            },
            company: {
                title: "الشركة",
                links: ["من نحن", "أعمالنا", "كيف نعمل", "تواصل معنا"]
            },
            contact: {
                title: "تواصل",
                links: ["واتساب", "البريد الإلكتروني", "إنستغرام", "لينكدإن"]
            },
            bottom: {
                right: "© ٢٠٢٥ Smart Trust. جميع الحقوق محفوظة.",
                center: "النظام يعمل",
                left: ["سياسة الخصوصية", "الشروط والأحكام"]
            }
        },
        en: {
            brandDesc: "AI-Powered Marketing\nfor Saudi Brands.",
            services: {
                title: "Services",
                links: ["AI Visuals", "Social Media", "Video Ads", "Web Design"]
            },
            company: {
                title: "Company",
                links: ["About", "Work", "Process", "Contact"]
            },
            contact: {
                title: "Contact",
                links: ["WhatsApp", "Email", "Instagram", "LinkedIn"]
            },
            bottom: {
                right: "© 2025 Smart Trust. All rights reserved.",
                center: "SYSTEM ONLINE",
                left: ["Privacy Policy", "Terms & Conditions"]
            }
        }
    };

    const t = content[lang];

    return (
        <footer className="bg-[#080810] rounded-t-[4rem] border-t border-champagne/20 pt-24 pb-12 mt-[-4rem] relative z-20 text-ivory">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

                    <div className="col-span-1 flex flex-col items-start rtl:items-start ltr:items-start space-y-6">
                        <h4 className="text-[20px] font-sans font-bold text-champagne mb-2">Smart Trust</h4>
                        <p className="text-ivory/60 font-sans whitespace-pre-line leading-relaxed text-[15px]">
                            {t.brandDesc}
                        </p>
                        <div className="flex gap-4 text-champagne">
                            <a href="#" className="hover:text-ivory transition-colors"><Instagram size={20} /></a>
                            {/* Snapchat Icon - using custom SVG as Lucide doesn't have it natively or simple enough icon */}
                            <a href="#" className="hover:text-ivory transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.22 18.3c-2.32 0-3.32-.97-6.28-1.55-2.2-.42-1.76-1.57-1.3-1.87.53-.36 1.4-1.2 2.76-1.2.98 0 1.93.36 2.45.92-.85-.14-1.63-.5-2.02-.92-.6-.67-.3-1.67-.1-1.93.92-1.2 2.4-1.95 3.52-2.1.25-.04.48-.05.65-.05 1.55 0 2.94.86 3.75 2 .25.35.58 1.4-.18 2.05-.5.42-1.28.78-2.14.92.54-.57 1.46-.93 2.5-1 1.34 0 2.22.84 2.74 1.2.45.3.88 1.45-1.32 1.88-2.95.58-3.95 1.55-6.27 1.55h-.76zm.5-8.2c-1.4 0-1.84-1.74-2.13-2.92-.25-1.04-.44-2.4-.44-2.9C10.15 2.1 11.23 1 12 1h.15c.78 0 1.85 1.1 1.85 3.28 0 .5-.2 1.85-.45 2.88-.3 1.18-.73 2.92-2.13 2.92h-.7z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-ivory transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-ivory transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="col-span-1 list-none font-sans space-y-6 lg:pl-16">
                        <h4 className="text-[14px] text-ivory/40 uppercase tracking-widest font-mono mb-6">{t.services.title}</h4>
                        <ul className="space-y-4 text-ivory/80 text-[15px]">
                            {t.services.links.map((link, i) => (
                                <li key={i}><a href="#" className="hover:text-champagne transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 list-none font-sans space-y-6 lg:pl-8">
                        <h4 className="text-[14px] text-ivory/40 uppercase tracking-widest font-mono mb-6">{t.company.title}</h4>
                        <ul className="space-y-4 text-ivory/80 text-[15px]">
                            {t.company.links.map((link, i) => (
                                <li key={i}><a href="#" className="hover:text-champagne transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 list-none font-sans space-y-6">
                        <h4 className="text-[14px] text-ivory/40 uppercase tracking-widest font-mono mb-6">{t.contact.title}</h4>
                        <ul className="space-y-4 text-ivory/80 text-[15px]">
                            {t.contact.links.map((link, i) => (
                                <li key={i} className="flex items-center gap-3 group">
                                    <a href="#" className="hover:text-champagne transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300 rtl:group-hover:-translate-x-1">
                                        {i === 0 && <MessageCircle size={16} className="text-champagne/80" />}
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] font-mono text-ivory/40">
                    <div className="flex gap-6">
                        {t.bottom.left.map((item, i) => (
                            <a key={i} href="#" className="hover:text-ivory transition-colors">{item}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 order-first md:order-none">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {t.bottom.center}
                    </div>

                    <div>
                        {t.bottom.right}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
