import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Let&rsquo;s talk about things!</h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you&rsquo;re looking for top talent or your next career opportunity, 
                our dedicated team is ready to assist you. Drop us a line or call us directly.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#E5F5EF] p-3 rounded-full shrink-0">
                  <MapPinIcon className="w-6 h-6 text-[#008F5D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our HQ</h3>
                  <p className="text-gray-600 mt-1">123 Recruitment Ave, Global City, DX 45678, Dubai</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#E5F5EF] p-3 rounded-full shrink-0">
                  <PhoneIcon className="w-6 h-6 text-[#008F5D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">+971 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#E5F5EF] p-3 rounded-full shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-[#008F5D]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Address</h3>
                  <p className="text-gray-600 mt-1">info@lucru.group</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors" placeholder="How can we help?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008F5D] focus:border-[#008F5D] outline-none transition-colors resize-none" placeholder="Write your msg here..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#008F5D] hover:bg-[#00744B] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}