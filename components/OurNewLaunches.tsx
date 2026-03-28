import React from 'react';
import Link from 'next/link';
import PropertyCarousel, { CardData } from './PropertyCarousel';

const newLaunchesData: CardData[] = [
  {
    id: 1,
    title: "Registered Nurses",
    subtitle: "Saudi Arabia",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    description: "Approved employer placements ready. Full visa assistance provided.",
    link: "/vacancies/nursing",
    status: "URGENT"
  },
  {
    id: 2,
    title: "Civil Engineers",
    subtitle: "UAE",
    image: "https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg",
    description: "Ready visa for qualified site engineers. We handle your documentation securely.",
    link: "/vacancies/engineering",
    status: "URGENT"
  },
  {
    id: 3,
    title: "Skilled Welders",
    subtitle: "Qatar",
    image: "https://images.pexels.com/photos/35136696/pexels-photo-35136696.jpeg",
    description: "Direct interviews with top employers. Comprehensive flight & ticketing support.",
    link: "/vacancies/welding",
    status: "URGENT"
  },
  {
    id: 4,
    title: "Hospitality Staff",
    subtitle: "Kuwait",
    image: "https://images.pexels.com/photos/19814054/pexels-photo-19814054.jpeg",
    description: "5-star hotels hiring and pre-approved visas available for immediate processing.",
    link: "/vacancies/hospitality",
    status: "URGENT"
  }
];

export default function OurNewLaunches() {
  const headerAction = (
    <Link href="/vacancies" className="border border-brand-dark text-brand-dark px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors">
      VIEW ALL VACANCIES
    </Link>
  );

  const titleNode = (
    <>
      <span className="italic">Latest</span> Vacancies
    </>
  );

  return (
    <PropertyCarousel
      titleNode={titleNode}
      headerActionNode={headerAction}
      cards={newLaunchesData}
      hoverBgColorClassName="bg-[#2F9BA0]/95" // A different color for the new component as requested
      navigationPosition="header"
      heightClassName="h-[470px] md:h-[618px]"
    />
  );
}
