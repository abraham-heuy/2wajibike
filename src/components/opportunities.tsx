// OpportunitiesSection.tsx
import React, { useState } from 'react';
import { HiOutlineArrowRight, HiChevronDown } from 'react-icons/hi';
import { FaUsers, FaUserTie, FaUserGraduate, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OpportunitiesSection = () => {
  const [selectedUser, setSelectedUser] = useState<'citizen' | 'leader' | 'aspirant'>('citizen');

  const benefits = {
    citizen: {
      title: "For Citizens",
      icon: <FaUsers className="w-8 h-8 text-green-600" />,
      color: "green",
      points: [
        {
          title: "Rate Leaders with Evidence",
          description: "Score your leaders on a 1-5 scale based on real projects, not empty promises"
        },
        {
          title: "Upload Proof",
          description: "Share photos of completed projects—roads, schools, water systems in your area"
        },
        {
          title: "Ask Questions Publicly",
          description: "Directly question leaders and track if they respond"
        },
        {
          title: "Track Promises",
          description: "See which campaign promises were kept and which were forgotten"
        },
        {
          title: "Community Verification",
          description: "Confirm projects with other citizens to build collective proof"
        },
        {
          title: "Informed Voting",
          description: "Make decisions based on real data, not campaign billboards"
        }
      ]
    },
    leader: {
      title: "For Current Leaders",
      icon: <FaUserTie className="w-8 h-8 text-blue-600" />,
      color: "blue",
      points: [
        {
          title: "Showcase Your Track Record",
          description: "Upload projects, budgets, and completion photos—let your work speak"
        },
        {
          title: "Respond to Citizens",
          description: "Build trust by answering questions directly and publicly"
        },
        {
          title: "Monitor Your Ratings",
          description: "See real-time feedback on project delivery, accessibility, and promises kept"
        },
        {
          title: "Free Profile",
          description: "Professional web presence at no cost—no tech skills needed"
        },
        {
          title: "QR Code Posters",
          description: "Generate QR codes for your posters linking directly to your profile"
        },
        {
          title: "Track Engagement",
          description: "Know which areas are scanning your QR codes and engaging most"
        }
      ]
    },
    aspirant: {
      title: "For Aspiring Candidates",
      icon: <FaUserGraduate className="w-8 h-8 text-purple-600" />,
      color: "purple",
      points: [
        {
          title: "Free Campaign Profile",
          description: "Create a professional profile with your vision, manifesto, and qualifications"
        },
        {
          title: "Crowdfunding Integration",
          description: "Raise funds through M-Pesa—no wealthy sponsors required"
        },
        {
          title: "Connect with Voters",
          description: "Share your ideas directly and answer questions from citizens"
        },
        {
          title: "Build Recognition",
          description: "Get known in your area before election day through QR posters"
        },
        {
          title: "Show Your Vision",
          description: "Share your top 5 promises and implementation plans"
        },
        {
          title: "Track Support",
          description: "See how many citizens are viewing and engaging with your profile"
        }
      ]
    }
  };

  const currentBenefits = benefits[selectedUser];

  // Helper function to get role text for button
  const getRoleText = () => {
    switch(selectedUser) {
      case 'citizen': return 'Citizen';
      case 'leader': return 'Leader';
      case 'aspirant': return 'Candidate';
      default: return 'User';
    }
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-3">
            Opportunities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What You{' '}
            <span className="text-green-600 relative">
              Gain
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a citizen, a current leader, or an aspiring candidate—here's what Tuwajibike offers you.
          </p>
        </div>

        {/* Dropdown Selector - Mobile First Design */}
        <div className="relative max-w-xs mx-auto sm:max-w-sm md:max-w-md mb-12 md:mb-16">
          <div className="relative">
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value as 'citizen' | 'leader' | 'aspirant')}
              className="w-full appearance-none bg-white border-2 border-gray-200 
                       rounded-full px-6 py-4 pr-12 text-base sm:text-lg
                       focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200
                       transition-all duration-300 cursor-pointer
                       text-gray-700 font-medium shadow-md hover:shadow-lg"
            >
              <option value="citizen">Citizen</option>
              <option value="leader">Currently a Leader</option>
              <option value="aspirant">Aspiring Candidate</option>
            </select>
            
            {/* Custom dropdown arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <HiChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 
                        bg-gradient-to-r from-transparent via-green-400 to-transparent 
                        rounded-full opacity-50"></div>
        </div>

        {/* Benefits Display */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 
                      border border-gray-100 transition-all duration-500
                      hover:shadow-2xl">
          
          {/* User Type Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className={`w-16 h-16 rounded-2xl bg-${currentBenefits.color}-50 
                          flex items-center justify-center`}>
              {currentBenefits.icon}
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {currentBenefits.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {currentBenefits.points.length} key benefits
              </p>
            </div>
          </div>

          {/* Benefits Grid - Mobile First */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {currentBenefits.points.map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-start gap-3 p-4 rounded-xl
                         hover:bg-gray-50 transition-all duration-300
                         border border-transparent hover:border-gray-200"
              >
                {/* Checkmark Icon */}
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${currentBenefits.color}-100 
                              flex items-center justify-center mt-0.5
                              group-hover:scale-110 transition-transform duration-300`}>
                  <FaCheckCircle className={`w-4 h-4 text-${currentBenefits.color}-600`} />
                </div>
                
                {/* Benefit Text */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - Now with Link and role parameter */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <Link 
              to={`/signup?role=${selectedUser}`}
              className="group inline-flex items-center gap-3 px-8 py-4 
                       bg-gray-800 hover:bg-green-700 text-white 
                       font-medium rounded-full transition-all duration-300
                       shadow-md hover:shadow-lg"
            >
              Get Started as a {getRoleText()}
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

export default OpportunitiesSection;