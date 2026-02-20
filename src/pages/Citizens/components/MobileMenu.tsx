// pages/citizen/components/MobileMenu.tsx
import { NavLink } from 'react-router-dom';
import { 
  FaHome, 
  FaStar, 
  FaCamera, 
  FaQuestionCircle, 
  FaChartLine, 
  FaFlag,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaChevronRight
} from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { path: '/citizen/dashboard/home', icon: <FaHome />, label: 'Home' },
    { path: '/citizen/dashboard/rate-leaders', icon: <FaStar />, label: 'Rate Leaders' },
    { path: '/citizen/dashboard/verify-projects', icon: <FaCamera />, label: 'Verify Projects' },
    { path: '/citizen/dashboard/ask-questions', icon: <FaQuestionCircle />, label: 'Ask Questions' },
    { path: '/citizen/dashboard/track-promises', icon: <FaChartLine />, label: 'Track Promises' },
    { path: '/citizen/dashboard/report-issues', icon: <FaFlag />, label: 'Report Issues' },
    { path: '/citizen/dashboard/profile', icon: <FaUser />, label: 'Profile' },
    { path: '/citizen/dashboard/settings', icon: <FaCog />, label: 'Settings' },
  ];

  // Mock user data
  const user = {
    name: 'John Doe',
    location: 'Nairobi, Kenya',
    avatar: 'JD',
    level: 4,
    progress: 75
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Menu panel - slides from left */}
      <div className="fixed inset-y-0 left-0 w-80 max-w-[80vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-semibold text-gray-800">Tuwajibike</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <FaTimes className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* User info */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                {user.avatar}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-xs text-gray-500">{user.location}</p>
              </div>
            </div>
            
            {/* Level progress */}
            <div className="mt-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-600">Level {user.level}</span>
                <span className="text-xs text-gray-600">{user.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: `${user.progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Menu items - scrollable */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-3 rounded-lg transition-colors
                     ${isActive 
                       ? 'bg-green-50 text-green-700' 
                       : 'text-gray-700 hover:bg-gray-100'
                     }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <FaChevronRight className="w-4 h-4 text-gray-400" />
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Logout button */}
          <div className="border-t border-gray-200 p-4">
            <button
              onClick={() => {
                // Handle logout
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
            >
              <FaSignOutAlt className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;