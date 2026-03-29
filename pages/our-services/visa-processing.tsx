import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    DocumentCheckIcon,
    BuildingLibraryIcon,
    UserIcon,
    CheckBadgeIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';

const steps = [
    {
        icon: BuildingLibraryIcon,
        title: 'Embassy Clearances',
        desc: 'We liaise directly with foreign consulates to ensure Demand Letters and Power of Attorney documents are correctly attested.',
    },
    {
        icon: UserIcon,
        title: 'Medical & Biometrics',
        desc: 'Coordinating mandatory GAMCA/Wafid medical checkups and biometrics for GCC and other destination countries.',
    },
    {
        icon: DocumentCheckIcon,
        title: 'Visa Stamping',
        desc: 'Submitting passports along with approved medicals and correct documentation for rapid embassy visa endorsement.',
    },
    {
        icon: CheckBadgeIcon,
        title: 'Emigration Clearance',
        desc: 'Securing mandatory BMET (Bureau of Manpower) smart cards and clearances required for legal exit.',
    },
];

export default function VisaProcessing() {
    return (
        <>
            <Head>
                <title>Visa Processing & Emigration - Lucru Manpower</title>
                <meta name="description" content="Expert handling of overseas work visas, GAMCA medicals, embassy attestations, and emigration clearances (BMET)." />
            </Head>

            <main className="min-h-screen bg-[#f7f5f2]">
                <ServicesHero
                    title="Visa &"
                    titleAccent="Emigration"
                    subtitle="Navigating the bureaucratic maze so your workforce arrives legally, safely, and on schedule."
                    image="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
                />

                <ServicesSubNav />

                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-5xl font-light text-brand-dark mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Speeding Up the Most Critical Phase of <span className="font-bold italic text-[#006A80]">Deployment</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Finding the right candidate is only half the battle. The true bottleneck in overseas recruitment lies in the labyrinth of international visa requirements, mandatory medical clearances, and local government emigration policies. We handle this entirely in-house.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="bg-white p-8 border border-gray-100 hover:border-[#006A80] hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <step.icon className="w-12 h-12 text-[#006A80] mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-brand-dark mb-4">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-brand-dark relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                            </pattern>
                            <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[500px]" data-aos="fade-right">
                                <Image
                                    src="https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg"
                                    alt="Passports and Visas"
                                    fill
                                    className="object-cover rounded-sm shadow-2xl brightness-90"
                                />
                            </div>
                            <div data-aos="fade-left">
                                <h3 className="text-3xl font-light text-white mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Compliance Without Compromise
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Every country has its own unique demands. Whether it&apos;s Wakala / Enjaz systems for Saudi Arabia, specific biometrics for the UAE, or strict medical quotas for Malaysia, our processing teams stay updated on daily embassy changes.
                                </p>
                                <ul className="space-y-4 text-gray-300 mb-8">
                                    <li className="flex items-start">
                                        <ArrowRightIcon className="w-5 h-5 text-[#006A80] mr-3 shrink-0 mt-0.5" />
                                        <span>Tracking of individual medical report statuses</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRightIcon className="w-5 h-5 text-[#006A80] mr-3 shrink-0 mt-0.5" />
                                        <span>Direct embassy submissions to avoid third-party delays</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRightIcon className="w-5 h-5 text-[#006A80] mr-3 shrink-0 mt-0.5" />
                                        <span>Streamlined clearance routing for immediate flight booking</span>
                                    </li>
                                </ul>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-[#b4e7ed] hover:text-white font-bold uppercase tracking-widest text-sm transition-colors"
                                >
                                    Speak with Our Processing Team <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
