import React from 'react';
import PropertyCarousel, { CardData } from './PropertyCarousel';

const newLaunchesData: CardData[] = [
  {
    id: 1,
    title: "Palm Central Private",
    subtitle: "Residences",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    description: "Experience luxury living by the sea with spectacular views and premium amenities.",
    link: "/palm-central",
    status: "NEW"
  },
  {
    id: 2,
    title: "Bay Grove",
    subtitle: "Residences",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description: "The unique Dubai Islands offer an extra-ordinary lifestyle close to the city yet worlds away.",
    link: "/bay-grove",
    status: "NEW"
  },
  {
    id: 3,
    title: "Bay Villas,",
    subtitle: "Dubai Islands",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    description: "Your next great inspiration, a vision of absolute luxury and exclusive island living.",
    link: "/bay-villas",
    status: "NEW"
  },
  {
    id: 4,
    title: "Como",
    subtitle: "Residences",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "Cosmopolitan mode of living in the sky with 360-degree panoramic views.",
    link: "/como",
    status: "NEW"
  }
];

export default function OurNewLaunches() {
  const headerAction = (
    <a href="/new-launches" className="border border-[#002538] text-[#002538] px-6 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#002538] hover:text-white transition-colors">
      VIEW ALL
    </a>
  );

  const titleNode = (
    <>
      Our <span className="italic">New</span> Launches
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
