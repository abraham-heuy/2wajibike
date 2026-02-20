// FAQs.tsx
import { useState, useEffect } from 'react';
import { HiChevronDown, HiMenu, HiX} from 'react-icons/hi';
import { FaQuestionCircle, FaUserFriends, FaShieldAlt} from 'react-icons/fa';
import ContactModal from './contactModal';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when category changes
  useEffect(() => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [activeCategory, isMobile]);

  const faqs = [
    // General Questions
    {
      id: 1,
      category: 'general',
      question: "What is Tuwajibike?",
      answer: "Tuwajibike is a citizen-powered platform that brings transparency to Kenyan leadership. Citizens can rate leaders based on real evidence, track projects, and hold leaders accountable. Leaders can showcase their track record, and aspirants can create free campaign profiles."
    },
    {
      id: 2,
      category: 'general',
      question: "Is Tuwajibike free to use?",
      answer: "Yes! Tuwajibike is completely free for all users—citizens, current leaders, and aspiring candidates. We're a volunteer-powered movement funded by donations and grants. We will never charge citizens for access."
    },
    {
      id: 3,
      category: 'general',
      question: "When was Tuwajibike founded?",
      answer: "Tuwajibike was founded in January 2025 by a group of young Kenyan volunteers. What started as a WhatsApp group of 5 has grown to over 32 contributors across the country."
    },
    
    // For Users
    {
      id: 4,
      category: 'users',
      question: "How do I create an account?",
      answer: "Simply click 'Sign Up' on the homepage. You can register as a citizen, leader, or aspirant. The process takes less than 2 minutes and only requires your phone number for verification."
    },
    {
      id: 5,
      category: 'users',
      question: "How do I rate a leader?",
      answer: "Search for your leader by name or location, click on their profile, and select 'Rate'. You'll be asked to provide a score (1-5) and can upload photo evidence of projects or work done in your area."
    },
    {
      id: 6,
      category: 'users',
      question: "Can leaders respond to ratings?",
      answer: "Absolutely! Leaders can create profiles, respond to citizen questions, provide additional evidence for projects, and share updates. This creates a constructive dialogue between leaders and the people they serve."
    },
    {
      id: 7,
      category: 'users',
      question: "How do I become a contributor?",
      answer: "Visit our Contributors section and click 'Volunteer for Kenya'. We're looking for developers, designers, writers, translators, and community organizers. No experience required—just passion for a better Kenya!"
    },
    
    // Trust & Safety
    {
      id: 8,
      category: 'safety',
      question: "How do you verify that ratings are real?",
      answer: "We use a community verification system. Ratings can include photo evidence, and other citizens in the same area can confirm projects. We also track patterns to prevent manipulation. Leaders can respond to ratings and provide their own evidence."
    },
    {
      id: 9,
      category: 'safety',
      question: "Is my data safe?",
      answer: "Yes. We take privacy seriously. Your personal information is encrypted, and you control what you share publicly. We never sell data to politicians or third parties. Our code is open source so anyone can verify our security practices."
    },
    {
      id: 10,
      category: 'safety',
      question: "How do I report a fake rating?",
      answer: "Each rating has a 'Report' button. Our community moderators review reported content within 24 hours. Users who repeatedly post fake ratings may be banned from the platform."
    },
    {
      id: 11,
      category: 'safety',
      question: "Do you cover all 47 counties?",
      answer: "Yes! Tuwajibike is designed for every Kenyan, everywhere. We're actively recruiting volunteers in every county to help verify projects and translate content into local languages."
    },
    {
      id: 12,
      category: 'safety',
      question: "How can I donate to support Tuwajibike?",
      answer: "We accept donations via M-Pesa (PayBill: 123456, Account: TUWAJI) and through our website. All donations go directly to server costs, community outreach, and volunteer stipends. 100% transparent."
    }
  ];

  const categories = [
    { id: 'general', label: 'General Questions', icon: <FaQuestionCircle className="w-5 h-5" />, count: 3 },
    { id: 'users', label: 'For Users', icon: <FaUserFriends className="w-5 h-5" />, count: 4 },
    { id: 'safety', label: 'Trust & Safety', icon: <FaShieldAlt className="w-5 h-5" />, count: 5 }
  ];

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);
  const activeCategoryData = categories.find(c => c.id === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Very light pink/purple for active states (barely visible)
  const getActiveBackground = (categoryId: string) => {
    if (categoryId === 'general') return 'bg-green-50/30'; // Very light green
    if (categoryId === 'users') return 'bg-pink-50/30'; // Very light pink
    return 'bg-purple-50/30'; // Very light purple
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <FaQuestionCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked{' '}
          <span className="text-green-600 relative">
            Questions
            <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about Tuwajibike. Can't find what you're looking for? 
          Reach out to our team.
        </p>
      </div>

      {/* Main FAQ Area */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Sidebar / Mobile Menu */}
        <div className="lg:w-80 flex-shrink-0">
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full flex items-center justify-between bg-white 
                       border border-gray-200 rounded-xl p-4 mb-4
                       hover:border-gray-300 transition-all duration-300
                       shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 
                              flex items-center justify-center text-gray-600">
                  {activeCategoryData?.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Browse</p>
                  <p className="font-medium text-gray-800">{activeCategoryData?.label}</p>
                </div>
              </div>
              {isMobileMenuOpen ? (
                <HiX className="w-5 h-5 text-gray-400" />
              ) : (
                <HiMenu className="w-5 h-5 text-gray-400" />
              )}
            </button>
          )}

          {/* Sidebar Content */}
          <div className={`
            ${isMobile ? 'transition-all duration-300 overflow-hidden' : 'block'}
            ${isMobile && !isMobileMenuOpen ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'}
          `}>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden
                          lg:sticky lg:top-24 shadow-sm">
              
              {/* Sidebar Header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <h3 className="font-medium text-gray-700">Categories</h3>
              </div>
              
              {/* Category List */}
              <div className="p-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                      transition-all duration-200 text-sm
                      ${activeCategory === category.id 
                        ? `${getActiveBackground(category.id)} text-gray-900 font-medium` 
                        : 'text-gray-600 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className={activeCategory === category.id ? 'text-gray-700' : 'text-gray-400'}>
                        {category.icon}
                      </span>
                      <span>{category.label}</span>
                    </div>
                    <span className="text-xs text-gray-400">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Content Area */}
        <div className="flex-1">
          {/* Category Title */}
          <div className="mb-6 pb-2 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">
              {activeCategoryData?.label}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const globalIndex = faq.id - 1;
              const isOpen = openIndex === globalIndex;
              
              return (
                <div
                  key={faq.id}
                  className={`
                    bg-white rounded-xl border transition-all duration-200
                    ${isOpen ? 'border-gray-300 shadow-sm' : 'border-gray-200 hover:border-gray-300'}
                  `}
                >
                  <button
                    onClick={() => toggleFaq(globalIndex)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-gray-800 font-medium pr-8 text-sm md:text-base">
                      {faq.question}
                    </span>
                    <HiChevronDown 
                      className={`
                        w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300
                        ${isOpen ? 'rotate-180' : ''}
                      `}
                    />
                  </button>
                  
                  <div 
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Still Have Questions - Toned down gray gradient */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          We're here to help. Choose how you'd like to reach us.
        </p>
        
        {/* Contact Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">1</span>
            </div>
            <h4 className="text-white font-medium mb-1">Submit Request</h4>
            <p className="text-gray-400 text-xs">Fill in your details via the form</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">2</span>
            </div>
            <h4 className="text-white font-medium mb-1">We Review</h4>
            <p className="text-gray-400 text-xs">Our team assesses your inquiry</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">3</span>
            </div>
            <h4 className="text-white font-medium mb-1">Get Back to You</h4>
            <p className="text-gray-400 text-xs">Response within 24 hours</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-3 bg-white text-gray-800 font-medium rounded-full
                     hover:shadow-xl hover:bg-gray-100 transition-all duration-300
                     flex items-center justify-center gap-2"
          >
            Contact Support
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white/30 text-white 
                           font-medium rounded-full hover:bg-white/10 transition-all duration-300
                           flex items-center justify-center gap-2">
            Join Volunteer Call
          </button>
        </div>
        
        {/* Response time badge */}
        <p className="text-xs text-gray-400 mt-6 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
          Average response time: <span className="text-white">2-4 hours</span>
        </p>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default FAQs;