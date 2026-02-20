// AboutSection.tsx
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
const AboutSection = () => {
  // Array of working Unsplash image IDs for reference
  const navigate = useNavigate();
  const images = {
    main: "https://images.unsplash.com/photo-1573164713988-2485fc6d6f3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    middle: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    bottom: "https://images.unsplash.com/photo-1540917538952-4b2a5f8a9b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    mini: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Section Label */}
            <p className="text-sm uppercase tracking-wider text-green-600 font-semibold mb-3">
              Who We Are
            </p>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Building a{' '}
              <span className="text-green-600 relative">
                Transparent Kenya
                <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
              </span>{' '}
              Together
            </h2>
            
            {/* Description */}
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-base sm:text-lg leading-relaxed">
                Tuwajibike is a citizen-led movement powered by technology. We believe that 
                accountability shouldn't wait for election day, it should happen every day.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Founded by young Kenyans tired of empty promises, we've built a platform 
                where citizens can rate leaders based on real evidence, aspirants can 
                share their vision without needing deep pockets, and current leaders 
                can prove their work through transparency.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Our mission is simple: transform Kenyan governance from a periodic 
                judgment at the ballot box into a continuous dialogue between leaders 
                and the people they serve.
              </p>
            </div>
            
            {/* About Us Button */}
            <button 
              onClick={()=> navigate('/about')}
             className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-800 
                             hover:bg-green-700 text-white font-medium rounded-full
                             transition-all duration-300 shadow-md hover:shadow-lg">
              Learn More About Us
              <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-gray-800">5K+</p>
                <p className="text-sm text-gray-500">Active Citizens</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">47</p>
                <p className="text-sm text-gray-500">Counties</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">100+</p>
                <p className="text-sm text-gray-500">Leaders Rated</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Three Overlapping Images */}
          <div className="order-1 lg:order-2 relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
            {/* Background decorative elements - more subtle for gray background */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-green-100/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-60 h-60 bg-green-100/20 rounded-full blur-3xl"></div>
            
            {/* Image 1 - Main/Top (Tilted right) */}
            <div className="absolute top-0 right-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] 
                          transform rotate-6 hover:rotate-12 transition-all duration-700 
                          shadow-2xl rounded-2xl overflow-hidden z-30
                          border-4 border-white">
              <img 
                src={images.main}
                alt="Community meeting in Kenya"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Image 2 - Middle (Tilted left, overlaps main) */}
            <div className="absolute top-16 left-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] 
                          transform -rotate-3 hover:rotate-0 transition-all duration-700 
                          shadow-xl rounded-2xl overflow-hidden z-20
                          border-4 border-white">
              <img 
                src={images.middle}
                alt="Youth discussion group"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            
            {/* Image 3 - Bottom (Tilted right, extends below) */}
            <div className="absolute bottom-0 right-10 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] 
                          transform rotate-12 hover:rotate-6 transition-all duration-700 
                          shadow-lg rounded-2xl overflow-hidden z-10
                          border-4 border-white">
              <img 
                src={images.bottom}
                alt="Voting process in Kenya"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            
            {/* Small floating image - Extra detail (top left corner) */}
            <div className="absolute -top-4 left-10 w-16 h-16 sm:w-20 sm:h-20 
                          transform -rotate-12 hover:rotate-0 transition-all duration-500 
                          shadow-md rounded-lg overflow-hidden z-40
                          border-2 border-white">
              <img 
                src={images.mini}
                alt="Community detail"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative dots pattern */}
            <div className="absolute top-1/3 right-1/4 w-32 h-32 border-2 border-green-200/30 rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border-2 border-green-200/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;