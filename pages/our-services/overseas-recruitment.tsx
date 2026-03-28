import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
import StaffingCTA from '@/components/StaffingCTA';
import MobileAppSection from '@/components/MobileAppSection';
import SubscribeSection from '@/components/SubscribeSection';
import {
    UserGroupIcon,
    ClipboardDocumentCheckIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    HeartIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

const benefits = [
    { icon: UserGroupIcon, title: 'Bulk Recruitment', desc: 'Deploy 10 to 1,000+ workers for large-scale projects in record time' },
    { icon: ClipboardDocumentCheckIcon, title: 'Trade Testing', desc: 'In-house skill assessment and certification for technical roles' },
    { icon: GlobeAltIcon, title: 'Multi-Country Sourcing', desc: 'Access talent from 30+ countries across Asia, Africa & the Middle East' },
    { icon: ShieldCheckIcon, title: 'Full Compliance', desc: 'Visa, medical, insurance, and labour law compliance fully managed' },
    { icon: ChartBarIcon, title: 'Performance Tracking', desc: 'Post-deployment monitoring and performance reporting for every placement' },
    { icon: HeartIcon, title: 'Welfare Guarantee', desc: 'Worker welfare programmes ensuring ethical treatment and fair conditions' },
];

const industries = [
    { title: 'Healthcare & Medical', positions: '800+', image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg', roles: 'Nurses, Lab Techs, Pharmacists, Physiotherapists, Care Workers' },
    { title: 'Construction & Engineering', positions: '1,200+', image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg', roles: 'Site Engineers, Welders, Steel Fixers, Crane Operators, QS' },
    { title: 'Oil & Gas', positions: '500+', image: 'https://images.pexels.com/photos/5961982/pexels-photo-5961982.jpeg', roles: 'Process Engineers, Riggers, Pipe Fitters, HSE Officers' },
    { title: 'Hospitality & Catering', positions: '650+', image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg', roles: 'Chefs, F&B Staff, Housekeeping, Concierge, Event Coordinators' },
    { title: 'IT & Technology', positions: '300+', image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg', roles: 'Developers, System Admins, Data Analysts, Network Engineers' },
    { title: 'Facility Management', positions: '400+', image: 'https://images.pexels.com/photos/8853499/pexels-photo-8853499.jpeg', roles: 'HVAC Techs, Electricians, Plumbers, Cleaning Supervisors' },
];

const processSteps = [
    { step: '01', title: 'Requirement Analysis', desc: 'We conduct an in-depth consultation to understand your workforce needs, job specifications, timelines, and deployment locations.' },
    { step: '02', title: 'Candidate Sourcing', desc: 'Our recruiters activate multi-channel sourcing — job portals, databases, partner agencies, and social media — to build a qualified candidate pool.' },
    { step: '03', title: 'Screening & Assessment', desc: 'Candidates undergo document verification, skill testing, behavioural interviews, and reference checks before shortlisting.' },
    { step: '04', title: 'Client Selection', desc: 'You review curated profiles and conduct final interviews. We coordinate logistics, schedules, and candidate communications.' },
    { step: '05', title: 'Processing & Deployment', desc: 'We handle visa processing, medical clearance, ticketing, pre-departure orientation, and airport-to-site logistics.' },
];

const relatedServices = [
    { title: 'Executive Search', href: '/our-services/specialized-headhunting', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' },
    { title: 'Visa & Immigration', href: '/our-services/visa-processing', image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg' },
    { title: 'Pre-Departure Training', href: '/our-services/pre-departure-orientation', image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' },
];

export default function ManpowerProvision() {
    return (
        <>
            <Head>
                <title>Manpower Provision - Lucru</title>
                <meta name="description" content="Lucru's manpower provision service delivers skilled and semi-skilled workers across all industries, from sourcing to deployment." />
            </Head>
            <main className="min-h-screen bg-white">
                <ServicesHero
                    title="Manpower"
                    titleAccent="Provision"
                    subtitle="Skilled workforce solutions from sourcing to deployment, across every industry."
                    image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Our Services', href: '/our-services' },
                        { label: 'Manpower Provision' },
                    ]}
                />
                <ServicesSubNav />

                {/* Overview + Benefits */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                            <div className="lg:w-5/12" data-aos="fade-up">
                                <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Your Workforce, <span className="italic font-bold">Delivered</span>
                                </h2>
                                <h3 className="text-lg text-[#006A80] font-semibold mb-6">Reliable. Compliant. Scalable.</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                                    Our core manpower provision service connects employers with pre-vetted skilled and semi-skilled professionals from across the globe, deployed to your worksites fully processed, trained, and ready to contribute from day one.
                                </p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                                    Whether you need 10 electricians or 1,000 construction workers, Lucru&apos;s end-to-end recruitment process ensures quality, speed, and full regulatory compliance at every step.
                                </p>
                                <Link href="/hire-manpower/submit-manpower-request" className="inline-block border border-brand-dark text-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">
                                    REQUEST WORKERS
                                </Link>
                            </div>
                            <div className="lg:w-7/12">
                                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8" data-aos="fade-up">OUR CAPABILITIES</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {benefits.map((item, i) => (
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

                {/* Industries */}
                <section className="py-20 md:py-28 bg-[#f7f5f2]">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Industries <span className="italic font-bold">We Serve</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {industries.map((item, i) => (
                                <div key={i} className="bg-white group border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-lg" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="relative w-full aspect-4/3 overflow-hidden">
                                        <Image src={item.image} alt={item.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute bottom-3 right-3 bg-[#006A80] text-white text-xs font-bold px-3 py-1.5 tracking-wider">{item.positions} placed</div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl text-brand-dark font-bold mb-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.roles}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Full-Width Image Showcase */}
                <section className="relative w-full h-80 md:h-112 overflow-hidden" data-aos="fade-up">
                    <Image
                        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                        alt="Workforce deployment"
                        fill sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-brand-dark/90 via-brand-dark/50 to-transparent" />
                    <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="max-w-lg">
                            <h3 className="text-3xl md:text-4xl text-white font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Deploying <span className="italic font-bold">Excellence</span>
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                                Our deployment operations span 30+ countries with established logistics networks, ensuring your workforce arrives on time, every time.
                            </p>
                            <Link href="/hire-manpower/submit-manpower-request" className="inline-block border border-white text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-colors">
                                GET STARTED
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="mb-12" data-aos="fade-up">
                            <h2 className="text-4xl md:text-5xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Our <span className="italic font-bold">Process</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {processSteps.map((item, i) => (
                                <div key={i} className="relative bg-[#f7f5f2] p-6 border border-gray-200 hover:border-[#006A80] hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 80}>
                                    <div className="text-4xl font-bold text-gray-200 group-hover:text-[#006A80]/20 transition-colors mb-3" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{item.step}</div>
                                    <h4 className="text-brand-dark font-bold text-sm mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
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
