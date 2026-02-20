// pages/contributor/components/ProfileMenu.tsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import type { ContributorData } from '../types/types';

interface ProfileMenuProps {
  isOpen: boolean;
  contributorData: ContributorData;
  onUpdateSkills: () => void;
  onClose: () => void;
}

const ProfileMenu = ({ isOpen, contributorData, onUpdateSkills, onClose }: ProfileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50"
    >
      {/* User Info - Mobile first */}
      <div className="p-3 sm:p-4 border-b border-gray-200">
        <p className="font-medium text-gray-800 text-sm sm:text-base truncate">{contributorData.name}</p>
        <p className="text-xs text-gray-500 truncate">@{contributorData.github}</p>
      </div>

      {/* Menu Items */}
      <div className="p-2">
        <button 
          onClick={() => {
            onClose();
            // Navigate to profile
          }}
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2"
        >
          <FaUser className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">Your Profile</span>
        </button>

        <button 
          onClick={() => {
            onClose();
            onUpdateSkills();
          }}
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2"
        >
          <FaCog className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">Update Skills</span>
        </button>

        <button 
          onClick={() => {
            onClose();
            // Navigate to settings
          }}
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2"
        >
          <FaCog className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">Settings</span>
        </button>

        <div className="border-t border-gray-200 my-1"></div>

        <button 
          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2"
        >
          <FaSignOutAlt className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;