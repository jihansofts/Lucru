import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        watermark: 'Connecting talent with opportunity',
        title: 'Manpower Recruitment',
        description: 'Lucru\'s core manpower recruitment service spans across healthcare, engineering, construction, hospitality, IT, logistics, and more. We source, screen, and deploy qualified professionals from our global talent pool of 50,000+ pre-vetted candidates, ensuring every placement meets the highest standards of quality and compliance.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        link: '/hire-talent',
    },
    {
        watermark: 'Leaders for a changing world',
        title: 'Executive Search',
        description: 'For senior and C-suite roles, our executive search division employs a targeted, confidential approach. We identify and engage top-tier leaders through our extensive professional networks, rigorous assessment methodologies, and deep industry expertise — delivering candidates who drive transformational growth.',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        link: '/hire-talent/permanent-placement',
    },
    {
        watermark: 'Flexibility meets excellence',
        title: 'Contract Staffing',
        description: 'When projects demand rapid workforce scaling, our contract staffing solutions deliver. From short-term assignments to multi-year engagements, we provide fully managed contract professionals — handling payroll, compliance, performance monitoring, and contract extensions so you can focus on your objectives.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
        link: '/hire-talent/contract-staffing',
    },
    {
        watermark: 'Prepared from day one',
        title: 'Pre-Departure Training',
        description: 'Every candidate deployed through Lucru undergoes comprehensive pre-departure orientation covering cultural acclimatisation, workplace safety, rights and responsibilities, language skills, and destination-specific protocols. This ensures a smooth transition and immediate productivity from the very first day on the job.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
        link: '/hire-talent/submit-staffing-request',
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
                        className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[400px] md:min-h-[500px]`}
                        data-aos="fade-up"
                    >
                        {/* Image Half */}
                        <div className="relative w-full md:w-1/2 h-72 md:h-auto">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
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
                                    className="text-2xl md:text-3xl text-[#002538] font-bold mb-6"
                                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <Link
                                    href={service.link}
                                    className="inline-block bg-[#5ec4d6] text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#4db3c5] transition-colors"
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
