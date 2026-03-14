import React from 'react';
import {
    HeartIcon,
    LightBulbIcon,
    HandRaisedIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

const values = [
    {
        icon: HeartIcon,
        title: 'People First',
        description: 'Every decision starts and ends with people. We treat candidates and clients with dignity, respect, and genuine care.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Integrity',
        description: 'Transparent, honest, and ethical in every interaction. We build trust through accountability and consistent follow-through.',
    },
    {
        icon: LightBulbIcon,
        title: 'Innovation',
        description: 'From AI-powered matching to digital onboarding, we continuously invest in technology that makes recruitment smarter and faster.',
    },
    {
        icon: GlobeAltIcon,
        title: 'Global Mindset',
        description: 'With operations across 30+ countries, we embrace cultural diversity and understand the nuances of international workforce deployment.',
    },
    {
        icon: SparklesIcon,
        title: 'Excellence',
        description: 'We pursue the highest standards in every placement — from candidate quality to employer satisfaction and compliance.',
    },
    {
        icon: HandRaisedIcon,
        title: 'Social Responsibility',
        description: 'We champion fair labour practices, ethical recruitment, and sustainable community development in every market we serve.',
    },
];

export default function AboutValues() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-14" data-aos="fade-up">
                    <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">
                        OUR VALUES
                    </p>
                    <h2
                        className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
                        style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                    >
                        What Drives <span className="italic font-bold">Us</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                        Our values are the foundation of everything we do — guiding how we recruit, how we serve, and how we grow together with our partners around the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-sm p-8 flex flex-col items-start hover:border-[#006A80] hover:shadow-md transition-all duration-300 group"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            <value.icon className="w-10 h-10 text-[#006A80] mb-5 stroke-1 group-hover:scale-110 transition-transform duration-300" />
                            <h4 className="text-brand-dark font-bold text-lg mb-3">{value.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
