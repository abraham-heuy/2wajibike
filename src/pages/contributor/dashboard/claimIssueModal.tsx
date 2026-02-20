// pages/contributor/components/ClaimIssueModal.tsx
import { FaExclamationCircle } from 'react-icons/fa';
import type { Issue } from '../types/types';

interface ClaimIssueModalProps {
  isOpen: boolean;
  issue: Issue | null;
  contributorSkills: Array<{ name: string }>;
  onClose: () => void;
  onConfirm: () => void;
}

const ClaimIssueModal = ({ isOpen, issue, contributorSkills, onClose, onConfirm }: ClaimIssueModalProps) => {
  if (!isOpen || !issue) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const contributorSkillNames = contributorSkills.map(s => s.name);
  const missingSkills = issue.skills.filter(s => !contributorSkillNames.includes(s));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header - Mobile first padding */}
        <div className="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Claim Issue #{issue.id}</h3>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Title and description */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">{issue.title}</h4>
            <p className="text-sm text-gray-600">{issue.description}</p>
          </div>

          {/* Details grid - 2 columns on mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg">
            <div>
              <p className="text-xs text-gray-500">Difficulty</p>
              <p className={`text-xs sm:text-sm font-medium mt-1 capitalize inline-block px-2 py-1 rounded-full ${getDifficultyColor(issue.difficulty)}`}>
                {issue.difficulty}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Estimated Time</p>
              <p className="text-sm font-medium mt-1">{issue.estimatedHours} hours</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Points</p>
              <p className="text-sm font-medium mt-1 text-green-600">{issue.points} pts</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Repository</p>
              <p className="text-sm font-medium mt-1 truncate">{issue.repository}</p>
            </div>
          </div>

          {/* Skills required */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Required Skills</p>
            <div className="flex flex-wrap gap-2">
              {issue.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm
                    ${contributorSkillNames.includes(skill)
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-gray-100 text-gray-600 border border-gray-300'
                    }`}
                >
                  {skill}
                  {contributorSkillNames.includes(skill) && ' ✓'}
                </span>
              ))}
            </div>
            
            {/* Missing skills warning */}
            {missingSkills.length > 0 && (
              <p className="text-xs text-yellow-600 mt-2 flex items-center gap-1">
                <FaExclamationCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>
                  You're missing {missingSkills.join(', ')}. Consider updating your skills first.
                </span>
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
            <p className="text-xs sm:text-sm text-blue-800 font-medium mb-2">Before you claim:</p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>You'll have 7 days to complete this issue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>A mentor will be assigned to help you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Your score will increase by {issue.points} points upon completion</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer actions - Stack on mobile */}
        <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="w-full sm:flex-1 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm sm:text-base order-2 sm:order-1"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-full sm:flex-1 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm sm:text-base order-1 sm:order-2"
          >
            Confirm & Claim Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClaimIssueModal;