import Head from 'next/head';
import ContactHero from '@/components/ContactHero';
import ContactFormSection from '@/components/ContactFormSection';

export default function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact Us - Lucru</title>
                <meta name="description" content="Get in touch with Lucru to learn more about our international recruitment services and employment solutions." />
            </Head>
            <main className="min-h-screen bg-white">
                <ContactHero />

                <div data-aos="fade-up">
                    <ContactFormSection />
                </div>

                <div data-aos="fade-up">
                </div>
            </main>
        </>
    );
}
