import React, { useState } from 'react';
import { ClipboardDocumentListIcon, MagnifyingGlassIcon, UsersIcon, CheckBadgeIcon, DocumentTextIcon, BuildingOffice2Icon, ArrowPathIcon, CogIcon } from '@heroicons/react/24/outline';

const tabs = [
    {
        id: 'permanent',
        label: 'PERMANENT PLACEMENT',
        steps: [
            {
                icon: ClipboardDocumentListIcon,
                title: 'Define Requirements',
                description: 'Share your job specifications, required qualifications, experience levels, and company culture fit criteria with our specialist recruiters.'
            },
            {
                icon: MagnifyingGlassIcon,
                title: 'Candidate Sourcing',
                description: 'Our team activates global talent networks, screens candidates through multi-level assessments, and shortlists the best matches for your review.'
            },
            {
                icon: UsersIcon,
                title: 'Interview & Selection',
                description: 'We coordinate interviews, manage candidate communications, administer trade tests, and facilitate your final selection process seamlessly.'
            },
            {
                icon: CheckBadgeIcon,
                title: 'Onboarding & Deployment',
                description: 'We handle visa processing, medical clearances, travel arrangements, and pre-departure orientation to ensure a smooth start for your new hire.'
            }
        ]
    },
    {
        id: 'contract',
        label: 'CONTRACT STAFFING',
        steps: [
            {
                icon: DocumentTextIcon,
                title: 'Submit Staffing Request',
                description: 'Specify the number of professionals needed, skill requirements, project duration, and deployment location through our streamlined request form.'
            },
            {
                icon: BuildingOffice2Icon,
                title: 'Talent Matching',
                description: 'Our AI-powered matching engine combined with expert recruiters identifies contract professionals from our ready-to-deploy talent pool.'
            },
            {
                icon: ArrowPathIcon,
                title: 'Rapid Deployment',
                description: 'Contract staff are mobilised within 2-4 weeks — including documentation, compliance checks, and logistics — so your project stays on track.'
            },
            {
                icon: CogIcon,
                title: 'Ongoing Management',
                description: 'We handle payroll, performance monitoring, contract extensions, and replacements throughout the engagement — you focus on your project.'
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
                        A streamlined, transparent approach that takes you from requirement to deployment — whether you need a permanent hire or a contract team.
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
