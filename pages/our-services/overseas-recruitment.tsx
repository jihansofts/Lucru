import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    GlobeAltIcon,
    ShieldCheckIcon,
    MagnifyingGlassIcon,
    UserGroupIcon,
    BriefcaseIcon,
    DocumentTextIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';
// Make sure to remove old import, like ContactSection

const features = [
    {
        icon: GlobeAltIcon,
        title: 'Middle East Expertise',
        desc: 'Specialized pipelines for Saudi Arabia, UAE, Qatar, Oman, Kuwait, and Bahrain labor markets.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Rigorous Trade Testing',
        desc: 'In-house technical assessments ensuring candidates meet host country trade standards.',
    },
    {
        icon: MagnifyingGlassIcon,
        title: 'Extensive Database',
        desc: 'Thousands of pre-screened resumes across construction, healthcare, hospitality, and IT.',
    },
    {
        icon: DocumentTextIcon,
        title: 'Compliance & Legal',
        desc: 'Strict adherence to Emigration Clearance (BMET) and foreign embassy visa regulations.',
    },
];

const industries = [
    'Oil & Gas / Energy',
    'Heavy Construction & Engineering',
    'Healthcare & Nursing',
    'Hospitality & Catering',
    'Facility Management',
    'Manufacturing & Industrial',
];

export default function OverseasRecruitment() {
    return (
        <>
            <Head>
                <title>Overseas Recruitment - Lucru Manpower</title>
                <meta name="description" content="End-to-end overseas recruitment from South Asia to the world. We specialize in deploying top talent to Middle Eastern and global markets." />
            </Head>

            <main className="min-h-screen bg-[#f7f5f2]">
                <ServicesHero
                    title="Overseas"
                    titleAccent="Recruitment"
                    subtitle="Bridging the gap between global employers and South Asia's vast pool of hard-working, skilled professionals."
                    image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                />

                <ServicesSubNav />

                {/* Main Content Section */}
                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div data-aos="fade-right">
                                <h2 className="text-3xl md:text-5xl font-light text-brand-dark mb-8" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Your Trusted Pipeline for <span className="font-bold italic text-[#006A80]">Global Talent</span>
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    For decades, South Asia has been the engine room of global development. However, harnessing this talent requires navigating complex regulatory frameworks, local customs, and rigorous verification processes.
                                </p>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Lucru manages the entire recruitment lifecycle—from executing your initial Demand Letter and orchestrating nationwide advertising, to coordinating trade tests, GAMCA Wafid medical checks, and final deployment. We ensure that you receive competent workers who are legally cleared and culturally prepared for the demands of working abroad.
                                </p>

                                <Link
                                    href="/hire-manpower/direct-recruitment"
                                    className="inline-flex items-center justify-center bg-brand-dark hover:bg-[#006A80] text-white px-8 py-4 font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-xl"
                                >
                                    Initiate Demand
                                </Link>
                            </div>
                            <div className="relative h-[600px] w-full" data-aos="fade-left">
                                <Image
                                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                                    alt="Recruitment operations"
                                    fill
                                    className="object-cover rounded-sm shadow-2xl"
                                />
                                {/* Overlay stat box */}
                                <div className="absolute -bottom-8 -left-8 bg-white p-8 border-l-4 border-[#006A80] shadow-xl max-w-xs hidden md:block">
                                    <div className="text-4xl font-bold text-brand-dark mb-2">15k+</div>
                                    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Successful Deployments</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-light text-brand-dark mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                Why Choose Our Recruitment Model
                            </h3>
                            <div className="w-24 h-1 bg-[#006A80] mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="shrink-0 mt-1">
                                        <div className="w-14 h-14 bg-[#f7f5f2] rounded flex items-center justify-center">
                                            <feature.icon className="w-7 h-7 text-[#006A80]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-20 bg-brand-dark text-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-4" data-aos="fade-right">
                                <h3 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    Sectors We <span className="font-bold italic text-[#006A80]">Serve</span>
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    We maintain active talent pools across essential industries, ensuring rapid response times to your deployment schedules.
                                </p>
                            </div>
                            <div className="lg:col-span-8" data-aos="fade-left">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {industries.map((industry, i) => (
                                        <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded hover:bg-white/10 transition-colors">
                                            <CheckCircleIcon className="w-6 h-6 text-[#006A80]" />
                                            <span className="font-medium">{industry}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Simple Contact / CTA Section */}
                <section className="py-24 bg-[#006A80] text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                            Ready to Mobilize Your Next Project?
                        </h2>
                        <p className="text-[#b4e7ed] mb-10 text-lg">
                            Get in touch to discuss your specific manpower needs and request a deployment timeline.
                        </p>
                        <Link
                            href="#"
                            className="inline-block bg-white text-[#006A80] font-bold uppercase tracking-widest py-4 px-10 hover:bg-brand-dark hover:text-white transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </section>

            </main>
        </>
    );
}
