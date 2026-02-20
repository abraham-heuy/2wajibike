// OperationsSection.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaUserTie, FaUserGraduate, FaCheckCircle, FaStar, FaQuestionCircle, FaCamera, FaDonate, FaChartLine, FaBullhorn, FaHandsHelping } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

const OperationsSection = () => {
  const [activeUser, setActiveUser] = useState<'citizen' | 'leader' | 'aspirant'>('citizen');

  const userOperations = {
    citizen: {
      title: "Citizens",
      icon: <FaUsers className="w-6 h-6" />,
      color: "green",
      description: "Hold leaders accountable with real evidence and community verification.",
      actions: [
        { icon: <FaStar className="w-4 h-4" />, text: "Rate leaders (1-5) based on real performance" },
        { icon: <FaCamera className="w-4 h-4" />, text: "Upload photos of completed projects" },
        { icon: <FaCheckCircle className="w-4 h-4" />, text: "Verify projects in your area" },
        { icon: <FaQuestionCircle className="w-4 h-4" />, text: "Ask leaders questions publicly" },
        { icon: <FaChartLine className="w-4 h-4" />, text: "Track promise fulfillment over time" },
        { icon: <FaHandsHelping className="w-4 h-4" />, text: "Report issues in your community" }
      ],
      stats: [
        { label: "Active citizens", value: "5,200+" },
        { label: "Projects verified", value: "1,847" },
        { label: "Questions asked", value: "3,291" }
      ]
    },
    leader: {
      title: "Current Leaders",
      icon: <FaUserTie className="w-6 h-6" />,
      color: "blue",
      description: "Showcase your track record and build trust through transparency.",
      actions: [
        { icon: <FaCheckCircle className="w-4 h-4" />, text: "Upload completed projects with photos" },
        { icon: <FaStar className="w-4 h-4" />, text: "Monitor your real-time ratings" },
        { icon: <FaQuestionCircle className="w-4 h-4" />, text: "Respond to citizen questions" },
        { icon: <FaChartLine className="w-4 h-4" />, text: "Track engagement in your area" },
        { icon: <FaCamera className="w-4 h-4" />, text: "Share progress updates" },
        { icon: <FaBullhorn className="w-4 h-4" />, text: "Announce community meetings" }
      ],
      stats: [
        { label: "Active leaders", value: "124" },
        { label: "Projects shared", value: "892" },
        { label: "Responses given", value: "1,456" }
      ]
    },
    aspirant: {
      title: "Aspiring Candidates",
      icon: <FaUserGraduate className="w-6 h-6" />,
      color: "purple",
      description: "Launch your campaign for free and connect directly with voters.",
      actions: [
        { icon: <FaBullhorn className="w-4 h-4" />, text: "Create free campaign profile" },
        { icon: <FaDonate className="w-4 h-4" />, text: "Start crowdfunding (M-Pesa integration)" },
        { icon: <FaQuestionCircle className="w-4 h-4" />, text: "Answer voter questions" },
        { icon: <FaCheckCircle className="w-4 h-4" />, text: "Share your manifesto & vision" },
        { icon: <FaChartLine className="w-4 h-4" />, text: "Track profile views & support" },
        { icon: <FaCamera className="w-4 h-4" />, text: "Post campaign updates" }
      ],
      stats: [
        { label: "Active aspirants", value: "189" },
        { label: "Campaigns launched", value: "156" },
        { label: "Funds raised", value: "KES 847K" }
      ]
    }
  };

  const current = userOperations[activeUser];

  // Helper function to get role text for button
  const getRoleText = () => {
    switch(activeUser) {
      case 'citizen': return 'a Citizen';
      case 'leader': return 'a Leader';
      case 'aspirant': return 'an Aspirant';
      default: return 'a User';
    }
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Actions by{' '}
            <span className="text-green-600 relative">
              User Type
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Every user has a role to play in building transparent governance. 
            Select your profile to see what you can do.
          </p>
        </div>

        {/* User Type Selector - Mobile Chips / Desktop Tabs */}
        <div className="mb-12">
          {/* Mobile View - Chips (visible on small screens) */}
          <div className="flex sm:hidden flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveUser('citizen')}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium
                        transition-all duration-300 shadow-sm
                        ${activeUser === 'citizen' 
                          ? 'bg-green-600 text-white shadow-md shadow-green-200' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <FaUsers className="w-4 h-4" />
              Citizens
            </button>
            <button
              onClick={() => setActiveUser('leader')}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium
                        transition-all duration-300 shadow-sm
                        ${activeUser === 'leader' 
                          ? 'bg-green-600 text-white shadow-md shadow-green-200' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <FaUserTie className="w-4 h-4" />
              Leaders
            </button>
            <button
              onClick={() => setActiveUser('aspirant')}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium
                        transition-all duration-300 shadow-sm
                        ${activeUser === 'aspirant' 
                          ? 'bg-green-600 text-white shadow-md shadow-green-200' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <FaUserGraduate className="w-4 h-4" />
              Aspirants
            </button>
          </div>

          {/* Desktop View - Tabs with underline (visible on larger screens) */}
          <div className="hidden sm:flex justify-center items-center gap-12 border-b border-gray-200 pb-4">
            <button
              onClick={() => setActiveUser('citizen')}
              className={`relative pb-2 text-base font-medium transition-colors duration-300
                        ${activeUser === 'citizen' 
                          ? 'text-green-600' 
                          : 'text-gray-500 hover:text-gray-800'}`}
            >
              <div className="flex items-center gap-2">
                <FaUsers className="w-5 h-5" />
                Citizens
              </div>
              {activeUser === 'citizen' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setActiveUser('leader')}
              className={`relative pb-2 text-base font-medium transition-colors duration-300
                        ${activeUser === 'leader' 
                          ? 'text-green-600' 
                          : 'text-gray-500 hover:text-gray-800'}`}
            >
              <div className="flex items-center gap-2">
                <FaUserTie className="w-5 h-5" />
                Current Leaders
              </div>
              {activeUser === 'leader' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setActiveUser('aspirant')}
              className={`relative pb-2 text-base font-medium transition-colors duration-300
                        ${activeUser === 'aspirant' 
                          ? 'text-green-600' 
                          : 'text-gray-500 hover:text-gray-800'}`}
            >
              <div className="flex items-center gap-2">
                <FaUserGraduate className="w-5 h-5" />
                Aspiring Candidates
              </div>
              {activeUser === 'aspirant' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
              )}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200">
          {/* User Header with Icon */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
            <div className={`w-14 h-14 rounded-2xl bg-${current.color}-100 flex items-center justify-center`}>
              <div className={`text-${current.color}-600`}>
                {React.cloneElement(current.icon, { className: "w-7 h-7" })}
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{current.title}</h3>
              <p className="text-sm text-gray-500">{current.description}</p>
            </div>
          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {current.actions.map((action, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100
                         hover:shadow-md hover:border-green-200 transition-all duration-300
                         group"
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-${current.color}-50 
                              flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <div className={`text-${current.color}-600`}>
                    {action.icon}
                  </div>
                </div>
                <span className="text-sm sm:text-base text-gray-700">{action.text}</span>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            {current.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Button - Now with Link and role parameter */}
          <div className="mt-8 text-center">
            <Link 
              to={`/signup?role=${activeUser}`}
              className="group inline-flex items-center gap-3 px-8 py-4 
                       bg-gray-800 hover:bg-green-700 text-white 
                       font-medium rounded-full transition-all duration-300
                       shadow-md hover:shadow-lg"
            >
              Get Started as {getRoleText()}
              <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Note - Updated to use Link component */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Already using Tuwajibike?{' '}
          <Link to="/signin" className="text-gray-800 hover:text-green-700 font-medium underline underline-offset-2 transition-colors">
            Sign in to your account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default OperationsSection;