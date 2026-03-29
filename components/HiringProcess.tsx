import React, { useState } from 'react';
import { ClipboardDocumentListIcon, MagnifyingGlassIcon, UsersIcon, CheckBadgeIcon, DocumentTextIcon, BuildingOffice2Icon, ArrowPathIcon, CogIcon } from '@heroicons/react/24/outline';

const tabs = [
    {
        id: 'permanent',
        label: 'OVERSEAS RECRUITMENT',
        steps: [
            {
                icon: ClipboardDocumentListIcon,
                title: 'Client Requirements',
                description: 'Provide your desired job specifications, salary structures, and required numbers. We handle the necessary Demand Letter and embassy attestations.'
            },
            {
                icon: MagnifyingGlassIcon,
                title: 'Sourcing & Shortlisting',
                description: 'We activate our local networks to source candidates. Our technical teams conduct initial pre-screenings and comprehensive trade tests.'
            },
            {
                icon: UsersIcon,
                title: 'Interview & Selection',
                description: 'We organize seamless interview drives—either virtual or in-person at our local testing centers—giving you total control over final selections.'
            },
            {
                icon: CheckBadgeIcon,
                title: 'Processing & Deployment',
                description: 'Our team completely manages medicals, background checks, visa stamping, emigration clearance, and flights. Your candidate simply arrives ready to work.'
            }
        ]
    },
    {
        id: 'contract',
        label: 'BULK DEPLOYMENTS',
        steps: [
            {
                icon: DocumentTextIcon,
                title: 'Mass Campaign Planning',
                description: 'Tell us how many workers you need and when. We plan a massive recruitment drive designed to source hundreds of tradesmen efficiently.'
            },
            {
                icon: BuildingOffice2Icon,
                title: 'Large-Scale Trade Tests',
                description: 'We host intensive, multi-day testing events where your delegates can personally observe candidates executing simulated tasks matching the job.'
            },
            {
                icon: ArrowPathIcon,
                title: 'Compliance & Visas',
                description: 'We batch-process group visas, handle bulk emigration clearance (BMET/Protector), and mass medical filings to keep the pipeline moving swiftly.'
            },
            {
                icon: CogIcon,
                title: 'Chartered Flights & Onboarding',
                description: 'We organize group itineraries, including possible chartered flights, and provide stringent pre-departure orientation to prepare workers for your destination.'
            }
        ]
    }
];

export default function HiringProcess() {
    const [activeTab, setActiveTab] = useState('permanent');
    const activeData = tabs.find(t => t.id === activeTab) || tabs[0];

    return (
        <section className="py-20 md:py-28 bg-[#f7f5f2]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="mb-12" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                        Our Hiring <span className="italic font-bold">Process</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                        A streamlined, transparent approach that takes you from requirement to deployment — whether you are hiring a single specialist or deploying hundreds of workers.
                    </p>
                </div>

                <div className="flex border-b border-gray-300 mb-12" data-aos="fade-up">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 text-sm font-bold tracking-wider transition-colors border-b-2 -mb-px ${
                                activeTab === tab.id
                                    ? 'text-[#006A80] border-[#006A80]'
                                    : 'text-gray-400 border-transparent hover:text-gray-600'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activeData.steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white p-8 border border-gray-200 hover:border-[#006A80] hover:shadow-lg transition-all duration-300 group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="absolute top-6 right-6 text-5xl font-bold text-gray-100 group-hover:text-[#006A80]/10 transition-colors" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <step.icon className="w-10 h-10 text-[#006A80] mb-6 stroke-1" />
                            <h4 className="text-brand-dark font-bold text-base mb-3">{step.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
