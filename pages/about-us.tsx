import Head from 'next/head';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import AboutServices from '@/components/AboutServices';
import AboutValues from '@/components/AboutValues';
import MobileAppSection from '@/components/MobileAppSection';
import SubscribeSection from '@/components/SubscribeSection';

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About Us - Lucru</title>
                <meta name="description" content="Discover Lucru — a premier international recruitment agency connecting exceptional talent with visionary employers across 30+ countries." />
            </Head>
            <main className="min-h-screen bg-white">
                <AboutHero />

                <div data-aos="fade-up">
                    <AboutIntro />
                </div>

                <div data-aos="fade-up">
                    <AboutServices />
                </div>

                <div data-aos="fade-up">
                    <AboutValues />
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
