// pages/contributor/components/IssueFilters.tsx
import { FaFilter } from 'react-icons/fa';

interface IssueFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filter: string;
  onFilterChange: (value: string) => void;
}

const IssueFilters = ({ searchTerm, onSearchChange, filter, onFilterChange }: IssueFiltersProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4">
      {/* Mobile: Stack vertically, Tablet/Desktop: Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Search - Full width on mobile */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search issues..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Filter controls */}
        <div className="flex gap-2">
          <select
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Issues</option>
            <option value="beginner">Beginner Friendly</option>
            <option value="my-skill">Matches My Skills</option>
          </select>
          
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaFilter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IssueFilters;