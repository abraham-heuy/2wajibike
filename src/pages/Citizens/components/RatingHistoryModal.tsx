// pages/citizen/components/RatingHistoryModal.tsx
import { useState } from 'react';
import { FaTimes, FaStar, FaFilter, FaCalendarAlt } from 'react-icons/fa';

interface RatingHistoryModalProps {
  isOpen: boolean;
  history: any[];
  onClose: () => void;
}

const RatingHistoryModal = ({ isOpen, history, onClose }: RatingHistoryModalProps) => {
  const [dateFilter, setDateFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  if (!isOpen) return null;


  const filteredHistory = history.filter(() => {
    if (dateFilter === 'all') return true;
    // Add date filtering logic here
    return true;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Modal */}
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-none px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Rating History</h2>
            <p className="text-xs text-gray-500 mt-1">Your past ratings and feedback</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <FaFilter className="w-4 h-4 text-gray-500" />
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <FaTimes className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex-none px-4 sm:px-6 py-3 border-b border-gray-100">
          <div className="hidden sm:flex items-center gap-2">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="this-year">This Year</option>
            </select>
          </div>

          {showFilters && (
            <div className="sm:hidden mt-2">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="this-year">This Year</option>
              </select>
            </div>
          )}
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredHistory.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{item.leaderName}</h3>
                  <p className="text-xs text-gray-500">{item.position}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>

              {/* Category ratings */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                <div className="text-xs">
                  <span className="text-gray-500">Projects:</span>
                  <span className="ml-1 font-medium">{item.categories.projectDelivery}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Access:</span>
                  <span className="ml-1 font-medium">{item.categories.accessibility}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Comm:</span>
                  <span className="ml-1 font-medium">{item.categories.communication}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Integrity:</span>
                  <span className="ml-1 font-medium">{item.categories.integrity}</span>
                </div>
              </div>

              {item.comment && (
                <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 mb-2">
                  "{item.comment}"
                </div>
              )}

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-KE', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full ${
                  item.anonymous 
                    ? 'bg-gray-100 text-gray-600'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {item.anonymous ? 'Anonymous' : 'Public'}
                </span>
              </div>
            </div>
          ))}

          {filteredHistory.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No rating history found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingHistoryModal;