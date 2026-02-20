// pages/citizen/components/EventModal.tsx
import { FaTimes, FaCalendarAlt,  FaMapMarkerAlt, FaUsers, FaUser, FaShare } from 'react-icons/fa';

interface EventModalProps {
  event: any;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  if (!event) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred transparent background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Event Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4 sm:p-6">
          {/* Type chip */}
          <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full mb-3">
            {event.type === 'forum' ? 'Public Forum' : 'Campaign'}
          </span>

          <h3 className="text-xl font-medium text-gray-900 mb-4">{event.title}</h3>

          {/* Event details grid */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <FaCalendarAlt className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-900">
                  {new Date(event.date).toLocaleDateString('en-KE', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-sm text-gray-600">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-900">{event.location}</p>
                <p className="text-xs text-gray-500">View on map</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaUser className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-900">Organized by</p>
                <p className="text-sm text-gray-600">{event.organizer}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaUsers className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm text-gray-900">{event.attendees} people attending</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">About this event</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
              Register to Attend
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <FaShare className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;