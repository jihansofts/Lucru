import Head from "next/head";
import NewLaunchesHero from "@/components/NewLaunchesHero";
import MobileAppSection from "@/components/MobileAppSection";
import SubscribeSection from "@/components/SubscribeSection";
import ResponsiveLaunchGrid from "@/components/ResponsiveLaunchGrid";
import React from 'react';

const launchesData = [
  {
    id: 1,
    title: "Palm Central",
    subtitle: "Private Residences",
    description: "Welcome to Nakheel Residences, where every moment is an experience. Elevate your everyday living in our residential projects.",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    link: "/palm-central"
  },
  {
    id: 2,
    title: "Bay Grove",
    subtitle: "Residences",
    description: "At the gatehouse to the unique Dubai Islands is the remarkable Bay Grove Residences. Four elegant apartment buildings seamlessly connect to our vibrant central podium.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    link: "/bay-grove"
  },
  {
    id: 3,
    title: "District One",
    subtitle: "West",
    description: "Step into District One West and discover a beautifully designed, private community. A magical combination of luxury homes with gorgeous sprawling community spaces all located right here from this prestigious District 11 Opal Gardens.",
    image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    link: "/district-one-west"
  },
  {
    id: 4,
    title: "Bay Villas,",
    subtitle: "Dubai Islands",
    description: "The unique Dubai Islands offer an extra-ordinary lifestyle, close to the city yet away from the noise. Our carefully chosen amenities guarantee all your family members will have the comfort they desire.",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    link: "/bay-villas"
  },
  {
    id: 5,
    title: "Como",
    subtitle: "Residences",
    description: "Como Residences offers cosmopolitan mode of living in the sky. Featuring unique amenities over the beach, the residences are an ode to exclusivity.",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    link: "/como-residences"
  },
  {
    id: 6,
    title: "Palm Jebel",
    subtitle: "Ali",
    description: "Discover the largest island in the world and step into a new luxury. Our carefully designed waterfront neighbourhoods offer world-class hospitality.",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    link: "/palm-jebel-ali"
  },
  {
    id: 7,
    title: "Rixos Hotel",
    subtitle: "& Residences",
    description: "The exceptional residences and luxury apartments at Dubai Islands provide an extra-special level of hospitality, offering a safe, tranquil resort lifestyle.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    link: "/rixos"
  },
  {
    id: 8,
    title: "District One",
    subtitle: "Opal Residences",
    description: "Embrace the spirit of natural Dubai. District 11 Opal Gardens is an enchanting haven, combining beautiful green spaces with luxury community homes.",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
    link: "/district-one-opal"
  }
];

export default function NewLaunches() {
  return (
    <>
      <Head>
        <title>New Launches - Lucru</title>
        <meta name="description" content="Discover Lucru's newest launches and off-plan properties in Dubai." />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
            <NewLaunchesHero />

        {/* Grid Section */}
        <ResponsiveLaunchGrid
            titleNode={<>Our <span className="italic">New</span> Launches</>}
            description="Our carefully selected real estate resources and walk-in viewings, inviting you to discover the very pulse of Dubai."
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
