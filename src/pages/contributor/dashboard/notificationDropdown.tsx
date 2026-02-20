// pages/contributor/components/NotificationsDropdown.tsx
import { useEffect, useRef } from 'react';
import type { Notification } from '../types/types';

interface NotificationsDropdownProps {
  isOpen: boolean;
  notifications: Notification[];
  unreadCount: number;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  onClose: () => void;
}

const NotificationsDropdown = ({
  isOpen,
  notifications,
  unreadCount,
  onMarkAsRead,
  onMarkAllAsRead,
  onClose
}: NotificationsDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50"
    >
      {/* Header - Mobile first padding */}
      <div className="p-3 sm:p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Notifications</h3>
        {unreadCount > 0 && (
          <button 
            onClick={onMarkAllAsRead}
            className="text-xs text-green-600 hover:text-green-700"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* List */}
      <div className="max-h-96 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 sm:p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer
                        ${!notification.read ? 'bg-blue-50/50' : ''}`}
              onClick={() => onMarkAsRead(notification.id)}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                {/* Status indicator - Mobile friendly size */}
                <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 
                  ${notification.read ? 'bg-gray-300' : 'bg-green-500 animate-pulse'}`} />
                
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {notification.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {notification.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-6 sm:py-8 text-sm">No notifications</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsDropdown;