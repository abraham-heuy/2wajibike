// pages/contributor/components/StatsCards.tsx
import { FaTasks, FaCode, FaUsers, FaStar } from 'react-icons/fa';

interface StatsCardsProps {
  availableIssues: number;
  contributions: number;
  fellowContributors: number;
  currentScore: number;
}

const StatsCards = ({ availableIssues, contributions, fellowContributors, currentScore }: StatsCardsProps) => {
  const stats = [
    {
      icon: <FaTasks className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />,
      value: availableIssues,
      label: 'Available Issues',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />,
      value: contributions,
      label: 'Contributions',
      bgColor: 'bg-green-100'
    },
    {
      icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />,
      value: fellowContributors,
      label: 'Fellow Contributors',
      bgColor: 'bg-purple-100'
    },
    {
      icon: <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />,
      value: currentScore.toFixed(1),
      label: 'Current Score',
      bgColor: 'bg-yellow-100'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              {stat.icon}
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;