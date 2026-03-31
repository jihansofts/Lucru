import React from 'react';
import Link from 'next/link';

type LinkItem = { text: string; href: string };
type SubSection = { title: string; links: LinkItem[] };
type SitemapColumn = { title: string; links: LinkItem[]; subsections?: SubSection[] };

const sitemapData: SitemapColumn[] = [
  {
    title: "Hire Manpower",
    links: [
      { text: "Direct Recruitment", href: "/hire-manpower/direct-recruitment" },
      { text: "Bulk Deployments", href: "/hire-manpower/bulk-deployments" }
    ],
    subsections: []
  },
  {
    title: "Our Services",
    links: [
      { text: "Overseas Recruitment", href: "/our-services/overseas-recruitment" },
      { text: "Specialized Headhunting", href: "/our-services/specialized-headhunting" },
      { text: "Visa Processing", href: "/our-services/visa-processing" },
      { text: "Pre-Departure Orientation", href: "/our-services/pre-departure-orientation" },
      { text: "Document Attestation", href: "/our-services/document-attestation" }
    ],
    subsections: []
  },
  {
    title: "Quick Links",
    links: [
      { text: "Home", href: "/" },
      { text: "About Us", href: "/about-us" },
      { text: "Vacancies", href: "/vacancies" },
      { text: "Success Stories", href: "#" },
      { text: "Contact Us", href: "/contact-us" }
    ],
    subsections: []
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
    <div className="w-full max-w-350 mx-auto px-6 md:px-12 py-10 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
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
