import React from 'react';
import PropertyCarousel, { CardData } from './PropertyCarousel';

const cardsData: CardData[] = [
  {
    id: 1,
    title: "SAUDI",
    subtitle: "ARABIA",
    image: "https://images.pexels.com/photos/12404055/pexels-photo-12404055.jpeg",
    description: "Mega projects and healthcare facilities hiring thousands of skilled professionals.",
    link: "/destinations/ksa",
    status: "URGENT"
  },
  {
    id: 2,
    title: "UNITED ARAB",
    subtitle: "EMIRATES",
    image: "https://images.pexels.com/photos/8986048/pexels-photo-8986048.jpeg",
    description: "Leading destination for hospitality, engineering, and service sector jobs.",
    link: "/destinations/uae",
    status: "ACTIVE"
  },
  {
    id: 3,
    title: "STATE OF",
    subtitle: "QATAR",
    image: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
    description: "Lucrative opportunities in oil & gas, construction, and infrastructure development.",
    link: "/destinations/qatar",
    status: "URGENT"
  },
  {
    id: 4,
    title: "KINGDOM OF",
    subtitle: "BAHRAIN",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    description: "Growing financial hub offering diverse roles in banking, retail, and IT.",
    link: "/destinations/bahrain",
    status: "ACTIVE"
  },
  {
    id: 5,
    title: "SULTANATE OF",
    subtitle: "OMAN",
    image: "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg",
    description: "Steady demand for medical staff, educators, and technical specialists.",
    link: "/destinations/oman",
    status: "URGENT"
  },
  {
    id: 6,
    title: "STATE OF",
    subtitle: "KUWAIT",
    image: "https://images.pexels.com/photos/60008/brown-coal-energy-garzweiler-bucket-wheel-excavators-60008.jpeg",
    description: "Excellent packages for experienced engineers, doctors, and heavy equipment operators.",
    link: "/destinations/kuwait",
    status: "ACTIVE"
  },
  {
    id: 7,
    title: "UNITED",
    subtitle: "KINGDOM",
    image: "https://images.pexels.com/photos/7345465/pexels-photo-7345465.jpeg",
    description: "Tier-2 sponsorship roles available for registered nurses and senior carers.",
    link: "/destinations/uk",
    status: "URGENT"
  },
  {
    id: 8,
    title: "EUROPEAN",
    subtitle: "UNION",
    image: "https://images.pexels.com/photos/163752/harvest-grain-combine-arable-farming-163752.jpeg",
    description: "Opportunities across manufacturing, agriculture, and logistics sectors.",
    link: "/destinations/eu",
    status: "ACTIVE"
  },
  {
    id: 9,
    title: "MEDICAL",
    subtitle: "PROFESSIONALS",
    image: "https://images.pexels.com/photos/9243569/pexels-photo-9243569.jpeg",
    description: "Nurses, doctors, and lab technicians in high demand globally.",
    link: "/sectors/medical",
    status: "URGENT"
  },
  {
    id: 10,
    title: "CONSTRUCTION",
    subtitle: "& ENGINEERING",
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    description: "Civil, MEP, and QA/QC engineers for massive infrastructure developments.",
    link: "/sectors/engineering",
    status: "ACTIVE"
  },
  {
    id: 11,
    title: "HOSPITALITY",
    subtitle: "& CATERING",
    image: "https://images.pexels.com/photos/7820376/pexels-photo-7820376.jpeg",
    description: "Chefs, waitstaff, and hotel managers for 5-star properties.",
    link: "/sectors/hospitality",
    status: "URGENT"
  },
  {
    id: 12,
    title: "OIL & GAS",
    subtitle: "SECTOR",
    image: "https://images.pexels.com/photos/9336586/pexels-photo-9336586.jpeg",
    description: "Offshore and onshore roles for experienced technicians and riggers.",
    link: "/sectors/oil-gas",
    status: "ACTIVE"
  },
  {
    id: 13,
    title: "IT &",
    subtitle: "TECHNOLOGY",
    image: "https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg",
    description: "Software developers, network engineers, and cybersecurity experts.",
    link: "/sectors/it",
    status: "URGENT"
  },
  {
    id: 14,
    title: "LOGISTICS",
    subtitle: "& TRANSPORT",
    image: "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg",
    description: "Heavy duty drivers, warehouse managers, and supply chain analysts.",
    link: "/sectors/logistics",
    status: "ACTIVE"
  },
  {
    id: 15,
    title: "RETAIL &",
    subtitle: "SALES",
    image: "https://images.pexels.com/photos/3294472/pexels-photo-3294472.jpeg",
    description: "Store managers, merchandisers, and customer service representatives.",
    link: "/sectors/retail",
    status: "URGENT"
  },
  {
    id: 16,
    title: "EDUCATION",
    subtitle: "& ACADEMICS",
    image: "https://images.pexels.com/photos/8199166/pexels-photo-8199166.jpeg",
    description: "International school teachers, professors, and academic administrators.",
    link: "/sectors/education",
    status: "ACTIVE"
  },
  {
    id: 17,
    title: "FACILITY",
    subtitle: "MANAGEMENT",
    image: "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg",
    description: "HVAC technicians, electricians, and maintenance supervisors.",
    link: "/sectors/facility",
    status: "URGENT"
  },
  {
    id: 18,
    title: "DOMESTIC",
    subtitle: "WORKERS",
    image: "https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg",
    description: "Trained caregivers, nannies, and household managers.",
    link: "/sectors/domestic",
    status: "ACTIVE"
  },
  {
    id: 19,
    title: "MANUFACTURING",
    subtitle: "& PRODUCTION",
    image: "https://images.pexels.com/photos/7205376/pexels-photo-7205376.jpeg",
    description: "Machine operators, CNC programmers, and production supervisors.",
    link: "/sectors/manufacturing",
    status: "URGENT"
  },
  {
    id: 20,
    title: "SECURITY",
    subtitle: "SERVICES",
    image: "https://images.pexels.com/photos/7001082/pexels-photo-7001082.jpeg",
    description: "SIRA/PSBD certified security guards and safety officers.",
    link: "/sectors/security",
    status: "ACTIVE"
  }
];

export default function WorldOfLucru() {
  const [activeTab, setActiveTab] = React.useState<'URGENT' | 'ACTIVE'>('URGENT');

  const filteredCards = cardsData.filter(card => card.status === activeTab);

  const titleNode = (
    <>
      <span className="italic">Global</span> Reach
    </>
  );

  const headerAction = (
    <div className="flex items-center gap-6 font-bold text-base tracking-widest text-brand-dark">
      <button 
        onClick={() => setActiveTab('URGENT')}
        className={`transition-colors cursor-pointer ${activeTab === 'URGENT' ? 'text-brand-dark' : 'text-gray-400 hover:text-brand-primary'}`}
      >
        URGENT
      </button>
      <button 
        onClick={() => setActiveTab('ACTIVE')}
        className={`transition-colors cursor-pointer ${activeTab === 'ACTIVE' ? 'text-brand-dark' : 'text-gray-400 hover:text-brand-primary'}`}
      >
        ACTIVE
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
