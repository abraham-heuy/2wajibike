// pages/citizen/components/EventsSection.tsx
import { useState } from 'react';
import { FaCalendarAlt, FaUsers, FaBullhorn, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

interface EventsSectionProps {
  onEventClick: (event: any) => void;
}

const EventsSection = ({ onEventClick }: EventsSectionProps) => {
  const [eventFilter, setEventFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Kasarani Ward Public Forum',
      type: 'forum',
      date: '2024-03-25',
      time: '10:00 AM',
      location: 'Kasarani Community Hall',
      description: 'Discuss development projects and budget allocation for the upcoming financial year. All residents welcome.',
      organizer: 'Kasarani Ward Office',
      attendees: 45,
      icon: <FaUsers className="text-gray-500" />,
    },
    {
      id: 2,
      title: 'Youth in Governance Campaign',
      type: 'campaign',
      date: '2024-03-28',
      time: '2:00 PM',
      location: 'Online (Zoom)',
      description: 'Learn how young people can engage with county leadership and influence policy decisions.',
      organizer: 'Youth for Change',
      attendees: 120,
      icon: <FaBullhorn className="text-gray-500" />,
    },
    {
      id: 3,
      title: 'Budget Review Meeting',
      type: 'forum',
      date: '2024-04-02',
      time: '9:30 AM',
      location: 'County Assembly',
      description: 'Review of the proposed county budget and public participation opportunities.',
      organizer: 'County Assembly',
      attendees: 30,
      icon: <FaUsers className="text-gray-500" />,
    },
  ];

  const filters = ['all', 'forum', 'campaign'];
  
  const filteredEvents = eventFilter === 'all' 
    ? events 
    : events.filter(e => e.type === eventFilter);

  const getFilterLabel = (filter: string) => {
    switch(filter) {
      case 'forum': return 'Forums';
      case 'campaign': return 'Campaigns';
      default: return 'All Events';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="w-4 h-4 text-gray-400" />
          <h2 className="text-sm font-medium text-gray-700 tracking-wide">UPCOMING EVENTS</h2>
        </div>
        
        {/* Event filter chips */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setEventFilter(filter)}
              className={`
                px-3 py-1.5 rounded-full text-xs transition-all duration-200
                ${eventFilter === filter 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div 
            key={event.id}
            onClick={() => onEventClick(event)}
            className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              {event.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 whitespace-nowrap">
                  {event.type}
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="w-3 h-3" />
                  {new Date(event.date).toLocaleDateString('en-KE', { month: 'short', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="w-3 h-3" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  <span className="truncate max-w-[150px]">{event.location}</span>
                </span>
              </div>
              
              <p className="text-xs text-gray-500 mt-2 line-clamp-1">
                {event.attendees} attending · {event.organizer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-xs text-gray-500 hover:text-green-600 flex items-center gap-1">
        View all events
        <HiOutlineArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};

export default EventsSection;