import React from 'react';
import Link from 'next/link';
import PropertyCarousel, { CardData } from './PropertyCarousel';

const newLaunchesData: CardData[] = [
  {
    id: 1,
    title: "Registered Nurses",
    subtitle: "Saudi Arabia",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    description: "Urgently needed experienced nurses for top-tier hospitals in Riyadh.",
    link: "/jobs/nursing",
    status: "URGENT"
  },
  {
    id: 2,
    title: "Civil Engineers",
    subtitle: "UAE",
    image: "https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg",
    description: "Leading construction firms seeking qualified site engineers and project managers.",
    link: "/jobs/engineering",
    status: "URGENT"
  },
  {
    id: 3,
    title: "Skilled Welders",
    subtitle: "Qatar",
    image: "https://images.pexels.com/photos/35136696/pexels-photo-35136696.jpeg",
    description: "Immediate openings for certified 6G welders and fabricators for oil & gas projects.",
    link: "/jobs/welding",
    status: "URGENT"
  },
  {
    id: 4,
    title: "Hospitality Staff",
    subtitle: "Kuwait",
    image: "https://images.pexels.com/photos/19814054/pexels-photo-19814054.jpeg",
    description: "5-star hotels hiring front desk executives, chefs, and housekeeping supervisors.",
    link: "/jobs/hospitality",
    status: "URGENT"
  }
];

export default function OurNewLaunches() {
  const headerAction = (
    <Link href="/find-jobs" className="border border-[#002538] text-[#002538] px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#002538] hover:text-white transition-colors">
      VIEW ALL JOBS
    </Link>
  );

  const titleNode = (
    <>
      <span className="italic">Urgent</span> Openings
    </>
  );

  return (
    <PropertyCarousel
      titleNode={titleNode}
      headerActionNode={headerAction}
      cards={newLaunchesData}
      hoverBgColorClassName="bg-[#173a3a]/95" // A different color for the new component as requested
      navigationPosition="header"
      heightClassName="h-[470px] md:h-[618px]"
    />
  );
}
