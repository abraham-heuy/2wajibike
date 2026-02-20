// AboutPage.tsx
import { useState } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import AboutContent from '../components/about/aboutcontent';
import Testimonials from '../components/about/testimonials';
import FAQs from '../components/about/Faq';

const AboutPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'about' | 'testimonials' | 'faqs'>('about');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Arrow */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-16 md:h-20">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 
                       transition-colors group"
            >
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs - Mobile Chips / Desktop Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12">
        {/* Mobile View - Chips */}
        <div className="flex sm:hidden flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                      ${activeTab === 'about' 
                        ? 'bg-green-600 text-white shadow-md shadow-green-200' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                      ${activeTab === 'testimonials' 
                        ? 'bg-green-600 text-white shadow-md shadow-green-200' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
          >
            Testimonials
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                      ${activeTab === 'faqs' 
                        ? 'bg-green-600 text-white shadow-md shadow-green-200' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'}`}
          >
            FAQs
          </button>
        </div>

        {/* Desktop View - Underline Tabs */}
        <div className="hidden sm:flex justify-center items-center gap-12 border-b border-gray-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`relative pb-2 text-base font-medium transition-colors duration-300
                      ${activeTab === 'about' 
                        ? 'text-green-600' 
                        : 'text-gray-500 hover:text-gray-800'}`}
          >
            About Us
            {activeTab === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`relative pb-2 text-base font-medium transition-colors duration-300
                      ${activeTab === 'testimonials' 
                        ? 'text-green-600' 
                        : 'text-gray-500 hover:text-gray-800'}`}
          >
            Testimonials
            {activeTab === 'testimonials' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`relative pb-2 text-base font-medium transition-colors duration-300
                      ${activeTab === 'faqs' 
                        ? 'text-green-600' 
                        : 'text-gray-500 hover:text-gray-800'}`}
          >
            FAQs
            {activeTab === 'faqs' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
            )}
          </button>
        </div>

        {/* Content Area with Transitions */}
        <div className="pb-16 md:pb-24">
          {activeTab === 'about' && <AboutContent />}
          {activeTab === 'testimonials' && <Testimonials />}
          {activeTab === 'faqs' && <FAQs />}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;