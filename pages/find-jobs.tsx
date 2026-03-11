import Head from "next/head";
import NewLaunchesHero from "@/components/NewLaunchesHero";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";
import ResponsiveLaunchGrid from "@/components/ResponsiveLaunchGrid";
import React from 'react';

const launchesData = [
  {
    id: 1,
    title: "Registered Nurses",
    subtitle: "Saudi Arabia",
    description: "Top-tier hospitals in Riyadh are urgently seeking experienced registered nurses with multiple specialties. Unmatched benefits and tax-free salaries.",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    link: "/jobs/nurses-ksa"
  },
  {
    id: 2,
    title: "Civil Engineers",
    subtitle: "UAE",
    description: "Leading construction firms in Dubai and Abu Dhabi are hiring qualified site engineers, project managers, and QA/QC specialists for mega-projects.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    link: "/jobs/civil-uae"
  },
  {
    id: 3,
    title: "IT Project Managers",
    subtitle: "Qatar",
    description: "Excellent opportunities for senior IT professionals to lead digital transformation projects across government and private sectors in Doha.",
    image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    link: "/jobs/it-qatar"
  },
  {
    id: 4,
    title: "Skilled Welders",
    subtitle: "Oman",
    description: "Immediate openings for certified 6G welders and fabricators for major oil and gas infrastructure developments spanning the Sultanate.",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    link: "/jobs/welders-oman"
  },
  {
    id: 5,
    title: "Hospitality Managers",
    subtitle: "Bahrain",
    description: "5-star luxury resorts are hiring experienced hotel managers, executive chefs, and front-of-house directors to elevate guest experiences.",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    link: "/jobs/hospitality-bahrain"
  },
  {
    id: 6,
    title: "Heavy Duty Drivers",
    subtitle: "Kuwait",
    description: "Leading logistics and transport companies require licensed heavy vehicle drivers for cross-border and regional distribution networks.",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    link: "/jobs/drivers-kuwait"
  },
  {
    id: 7,
    title: "Financial Analysts",
    subtitle: "UK",
    description: "Tier-2 sponsorship available for qualified financial analysts, auditors, and accountants joining top global firms in London.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    link: "/jobs/finance-uk"
  },
  {
    id: 8,
    title: "HVAC Technicians",
    subtitle: "UAE",
    description: "Facility management companies are extensively hiring certified HVAC technicians and maintenance supervisors for commercial properties.",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
    link: "/jobs/hvac-uae"
  }
];

export default function FindJobs() {
  return (
    <>
      <Head>
        <title>Featured Jobs - Lucru</title>
        <meta name="description" content="Discover Lucru's newest overseas job openings and career opportunities." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
            <NewLaunchesHero />

        {/* Grid Section */}
        <ResponsiveLaunchGrid
            titleNode={<>Featured <span className="italic">Jobs</span></>}
            description="Our handpicked selection of top-tier international career opportunities, inviting you to take the next big step in your professional journey."
            items={launchesData}
        />

        {/* App Section */}
        <div data-aos="fade-up">
            <MobileAppSection />
        </div>

        {/* Subscribe Section */}
        <div data-aos="fade-up">
            <SubscribeSection />
        </div>
      </main>
    </>
  );
}
