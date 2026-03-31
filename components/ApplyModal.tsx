import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { JobData } from './JobCard';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ApplyModalProps {
  isOpen: boolean;
  closeModal: () => void;
  job: JobData | null;
}

export default function ApplyModal({ isOpen, closeModal, job }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application Submitted for Job:", job?.title);
    console.log("Form Data:", formData);
    // Future: email sending logic here!
    closeModal();
  };

  if (!job) return null;

  return (
    <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={closeModal}>
      <DialogBackdrop className="fixed inset-0 bg-black/50 transition duration-300 ease-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel
            className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-2xl font-bold leading-6 text-gray-900 border-b pb-4 flex justify-between items-center"
            >
              Apply for {job.title}
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-900 transition-colors">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </DialogTitle>
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-6">
                Please fill out the form below to apply for the <strong className="text-brand-dark">{job.title}</strong> position in {job.location}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                    <input required type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                    <input required type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                    <input required type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input required type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-colors" placeholder="+1 234 567 890" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume / CV <span className="text-red-500">*</span></label>
                  <input required type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" className="w-full px-4 py-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-brand-dark hover:file:bg-blue-100" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter (Optional)</label>
                  <textarea name="coverLetter" id="coverLetter" rows={4} value={formData.coverLetter} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-colors resize-none" placeholder="Write a brief cover letter..."></textarea>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button type="button" onClick={closeModal} className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" className="px-6 py-2.5 bg-brand-dark text-white font-medium rounded-lg hover:bg-[#00744B] transition-colors">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
