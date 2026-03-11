import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import LPattern from './LPattern';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';



const slidesData = [
    {
        id: 1,
        title: "Medical",
        subtitle: "Professionals",
        description: "Opportunities across leading GCC healthcare groups...",
        image: "https://images.pexels.com/photos/4006979/pexels-photo-4006979.jpeg",
        link: "/jobs/medical"
    },
    {
        id: 2,
        title: "Engineering",
        subtitle: "& Construction",
        description: "Be part of the world's most ambitious mega-projects.",
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
        link: "/jobs/engineering"
    },
    {
        id: 3,
        title: "Hospitality",
        subtitle: "& Catering",
        description: "Experience luxury roles in top 5-star hotels globally.",
        image: "https://images.pexels.com/photos/3770091/pexels-photo-3770091.jpeg",
        link: "/jobs/hospitality"
    },
    {
        id: 4,
        title: "IT &",
        subtitle: "Technology",
        description: "Lead digital transformation initiatives worldwide.",
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
        link: "/jobs/technology"
    },
    {
        id: 5,
        title: "Oil & Gas",
        subtitle: "Sector",
        description: "High-yield onshore and offshore technical roles.",
        image: "https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg",
        link: "/jobs/oil-gas"
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
                            <Image
                            height={700}
                            width={1200}
                                src={slide.image}
                                alt={`${slide.title} ${slide.subtitle}`}
                                className="object-cover w-full h-full"
                            />
                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
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
                                VIEW JOBS
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
