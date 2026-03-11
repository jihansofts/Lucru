import React from 'react';
import Link from 'next/link';

const sitemapData = [
  {
    title: "Job Categories",
    links: [
      { text: "Healthcare & Medical", href: "#" },
      { text: "Engineering & Construction", href: "#" },
      { text: "Oil & Gas", href: "#" },
      { text: "Hospitality & Catering", href: "#" },
      { text: "IT & Technology", href: "#" },
      { text: "Logistics & Transport", href: "#" }
    ],
    subsections: [
      {
        title: "Latest Openings",
        links: [
          { text: "Registered Nurses - KSA", href: "#" },
          { text: "Civil Engineers - UAE", href: "#" },
          { text: "Skilled Welders - Qatar", href: "#" },
          { text: "Hotel Managers - Kuwait", href: "#" },
          { text: "Software Devs - UK", href: "#" },
          { text: "HVAC Techs - Oman", href: "#" },
          { text: "Heavy Drivers - UAE", href: "#" },
          { text: "Safety Officers - Qatar", href: "#" }
        ]
      }
    ]
  },
  {
    title: "Top Destinations",
    links: [
      { text: "Saudi Arabia (KSA)", href: "#" },
      { text: "United Arab Emirates (UAE)", href: "#" },
      { text: "Qatar", href: "#" },
      { text: "Kuwait", href: "#" },
      { text: "Oman", href: "#" },
      { text: "Bahrain", href: "#" }
    ],
    subsections: []
  },
  {
    title: "Employer Services",
    links: [
      { text: "Permanent Staffing", href: "#" },
      { text: "Contract & Temporary Staffing", href: "#" },
      { text: "Executive Search", href: "#" },
      { text: "Mass Recruitment", href: "#" },
      { text: "Overseas Deployment", href: "#" },
      { text: "Visa & Immigration Processing", href: "#" },
      { text: "Pre-Departure Orientation", href: "#" },
      { text: "Payroll Management", href: "#" },
      { text: "Trade Testing & Certification", href: "#" },
      { text: "Medical Assessment Coordination", href: "#" },
      { text: "Background Verification", href: "#" }
    ],
    subsections: []
  },
  {
    title: "Candidate Services",
    links: [
      { text: "Submit Resume", href: "#" },
      { text: "Interview Preparation", href: "#" }
    ],
    subsections: [
      {
        title: "Resources",
        links: [
          { text: "Career Counseling", href: "#" },
          { text: "Skill Development", href: "#" },
          { text: "Relocation Guide", href: "#" }
        ]
      }
    ]
  },
  {
    title: "About Lucru",
    links: [
      { text: "Who We Are", href: "#" },
      { text: "Our Team", href: "#" },
      { text: "Client Testimonials", href: "#" },
      { text: "Corporate Social Responsibility", href: "#" },
      { text: "Accreditations", href: "#" }
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
          { text: "Company News", href: "#" }
        ]
      },
      {
        title: "E-Services",
        links: [
          { text: "Employer Portal", href: "#" },
          { text: "Candidate Portal", href: "#" },
          { text: "Application Tracking", href: "#" }
        ]
      },
      {
        title: "",
        links: [
          { text: "Submit Inquiry", href: "#" },
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
