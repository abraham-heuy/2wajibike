// CTASection.tsx
import { FaUsers, FaUserTie, FaUserGraduate } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join <span className="text-green-600">Tuwajibike</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a citizen, a current leader, or an aspiring
            candidate,there's a place for you here.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Column 1: Citizens */}
          <div
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 
                          border border-gray-200 hover:border-green-300 
                          flex flex-col p-6 sm:p-8"
          >
            {/* Icon Container - More subtle green */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-100 
                          flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors duration-300"
            >
              <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600 group-hover:text-green-600 transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Citizens
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-6 flex-1 leading-relaxed">
              Rate your leaders based on real evidence. Track projects, hold
              leaders accountable, and make informed voting decisions. Your
              voice shapes Kenya's future.
            </p>
            <Link to="/signup?role=citizen" className="w-full">
              <button
                className="w-full py-3 px-4 rounded-full bg-gray-800 
                   hover:bg-green-700 text-white font-medium"
              >
                Sign Up as Citizen
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Column 2: Current Leaders */}
          <div
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 
                          border border-gray-200 hover:border-green-300 
                          flex flex-col p-6 sm:p-8 relative"
          >
            {/* Popular Badge - Subtle green */}
            <div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 
                          bg-gray-800 text-white text-xs sm:text-sm font-medium px-4 py-1 rounded-full
                          shadow-md"
            >
              Most Popular
            </div>

            {/* Icon Container */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-100 
                          flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors duration-300"
            >
              <FaUserTie className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600 group-hover:text-green-600 transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Current Leaders
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-6 flex-1 leading-relaxed">
              Showcase your track record with proof. Upload projects, respond to
              citizen questions, and build trust through transparency. Let your
              work speak for itself.
            </p>

            {/* CTA Button - Gray with subtle green hover */}
            <Link to="/signup?role=leader" className="w-full">
              <button
                className="w-full py-3 px-4 rounded-full bg-gray-800 
                   hover:bg-green-700 text-white font-medium"
              >
                Register as Leader
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Column 3: Aspirants */}
          <div
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 
                          border border-gray-200 hover:border-green-300 
                          flex flex-col p-6 sm:p-8"
          >
            {/* Icon Container */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-100 
                          flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors duration-300"
            >
              <FaUserGraduate className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600 group-hover:text-green-600 transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Aspirants
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-6 flex-1 leading-relaxed">
              Create your free campaign profile. Share your vision,
              qualifications, and connect directly with voters. Raise funds
              through crowdfunding.
            </p>

            {/* CTA Button - Gray with subtle green hover */}
            <Link to="/signup?role=aspirant" className="w-full">
              <button
                className="w-full py-3 px-4 rounded-full bg-gray-800 
                   hover:bg-green-700 text-white font-medium"
              >
                Start Your Campaign
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-gray-500 mt-12">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-gray-800 hover:text-green-700 font-medium underline underline-offset-2 transition-colors"
          >
            Sign in here
          </a>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
