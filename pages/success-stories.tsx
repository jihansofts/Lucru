import Head from 'next/head';
import Link from 'next/link';
import SuccessStoriesHero from '@/components/SuccessStoriesHero';
import VisaSlider from '@/components/VisaSlider';

export default function SuccessStories() {
    return (
        <>
            <Head>
                <title>Success Stories - Lucru</title>
                <meta name="description" content="Discover inspiring success stories and visa approvals at Lucru. See how we connect talent with global opportunities." />
            </Head>
            <main className="min-h-screen bg-white">
                <SuccessStoriesHero />

                <div data-aos="fade-up">
                    <VisaSlider />
                </div>

                <div data-aos="fade-up" className="py-20 bg-white">
                   <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
                       <h3 className="text-2xl md:text-4xl text-brand-dark font-light mb-6" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                           Your Story Could Be Next
                       </h3>
                       <p className="text-gray-600 text-lg mb-8">
                           We take pride in guiding professionals like you toward fulfilling careers abroad. Our dedicated consultants are ready to assist you in writing your own success story.
                       </p>
                       <Link href="/vacancies" className="inline-block bg-[#001c29] text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-opacity-90 transition-colors">
                           Explore Vacancies
                       </Link>
                   </div>
                </div>

            </main>
        </>
    );
}