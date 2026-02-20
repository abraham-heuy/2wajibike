// pages/citizen/components/RatingModal.tsx
import { useState } from 'react';
import { FaTimes, FaStar, FaLock, FaUnlock } from 'react-icons/fa';

interface RatingModalProps {
  isOpen: boolean;
  leader: any;
  onClose: () => void;
  onSubmit: (rating: any) => void;
}

const RatingModal = ({ isOpen, leader, onClose, onSubmit }: RatingModalProps) => {
  const [ratings, setRatings] = useState({
    projectDelivery: 0,
    accessibility: 0,
    communication: 0,
    integrity: 0,
  });
  const [comment, setComment] = useState('');
  const [anonymous, setAnonymous] = useState(true);
  const [hoveredStar, setHoveredStar] = useState<{ category: string; value: number } | null>(null);

  if (!isOpen || !leader) return null;

  const categories = [
    { key: 'projectDelivery', label: 'Project Delivery', description: 'How well have they delivered on projects?' },
    { key: 'accessibility', label: 'Accessibility', description: 'How accessible are they to citizens?' },
    { key: 'communication', label: 'Communication', description: 'How well do they communicate with the public?' },
    { key: 'integrity', label: 'Integrity', description: 'Do they demonstrate honesty and transparency?' },
  ];

  const handleRating = (category: string, value: number) => {
    setRatings(prev => ({ ...prev, [category]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      leaderId: leader.id,
      leaderName: leader.name,
      ratings,
      comment,
      anonymous,
      date: new Date().toISOString(),
    });
  };

  const isComplete = Object.values(ratings).every(r => r > 0);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Modal */}
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-none px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Rate {leader.name}</h2>
            <p className="text-xs text-gray-500 mt-1">{leader.position} · {leader.area}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Rating Categories */}
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.key} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">{cat.label}</p>
                    <p className="text-xs text-gray-500">{cat.description}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(cat.key, star)}
                        onMouseEnter={() => setHoveredStar({ category: cat.key, value: star })}
                        onMouseLeave={() => setHoveredStar(null)}
                        className="p-1"
                      >
                        <FaStar
                          className={`w-5 h-5 transition-colors ${
                            (hoveredStar?.category === cat.key && hoveredStar.value >= star) ||
                            ratings[cat.key as keyof typeof ratings] >= star
                              ? 'text-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                {ratings[cat.key as keyof typeof ratings] > 0 && (
                  <p className="text-xs text-green-600">
                    You rated this {ratings[cat.key as keyof typeof ratings]}/5
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Comment */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Why did you give these ratings? <span className="text-gray-400">(Optional)</span>
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience or evidence..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
            />
            <p className="text-xs text-gray-500">
              Your feedback helps others make informed decisions
            </p>
          </div>

          {/* Anonymous Toggle */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              {anonymous ? <FaLock className="w-4 h-4 text-gray-500" /> : <FaUnlock className="w-4 h-4 text-gray-500" />}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {anonymous ? 'Anonymous Rating' : 'Public Rating'}
                </p>
                <p className="text-xs text-gray-500">
                  {anonymous 
                    ? 'Your name will not be shown with this rating'
                    : 'Your name will be displayed with this rating'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setAnonymous(!anonymous)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                anonymous 
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {anonymous ? 'Switch to Public' : 'Switch to Anonymous'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none px-4 sm:px-6 py-4 border-t border-gray-200 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg 
                     hover:bg-gray-50 transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg 
                     hover:bg-gray-800 transition-colors text-sm disabled:opacity-50 
                     disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <FaStar className="w-4 h-4" />
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;