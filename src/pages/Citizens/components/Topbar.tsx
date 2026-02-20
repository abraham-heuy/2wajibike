// pages/citizen/components/Topbar.tsx
import { Link } from 'react-router-dom';
import { FaHome, FaBell, FaUser, FaBars } from 'react-icons/fa';

interface TopbarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
  isMobile: boolean;
}

const Topbar = ({ toggleSidebar, sidebarOpen, isMobile }: TopbarProps) => {
  return (
    <nav className="bg-white border-b border-gray-200 h-16 sticky top-0 z-40">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left section - Menu toggle and logo */}
        <div className="flex items-center gap-3">
          {/* Menu toggle button - only visible on mobile */}
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            >
              <FaBars className="w-5 h-5" />
            </button>
          )}

          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-semibold text-gray-800 hidden sm:block">Tuwajibike</span>
          </Link>

          {/* Page indicator - shows on mobile */}
          <span className="text-sm font-medium text-gray-600 md:hidden">
            Dashboard
          </span>
        </div>

        {/* Right section - Notifications and Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors">
            <FaBell className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white font-bold">
              JD
            </div>
            <span className="hidden lg:block text-sm text-gray-700">John Doe</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;