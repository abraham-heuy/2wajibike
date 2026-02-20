// Testimonials.tsx
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaTwitter, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight, HiOutlineSparkles } from 'react-icons/hi';
import { GiKenya } from 'react-icons/gi';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      role: "Citizen, Nairobi",
      location: "Kasarani Ward",
      image: "https://images.unsplash.com/photo-1494790108777-466fd103c8ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "I used to feel my vote didn't matter. Now I can see exactly what my MP has done—and hold them accountable. Tuwajibike gave me back my voice.",
      rating: 5,
      date: "March 2025",
      verified: true,
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "James Omondi",
      role: "MCA Candidate, Kisumu",
      location: "Kisumu Central",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "As a first-time candidate with limited resources, Tuwajibike gave me a platform to share my vision. I raised 40% of my campaign through their crowdfunding feature—KES 120,000 from over 300 small donations.",
      rating: 5,
      date: "February 2025",
      verified: true,
      social: {
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Hon. Mary Atieno",
      role: "Women Rep, Mombasa",
      location: "Mombasa County",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "Transparency isn't scary—it's liberating. My profile shows 12 completed projects, 847 citizen verifications, and a 4.8 rating. Citizens trust me more because they can see the proof.",
      rating: 5,
      date: "January 2025",
      verified: true,
      social: {
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Peter Mwangi",
      role: "Community Organizer, Kiambu",
      location: "Juja Ward",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "We used Tuwajibike to track 3 stalled road projects in our ward. When we showed the data at a baraza with 200+ residents, the contractor actually came back to finish the work within 2 weeks!",
      rating: 5,
      date: "March 2025",
      verified: true
    },
    {
      id: 5,
      name: "Fatima Hassan",
      role: "Youth Leader, Garissa",
      location: "Garissa Township",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "Finally, a tool that works for northern Kenya. I can rate leaders, upload photos of projects, and ask questions in Swahili. Our community has already verified 14 water projects using the platform.",
      rating: 5,
      date: "February 2025",
      verified: true,
      social: {
        twitter: "#"
      }
    }
  ];

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="space-y-16">
      {/* Header with animated badge */}
      <div className="text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
        
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 
                      px-4 py-2 rounded-full mb-6 animate-bounce-slow">
          <HiOutlineSparkles className="w-5 h-5" />
          <span className="text-sm font-medium">Trusted by citizens across Kenya</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Real People,{' '}
          <span className="text-green-600 relative">
            Real Stories
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-green-100 -z-10 rounded-full"></span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Hear from the citizens, leaders, and candidates already using Tuwajibike 
          to transform governance in Kenya.
        </p>
      </div>

      {/* Main Testimonial Display */}
      <div className="relative max-w-6xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-green-300/20 rounded-full blur-3xl"></div>
        
        {/* Main Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden
                      border border-gray-100 transform transition-all duration-500
                      hover:shadow-green-200/50">
          
          {/* Gradient top bar */}
          <div className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              
              {/* Left column - Profile */}
              <div className="lg:w-1/3 relative">
                {/* Profile Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 
                                rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-200">
                    
                    {/* Image with badge */}
                    <div className="relative mb-4">
                      <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden 
                                    border-4 border-green-100 shadow-xl
                                    transform group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {currentTestimonial.verified && (
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white 
                                      rounded-full p-1.5 border-4 border-white">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Name & Role */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800">{currentTestimonial.name}</h3>
                      <p className="text-green-600 font-medium text-sm">{currentTestimonial.role}</p>
                      
                      {/* Location with icon */}
                      <div className="flex items-center justify-center gap-1 mt-2 text-gray-500 text-xs">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        <span>{currentTestimonial.location}</span>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center gap-1 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`w-5 h-5 ${
                              i < currentTestimonial.rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-200'
                            }`} 
                          />
                        ))}
                      </div>
                      
                      {/* Date */}
                      <p className="text-xs text-gray-400 mt-2">{currentTestimonial.date}</p>
                      
                      {/* Social links */}
                      {(currentTestimonial.social?.twitter || currentTestimonial.social?.linkedin) && (
                        <div className="flex justify-center gap-2 mt-4">
                          {currentTestimonial.social?.twitter && (
                            <a href={currentTestimonial.social.twitter} 
                               className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-600 
                                        flex items-center justify-center text-gray-600 hover:text-white
                                        transition-all duration-300">
                              <FaTwitter className="w-4 h-4" />
                            </a>
                          )}
                          {currentTestimonial.social?.linkedin && (
                            <a href={currentTestimonial.social.linkedin} 
                               className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-600 
                                        flex items-center justify-center text-gray-600 hover:text-white
                                        transition-all duration-300">
                              <FaLinkedin className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Testimonial content */}
              <div className="lg:w-2/3 relative">
                {/* Large quote icon */}
                <FaQuoteLeft className="absolute -top-4 -left-4 w-16 h-16 text-green-100 opacity-50" />
                
                {/* Testimonial text */}
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                    "{currentTestimonial.content}"
                  </p>
                  
                  {/* Impact metrics based on testimonial */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {currentTestimonial.id === 1 && (
                      <>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">12</p>
                          <p className="text-xs text-gray-600">Projects Tracked</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">4.8</p>
                          <p className="text-xs text-gray-600">MP Rating</p>
                        </div>
                      </>
                    )}
                    {currentTestimonial.id === 2 && (
                      <>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">KES 120K</p>
                          <p className="text-xs text-gray-600">Funds Raised</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">312</p>
                          <p className="text-xs text-gray-600">Supporters</p>
                        </div>
                      </>
                    )}
                    {currentTestimonial.id === 3 && (
                      <>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">12</p>
                          <p className="text-xs text-gray-600">Projects Delivered</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">847</p>
                          <p className="text-xs text-gray-600">Verifications</p>
                        </div>
                      </>
                    )}
                    {currentTestimonial.id === 4 && (
                      <>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">3</p>
                          <p className="text-xs text-gray-600">Roads Completed</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">200+</p>
                          <p className="text-xs text-gray-600">Community Voices</p>
                        </div>
                      </>
                    )}
                    {currentTestimonial.id === 5 && (
                      <>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">14</p>
                          <p className="text-xs text-gray-600">Water Projects</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <p className="text-2xl font-bold text-green-600">Swahili</p>
                          <p className="text-xs text-gray-600">Local Language</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots with progress */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className="group relative"
              >
                <div className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeIndex 
                    ? 'w-10 bg-green-600' 
                    : 'w-2 bg-gray-300 group-hover:bg-gray-400'
                }`} />
                {index === activeIndex && (
                  <span className="absolute -top-1 left-0 w-10 h-4 bg-green-200/30 
                                 rounded-full blur-sm animate-pulse"></span>
                )}
              </button>
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg 
                       flex items-center justify-center text-gray-600 hover:text-green-600
                       border border-gray-200 hover:border-green-300 
                       transition-all duration-300 hover:shadow-xl
                       hover:-translate-x-1"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg 
                       flex items-center justify-center text-gray-600 hover:text-green-600
                       border border-gray-200 hover:border-green-300 
                       transition-all duration-300 hover:shadow-xl
                       hover:translate-x-1"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs text-gray-400 hover:text-green-600 transition-colors"
          >
            {isAutoPlaying ? '⏸️ Pause auto-rotate' : '▶️ Resume auto-rotate'}
          </button>
        </div>
      </div>

      {/* Stats Grid with Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 
                      text-center border border-gray-200 hover:border-green-400
                      hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-100 group-hover:bg-green-600 
                        flex items-center justify-center mx-auto mb-3 transition-colors">
            <FaStar className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <p className="text-2xl font-bold text-gray-800">1,247</p>
          <p className="text-xs text-gray-500">Citizen Ratings</p>
        </div>
        
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 
                      text-center border border-gray-200 hover:border-green-400
                      hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-100 group-hover:bg-green-600 
                        flex items-center justify-center mx-auto mb-3 transition-colors">
            <GiKenya className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
          </div>
          <p className="text-2xl font-bold text-gray-800">47</p>
          <p className="text-xs text-gray-500">Counties</p>
        </div>
        
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 
                      text-center border border-gray-200 hover:border-green-400
                      hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-100 group-hover:bg-green-600 
                        flex items-center justify-center mx-auto mb-3 transition-colors">
            <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-800">847</p>
          <p className="text-xs text-gray-500">Verified Users</p>
        </div>
        
        <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 
                      text-center border border-gray-200 hover:border-green-400
                      hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-100 group-hover:bg-green-600 
                        flex items-center justify-center mx-auto mb-3 transition-colors">
            <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-800">4.8/5</p>
          <p className="text-xs text-gray-500">Avg. Rating</p>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full">
          <GiKenya className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-600">
            Trusted by citizens in all <span className="font-bold text-green-600">47 counties</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;