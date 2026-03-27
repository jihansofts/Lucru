import Head from "next/head";
import Hero from "@/components/Hero";
import WorldOfLucru from "@/components/WorldOfLucru";
import OurNewLaunches from "@/components/OurNewLaunches";
import LucruWayOfLife from "@/components/LucruWayOfLife";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";


export default function Home() {
  return (
    <>
      <Head>
        <title>Lucru - Global Manpower Solutions</title>
        <meta name="description" content="Lucru - Premier Overseas Recruitment and Manpower Agency" />
      </Head>
      <main className="min-h-screen bg-zinc-50 dark:bg-black overflow-hidden">
        <Hero />
        <div data-aos="fade-up">
          <OurNewLaunches />
        </div>
        
        <div data-aos="fade-up">
          <LucruWayOfLife />
        </div>
        <div data-aos="fade-up">
          <WorldOfLucru />
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
