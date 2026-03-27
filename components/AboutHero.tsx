import React from 'react';
import Image from 'next/image';
import LPattern from './LPattern';

export default function AboutHero() {
    return (
        <div className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
                <Image
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                    alt="About Lucru"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
            </div>
            <LPattern />
            <div className="absolute bottom-16 md:bottom-22 left-6 md:left-24 z-20 text-white max-w-2xl">
                <h1
                    className="text-5xl md:text-7xl font-light drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                    About <span className="italic">Us</span>
                </h1>
            </div>
        </div>
    );
}
