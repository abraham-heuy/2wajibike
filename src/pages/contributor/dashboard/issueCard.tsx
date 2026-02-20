// pages/contributor/components/IssueCard.tsx
import { FaClock, FaExclamationCircle } from 'react-icons/fa';
import type { Issue } from '../types/types';

interface IssueCardProps {
  issue: Issue;
  contributorSkills: Array<{ name: string }>;
  onClaim: () => void;
}

const IssueCard = ({ issue, contributorSkills, onClaim }: IssueCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch(priority) {
      case 'critical': return <FaExclamationCircle className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />;
      case 'high': return <FaExclamationCircle className="text-orange-500 w-3 h-3 sm:w-4 sm:h-4" />;
      case 'medium': return <FaClock className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" />;
      case 'low': return <FaClock className="text-blue-500 w-3 h-3 sm:w-4 sm:h-4" />;
      default: return null;
    }
  };

  const contributorSkillNames = contributorSkills.map(s => s.name);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 hover:shadow-lg transition-shadow">
      {/* Mobile: Stack, Desktop: Row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1">
          {/* Title and badges */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              #{issue.id}: {issue.title}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(issue.difficulty)}`}>
              {issue.difficulty}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              {getPriorityIcon(issue.priority)}
              <span className="hidden xs:inline">{issue.priority}</span>
            </span>
          </div>

          {/* Description - 2 lines on mobile */}
          <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
            {issue.description}
          </p>
          
          {/* Skills tags - Scroll horizontally on mobile if needed */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
            {issue.skills.map((skill, idx) => (
              <span
                key={idx}
                className={`text-xs px-2 py-1 rounded-full whitespace-nowrap
                  ${contributorSkillNames.includes(skill)
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600'
                  }`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Metadata - Wrap on mobile */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">📁 {issue.repository}</span>
            <span className="flex items-center gap-1">⏱️ {issue.estimatedHours}h</span>
            <span className="flex items-center gap-1">🏆 {issue.points}pts</span>
            <div className="flex flex-wrap gap-1">
              {issue.labels.map((label, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Claim button - Full width on mobile */}
        <button
          onClick={onClaim}
          className="w-full sm:w-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
        >
          Claim Issue
        </button>
      </div>
    </div>
  );
};

export default IssueCard;