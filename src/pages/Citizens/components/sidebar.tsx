// pages/citizen/components/Sidebar.tsx
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
  FaSignOutAlt
} from 'react-icons/fa';

interface SidebarProps {
  closeSidebar: () => void;
  isMobile: boolean;
}

const Sidebar = ({ closeSidebar, isMobile }: SidebarProps) => {
  const menuItems = [
    { path: '/citizen/dashboard/home', icon: <FaHome />, label: 'Home' },
    { path: '/citizen/dashboard/rate-leaders', icon: <FaStar />, label: 'Rate Leaders' },
    { path: '/citizen/dashboard/verify-projects', icon: <FaCamera />, label: 'Verify Projects' },
    { path: '/citizen/dashboard/ask-questions', icon: <FaQuestionCircle />, label: 'Ask Questions' },
    { path: '/citizen/dashboard/track-promises', icon: <FaChartLine />, label: 'Track Promises' },
    { path: '/citizen/dashboard/report-issues', icon: <FaFlag />, label: 'Report Issues' },
  ];

  const bottomMenuItems = [
    { path: '/citizen/dashboard/profile', icon: <FaUser />, label: 'Profile' },
    { path: '/citizen/dashboard/settings', icon: <FaCog />, label: 'Settings' },
  ];

  const handleItemClick = () => {
    if (isMobile) {
      closeSidebar();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* User info - visible at top of sidebar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-800 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">Nairobi, Kenya</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 bg-green-100 rounded-full h-2">
            <div className="bg-green-600 rounded-full h-2 w-3/4"></div>
          </div>
          <span className="text-xs font-medium text-green-700">Level 4</span>
        </div>
      </div>

      {/* Main menu - scrollable */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleItemClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                 ${isActive 
                   ? 'bg-green-50 text-green-700' 
                   : 'text-gray-700 hover:bg-gray-100'
                 }`
              }
            >
              <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom menu - fixed at bottom */}
      <div className="border-t border-gray-200 p-3">
        <nav className="space-y-1">
          {bottomMenuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleItemClick}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                 ${isActive 
                   ? 'bg-green-50 text-green-700' 
                   : 'text-gray-700 hover:bg-gray-100'
                 }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
          <button
            onClick={() => {
              // Handle logout
              if (isMobile) closeSidebar();
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <FaSignOutAlt className="text-lg" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;