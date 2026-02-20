// pages/contributor/components/contributorScore.tsx
import { FaStar, FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface ContributorScoreProps {
  score: number;
  breakdown: {
    experience: number;
    education: number;
    skills: number;
    contributions: number;
    total: number;
  };
  skillsCount: number;
  experienceCount: number;
  educationCount: number;
}

const ContributorScore = ({ score, breakdown, skillsCount, experienceCount, educationCount }: ContributorScoreProps) => {

  const getScoreLabel = (score: number) => {
    if (score >= 4.5) return 'Expert Contributor';
    if (score >= 3.5) return 'Advanced Contributor';
    if (score >= 2.5) return 'Intermediate Contributor';
    if (score >= 1.5) return 'Beginner Contributor';
    return 'Getting Started';
  };

  const getProgressWidth = (value: number, max: number = 5) => {
    return `${(value / max) * 100}%`;
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Main Score Display - Mobile first */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-3 sm:mb-4 shadow-xl">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {score.toFixed(1)}
          </span>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1">{getScoreLabel(score)}</h3>
        <p className="text-xs sm:text-sm text-gray-500">Based on your profile and contributions</p>
      </div>

      {/* Score Breakdown - Mobile friendly */}
      <div className="bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Score Breakdown</h4>
        
        {/* Experience Score */}
        <div className="mb-3">
          <div className="flex justify-between text-xs sm:text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaBriefcase className="text-blue-500 w-3 h-3 sm:w-4 sm:h-4" /> Experience
            </span>
            <span className="font-medium text-gray-800">{breakdown.experience.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.experience) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{experienceCount} positions</p>
        </div>

        {/* Education Score */}
        <div className="mb-3">
          <div className="flex justify-between text-xs sm:text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaGraduationCap className="text-purple-500 w-3 h-3 sm:w-4 sm:h-4" /> Education
            </span>
            <span className="font-medium text-gray-800">{breakdown.education.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.education) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{educationCount} qualifications</p>
        </div>

        {/* Skills Score */}
        <div className="mb-3">
          <div className="flex justify-between text-xs sm:text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaCode className="text-green-500 w-3 h-3 sm:w-4 sm:h-4" /> Skills
            </span>
            <span className="font-medium text-gray-800">{breakdown.skills.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.skills) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{skillsCount} skills</p>
        </div>

        {/* Contributions Score */}
        <div className="mb-2">
          <div className="flex justify-between text-xs sm:text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaStar className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" /> Contributions
            </span>
            <span className="font-medium text-gray-800">{breakdown.contributions.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.contributions) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Based on your activity</p>
        </div>
      </div>

      {/* Total Score Bar */}
      <div className="bg-green-50 p-3 sm:p-4 rounded-xl border border-green-200">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-green-800 text-sm sm:text-base">Total Score</span>
          <span className="font-bold text-green-800 text-sm sm:text-base">{breakdown.total.toFixed(1)}/5</span>
        </div>
        <div className="w-full h-2 sm:h-3 bg-green-200 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-500 ${
              score >= 4 ? 'bg-green-600' : 
              score >= 3 ? 'bg-green-500' : 
              score >= 2 ? 'bg-yellow-500' : 'bg-orange-500'
            }`}
            style={{ width: getProgressWidth(breakdown.total) }}
          ></div>
        </div>
      </div>

      {/* Next Steps - How to improve */}
      <div className="bg-blue-50 p-3 sm:p-4 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2 text-sm sm:text-base">
          <FaStar className="text-blue-600 w-3 h-3 sm:w-4 sm:h-4" />
          How to improve your score
        </h4>
        <ul className="space-y-1 text-xs text-blue-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Add more skills to reach {5 - skillsCount} more</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Complete your experience history</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span>Start contributing to issues to earn contribution points</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContributorScore;