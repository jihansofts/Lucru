import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        watermark: 'Global deployments',
        title: 'Overseas Recruitment',
        description: 'Lucru\'s core overseas manpower division caters to heavy construction, healthcare, energy, and facility management across the Middle East and beyond. We source, trade-test, and deploy precise talent from South Asia, ensuring every candidate clears medical and embassy standards.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        link: '/our-services/overseas-recruitment',
    },
    {
        watermark: 'Precision leadership',
        title: 'Specialized Headhunting',
        description: 'For senior project managers and healthcare administrators, our executive search team executes targeted, cross-border headhunting. We locate highly specialized professionals who bring critical technical expertise to international projects.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        link: '/our-services/specialized-headhunting',
    },
    {
        watermark: 'Streamlined bureaucracy',
        title: 'Visa & Emigration',
        description: 'We dissolve the bureaucratic barriers of overseas hiring. Our dedicated in-house processing team handles Wafid/GAMCA medical coordination, embassy visa stamping, and mandatory BMET emigration clearances seamlessly on your behalf.',
        image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
        link: '/our-services/visa-processing',
    },
    {
        watermark: 'Prepared from day one',
        title: 'Pre-Departure Training',
        description: 'Every outbound candidate deployed through Lucru undergoes mandatory orientation. We train on cultural norms, host country laws, workplace safety, and basic language skills to prevent culture shock and ensure immediate site readiness.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
        link: '/our-services/pre-departure-orientation',
    },
];

export default function AboutServices() {
    return (
        <section className="bg-[#f7f5f2]">
            {services.map((service, index) => {
                const isReversed = index % 2 !== 0;
                return (
                    <div
                        key={index}
                        className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-100 md:min-h-125`}
                        data-aos="fade-up"
                    >
                        {/* Image Half */}
                        <div className="relative w-full md:w-1/2 h-72 md:h-auto">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Text Half */}
                        <div className="relative w-full md:w-1/2 flex items-center overflow-hidden">
                            {/* Watermark text */}
                            <div
                                className="absolute top-6 md:top-10 left-6 md:left-12 right-6 text-6xl md:text-7xl lg:text-8xl font-light text-gray-200/60 leading-tight pointer-events-none select-none"
                                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                            >
                                {service.watermark}
                            </div>

                            <div className="relative z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16">
                                <h3
                                    className="text-2xl md:text-3xl text-brand-dark font-bold mb-6"
                                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.link}
                                    className="inline-block bg-brand-primary text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-primary transition-colors"
                                >
                                    DISCOVER MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
