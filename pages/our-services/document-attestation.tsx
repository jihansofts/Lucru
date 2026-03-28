import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import StaffingCTA from '@/components/StaffingCTA';
import MobileAppSection from '@/components/MobileAppSection';
import SubscribeSection from '@/components/SubscribeSection';
import {
    CurrencyDollarIcon,
    DocumentTextIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    ClockIcon,
    CalculatorIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

const features = [
    { icon: CurrencyDollarIcon, title: 'Payroll Processing', desc: 'End-to-end payroll including salary calculation, WPS transfers, overtime, and deductions.' },
    { icon: DocumentTextIcon, title: 'Contract Management', desc: 'Employment contract drafting, renewals, amendments, and termination processing.' },
    { icon: ShieldCheckIcon, title: 'Labour Law Compliance', desc: 'Ongoing monitoring of local labour law changes with proactive policy updates.' },
    { icon: ChartBarIcon, title: 'Reporting & Analytics', desc: 'Monthly workforce analytics, cost tracking, and compliance status dashboards.' },
    { icon: ClockIcon, title: 'Leave & Attendance', desc: 'Digital leave management, attendance tracking, and end-of-service calculations.' },
    { icon: CalculatorIcon, title: 'Tax & Social Insurance', desc: 'Tax filing, social insurance contributions, and pension fund management.' },
];

const complianceAreas = [
    { title: 'Wage Protection System (WPS)', desc: 'Automated salary disbursement through government-approved WPS channels across all GCC countries.' },
    { title: 'End-of-Service Benefits', desc: 'Accurate gratuity calculations, final settlement processing, and benefit payouts per local regulations.' },
    { title: 'Insurance & Medical', desc: 'Group medical insurance, workers\' compensation, and workplace injury coverage management.' },
    { title: 'Labour Audit Readiness', desc: 'Continuous documentation maintenance ensuring your organisation is always audit-ready.' },
    { title: 'Worker Welfare Standards', desc: 'Adherence to international worker welfare standards including accommodation and transport compliance.' },
    { title: 'Data Protection', desc: 'GDPR and local data protection compliance for all employee personal information.' },
];

const tiers = [
    { name: 'Essential', desc: 'Core payroll processing for small teams', features: ['Monthly payroll processing', 'WPS compliance', 'Leave tracking', 'Basic reporting', 'Email support'], highlight: false },
    { name: 'Professional', desc: 'Full HR management for growing businesses', features: ['Everything in Essential', 'Contract management', 'Labour law monitoring', 'Advanced analytics', 'Dedicated account manager', 'Insurance coordination'], highlight: true },
    { name: 'Enterprise', desc: 'Complete workforce compliance at scale', features: ['Everything in Professional', 'Multi-country payroll', 'Custom integrations', 'On-site HR support', 'Audit preparation', 'Executive reporting', '24/7 priority support'], highlight: false },
];

const relatedServices = [
    { title: 'Manpower Provision', href: '/our-services/overseas-recruitment', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' },
    { title: 'Visa & Immigration', href: '/our-services/visa-processing', image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg' },
    { title: 'Executive Search', href: '/our-services/specialized-headhunting', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' },
];

export default function PayrollCompliance() {
    return (
        <>
            <Head>
                <title>Payroll & Compliance - Lucru</title>
                <meta name="description" content="Managed payroll, labour law compliance, and HR administration services for international workforces." />
            </Head>
            <main className="min-h-screen bg-white">
                <ServicesHero
                    title="Payroll &"
                    titleAccent="Compliance"
                    subtitle="Managed payroll and regulatory compliance across every jurisdiction you operate in."
                    image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Our Services', href: '/our-services' },
                        { label: 'Payroll & Compliance' },
                    ]}
                />
                <ServicesSubNav />

                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                            <div className="lg:w-5/12" data-aos="fade-up">
                                <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>Compliant <span className="italic font-bold">Everywhere</span></h2>
                                <h3 className="text-lg text-[#006A80] font-semibold mb-6">Accurate. Automated. Auditable.</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">Managing payroll and compliance across multiple countries is complex and risky. Lucru takes the burden off your shoulders — handling everything from salary processing and tax filings to labour law monitoring and audit preparation.</p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">Our team of HR and compliance specialists stays ahead of regulatory changes, ensuring your workforce operations are always lawful, efficient, and transparent.</p>
                                <Link href="/hire-manpower/submit-manpower-request" className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">GET A QUOTE</Link>
                            </div>
                            <div className="lg:w-7/12">
                                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">SERVICE FEATURES</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {features.map((item, i) => (
                                        <div key={i} className="border border-gray-200 rounded-sm p-6 flex flex-col items-center text-center hover:border-[#006A80] hover:shadow-md transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 80}>
                                            <item.icon className="w-10 h-10 text-[#006A80] mb-4 stroke-1 group-hover:scale-110 transition-transform duration-300" />
                                            <h5 className="text-brand-dark font-bold text-sm mb-2">{item.title}</h5>
                                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full-Width Image Showcase */}
                <section className="relative w-full h-80 md:h-112 overflow-hidden" data-aos="fade-up">
                    <Image
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                        alt="Compliance management"
                        fill sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-dark/90 via-brand-dark/50 to-transparent" />
                    <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="max-w-lg">
                            <h3 className="text-3xl md:text-4xl text-white font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Always <span className="italic font-bold">Audit-Ready</span>
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Our proactive compliance monitoring ensures your workforce documentation, contracts, and financial records are always up-to-date and audit-ready across every jurisdiction.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Compliance Areas */}
                <section className="py-20 md:py-28 bg-[#f7f5f2]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>Compliance <span className="italic font-bold">Framework</span></h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {complianceAreas.map((item, i) => (
                                <div key={i} className="bg-white p-8 border border-gray-200 hover:border-[#006A80] hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 80}>
                                    <h4 className="text-brand-dark font-bold text-base mb-3">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Tiers */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>Service <span className="italic font-bold">Tiers</span></h2>
                            <p className="text-gray-600 text-sm md:text-base max-w-2xl">Choose the level of support that matches your needs. All tiers include full regulatory compliance.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {tiers.map((tier, i) => (
                                <div key={i} className={`border ${tier.highlight ? 'border-[#006A80] shadow-lg' : 'border-gray-200'} flex flex-col transition-all duration-300 hover:shadow-lg`} data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className={`px-8 py-6 ${tier.highlight ? 'bg-brand-dark' : 'bg-[#f7f5f2]'}`}>
                                        {tier.highlight && <span className="text-brand-primary text-xs font-bold tracking-widest uppercase">MOST POPULAR</span>}
                                        <h4 className={`text-2xl font-bold mt-1 ${tier.highlight ? 'text-white' : 'text-brand-dark'}`} style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{tier.name}</h4>
                                        <p className={`text-sm mt-1 ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{tier.desc}</p>
                                    </div>
                                    <ul className="px-8 py-6 space-y-3 flex-1">
                                        {tier.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#006A80] mt-1.5 shrink-0" />
                                                <span className="text-gray-600 text-sm">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="px-8 pb-8">
                                        <Link href="/hire-manpower/submit-manpower-request" className={`block text-center py-3.5 text-xs font-bold tracking-widest uppercase transition-colors ${tier.highlight ? 'bg-[#006A80] text-white hover:bg-[#005a6d]' : 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'}`}>CONTACT US</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Services */}
                <section className="py-20 md:py-28 bg-[#f7f5f2]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">EXPLORE MORE</p>
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Related <span className="italic font-bold">Services</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedServices.map((item, i) => (
                                <Link key={i} href={item.href} className="group block" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="relative w-full aspect-video overflow-hidden mb-4">
                                        <Image src={item.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-brand-dark font-bold text-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.title}</h4>
                                        <ArrowRightIcon className="w-5 h-5 text-[#006A80] stroke-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <div data-aos="fade-up"><StaffingCTA /></div>
                <div data-aos="fade-up"><MobileAppSection /></div>
                <div data-aos="fade-up"><SubscribeSection /></div>
            </main>
        </>
    );
}
