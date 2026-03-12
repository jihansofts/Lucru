import React from 'react';
import Link from 'next/link';
import { GlobeAltIcon, ShieldCheckIcon, ClockIcon, AcademicCapIcon, DocumentCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const benefits = [
    { icon: GlobeAltIcon, label: 'Global Reach', desc: 'Access talent from 30+ countries across Asia, Africa & the Middle East' },
    { icon: ShieldCheckIcon, label: 'Vetted Candidates', desc: 'Multi-stage screening with verified credentials & references' },
    { icon: ClockIcon, label: 'Fast Turnaround', desc: 'Rapid deployment within 2-4 weeks from request to onboarding' },
    { icon: AcademicCapIcon, label: 'Industry Expertise', desc: 'Specialized recruiters for healthcare, engineering, IT & more' },
    { icon: DocumentCheckIcon, label: 'Compliance Assured', desc: 'Full visa, immigration & labor law compliance management' },
    { icon: UserGroupIcon, label: 'Dedicated Support', desc: 'Personal account managers from first contact to placement' },
];

export default function StaffingBenefits() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-5/12" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl text-[#002538] font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                            Why Choose <span className="italic font-bold">Lucru</span>
                        </h2>
                        <h3 className="text-lg md:text-xl text-[#006A80] font-semibold mb-6">
                            Your Strategic Manpower Partner
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                            With decades of combined experience in international recruitment, Lucru bridges the gap between exceptional talent and visionary employers. Our end-to-end staffing solutions ensure you get the right people, with the right skills, at the right time — fully compliant and ready to contribute from day one.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                            From single-role executive searches to large-scale workforce mobilisation, our network spans 30+ countries with a proven track record of delivering quality placements that last.
                        </p>
                        <Link
                            href="/hire-talent/submit-staffing-request"
                            className="inline-block border border-[#002538] text-[#002538] px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#002538] hover:text-white transition-colors"
                        >
                            SUBMIT REQUEST
                        </Link>
                    </div>

                    <div className="lg:w-7/12">
                        <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">
                            OUR ADVANTAGES
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-sm p-6 flex flex-col items-center text-center hover:border-[#006A80] hover:shadow-md transition-all duration-300 group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                >
                                    <item.icon className="w-10 h-10 text-[#006A80] mb-4 stroke-1 group-hover:scale-110 transition-transform duration-300" />
                                    <h5 className="text-[#002538] font-bold text-sm mb-2">{item.label}</h5>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
