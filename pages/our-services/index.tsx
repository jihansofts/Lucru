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
    CurrencyDollarIcon,
    GlobeAltIcon,
    CheckBadgeIcon,
    ClockIcon,
    ShieldCheckIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

const services = [
    {
        icon: UserGroupIcon,
        title: 'Manpower Provision',
        desc: 'End-to-end recruitment and deployment of skilled and semi-skilled workers across all industries.',
        href: '/our-services/manpower-provision',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
    {
        icon: MagnifyingGlassIcon,
        title: 'Executive Search',
        desc: 'Targeted headhunting for senior management and C-suite leadership roles.',
        href: '/our-services/executive-search',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    },
    {
        icon: DocumentCheckIcon,
        title: 'Visa & Immigration',
        desc: 'Complete visa processing, work permits, and immigration compliance management.',
        href: '/our-services/visa-immigration',
        image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
    },
    {
        icon: AcademicCapIcon,
        title: 'Pre-Departure Training',
        desc: 'Cultural orientation, safety training, and skills certification before deployment.',
        href: '/our-services/pre-departure-training',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    },
    {
        icon: CurrencyDollarIcon,
        title: 'Payroll & Compliance',
        desc: 'Managed payroll, tax compliance, and employment law adherence across jurisdictions.',
        href: '/our-services/payroll-compliance',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    },
    {
        icon: GlobeAltIcon,
        title: 'Global Deployment',
        desc: 'Logistics coordination for international workforce mobilisation to 30+ countries.',
        href: '/our-services/manpower-provision',
        image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    },
];

const processSteps = [
    { num: '01', title: 'Share Your Requirements', desc: 'Tell us the roles, skills, and headcount you need. We assign a dedicated account manager.' },
    { num: '02', title: 'We Source & Screen', desc: 'Our recruiters activate global talent pipelines, shortlisting only pre-vetted candidates.' },
    { num: '03', title: 'You Select Your Team', desc: 'Review curated profiles, conduct interviews, and make your selections with full support.' },
    { num: '04', title: 'We Process & Deploy', desc: 'Visa, medical, training, and logistics — all handled. Your team arrives job-ready.' },
];

const whyChoose = [
    { icon: CheckBadgeIcon, title: 'Licensed & Accredited', desc: 'Fully licensed by government authorities with ISO-certified processes.' },
    { icon: ClockIcon, title: 'Fast Turnaround', desc: 'From requirement to deployment in as little as 2-4 weeks.' },
    { icon: ShieldCheckIcon, title: 'Zero-Risk Guarantee', desc: 'Free replacement within 90 days if a placement doesn\'t meet expectations.' },
    { icon: GlobeAltIcon, title: '30+ Country Network', desc: 'Access talent from across Asia, Africa, the Middle East, and Europe.' },
];

const stats = [
    { value: '15K+', label: 'Workers Deployed' },
    { value: '30+', label: 'Countries Served' },
    { value: '500+', label: 'Partner Companies' },
    { value: '98%', label: 'Client Retention' },
];

export default function OurServices() {
    return (
        <>
            <Head>
                <title>Our Services - Lucru</title>
                <meta name="description" content="Explore Lucru's comprehensive recruitment services: manpower provision, executive search, visa processing, pre-departure training, and payroll compliance." />
            </Head>
            <main className="min-h-screen bg-white">
                <ServicesHero
                    title="Our"
                    titleAccent="Services"
                    subtitle="Comprehensive workforce solutions from sourcing to deployment and beyond."
                    image="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Our Services' },
                    ]}
                />
                <ServicesSubNav />

                {/* Intro Section */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                            <div className="lg:w-5/12" data-aos="fade-up">
                                <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">
                                    WHAT WE OFFER
                                </p>
                                <h2
                                    className="text-4xl md:text-5xl text-brand-dark font-light mb-6"
                                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                                >
                                    End-to-End <span className="italic font-bold">Solutions</span>
                                </h2>
                            </div>
                            <div className="lg:w-7/12" data-aos="fade-up" data-aos-delay="100">
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                    From the moment you share your requirements to the day your new team member starts, Lucru manages every step with precision, compliance, and care.
                                </p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Our integrated service model means you get one point of contact for recruitment, visa processing, training, deployment, and ongoing workforce management — eliminating complexity and reducing time-to-hire by up to 60%.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid — Image Cards */}
                <section className="py-8 md:py-16">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.href}
                                    className="group block border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-500"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 80}
                                >
                                    <div className="relative w-full aspect-4/3 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-5 flex items-center gap-3">
                                            <service.icon className="w-8 h-8 text-white stroke-1" />
                                            <h3 className="text-white font-bold text-lg">{service.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                                        <span className="flex items-center gap-2 text-[#006A80] text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
                                            DISCOVER MORE <ArrowRightIcon className="w-4 h-4 stroke-2" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="py-16 bg-brand-dark mt-12" data-aos="fade-up">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                            {stats.map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl md:text-5xl font-light text-brand-primary mb-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{s.value}</div>
                                    <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Process */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-14" data-aos="fade-up">
                            <p className="text-xs font-bold tracking-[0.25em] text-brand-primary uppercase mb-4">
                                HOW IT WORKS
                            </p>
                            <h2
                                className="text-4xl md:text-5xl text-brand-dark font-light"
                                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                            >
                                Our <span className="italic font-bold">Process</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                            {processSteps.map((step, i) => (
                                <div
                                    key={i}
                                    className="relative p-8 border border-gray-200 hover:border-[#006A80] hover:shadow-lg transition-all duration-300 group"
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                >
                                    <div className="text-5xl font-bold text-gray-200 group-hover:text-[#006A80]/20 transition-colors mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{step.num}</div>
                                    <h4 className="text-brand-dark font-bold text-base mb-3">{step.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                    {i < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                                            <ArrowRightIcon className="w-5 h-5 text-[#006A80] stroke-2" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Lucru */}
                <section className="relative py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                            alt="Team collaboration"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-brand-dark/90" />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                            <div className="lg:w-5/12" data-aos="fade-up">
                                <h2
                                    className="text-4xl md:text-5xl text-white font-light mb-6"
                                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                                >
                                    Why Choose <span className="italic font-bold">Lucru</span>
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                                    With decades of combined experience in international recruitment, Lucru bridges the gap between exceptional talent and visionary employers. Our reputation is built on results, integrity, and an unwavering commitment to quality.
                                </p>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                    Every placement is backed by our quality guarantee and supported by a dedicated account management team available around the clock.
                                </p>
                            </div>
                            <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                                {whyChoose.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-brand-primary stroke-1" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
