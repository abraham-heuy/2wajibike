// pages/contributor/components/ContributorScore.tsx
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
    <div className="space-y-6">
      {/* Main Score Display */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-4 shadow-xl">
          <span className={`text-4xl font-bold text-white`}>
            {score.toFixed(1)}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{getScoreLabel(score)}</h3>
        <p className="text-gray-600">Based on your profile and contributions</p>
      </div>

      {/* Score Breakdown */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Score Breakdown</h4>
        
        {/* Experience Score */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaBriefcase className="text-blue-500" /> Experience
            </span>
            <span className="font-medium text-gray-800">{breakdown.experience.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.experience) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{experienceCount} positions</p>
        </div>

        {/* Education Score */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaGraduationCap className="text-purple-500" /> Education
            </span>
            <span className="font-medium text-gray-800">{breakdown.education.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.education) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{educationCount} qualifications</p>
        </div>

        {/* Skills Score */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaCode className="text-green-500" /> Skills
            </span>
            <span className="font-medium text-gray-800">{breakdown.skills.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.skills) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">{skillsCount} skills</p>
        </div>

        {/* Contributions Score (placeholder for future) */}
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600 flex items-center gap-1">
              <FaStar className="text-yellow-500" /> Contributions
            </span>
            <span className="font-medium text-gray-800">{breakdown.contributions.toFixed(1)}/5</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-500 rounded-full transition-all duration-500"
              style={{ width: getProgressWidth(breakdown.contributions) }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Based on your activity</p>
        </div>
      </div>

      {/* Total Score Bar */}
      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-green-800">Total Score</span>
          <span className="font-bold text-green-800">{breakdown.total.toFixed(1)}/5</span>
        </div>
        <div className="w-full h-3 bg-green-200 rounded-full overflow-hidden">
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

      {/* Next Steps */}
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
          <FaStar className="text-blue-600" />
          How to improve your score
        </h4>
        <ul className="space-y-1 text-sm text-blue-700">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Add more skills to reach {5 - skillsCount} more</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Complete your experience history</span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>Start contributing to issues to earn contribution points</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContributorScore;