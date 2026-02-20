// pages/contributor/components/DashboardNav.tsx
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBell, FaTachometerAlt } from 'react-icons/fa';
import NotificationsDropdown from './notificationDropdown';
import ProfileMenu from './profileMenu';
import type { ContributorData, Notification } from '../types/types';

interface DashboardNavProps {
  contributorData: ContributorData;
  notifications: Notification[];
  unreadCount: number;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onUpdateSkills: () => void;
}

const DashboardNav = ({ 
  contributorData, 
  notifications, 
  unreadCount,
  onMarkAsRead,
  onMarkAllAsRead,
  onUpdateSkills 
}: DashboardNavProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Home and Title */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="text-gray-600 hover:text-green-600 p-2">
              <FaHome className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            
            {/* Dashboard Title with Icon - Always visible */}
            <div className="flex items-center gap-2">
              <FaTachometerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
                  Contributor Dashboard
                </span>
                <span className="text-xs text-gray-500 hidden sm:block">
                  Welcome back, {contributorData.name.split(' ')[0]}!
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Section - Notifications and Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Notifications"
              >
                <FaBell className="w-5 h-5 sm:w-6 sm:h-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              <NotificationsDropdown
                isOpen={showNotifications}
                notifications={notifications}
                unreadCount={unreadCount}
                onMarkAsRead={onMarkAsRead}
                onMarkAllAsRead={onMarkAllAsRead}
                onClose={() => setShowNotifications(false)}
              />
            </div>

            {/* Profile Menu */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 sm:gap-3 hover:bg-gray-100 p-1.5 sm:p-2 rounded-lg transition-colors"
                aria-label="Profile menu"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {contributorData.avatar}
                </div>
                <span className="hidden sm:inline text-sm text-gray-600">@{contributorData.github}</span>
              </button>

              <ProfileMenu
                isOpen={showProfileMenu}
                contributorData={contributorData}
                onUpdateSkills={onUpdateSkills}
                onClose={() => setShowProfileMenu(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;