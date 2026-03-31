import React from 'react';
import Link from 'next/link';
import { 
  BriefcaseIcon, 
  MapPinIcon, 
  ClockIcon, 
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export interface JobData {
  id: string | number;
  industry: string;
  nationality: string;
  date: string;
  title: string;
  location: string;
  employmentType: string;
  experience: string;
  vacancies: string | number;
  description: string;
  salary: string;
  shift: string;
  gender: string;
  category: string;
  requirements: string;
  onApply?: () => void;
}

export default function JobCard({
  id,
  industry,
  nationality,
  date,
  title,
  location,
  employmentType,
  experience,
  vacancies,
  description,
  salary,
  shift,
  gender,
  category,
  requirements,
  onApply
}: JobData) {
  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-block bg-blue-50 text-brand-dark text-xs px-2 py-1 rounded font-medium mb-2">
            {industry}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <MapPinIcon className="w-4 h-4" />
            {location}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 font-medium whitespace-nowrap">{date}</p>
          <p className="text-sm font-semibold text-green-700 mt-1">{salary}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-5 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <BriefcaseIcon className="w-4 h-4 text-gray-400" />
          <span>{employmentType}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <ClockIcon className="w-4 h-4 text-gray-400" />
          <span>{shift}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <UserGroupIcon className="w-4 h-4 text-gray-400" />
          <span>{vacancies} Vacancies</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarIcon className="w-4 h-4 text-gray-400" />
          <span className="truncate" title={experience}>{experience}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-6 line-clamp-2 grow">
        {description}
      </p>

      <div className="bg-gray-50 rounded-lg p-3 mb-6 text-sm grid grid-cols-2 gap-2">
        <div>
          <span className="text-gray-400 text-xs block">Nationality</span>
          <span className="font-medium text-gray-700">{nationality}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs block">Gender</span>
          <span className="font-medium text-gray-700">{gender}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs block">Category</span>
          <span className="font-medium text-gray-700 truncate block" title={category}>{category}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs block">Requirements</span>
          <span className="font-medium text-gray-700 truncate block" title={requirements}>{requirements}</span>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        {onApply ? (
          <button 
            type="button"
            onClick={onApply}
            className="w-full inline-block text-center border border-brand-dark text-brand-dark px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors rounded"
          >
            Apply Now
          </button>
        ) : (
          <Link 
            href={`/vacancies/${id}`} 
            className="w-full inline-block text-center border border-brand-dark text-brand-dark px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-colors rounded"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
}
