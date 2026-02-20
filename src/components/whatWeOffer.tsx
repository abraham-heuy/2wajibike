// WhatWeOffer.tsx
import React, { useState, useEffect } from 'react';
import { HiOutlineArrowRight, HiX } from 'react-icons/hi';
import { FaUsers, FaUserTie, FaUserGraduate, FaChartLine, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const OfferModal = ({ isOpen, onClose, title, description, features, icon, color }: OfferModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred transparent background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 
                   transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 
                     transition-colors"
        >
          <HiX className="w-6 h-6" />
        </button>
        
        {/* Header with icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Features list */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full ${color} bg-opacity-20 flex items-center justify-center mt-0.5`}>
                <div className={`w-2 h-2 rounded-full ${color.replace('bg-', 'bg-')}`}></div>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Action button */}
        <button className="w-full py-3 bg-gray-800 hover:bg-green-700 text-white 
                         rounded-xl font-medium transition-all duration-300
                         flex items-center justify-center gap-2 group">
          Learn More
          <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  const [positions, setPositions] = useState<Array<{top: string, left: string, rotate: string}>>([]);
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  // Offer data
  const offers = [
    {
      title: "Citizen Ratings",
      icon: <FaUsers className="w-7 h-7 text-white" />,
      color: "bg-blue-500",
      description: "Empower citizens to rate leaders based on real evidence—projects delivered, promises kept, and community impact.",
      features: [
        "Rate leaders on a 1-5 scale with evidence",
        "Upload photos of completed projects",
        "Track promise fulfillment over time",
        "See aggregate scores for your area"
      ],
      initialTop: "5%",
      initialLeft: "5%",
      initialRotate: "-6deg"
    },
    {
      title: "Leader Profiles",
      icon: <FaUserTie className="w-7 h-7 text-white" />,
      color: "bg-green-600",
      description: "Current leaders can showcase their track record with verified proof and respond directly to citizens.",
      features: [
        "Create detailed profile with credentials",
        "Upload project photos and documentation",
        "Respond to citizen questions publicly",
        "Track your ratings over time"
      ],
      initialTop: "15%",
      initialLeft: "45%",
      initialRotate: "4deg"
    },
    {
      title: "Aspirant Campaigns",
      icon: <FaUserGraduate className="w-7 h-7 text-white" />,
      color: "bg-purple-500",
      description: "Free campaign profiles for aspiring leaders—share your vision without needing wealthy sponsors.",
      features: [
        "Free profile with vision and manifesto",
        "Crowdfunding integration (M-Pesa)",
        "Connect directly with voters",
        "Build recognition before election day"
      ],
      initialTop: "40%",
      initialLeft: "15%",
      initialRotate: "-8deg"
    },
    {
      title: "Performance Analytics",
      icon: <FaChartLine className="w-7 h-7 text-white" />,
      color: "bg-orange-500",
      description: "Real-time analytics on leader performance, citizen engagement, and project tracking.",
      features: [
        "See trending scores across counties",
        "Track engagement metrics",
        "Compare leader performance",
        "Identify areas needing attention"
      ],
      initialTop: "55%",
      initialLeft: "60%",
      initialRotate: "10deg"
    },
    {
      title: "Transparency Tools",
      icon: <FaShieldAlt className="w-7 h-7 text-white" />,
      color: "bg-red-500",
      description: "Tools that make governance transparent—from project tracking to promise verification.",
      features: [
        "Project verification with photos",
        "Promise tracking dashboard",
        "Public feedback loops",
        "Document repository"
      ],
      initialTop: "70%",
      initialLeft: "25%",
      initialRotate: "-12deg"
    },
    {
      title: "Community Hub",
      icon: <FaHandsHelping className="w-7 h-7 text-white" />,
      color: "bg-teal-500",
      description: "A space for citizens to discuss local issues, share updates, and organize for change.",
      features: [
        "Discussion forums by location",
        "Community announcements",
        "Issue reporting",
        "Local event coordination"
      ],
      initialTop: "80%",
      initialLeft: "70%",
      initialRotate: "5deg"
    }
  ];

  // Initialize random positions
  useEffect(() => {
    const newPositions = offers.map(() => ({
      top: `${Math.random() * 60 + 10}%`,
      left: `${Math.random() * 70 + 5}%`,
      rotate: `${Math.random() * 20 - 10}deg`
    }));
    setPositions(newPositions);

    // Shift positions every 2 seconds
    const interval = setInterval(() => {
      setPositions(prev => prev.map(() => ({
        top: `${Math.random() * 60 + 10}%`,
        left: `${Math.random() * 70 + 5}%`,
        rotate: `${Math.random() * 20 - 10}deg`
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white relative min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 relative z-10">
          <p className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Tools for{' '}
            <span className="text-green-600 relative">
              Change
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build transparent governance; from citizen ratings to campaign tools.
          </p>
        </div>

        {/* Scattered Cards Container - Desktop Only */}
        <div className="hidden md:block relative h-[600px] lg:h-[700px]">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="absolute cursor-pointer transition-all duration-1000 ease-in-out"
              style={{
                top: positions[index]?.top || offer.initialTop,
                left: positions[index]?.left || offer.initialLeft,
                transform: `rotate(${positions[index]?.rotate || offer.initialRotate})`,
              }}
              onClick={() => setSelectedOffer(index)}
            >
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                            border border-gray-200 hover:border-green-300 
                            p-5 w-48 lg:w-56
                            transition-all duration-300 hover:scale-110 hover:-translate-y-2
                            backdrop-blur-sm bg-white/90">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${offer.color} bg-opacity-10 
                              flex items-center justify-center mb-3
                              group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`${offer.color} rounded-lg p-2`}>
                    {offer.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {offer.title}
                </h3>
                
                {/* Brief description */}
                <p className="text-xs text-gray-500 line-clamp-2">
                  {offer.description.substring(0, 60)}...
                </p>
                
                {/* Click indicator */}
                <div className="mt-3 text-xs text-green-600 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to learn more
                  <HiOutlineArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Grid Layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-4
                        active:scale-95 transition-transform duration-200"
              onClick={() => setSelectedOffer(index)}
            >
              <div className={`w-10 h-10 rounded-lg ${offer.color} bg-opacity-10 
                            flex items-center justify-center mb-3`}>
                <div className={`${offer.color} rounded-lg p-1.5`}>
                  {React.cloneElement(offer.icon, { className: "w-5 h-5 text-white" })}
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">{offer.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2">
                {offer.description.substring(0, 50)}...
              </p>
            </div>
          ))}
        </div>

        {/* Modals */}
        {offers.map((offer, index) => (
          <OfferModal
            key={index}
            isOpen={selectedOffer === index}
            onClose={() => setSelectedOffer(null)}
            title={offer.title}
            description={offer.description}
            features={offer.features}
            icon={React.cloneElement(offer.icon, { className: "w-7 h-7 text-white" })}
            color={offer.color}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;