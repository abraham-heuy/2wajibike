// pages/contributor/components/SkillsSetup.tsx
import { useState } from 'react';
import { FaCode, FaPalette, FaPen, FaUsers, FaSearch, FaPlus } from 'react-icons/fa';
import type { ContributorSkill } from '../types/types';

interface SkillsSetupProps {
  initialSkills?: ContributorSkill[];
  onSubmit: (skills: ContributorSkill[]) => void;
  onBack: () => void;
}

const SkillsSetup = ({ initialSkills = [], onSubmit, onBack }: SkillsSetupProps) => {
  const [skills, setSkills] = useState<ContributorSkill[]>(initialSkills);
  const [newSkill, setNewSkill] = useState({ name: '', category: 'development' as const, level: 3, years: 1 });

  const categories = [
    { id: 'development', label: 'Development', icon: <FaCode />, color: 'blue' },
    { id: 'design', label: 'Design', icon: <FaPalette />, color: 'purple' },
    { id: 'writing', label: 'Writing', icon: <FaPen />, color: 'green' },
    { id: 'community', label: 'Community', icon: <FaUsers />, color: 'orange' },
    { id: 'research', label: 'Research', icon: <FaSearch />, color: 'red' },
    { id: 'other', label: 'Other', icon: <FaPlus />, color: 'gray' }
  ];

  const suggestedSkills = [
    { name: 'React', category: 'development' },
    { name: 'TypeScript', category: 'development' },
    { name: 'Node.js', category: 'development' },
    { name: 'UI/UX Design', category: 'design' },
    { name: 'Content Writing', category: 'writing' },
    { name: 'Community Management', category: 'community' },
    { name: 'Data Analysis', category: 'research' },
    { name: 'Python', category: 'development' },
    { name: 'Figma', category: 'design' },
    { name: 'Swahili Translation', category: 'writing' }
  ];

  const addSkill = () => {
    if (newSkill.name.trim()) {
      const skill: ContributorSkill = {
        name: newSkill.name,
        category: newSkill.category as any,
        level: newSkill.level as 1 | 2 | 3 | 4 | 5,
        yearsOfExperience: newSkill.years
      };
      setSkills([...skills, skill]);
      setNewSkill({ name: '', category: 'development', level: 3, years: 1 });
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const addSuggestedSkill = (skillName: string, category: string) => {
    if (!skills.some(s => s.name === skillName)) {
      const skill: ContributorSkill = {
        name: skillName,
        category: category as any,
        level: 3,
        yearsOfExperience: 1
      };
      setSkills([...skills, skill]);
    }
  };


  const getLevelLabel = (level: number) => {
    switch(level) {
      case 1: return 'Beginner';
      case 2: return 'Intermediate';
      case 3: return 'Proficient';
      case 4: return 'Advanced';
      case 5: return 'Expert';
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Skills</h3>
        <p className="text-gray-600">
          Add your skills to help us match you with the right contributions
        </p>
      </div>

      {/* Suggested Skills */}
      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-3">Suggested Skills</h4>
        <div className="flex flex-wrap gap-2">
          {suggestedSkills.map((skill, index) => (
            <button
              key={index}
              onClick={() => addSuggestedSkill(skill.name, skill.category)}
              disabled={skills.some(s => s.name === skill.name)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all duration-300
                ${skills.some(s => s.name === skill.name)
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-white hover:bg-blue-600 hover:text-white text-gray-700 border border-blue-300'
                }`}
            >
              + {skill.name}
            </button>
          ))}
        </div>
      </div>

      {/* Add New Skill Form */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-3">Add Custom Skill</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            placeholder="Skill name (e.g., Python)"
            className="px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <select
            value={newSkill.category}
            onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value as any })}
            className="px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Level</label>
            <select
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) as any })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {[1,2,3,4,5].map(level => (
                <option key={level} value={level}>{getLevelLabel(level)}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-xs text-gray-500 mb-1">Years Experience</label>
            <input
              type="number"
              min="0"
              max="50"
              value={newSkill.years}
              onChange={(e) => setNewSkill({ ...newSkill, years: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <button
          onClick={addSkill}
          disabled={!newSkill.name.trim()}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-medium
                   rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          Add Skill
        </button>
      </div>

      {/* Skills List */}
      {skills.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Your Skills ({skills.length})</h4>
          <div className="space-y-2">
            {skills.map((skill, index) => {
              const category = categories.find(c => c.id === skill.category);
              return (
                <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-${category?.color}-100 flex items-center justify-center`}>
                      {category?.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{skill.name}</p>
                      <p className="text-xs text-gray-500">
                        {getLevelLabel(skill.level)} · {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeSkill(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 py-3 border-2 border-gray-300 text-gray-700
                   rounded-xl hover:bg-gray-50 transition-all duration-300
                   font-medium"
        >
          Back
        </button>
        <button
          onClick={() => onSubmit(skills)}
          disabled={skills.length === 0}
          className="flex-1 bg-gradient-to-r from-green-600 to-green-500 
                   hover:from-green-700 hover:to-green-600 text-white font-medium
                   py-3 rounded-xl transition-all duration-300
                   shadow-lg shadow-green-500/20 disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SkillsSetup;