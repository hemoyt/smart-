import React, { useState, useEffect } from 'react';

interface NavbarProps {
    lang: 'ar' | 'en';
    setLang: (lang: 'ar' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const content = {
        ar: {
            services: 'خدماتنا',
            work: 'أعمالنا',
            process: 'كيف نعمل',
            contact: 'تواصل معنا',
            cta: 'ابدأ حملتك ←'
        },
        en: {
            services: 'Services',
            work: 'Work',
            process: 'Process',
            contact: 'Contact',
            cta: 'Start Your Campaign →'
        }
    };

    const t = content[lang];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md py-4 shadow-md border-b border-champagne/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                <a href="#" className="font-sans font-bold text-2xl text-champagne">Smart Trust</a>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#services" className="text-ivory hover:text-champagne transition-colors font-medium">{t.services}</a>
                    <a href="#work" className="text-ivory hover:text-champagne transition-colors font-medium">{t.work}</a>
                    <a href="#process" className="text-ivory hover:text-champagne transition-colors font-medium">{t.process}</a>
                    <a href="#contact" className="text-ivory hover:text-champagne transition-colors font-medium">{t.contact}</a>
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                        className="text-ivory/60 hover:text-ivory transition-colors font-mono uppercase text-sm px-3 py-1 border border-ivory/20 rounded-full"
                    >
                        {lang === 'ar' ? 'EN' : 'AR'}
                    </button>
                    <a href="#contact" className="hidden md:inline-flex items-center justify-center bg-champagne text-obsidian px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform duration-300 group overflow-hidden relative">
                        <span className="relative z-10">{t.cta}</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
