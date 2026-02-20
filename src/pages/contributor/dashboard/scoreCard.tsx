// pages/contributor/components/ScoreCard.tsx
import { FaGithub, FaAward } from 'react-icons/fa';
import ContributorScore from './contributorScore';
import type { ContributorData } from '../types/types'
;

interface ScoreCardProps {
  contributorData: ContributorData;
  onUpdateSkills: () => void;
}

const ScoreCard = ({ contributorData, onUpdateSkills }: ScoreCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 sticky top-20">
      <ContributorScore
        score={contributorData.score}
        breakdown={contributorData.breakdown}
        skillsCount={contributorData.skillsCount}
        experienceCount={contributorData.experienceCount}
        educationCount={contributorData.educationCount}
      />
      
      {/* Level Progress - Mobile first */}
      <div className="mt-4 p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-medium text-purple-700 flex items-center gap-1">
            <FaAward className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Level {contributorData.level} Contributor</span>
          </span>
          <span className="text-xs text-purple-600">
            Next: {contributorData.nextLevelScore.toFixed(1)}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${(contributorData.score / contributorData.nextLevelScore) * 100}%` }}
          />
        </div>
        
        <p className="text-xs text-purple-600 mt-2">
          {contributorData.achievements} achievements unlocked
        </p>
      </div>
      
      {/* GitHub Link */}
      <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-200">
        <a
          href={`https://github.com/${contributorData.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
        >
          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>View GitHub Profile</span>
        </a>
      </div>

      {/* Quick Actions - Mobile: 2 columns, always visible */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={onUpdateSkills}
          className="py-2 px-2 sm:px-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-xs sm:text-sm font-medium"
        >
          Update Skills
        </button>
        <button
          className="py-2 px-2 sm:px-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-xs sm:text-sm font-medium"
        >
          Achievements
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;