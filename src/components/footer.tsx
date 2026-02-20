// Footer.tsx
import { 
  FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaHeart, 
  FaUsers, FaUserTie, FaUserGraduate, FaQuestionCircle, 
  FaNewspaper, FaShieldAlt, FaChartLine, FaCode, FaHandsHelping,
  FaMapMarkerAlt, FaPhone
} from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { GiKenya } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        
        {/* Top Section - Brand and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-12 border-b border-gray-700">
          {/* Brand Column */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 
                            flex items-center justify-center shadow-lg shadow-green-500/20">
                <GiKenya className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 
                           bg-clip-text text-transparent">
                Tuwajibike
              </h2>
            </div>
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 mb-6">
              Building a transparent Kenya through citizen-powered accountability. 
              Open source, volunteer-driven, and built for the people.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 
                              border-2 border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">AK</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 
                              border-2 border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">JM</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 
                              border-2 border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">SW</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 
                              border-2 border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">+5</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">10 volunteers</span> building
              </p>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Join our newsletter for updates on features, volunteer opportunities, and impact stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 
                         rounded-full text-white placeholder-gray-400
                         focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20
                         transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 
                               hover:from-green-500 hover:to-green-400 text-white font-medium
                               rounded-full transition-all duration-300 shadow-lg shadow-green-500/20
                               flex items-center justify-center gap-2 group whitespace-nowrap">
                Subscribe
                <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid - Mobile First: Centered on mobile, left-aligned on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Column 1: Platform */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4 inline-block 
                         border-b-2 border-green-500 pb-2">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaUsers className="w-4 h-4 group-hover:text-green-400" />
                  <span>For Citizens</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaUserTie className="w-4 h-4 group-hover:text-green-400" />
                  <span>For Leaders</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaUserGraduate className="w-4 h-4 group-hover:text-green-400" />
                  <span>For Aspirants</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaChartLine className="w-4 h-4 group-hover:text-green-400" />
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaShieldAlt className="w-4 h-4 group-hover:text-green-400" />
                  <span>Transparency Tools</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Scalability & Growth */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4 inline-block 
                         border-b-2 border-green-500 pb-2">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Scalability 
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaCode className="w-4 h-4 group-hover:text-green-400" />
                  <span>Open Source API</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaChartLine className="w-4 h-4 group-hover:text-green-400" />
                  <span>County Expansion</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaHandsHelping className="w-4 h-4 group-hover:text-green-400" />
                  <span>Volunteer Program</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaShieldAlt className="w-4 h-4 group-hover:text-green-400" />
                  <span>Enterprise Security</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <GiKenya className="w-4 h-4 group-hover:text-green-400" />
                  <span>All 47 Counties</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4 inline-block 
                         border-b-2 border-green-500 pb-2">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaNewspaper className="w-4 h-4 group-hover:text-green-400" />
                  <span>Blog & Updates</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaQuestionCircle className="w-4 h-4 group-hover:text-green-400" />
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaShieldAlt className="w-4 h-4 group-hover:text-green-400" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaCode className="w-4 h-4 group-hover:text-green-400" />
                  <span>Terms of Service</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaHeart className="w-4 h-4 group-hover:text-green-400" />
                  <span>Volunteer Guide</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-4 inline-block 
                         border-b-2 border-green-500 pb-2">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@tuwajibike.ke" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaEnvelope className="w-4 h-4 group-hover:text-green-400" />
                  <span>info@tuwajibike.ke</span>
                </a>
              </li>
              <li>
                <a href="tel:+254700000000" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaPhone className="w-4 h-4 group-hover:text-green-400" />
                  <span>+254 700 000 000</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 
                                      text-gray-400 hover:text-green-400 transition-colors group">
                  <FaMapMarkerAlt className="w-4 h-4 group-hover:text-green-400" />
                  <span>Nairobi, Kenya</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-green-600 
                                        flex items-center justify-center text-gray-300 hover:text-white
                                        transition-all duration-300 border border-gray-600 hover:border-green-400">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-green-600 
                                        flex items-center justify-center text-gray-300 hover:text-white
                                        transition-all duration-300 border border-gray-600 hover:border-green-400">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-green-600 
                                        flex items-center justify-center text-gray-300 hover:text-white
                                        transition-all duration-300 border border-gray-600 hover:border-green-400">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Additional Links */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Tuwajibike. Built with by volunteers for Kenya.
              <span className="block sm:inline sm:ml-2">All rights reserved.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-green-400 transition-colors">Accessibility</a>
              <span>•</span>
              <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Open Source Badge */}
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 
                           rounded-full border border-gray-700 text-xs text-gray-400">
              <FaCode className="w-3 h-3 text-green-400" />
              Open source · MIT License · v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;