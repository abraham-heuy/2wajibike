// HeroSection.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import logo from "../assets/logo.png"
import heroBg from "../assets/hero-bg.jpg"

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Parallax effect on title
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      
      // Change top bar style when scrolled
      if (scrolled > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isLogoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLogoModalOpen]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full Page Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-green-900/50"></div>
      </div>

      {/* Fixed Top Navigation - Always visible */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-3 md:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
          {/* Logo - Top Left - Clickable */}
          <button
            onClick={() => setIsLogoModalOpen(true)}
            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer
              ${isScrolled 
                ? 'border-green-500 shadow-md hover:border-green-400 hover:scale-105' 
                : 'border-white/30 shadow-lg hover:border-green-300 hover:scale-105'
              }`}
          >
            <img 
              src={logo}
              alt="Tuwajibike Logo"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Auth Buttons - Top Right - Now with Links */}
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            <Link 
              to="/signin"
              className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium 
                         transition-all duration-300 inline-block ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600 bg-gray-100/80 hover:bg-gray-200' 
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-green-500/20 hover:border-green-400 hover:text-green-100'
              }`}
            >
              Sign In
            </Link>
            <Link 
              to="/signup"
              className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium 
                         transition-all duration-300 inline-block ${
                isScrolled 
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-md' 
                  : 'bg-green-600/80 backdrop-blur-sm text-white border border-green-500/50 hover:bg-green-500 hover:border-green-300 shadow-lg hover:shadow-green-500/20'
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Modal */}
      {isLogoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsLogoModalOpen(false)}
        >
          {/* Blurred transparent background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl 
                       max-w-sm sm:max-w-md md:max-w-lg w-full p-8 sm:p-10
                       transform transition-all duration-300 scale-100
                       border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - Inside modal */}
            <button 
              onClick={() => setIsLogoModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md
                         rounded-full flex items-center justify-center
                         hover:bg-white/30 transition-all duration-300
                         border border-white/30 group z-10"
            >
              <HiX className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Logo Container */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 
                            rounded-full overflow-hidden border-4 border-green-400/50
                            shadow-2xl mb-4">
                <img 
                  src={logo}
                  alt="Tuwajibike Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Tuwajibike
              </h3>
              
              <p className="text-sm sm:text-base text-white/80 text-center max-w-xs">
                Citizen-powered accountability platform for a transparent Kenya
              </p>

              {/* Modal Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 w-full">
                <div className="text-center">
                  <p className="text-lg sm:text-xl font-bold text-white">100+</p>
                  <p className="text-xs text-white/60">Citizens</p>
                </div>
                <div className="text-center">
                  <p className="text-lg sm:text-xl font-bold text-white">47</p>
                  <p className="text-xs text-white/60">Counties</p>
                </div>
                <div className="text-center">
                  <p className="text-lg sm:text-xl font-bold text-white">20+</p>
                  <p className="text-xs text-white/60">Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Centered Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          {/* Main Title with gradient */}
          <h1 
            ref={scrollRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 
                       bg-gradient-to-r from-white via-gray-100 to-green-200 
                       bg-clip-text text-transparent drop-shadow-2xl"
          >
            Tuwajibike
          </h1>
          
          {/* Detailed Description */}
          <div className="space-y-3 sm:space-y-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 
                          drop-shadow-lg font-light leading-relaxed">
              A citizen-powered platform that brings transparency to Kenyan leadership. 
              Rate your leaders based on real evidence, projects delivered, promises kept, 
              and community impact.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-200 
                          drop-shadow-md font-light leading-relaxed max-w-sm sm:max-w-md md:max-w-xl mx-auto">
              For aspirants, we provide a free space to share your vision, qualifications, 
              and connect directly with voters. No deep pockets required, just your ideas 
              and commitment to serve.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-green-200/90 
                          font-light italic max-w-xs sm:max-w-sm mx-auto">
              Together, we move from empty promises to accountable governance—one rating, 
              one verified project, one informed vote at a time.
            </p>
          </div>
          
          {/* Tagline */}
          <div className="mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm text-green-200/80 max-w-md 
                          border border-green-500/30 py-2 px-4 sm:px-6 
                          backdrop-blur-sm bg-white/5 rounded-full">
              • Wananchi • Leaders • Accountability •
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={scrollToNext}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 
                     cursor-pointer group animate-bounce z-20"
        >
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 group-hover:text-green-300 
                           transition-colors uppercase tracking-widest">
              scroll
            </span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 md:w-7 md:h-12 rounded-full border-2 
                          border-gray-300/50 group-hover:border-green-400 
                          flex justify-center transition-colors">
              <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 md:w-1.5 md:h-3 bg-green-400/80 
                            rounded-full mt-2 animate-[bounce_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;