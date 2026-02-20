// ContactModal.tsx
import  { useEffect } from 'react';
import { HiX, HiOutlineMail, HiOutlinePhone,  HiOutlineCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-10 px-4"
      onClick={onClose}
    >
      {/* Blurred transparent background */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md"></div>
      
      {/* Modal Content - Scrollable */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 
                     transition-colors z-10 bg-white/80 backdrop-blur-sm rounded-full p-2"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Contact Support
          </h3>
          <p className="text-gray-500">
            We typically respond within 24 hours on weekdays.
          </p>
        </div>

        {/* Steps Section */}
        <div className="p-6 sm:p-8 bg-gray-50/50">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            How it works
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Submit Request</p>
                <p className="text-xs text-gray-500">Fill in your details below</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">We Review</p>
                <p className="text-xs text-gray-500">Our team assesses your inquiry</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Get Response</p>
                <p className="text-xs text-gray-500">We reach out via your preferred channel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 sm:p-8">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500
                         transition-all duration-200 bg-gray-50/50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500
                         transition-all duration-200 bg-gray-50/50"
              />
            </div>

            {/* Phone (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="tel"
                placeholder="+254 700 000 000"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500
                         transition-all duration-200 bg-gray-50/50"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500
                         transition-all duration-200 bg-gray-50/50"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership Opportunity</option>
                <option>Volunteer Question</option>
                <option>Report an Issue</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl
                         focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500
                         transition-all duration-200 bg-gray-50/50 resize-none"
              ></textarea>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact-method" className="text-green-600" />
                  <HiOutlineMail className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact-method" className="text-green-600" />
                  <HiOutlinePhone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Phone</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact-method" className="text-green-600" />
                  <FaWhatsapp className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">WhatsApp</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gray-800 hover:bg-gray-700 text-white 
                       font-medium rounded-xl transition-all duration-300
                       flex items-center justify-center gap-2 group"
            >
              <HiOutlineMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Send Message
            </button>

            {/* Response Time Note */}
            <p className="text-xs text-center text-gray-400 flex items-center justify-center gap-1">
              <HiOutlineCheckCircle className="w-4 h-4 text-green-500" />
              Average response time: <span className="text-gray-600">2-4 hours</span>
            </p>
          </form>
        </div>

        {/* Alternative Contact Options */}
        <div className="p-6 sm:p-8 bg-gray-50/50 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center mb-3">
            Or reach us directly:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a href="mailto:support@tuwajibike.ke" 
               className="flex items-center justify-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <HiOutlineMail className="w-4 h-4" />
              support@tuwajibike.ke
            </a>
            <a href="tel:+254700000000" 
               className="flex items-center justify-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <HiOutlinePhone className="w-4 h-4" />
              +254 700 000 000
            </a>
            <a href="#" 
               className="flex items-center justify-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;