import React from 'react';
import Link from 'next/link';

const sitemapData = [
  {
    title: "New Launches",
    links: [
      { text: "Palm Central Private Residences", href: "#" },
      { text: "Bay Grove Residences", href: "#" },
      { text: "Bay Villas, Dubai Islands", href: "#" },
      { text: "Palm Jebel Ali", href: "#" },
      { text: "Como Residences", href: "#" },
      { text: "Naya Residences", href: "#" }
    ],
    subsections: [
      {
        title: "Construction Progress",
        links: [
          { text: "Como Residences", href: "#" },
          { text: "Palm Beach Towers", href: "#" },
          { text: "Lagoon Views", href: "#" },
          { text: "Palm Jebel Ali", href: "#" },
          { text: "Jebel Ali Village", href: "#" },
          { text: "Rixos Hotel & Residences", href: "#" },
          { text: "District One West", href: "#" },
          { text: "District 11 Opal Gardens", href: "#" }
        ]
      }
    ]
  },
  {
    title: "Lucru Collections",
    links: [
      { text: "Palm Jumeirah", href: "#" },
      { text: "Palm Jebel Ali", href: "#" },
      { text: "Dubai Islands", href: "#" },
      { text: "The World", href: "#" },
      { text: "District One", href: "#" },
      { text: "Meydan", href: "#" }
    ],
    subsections: []
  },
  {
    title: "Lucru Projects",
    links: [
      { text: "Jumeirah Islands", href: "#" },
      { text: "Jumeirah Park", href: "#" },
      { text: "Jumeirah Heights", href: "#" },
      { text: "The Palm Tower", href: "#" },
      { text: "Shoreline Apartments", href: "#" },
      { text: "Palma Residences", href: "#" },
      { text: "Palm Views", href: "#" },
      { text: "Marina Residences", href: "#" },
      { text: "Azure Residences", href: "#" },
      { text: "Club Vista Mare", href: "#" },
      { text: "Golden Mile", href: "#" },
      { text: "Al Furjan", href: "#" },
      { text: "Masakin Al Furjan", href: "#" },
      { text: "Jumeirah Village Circle", href: "#" },
      { text: "Jumeirah Village Triangle", href: "#" },
      { text: "Discovery Gardens", href: "#" },
      { text: "Nad Al Sheba Villas", href: "#" },
      { text: "Warsan Village", href: "#" },
      { text: "Veneto", href: "#" },
      { text: "Badrah", href: "#" },
      { text: "International City", href: "#" }
    ],
    subsections: []
  },
  {
    title: "Meydan",
    links: [
      { text: "Canal Front Residences", href: "#" },
      { text: "District 11 Opal Gardens", href: "#" }
    ],
    subsections: [
      {
        title: "District One",
        links: [
          { text: "Lagoon Views", href: "#" },
          { text: "District One West", href: "#" },
          { text: "Naya Residences", href: "#" }
        ]
      }
    ]
  },
  {
    title: "World Of Lucru",
    links: [
      { text: "Who We Are", href: "#" },
      { text: "People", href: "#" },
      { text: "HSSE", href: "#" },
      { text: "Corporate Social Responsibility", href: "#" },
      { text: "Community Management", href: "#" }
    ],
    subsections: []
  },
  {
    title: "Other",
    links: [],
    subsections: [
      {
        title: "Media Centre",
        links: [
          { text: "Blogs", href: "#" },
          { text: "Press Releases", href: "#" },
          { text: "Media Kit", href: "#" }
        ]
      },
      {
        title: "E-Services",
        links: [
          { text: "Lucru Quick Pay", href: "#" },
          { text: "Lucru Online Services", href: "#" },
          { text: "Meydan Online Services", href: "#" }
        ]
      },
      {
        title: "",
        links: [
          { text: "Land Enquiry", href: "#" },
          { text: "Contact Us", href: "#" },
          { text: "Whistleblowing", href: "#" },
          { text: "Terms & Conditions", href: "#" },
          { text: "Privacy Policy", href: "#" },
          { text: "Quality Policy", href: "#" },
          { text: "Cookies Notice", href: "#" }
        ]
      }
    ]
  }
];

const renderLinks = (links: {text: string, href: string}[]) => {
  return (
    <ul className="flex flex-col gap-2.5 mt-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link href={link.href} className="text-[#888888] hover:text-[#006A80] transition-colors text-[13px] font-medium block">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const FooterSitemap = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-10 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
        {sitemapData.map((column, index) => (
          <div key={index} className="flex flex-col border-[#e8e8e8] sm:border-l sm:pl-6 first:border-l-0 first:pl-0">
            {column.title && (
              <h4 className="text-[#006A80] font-bold text-[15px] leading-tight mt-1">
                {column.title}
              </h4>
            )}
            
            {column.links && column.links.length > 0 && renderLinks(column.links)}

            {column.subsections && column.subsections.length > 0 && (
              <div className="flex flex-col gap-10 mt-10">
                {column.subsections.map((sub, subIdx) => (
                  <div key={subIdx}>
                    {sub.title && (
                      <h4 className="text-[#006A80] font-bold text-[15px] leading-tight">
                        {sub.title}
                      </h4>
                    )}
                    {sub.links && sub.links.length > 0 && renderLinks(sub.links)}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSitemap;
