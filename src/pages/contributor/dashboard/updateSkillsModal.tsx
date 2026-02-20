// pages/contributor/components/UpdateSkillsModal.tsx
import { useState } from 'react';
import { FaEdit, FaPlus } from 'react-icons/fa';

interface UpdateSkillsModalProps {
  isOpen: boolean;
  skills: Array<{ name: string; level: number; years: number }>;
  onClose: () => void;
  onSave: (skills: any[]) => void;
}

const UpdateSkillsModal = ({ isOpen, skills, onClose, onSave }: UpdateSkillsModalProps) => {
  const [editableSkills] = useState(skills);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">Update Your Skills</h3>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-gray-600">
            Add or update your skills to get better issue recommendations. Higher skill levels and more skills increase your contributor score.
          </p>
          
          {/* Skills list */}
          <div className="space-y-3">
            {editableSkills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 text-sm sm:text-base truncate">{skill.name}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Level {skill.level}/5</span>
                      <div className="w-20 sm:w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{skill.years} years</span>
                  </div>
                </div>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg flex-shrink-0">
                  <FaEdit className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Add new skill */}
          <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors flex items-center justify-center gap-2 text-sm">
            <FaPlus className="w-4 h-4" />
            Add New Skill
          </button>

          {/* Tip */}
          <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
            <p className="text-xs sm:text-sm text-green-800 font-medium mb-1">Pro Tip</p>
            <p className="text-xs text-green-700">
              Adding more skills and increasing your proficiency levels can boost your contributor score by up to 1.5 points!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={onClose}
            className="w-full sm:flex-1 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm sm:text-base order-2 sm:order-1"
          >
            Close
          </button>
          <button
            onClick={() => onSave(editableSkills)}
            className="w-full sm:flex-1 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm sm:text-base order-1 sm:order-2"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSkillsModal;