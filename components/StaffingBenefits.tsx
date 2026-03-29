import React from 'react';

import { GlobeAltIcon, ShieldCheckIcon, ClockIcon, AcademicCapIcon, DocumentCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const benefits = [
    { icon: GlobeAltIcon, label: 'South Asian Pool', desc: 'Direct access to millions of hardworking candidates from Bangladesh, India, Nepal, and beyond' },
    { icon: ShieldCheckIcon, label: 'Trade-Tested Candidates', desc: 'Rigorous screening, skills verification, and medical clearings before shortlisting' },
    { icon: ClockIcon, label: 'Fast Deployment', desc: 'Streamlined logistics ensuring rapid mobilization from source country to your worksite' },
    { icon: AcademicCapIcon, label: 'Industry Specialized', desc: 'Expertise in construction, hospitality, healthcare, facility management, and manufacturing' },
    { icon: DocumentCheckIcon, label: 'Full Documentation', desc: 'Attestation, visa processing, emigration clearance, and legal compliance handled in-house' },
    { icon: UserGroupIcon, label: 'Dedicated Account Managers', desc: 'Single point of contact for employers coordinating large-scale interviews and hiring events' },
];

export default function StaffingBenefits() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-5/12" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                            Why Choose <span className="italic font-bold">Lucru</span>
                        </h2>
                        <h3 className="text-lg md:text-xl text-[#006A80] font-semibold mb-6">
                            Your Overseas Manpower Partner
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                            We specialize in connecting ambitious employers across the Middle East, Europe, and Asia with dedicated, hardworking talent from South Asia. We understand the complexities of international recruitment and take the burden off your shoulders.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                            Our agency provides a 360-degree service—from initial trade-testing and interviews in the home country, through the labyrinth of governmental approvals, visa processing, and document attestation, right up to booking flights and ensuring smooth deployment. Focus on your business while we build your workforce.
                        </p>
                        <a
                            href="#"
                            className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors"
                        >
                            GET IN TOUCH
                        </a>
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
                                    <h5 className="text-brand-dark font-bold text-sm mb-2">{item.label}</h5>
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
