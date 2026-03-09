import React from 'react';
import PropertyCarousel, { CardData } from './PropertyCarousel';

const cardsData: CardData[] = [
  {
    id: 1,
    title: "BAY GROVE",
    subtitle: "RESIDENCES",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    description: "Experience luxury living by the sea with spectacular views and premium amenities.",
    link: "/bay-grove",
    status: "NEW"
  },
  {
    id: 2,
    title: "BAY VILLAS",
    subtitle: "DUBAI ISLANDS",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description: "The unique Dubai Islands offer an extra-ordinary lifestyle close to the city yet worlds away. Live amidst beaches and prolific landscaped green spaces.",
    link: "/bay-villas",
    status: "LIVE"
  },
  {
    id: 3,
    title: "PALM",
    subtitle: "JEBEL ALI",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    description: "Your next great inspiration, a vision of absolute luxury and exclusive island living.",
    link: "/palm-jebel-ali",
    status: "NEW"
  },
  {
    id: 4,
    title: "COMO",
    subtitle: "RESIDENCES",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "Cosmopolitan mode of living in the sky with 360-degree panoramic views.",
    link: "/como",
    status: "LIVE"
  },
  {
    id: 5,
    title: "RIXOS",
    subtitle: "RESIDENCES",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    description: "All-inclusive resort style living with world-class hospitality.",
    link: "/rixos",
    status: "NEW"
  },
  {
    id: 6,
    title: "DISTRICT ONE",
    subtitle: "WEST",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    description: "Experience the ultimate luxury lifestyle in the heart of Dubai with a stunning crystal lagoon.",
    link: "/district-one-west",
    status: "LIVE"
  },
  {
    id: 7,
    title: "JEBEL ALI",
    subtitle: "VILLAGE",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description: "A reimagined community offering spacious townhouses and rolling hills in a tranquil setting.",
    link: "/jebel-ali-village",
    status: "NEW"
  },
  {
    id: 8,
    title: "LAGOON",
    subtitle: "VIEWS",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    description: "Elevate your everyday with serene water views and contemporary Mediterranean architecture.",
    link: "/lagoon-views",
    status: "LIVE"
  },
  {
    id: 9,
    title: "OPAL",
    subtitle: "GARDENS",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "A sanctuary of luxury offering meticulously crafted villas with private lush landscapes.",
    link: "/opal-gardens",
    status: "NEW"
  },
  {
    id: 10,
    title: "PALM BEACH",
    subtitle: "TOWERS",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    description: "Exceptional beachfront living where luxury meets the soothing rhythm of the sea.",
    link: "/palm-beach-towers",
    status: "LIVE"
  },
  {
    id: 11,
    title: "THE ESTATES",
    subtitle: "DUBAI HILLS",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    description: "An enclave of majesty and grandeur where every detail is meticulously curated.",
    link: "/the-estates",
    status: "NEW"
  },
  {
    id: 12,
    title: "MARINA",
    subtitle: "RESIDENCES",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description: "Wake up to the gentle lap of waves and unparalleled views of the marina skyline.",
    link: "/marina-residences",
    status: "LIVE"
  },
  {
    id: 13,
    title: "BLUEWATERS",
    subtitle: "BAY",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    description: "Experience vibrant waterfront living inspired by Miami's modern aesthetic.",
    link: "/bluewaters-bay",
    status: "NEW"
  },
  {
    id: 14,
    title: "NAD AL SHEBA",
    subtitle: "VILLAS",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "Spacious Mediterranean-styled villas located in an exclusive residential community.",
    link: "/nad-al-sheba-villas",
    status: "LIVE"
  },
  {
    id: 15,
    title: "JUMEIRAH",
    subtitle: "ISLANDS",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    description: "A spectacular picturesque community of luxury villas set amidst sparkling waterfalls.",
    link: "/jumeirah-islands",
    status: "NEW"
  },
  {
    id: 16,
    title: "THE GARDENS",
    subtitle: "RESIDENCES",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    description: "Find tranquility in this lush, verdant community designed for family-centric living.",
    link: "/the-gardens",
    status: "LIVE"
  },
  {
    id: 17,
    title: "AL FURJAN",
    subtitle: "VILLAGE",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    description: "A vibrant neighborhood celebrating the true spirit of community and connection.",
    link: "/al-furjan",
    status: "NEW"
  },
  {
    id: 18,
    title: "WARSAN",
    subtitle: "VILLAGE",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    description: "Modern family townhouses located in a bustling, self-sustained community hub.",
    link: "/warsan-village",
    status: "LIVE"
  },
  {
    id: 19,
    title: "TILAL",
    subtitle: "AL GHAF",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    description: "Resort-style living centered around a stunning recreational lagoon and white sandy beaches.",
    link: "/tilal-al-ghaf",
    status: "NEW"
  },
  {
    id: 20,
    title: "THE OASIS",
    subtitle: "BY LUCRU",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    description: "An exclusive sanctuary of opulent villas blending seamlessly with nature and waterways.",
    link: "/the-oasis",
    status: "LIVE"
  }
];

export default function WorldOfLucru() {
  const [activeTab, setActiveTab] = React.useState<'NEW' | 'LIVE'>('NEW');

  const filteredCards = cardsData.filter(card => card.status === activeTab);

  const titleNode = (
    <>
      The <span className="italic">World</span> Of Lucru
    </>
  );

  const headerAction = (
    <div className="flex items-center gap-6 font-bold text-base tracking-widest text-[#002538]">
      <button 
        onClick={() => setActiveTab('NEW')}
        className={`transition-colors cursor-pointer ${activeTab === 'NEW' ? 'text-[#002538]' : 'text-gray-400 hover:text-[#5ec4d6]'}`}
      >
        NEW
      </button>
      <button 
        onClick={() => setActiveTab('LIVE')}
        className={`transition-colors cursor-pointer ${activeTab === 'LIVE' ? 'text-[#002538]' : 'text-gray-400 hover:text-[#5ec4d6]'}`}
      >
        LIVE
      </button>
    </div>
  );

  return (
    <PropertyCarousel
      titleNode={titleNode}
      headerActionNode={headerAction}
      cards={filteredCards}
      hoverBgColorClassName="bg-[#001c29]/95"
      navigationPosition="sides"
    />
  );
}
