import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import LPattern from './LPattern';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';



const slidesData = [
    {
        id: 1,
        title: "Bay Villas,",
        subtitle: "Dubai Islands",
        description: "Your next great inspiration...",
        image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
        link: "/bay-villas"
    },
    {
        id: 2,
        title: "Como",
        subtitle: "Residences",
        description: "Cosmopolitan mode of living in the sky.",
        image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
        link: "/como-residences"
    },
    {
        id: 3,
        title: "Palm Central",
        subtitle: "Private Residences",
        description: "Experience luxury living by the sea.",
        image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
        link: "/palm-central"
    },
    {
        id: 4,
        title: "Bay Grove",
        subtitle: "Residences",
        description: "Extra-ordinary lifestyle close to the city.",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        link: "/bay-grove"
    },
    {
        id: 5,
        title: "District One",
        subtitle: "West",
        description: "A secure gated community experience.",
        image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
        link: "/district-one-west"
    }
];

export default function NewLaunchesHero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

    return (
        <div className="relative w-full h-[70vh] md:h-dvh overflow-hidden bg-gray-900">
            <Swiper
                modules={[EffectFade, Autoplay, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full absolute inset-0 z-0"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src={slide.image}
                                alt={`${slide.title} ${slide.subtitle}`}
                                className="object-cover w-full h-full"
                            />
                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-30 pointer-events-auto">
                {slidesData.map((_, dotIndex) => (
                    <div
                        key={dotIndex}
                        onClick={(e) => {
                            e.stopPropagation();
                            swiperInstance?.slideTo(dotIndex);
                        }}
                        className={`w-2 h-2 transition-all duration-300 cursor-pointer ${dotIndex === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                ))}
            </div>

            {/* L Pattern Overlay */}
            <LPattern />

            {/* Text Overlay (Bottom Left) */}
            <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white pointer-events-none max-w-2xl">
                {slidesData.map((data, i) => {
                    const isActive = i === activeIndex;
                    if (!isActive) return null;

                    return (
                        <div key={i} className="animate-slide-up-hero pointer-events-auto">
                            <h1 className="text-4xl md:text-6xl font-light mb-2 drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                                {data.title} <span className="font-bold">{data.subtitle}</span>
                            </h1>
                            <p className="text-sm md:text-lg mb-8 drop-shadow-md text-gray-200">
                                {data.description}
                            </p>
                            
                            <Link 
                                href={data.link}
                                className="inline-block border border-white text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
                            >
                                LEARN MORE
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
