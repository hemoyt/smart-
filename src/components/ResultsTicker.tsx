import React from 'react';

interface ResultsTickerProps {
    lang: 'ar' | 'en';
}

const ResultsTicker: React.FC<ResultsTickerProps> = () => {
    const items = [
        "تسليم ٤٨ ساعة", "48H Delivery",
        "محتوى سعودي أصيل", "Saudi-Native Content",
        "إنتاج بالذكاء الاصطناعي", "AI Production",
        "بدون تكاليف استوديو", "Zero Studio Costs",
        "ميتا وسناب وتيك توك", "Meta · Snap · TikTok",
        "عربي وإنجليزي", "Arabic + English",
        "حملات رمضان", "Ramadan Campaigns",
        "حملات العيد", "Eid Campaigns",
        "اليوم الوطني السعودي", "Saudi National Day",
        "الجمعة البيضاء", "White Friday",
        "نتائج حقيقية لا مشاهدات فقط", "Real Results"
    ];

    return (
        <section className="bg-obsidian border-y border-champagne/30 py-4 overflow-hidden relative w-full flex" dir="ltr">
            <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <React.Fragment key={i}>
                        <span className="text-champagne font-mono text-sm xl:text-base uppercase px-4 md:px-6 inline-block tracking-wide">
                            {item}
                        </span>
                        <span className="text-champagne/40 px-2 inline-block text-[10px] md:text-sm">✦</span>
                    </React.Fragment>
                ))}
            </div>
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
};

export default ResultsTicker;
