import React from 'react';

const stats = [
    { value: '50K+', unit: 'CANDIDATES', label: 'PLACED GLOBALLY' },
    { value: '30+', unit: 'COUNTRIES', label: 'IN OUR NETWORK' },
    { value: '500+', unit: 'EMPLOYERS', label: 'TRUST LUCRU' },
    { value: '98%', unit: 'RETENTION', label: 'FIRST-YEAR RATE' },
];

export default function AboutIntro() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24" data-aos="fade-up">
                    <div className="lg:w-5/12">
                        <p className="text-xs font-bold tracking-[0.25em] text-[#5ec4d6] uppercase mb-4">
                            WHO WE ARE
                        </p>
                        <h2
                            className="text-4xl md:text-[3.2rem] leading-tight text-[#5ec4d6] font-light"
                            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                        >
                            A promise of <span className="italic">better careers</span>
                        </h2>
                    </div>

                    <div className="lg:w-7/12">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                            Lucru is a premier international recruitment and manpower agency connecting visionary employers with exceptional talent across the globe. With operations spanning 30+ countries, our innovative staffing solutions have placed over 50,000 professionals in roles that transform lives and businesses.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            From healthcare and engineering to hospitality and IT, Lucru&apos;s specialist recruiters understand the unique demands of every industry. We go beyond filling positions — we build lasting partnerships, ensuring every placement drives success, growth, and prosperity for both employers and candidates. Our end-to-end services, from sourcing and vetting to visa processing and pre-departure training, set the standard for excellence in global workforce mobilisation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8" data-aos="fade-up">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-start md:items-baseline gap-1 md:gap-3">
                                <span
                                    className="text-5xl md:text-6xl font-light text-[#5ec4d6]"
                                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                                >
                                    {stat.value}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold tracking-wider text-gray-800 uppercase">
                                        {stat.unit}
                                    </span>
                                    <span className="text-xs text-gray-400 tracking-wider uppercase">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
