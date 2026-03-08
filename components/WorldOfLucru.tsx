import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import type { Swiper as SwiperCore } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const cardsData = [
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
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeTab, setActiveTab] = React.useState<'NEW' | 'LIVE'>('NEW');

  const filteredCards = cardsData.filter(card => card.status === activeTab);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className=" md:pl-10 overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 pr-14 ps-6 md:ps-0">
          <h2 className="text-2xl md:text-3xl text-[#002538] font-light" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            The <span className="italic">World</span> Of Lucru
          </h2>
          <div className="flex items-center gap-6 mt-4 md:mt-0 font-bold text-base tracking-widest text-[#002538]">
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
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className={`w-full h-125 md:h-162 pl-0! transition-opacity duration-300`}
            key={activeTab} // Force Swiper to re-render when tab changes
          >
            {filteredCards.map((card) => (
              <SwiperSlide key={card.id} className="h-full">
                <div className="relative w-full h-full group/card overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <Image
                  height={500}
                  width={800} 
                    src={card.image} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  
                  {/* Default State: Center Logo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover/card:opacity-0 z-10">
                    <div className="text-center text-white drop-shadow-md">
                      <div className="mx-auto w-12 h-12 mb-3 border border-white/50 rounded-full flex items-center justify-center">
                        {/* Placeholder Icon */}
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      </div>
                      <h3 className="text-2xl font-light tracking-[0.2em] uppercase">{card.title}</h3>
                      <p className="text-xs tracking-[0.3em] uppercase mt-1 opacity-80">{card.subtitle}</p>
                    </div>
                  </div>

                  {/* Hover State: Bottom Up Overlay */}
                  <div className="absolute inset-0 bg-[#001c29]/95 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center p-8 text-center z-20">
                    {/* Hover Logo */}
                    <div className="absolute top-16 text-center text-white">
                        <div className="mx-auto w-12 h-12 mb-3 border border-white/50 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                        </div>
                        <h3 className="text-xl font-light tracking-[0.2em] uppercase">{card.title}</h3>
                        <p className="text-[10px] tracking-[0.3em] uppercase mt-1 text-[#e2dbc8]">{card.subtitle}</p>
                    </div>

                    <p className="text-sm text-white/90 leading-relaxed max-w-sm mt-8">
                      {card.description}
                    </p>
                    
                    <a href={card.link} className="absolute bottom-16 inline-flex border border-[#e2dbc8] text-[#e2dbc8] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#e2dbc8] hover:text-[#001c29] transition-colors">
                      Discover More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute cursor-pointer top-1/2 -left-1 -translate-y-1/2 z-30 text-white"
          >
            <ChevronLeftIcon className="w-12 h-12" />
          </button>
          
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute cursor-pointer top-1/2 -right-1 -translate-y-1/2 z-30 text-white"
          >
            <ChevronRightIcon className="w-12 h-12" />
          </button>
        </div>
      </div>
    </section>
  );
}
