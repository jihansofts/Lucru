import Head from "next/head";
import HireTalentHero from "@/components/HireTalentHero";
import HireTalentSubNav from "@/components/HireTalentSubNav";
import StaffingBenefits from "@/components/StaffingBenefits";
import HiringProcess from "@/components/HiringProcess";
import StaffingCTA from "@/components/StaffingCTA";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";

export default function HireTalent() {
  return (
    <>
      <Head>
        <title>Hire Talent - Lucru</title>
        <meta name="description" content="Partner with Lucru for premium manpower solutions. Access pre-vetted global talent for permanent and contract staffing needs." />
      </Head>
      <main className="min-h-screen bg-white">
        <HireTalentHero />
        <HireTalentSubNav />

        <div data-aos="fade-up">
          <StaffingBenefits />
        </div>

        <div data-aos="fade-up">
          <HiringProcess />
        </div>

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
