import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface LaunchCardProps {
  id: string | number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string;
}

export default function LaunchCard({ title, subtitle, image, description, link }: LaunchCardProps) {
  return (
    <div className="flex flex-col h-full bg-white group cursor-pointer border border-transparent hover:border-gray-200 transition-colors duration-300">
      <div className="relative w-full aspect-4/3 overflow-hidden mb-6">
        <Image
          src={image}
          alt={`${title} ${subtitle}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col grow px-2 pb-4">
        <h3 className="text-xl md:text-2xl text-brand-dark font-light mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
          {title} <span className="font-bold">{subtitle}</span>
        </h3>
        
        <p className="text-sm text-gray-500 mb-8 grow leading-relaxed">
          {description}
        </p>
        
        <Link 
          href={link}
          className="w-full inline-block text-center border border-brand-dark text-brand-dark px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors mt-auto"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
}
