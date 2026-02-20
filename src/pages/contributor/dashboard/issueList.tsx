// pages/contributor/components/IssueList.tsx
import { FaTasks } from 'react-icons/fa';
import IssueCard from './issueCard';
import type { Issue } from '../types/types';

interface IssueListProps {
  issues: Issue[];
  contributorSkills: Array<{ name: string }>;
  onClaimIssue: (issue: Issue) => void;
}

const IssueList = ({ issues, contributorSkills, onClaimIssue }: IssueListProps) => {
  if (issues.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 bg-white rounded-xl border border-gray-200">
        <FaTasks className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-sm sm:text-base text-gray-600">No issues match your criteria</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {issues.map((issue) => (
        <IssueCard
          key={issue.id}
          issue={issue}
          contributorSkills={contributorSkills}
          onClaim={() => onClaimIssue(issue)}
        />
      ))}
    </div>
  );
};

export default IssueList;