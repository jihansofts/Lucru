import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
    DocumentTextIcon,
    ShieldCheckIcon,
    GlobeAltIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';
import ServicesHero from '@/components/ServicesHero';
import ServicesSubNav from '@/components/ServicesSubNav';

const attestationTypes = [
    {
        icon: DocumentTextIcon,
        title: 'Educational Certificates',
        desc: 'Degrees, diplomas, and technical certifications required for skilled visa categories.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Commercial Documents',
        desc: 'Demand Letters, Power of Attorney, and Agency Agreements needed to initiate recruitment.',
    },
    {
        icon: GlobeAltIcon,
        title: 'Personal Documents',
        desc: 'Marriage certificates, birth certificates, and police clearance reports.',
    },
];

export default function DocumentAttestation() {
    return (
        <>
            <Head>
                <title>Document Attestation - Lucru Manpower</title>
                <meta name="description" content="Fast and reliable document attestation services for foreign embassies, Ministry of Foreign Affairs, and Notary Public." />
            </Head>

            <main className="min-h-screen bg-[#f7f5f2]">
                <ServicesHero
                    title="Document"
                    titleAccent="Attestation"
                    subtitle="Legally validating your critical recruitment and personal documents across required ministries and embassies."
                    image="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                />

                <ServicesSubNav />

                <section className="py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 border-b border-gray-200 pb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div data-aos="fade-right">
                                <h2 className="text-3xl md:text-5xl font-light text-brand-dark mb-8" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                    The Crucial First Step to <span className="font-bold italic text-[#006A80]">Legal Deployment</span>
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Before a single worker can be mobilized, the legal framework must be established between the host country employer and the source country. This requires rigorous authentication of company documents.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Simultaneously, skilled professionals (engineers, nurses, managers) must have their qualifications verified by specific government bodies to secure their work visas. We handle this entire chain of custody to ensure zero rejections at the embassy.
                                </p>
                            </div>
                            <div className="relative h-[400px] w-full" data-aos="fade-left">
                                <Image
                                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                                    alt="Document Stamping"
                                    fill
                                    className="object-cover rounded-sm shadow-xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Attestation Flow */}
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20">
                        <div className="text-center mb-16">
                            <h3 className="text-2xl md:text-4xl font-light text-brand-dark mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                What We Process
                            </h3>
                            <div className="w-16 h-1 bg-[#006A80] mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {attestationTypes.map((type, idx) => (
                                <div key={idx} className="bg-white p-8 border-t-4 border-[#006A80] shadow-sm hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <type.icon className="w-10 h-10 text-[#006A80] mb-6" />
                                    <h4 className="text-lg font-bold text-brand-dark mb-3">{type.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-brand-dark text-white text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-2xl md:text-4xl font-light mb-8" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                            Need Corporate Documents Attested?
                        </h2>
                        <p className="text-gray-400 mb-10">
                            If you are an employer looking to issue Demand Letters, we can guide you through the attestation requirements for your specific country consulate.
                        </p>
                        <Link
                            href="#"
                            className="inline-block border-2 border-[#006A80] text-white hover:bg-[#006A80] font-bold uppercase tracking-widest py-4 px-10 transition-colors"
                        >
                            Contact Legal Team
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
