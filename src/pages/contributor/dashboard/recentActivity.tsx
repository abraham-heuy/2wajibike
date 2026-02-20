// pages/contributor/components/RecentActivity.tsx
import { FaChartLine } from 'react-icons/fa';

const RecentActivity = () => {
  const activities = [
    { id: 1, text: 'Commented on issue #1234: "Fix navigation bug"', time: '2 hours ago' },
    { id: 2, text: 'Commented on issue #1235: "Implement dark mode"', time: '5 hours ago' },
    { id: 3, text: 'Commented on issue #1236: "API documentation"', time: '1 day ago' },
    { id: 4, text: 'Commented on issue #1237: "Database optimization"', time: '2 days ago' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
        <FaChartLine className="text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
        Recent Activity
      </h3>
      
      <div className="space-y-2 sm:space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 rounded-full bg-green-500 flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-800 truncate">{activity.text}</p>
              <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
            </div>
            <button className="text-xs text-blue-600 hover:text-blue-800 flex-shrink-0">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;