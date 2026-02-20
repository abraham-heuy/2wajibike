// ContributorsSection.tsx
import { useState, useEffect } from 'react';
import { HiOutlineArrowRight, HiHeart, HiX } from 'react-icons/hi';
import { FaGithub, FaTwitter, FaLinkedin, FaHandsHelping, FaCode, FaRegEnvelope } from 'react-icons/fa';
import { GiKenya } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const ContributorsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const contributorRoles = [
    {
      icon: <FaCode className="w-5 h-5" />,
      title: "Developers",
      skills: ["React/TypeScript", "Node.js", "Python", "Mobile Dev"],
      description: "Build and improve the platform"
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      title: "Designers",
      skills: ["UI/UX", "Graphic Design", "Branding", "Prototyping"],
      description: "Create beautiful, intuitive experiences"
    },
    {
      icon: <FaRegEnvelope className="w-5 h-5" />,
      title: "Content Writers",
      skills: ["Blog Posts", "Documentation", "Social Media", "Swahili Translation"],
      description: "Tell our story and reach more Kenyans"
    },
    {
      icon: <FaHandsHelping className="w-5 h-5" />,
      title: "Community Organizers",
      skills: ["Outreach", "Event Planning", "Partnerships", "Training"],
      description: "Spread the word and build local presence"
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      title: "Social Media",
      skills: ["Content Creation", "Community Management", "Campaigns"],
      description: "Amplify our message and engage citizens"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      title: "Researchers",
      skills: ["Data Analysis", "Policy Research", "Impact Measurement"],
      description: "Help us understand what works"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Join Our Community",
      description: "Sign up as a contributor and join our Slack/Discord. Introduce yourself and share your skills."
    },
    {
      number: "02",
      title: "Choose Your Role",
      description: "Pick from development, design, writing, organizing, research, or social media. No experience? We'll help you learn!"
    },
    {
      number: "03",
      title: "Start Contributing",
      description: "Pick up tasks from our roadmap, collaborate with others, and start making an impact. Even 1 hour a week helps!"
    },
    {
      number: "04",
      title: "Grow With Us",
      description: "As we scale, contributors can take on leadership roles, join the core team, or help shape our future direction."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <div className="flex items-center gap-3 text-green-600 font-semibold mb-4">
              <GiKenya className="w-6 h-6" />
              <p className="text-sm uppercase tracking-wider">All Hands on Deck</p>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              We're{' '}
              <span className="text-green-600 relative">
                Volunteers
                <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
              </span>
            </h2>
            
            {/* Vision Description */}
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-base sm:text-lg leading-relaxed">
                Tuwajibike isn't funded by politicians or corporations. It's built by 
                <span className="font-semibold text-green-700"> ordinary Kenyans</span> who believe 
                in a better future—developers coding at night after work, designers sketching 
                on matatus, writers crafting messages in their free time.
              </p>
              
              <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                <p className="text-base sm:text-lg leading-relaxed text-amber-800">
                  <span className="font-bold">💚 This is a labor of love — for now.</span> We're building at 
                  the earliest stages, where passion outweighs paychecks and every line of code is written 
                  because we believe in the mission. As we grow, we'll pursue investment to scale our impact, 
                  build a sustainable team, and take Tuwajibike from volunteer-powered movement to 
                  nationally-scaled platform. Join us now, and help shape the foundation of something big.
                </p>
              </div>
              
              <p className="text-base sm:text-lg leading-relaxed">
                We need more hands on deck—developers, designers, researchers, writers, 
                translators, community organizers. Whether you can commit an hour a week 
                or every evening, your contribution moves Kenya forward.
              </p>
            </div>
            
            {/* Volunteer Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <FaHandsHelping className="w-6 h-6 text-green-600 mb-2" />
                <p className="font-semibold text-gray-800 mb-1">Step Up</p>
                <p className="text-xs text-gray-600">Answer the call to serve</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <HiHeart className="w-6 h-6 text-green-600 mb-2" />
                <p className="font-semibold text-gray-800 mb-1">Contribute</p>
                <p className="text-xs text-gray-600">Give your skills & time</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <GiKenya className="w-6 h-6 text-green-600 mb-2" />
                <p className="font-semibold text-gray-800 mb-1">Build Kenya</p>
                <p className="text-xs text-gray-600">Shape our nation's future</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contributor/onboarding"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 
                         bg-green-700 hover:bg-green-800 text-white 
                         font-medium rounded-full transition-all duration-300
                         shadow-md hover:shadow-lg flex-1 sm:flex-none"
              >
                <FaHandsHelping className="w-5 h-5" />
                Volunteer for Kenya
                <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 
                         border-2 border-gray-300 hover:border-green-600 
                         text-gray-700 hover:text-green-700 font-medium rounded-full 
                         transition-all duration-300 flex-1 sm:flex-none"
              >
                See How You Can Help
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-700 
                                          border-2 border-white flex items-center justify-center
                                          text-white text-xs font-bold shadow-md">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-white 
                                flex items-center justify-center text-amber-700 text-xs font-bold">
                    +23
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">28 volunteers</span> already building—all unpaid, all passionate
                </p>
              </div>
              
              {/* Skills needed */}
              <div className="mt-4">
                <p className="text-xs font-medium text-gray-500 mb-2">SKILLS KENYA NEEDS RIGHT NOW:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">React/TypeScript</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">UI/UX Design</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Content Writing</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Community Organizing</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Data Analysis</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Swahili Translation</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">Mobile Dev</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-medium">
                    + your skills here
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Developer Focused Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Developer coding for Kenya"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/40 via-black/20 to-red-900/30"></div>
              
              {/* Developer-focused overlay elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Code elements */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-green-400 
                              text-xs font-mono px-3 py-2 rounded-lg border border-green-500/30
                              animate-pulse flex items-center gap-2">
                  <FaCode className="w-3 h-3" />
                  {'<build for Kenya />'}
                </div>
                
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-amber-400 
                              text-xs font-mono px-3 py-2 rounded-lg border border-amber-500/30
                              animate-pulse delay-100 flex items-center gap-2">
                  <FaGithub className="w-3 h-3" />
                  {'github: volunteer.dev'}
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                              w-20 h-20 bg-white/10 backdrop-blur-md rounded-full 
                              flex items-center justify-center border-2 border-white/30">
                  <GiKenya className="w-10 h-10 text-green-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 
                          border border-gray-200 max-w-[200px] backdrop-blur-sm bg-white/90">
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                <FaCode className="w-3 h-3 text-green-600" /> 
                Commits this month
              </p>
              <p className="text-2xl font-bold text-gray-800">347+ <span className="text-sm font-normal text-green-600">by volunteers</span></p>
              <div className="flex gap-1 mt-2">
                <FaGithub className="w-4 h-4 text-gray-600" />
                <FaTwitter className="w-4 h-4 text-gray-600" />
                <FaLinkedin className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-green-600 rounded-2xl shadow-xl p-4 
                          max-w-[160px] text-white">
              <p className="text-xs opacity-90 mb-1 flex items-center gap-1">
                <FaCode className="w-3 h-3" />
                Open Issues
              </p>
              <p className="text-2xl font-bold">23</p>
              <p className="text-xs opacity-90 mt-1">ready for contributors</p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                          w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-0 w-56 h-56 bg-red-200/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Contributor Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Blurred transparent background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-3xl shadow-2xl 
                       max-w-4xl w-full max-h-[90vh] overflow-y-auto
                       transform transition-all duration-300 scale-100
                       border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200
                         rounded-full flex items-center justify-center
                         transition-all duration-300 z-10 group"
            >
              <HiX className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-t-3xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Become a Contributor</h3>
              <p className="text-green-50">
                Join the movement to build a transparent Kenya. Every skill counts, every hour matters.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* What We Need Section */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaHandsHelping className="w-5 h-5 text-green-600" />
                  What We Need
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {contributorRoles.map((role, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                          {role.icon}
                        </div>
                        <h5 className="font-semibold text-gray-800">{role.title}</h5>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{role.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {role.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full border border-gray-200 text-gray-600">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps Section */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <HiHeart className="w-5 h-5 text-green-600" />
                  How to Get Involved
                </h4>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 
                                    flex items-center justify-center font-bold text-green-700">
                        {step.number}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">{step.title}</h5>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center">
                <p className="text-gray-700 mb-4">
                  Ready to make a difference? Join our community of volunteers today!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/contributor/onboarding"
                    onClick={() => setIsModalOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 
                             bg-green-600 hover:bg-green-700 text-white font-medium
                             rounded-full transition-all duration-300 shadow-md"
                  >
                    <FaHandsHelping className="w-4 h-4" />
                    Sign Up as Volunteer
                  </Link>
                  <a
                    href="https://github.com/abraham-heuy/tuwajibike"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 
                             border-2 border-gray-300 hover:border-green-600
                             text-gray-700 hover:text-green-700 font-medium
                             rounded-full transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContributorsSection;