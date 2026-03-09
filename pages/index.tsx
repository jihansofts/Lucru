import Head from "next/head";
import Hero from "@/components/Hero";
import WorldOfLucru from "@/components/WorldOfLucru";
import OurNewLaunches from "@/components/OurNewLaunches";
import LucruWayOfLife from "@/components/LucruWayOfLife";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";
import FooterBottomBar from "@/components/FooterBottomBar";
import SimpleFooter from "@/components/SimpleFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucru - Your Next Great Inspiration</title>
        <meta name="description" content="Luchru - Dubai Real Estate" />
      </Head>
      <main className="min-h-screen bg-zinc-50 dark:bg-black">
        <Hero />
        <OurNewLaunches />
        <WorldOfLucru />
        <LucruWayOfLife />
        <OurNewLaunches/>
        <MobileAppSection />
        <SubscribeSection />
        <FooterBottomBar />
        <SimpleFooter />
      </main>
    </>
  );
}
