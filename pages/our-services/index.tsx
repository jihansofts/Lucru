import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import StaffingCTA from '@/components/StaffingCTA';
import MobileAppSection from '@/components/MobileAppSection';
import SubscribeSection from '@/components/SubscribeSection';
import {
    UserGroupIcon,
    MagnifyingGlassIcon,
    DocumentCheckIcon,
    AcademicCapIcon,
    GlobeAltIcon,
    BriefcaseIcon,
    CheckBadgeIcon,
    ShieldCheckIcon,
    ArrowRightIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline';

const services = [
    {
        icon: UserGroupIcon,
        title: 'Overseas Recruitment',
        desc: 'End-to-end recruitment of skilled, semi-skilled, and unskilled workers from South Asia.',
        href: '/our-services/overseas-recruitment',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
        icon: MagnifyingGlassIcon,
        title: 'Specialized Headhunting',
        desc: 'Targeted executive search for engineers, medical professionals, and managers.',
        href: '/our-services/specialized-headhunting',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    },
    {
        icon: DocumentCheckIcon,
        title: 'Visa Processing & Emigration',
        desc: 'Handling consulate approvals, stamping, and local emigration clearance (e.g. BMET).',
        href: '/our-services/visa-processing',
        image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
    },
    {
        icon: AcademicCapIcon,
        title: 'Pre-Departure Training',
        desc: 'Mandatory cultural orientation, safety briefings, and job-specific prep before flights.',
        href: '/our-services/pre-departure-orientation',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    },
    {
        icon: DocumentTextIcon,
        title: 'Document Attestation',
        desc: 'Legalizing educational and trade certificates across various embassies and ministries.',
        href: '/our-services/document-attestation',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    },
    {
        icon: BriefcaseIcon,
        title: 'Bulk Deployments',
        desc: 'Orchestrating large-scale testing and mobilization for mega-projects globally.',
        href: '/hire-manpower/bulk-deployments',
        image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    },
];

const processSteps = [
    { num: '01', title: 'Share Your Requirements', desc: 'Provide us your job descriptions and Demand Letters. We will initiate local embassy approvals.' },
    { num: '02', title: 'We Source & Trade-Test', desc: 'Our experienced team mobilizes our network, pre-screens applicants, and conducts rigorous testing.' },
    { num: '03', title: 'You Select Candidates', desc: 'Review CVs and conduct interviews either virtually or at our dedicated facilities.' },
    { num: '04', title: 'We Process Visas & Medicals', desc: 'We take over the entire labyrinth of Wafid/GAMCA medicals, visa stamping, and clearance.' },
    { num: '05', title: 'Deployment & Follow-up', desc: 'Workers fly out after comprehensive training; we ensure safe arrival and swift onboarding.' },
];

export default function OurServices() {
    return (
        <>
            <Head>
                <title>Our Services - Lucru</title>
                <meta name="description" content="Comprehensive overseas manpower solutions. From recruitment and trade testing to visa processing and document attestation." />
            </Head>
            <main className="min-h-screen bg-[#f7f5f2]">
                <ServicesHero
                    title="Our"
                    titleAccent="Services"
                    subtitle="Comprehensive manpower solutions tailored for international employers seeking reliable South Asian talent."
                    image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                />
                
                <ServicesSubNav />

                {/* Intro Section */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                        <h2
                            className="text-3xl md:text-5xl text-brand-dark font-light mb-8 max-w-4xl mx-auto leading-tight"
                            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                            data-aos="fade-up"
                        >
                            We manage the complexities of international recruitment so you can focus on building your business.
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Hiring overseas can be an administrative nightmare. At Lucru, we act as your trusted bridge to South Asia&apos;s vast workforce. With end-to-end services encompassing precise talent sourcing, rigorous trade testing, bulletproof compliance, and seamless logistics, we ensure your workforce arrives on site, on time, and fully prepared.
                        </p>
                    </div>
                </section>

                {/* Service Cards Grid */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.href}
                                    className="group bg-white flex flex-col border border-gray-200 hover:border-[#006A80] hover:shadow-xl transition-all duration-500 overflow-hidden"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative w-full h-56 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-sm">
                                            <service.icon className="w-6 h-6 text-[#006A80]" />
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col grow">
                                        <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-[#006A80] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
                                            {service.desc}
                                        </p>
                                        <div className="flex items-center text-[#006A80] font-bold text-xs tracking-widest uppercase mt-auto">
                                            Learn More
                                            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Process Timeline */}
                <section className="py-20 md:py-32 bg-brand-dark text-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-16 md:mb-24 text-center" data-aos="fade-up">
                            <h2
                                className="text-4xl md:text-5xl font-light mb-6"
                                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                            >
                                How We <span className="italic font-bold">Deliver</span>
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                                A battle-tested methodology designed to move candidates through complex governmental funnels and onto your worksite.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-gray-800 -translate-x-1/2 hidden md:block"></div>

                            <div className="space-y-12 md:space-y-0 relative">
                                {processSteps.map((step, index) => {
                                    const isEven = index % 2 === 0;
                                    return (
                                        <div key={index} className="relative flex items-center md:justify-between w-full pb-8 md:pb-24 last:pb-0" data-aos="fade-up">
                                            {/* Center Line Marker */}
                                            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-brand-dark border-2 border-[#006A80] -translate-x-1/2 z-10 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-[#006A80]"></div>
                                            </div>

                                            {/* Content Box */}
                                            <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                                                <div className="text-6xl font-black text-white/5 mb-2 pointer-events-none" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                                    {step.num}
                                                </div>
                                                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <div data-aos="fade-up">
                    <StaffingCTA />
                </div>
                <div data-aos="fade-up">
                    <MobileAppSection />
                </div>
                <div data-aos="fade-up">
                    <SubscribeSection />
                </div>
            </main>
        </>
    );
}
