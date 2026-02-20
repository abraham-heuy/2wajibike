// pages/contributor/components/ExperienceForm.tsx
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaPlus, FaTrash } from 'react-icons/fa';
import type { ContributorExperience, ContributorEducation } from '../types/types';

interface ExperienceFormProps {
  initialExperience?: ContributorExperience[];
  initialEducation?: ContributorEducation[];
  onSubmit: (data: { experience: ContributorExperience[]; education: ContributorEducation[] }) => void;
  onBack: () => void;
}

const ExperienceForm = ({ initialExperience = [], initialEducation = [], onSubmit, onBack }: ExperienceFormProps) => {
  const [experience, setExperience] = useState<ContributorExperience[]>(initialExperience);
  const [education, setEducation] = useState<ContributorEducation[]>(initialEducation);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  // Experience form state
  const [newExp, setNewExp] = useState<Partial<ContributorExperience>>({
    title: '',
    organization: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    skills: []
  });

  // Education form state
  const [newEdu, setNewEdu] = useState<Partial<ContributorEducation>>({
    institution: '',
    degree: '',
    field: '',
    startYear: new Date().getFullYear(),
    endYear: undefined,
    current: false
  });

  const [skillInput, setSkillInput] = useState('');

  const addExperience = () => {
    if (newExp.title && newExp.organization && newExp.startDate) {
      setExperience([...experience, newExp as ContributorExperience]);
      setNewExp({
        title: '',
        organization: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
        skills: []
      });
    }
  };

  const addEducation = () => {
    if (newEdu.institution && newEdu.degree && newEdu.field && newEdu.startYear) {
      setEducation([...education, newEdu as ContributorEducation]);
      setNewEdu({
        institution: '',
        degree: '',
        field: '',
        startYear: new Date().getFullYear(),
        endYear: undefined,
        current: false
      });
    }
  };

  const addSkillToExp = () => {
    if (skillInput.trim() && newExp.skills) {
      setNewExp({
        ...newExp,
        skills: [...(newExp.skills || []), skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const removeSkillFromExp = (index: number) => {
    if (newExp.skills) {
      const updated = [...newExp.skills];
      updated.splice(index, 1);
      setNewExp({ ...newExp, skills: updated });
    }
  };

  const removeExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Experience & Education</h3>
        <p className="text-gray-600">
          Tell us about your background to help calculate your contributor score
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('experience')}
          className={`flex-1 py-3 font-medium transition-colors relative
            ${activeTab === 'experience' 
              ? 'text-green-600 border-b-2 border-green-600' 
              : 'text-gray-500 hover:text-gray-700'}`}
        >
          <FaBriefcase className="inline mr-2" />
          Experience
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`flex-1 py-3 font-medium transition-colors relative
            ${activeTab === 'education' 
              ? 'text-green-600 border-b-2 border-green-600' 
              : 'text-gray-500 hover:text-gray-700'}`}
        >
          <FaGraduationCap className="inline mr-2" />
          Education
        </button>
      </div>

      {/* Experience Tab */}
      {activeTab === 'experience' && (
        <div className="space-y-4">
          {/* Add Experience Form */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Add Experience</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                value={newExp.title}
                onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
                placeholder="Job Title"
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                value={newExp.organization}
                onChange={(e) => setNewExp({ ...newExp, organization: e.target.value })}
                placeholder="Organization"
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="month"
                value={newExp.startDate}
                onChange={(e) => setNewExp({ ...newExp, startDate: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="month"
                value={newExp.endDate}
                onChange={(e) => setNewExp({ ...newExp, endDate: e.target.value })}
                disabled={newExp.current}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
              />
            </div>

            <label className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={newExp.current}
                onChange={(e) => setNewExp({ ...newExp, current: e.target.checked, endDate: '' })}
                className="w-4 h-4 text-green-600"
              />
              <span className="text-sm text-gray-700">I currently work here</span>
            </label>

            <textarea
              value={newExp.description}
              onChange={(e) => setNewExp({ ...newExp, description: e.target.value })}
              placeholder="Description of your role and achievements..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3"
            />

            {/* Skills for this role */}
            <div className="mb-3">
              <label className="block text-sm text-gray-600 mb-2">Skills used in this role</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="e.g., React, Leadership"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  onClick={addSkillToExp}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  <FaPlus />
                </button>
              </div>
              {newExp.skills && newExp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {newExp.skills.map((skill, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm flex items-center gap-1">
                      {skill}
                      <button onClick={() => removeSkillFromExp(idx)} className="hover:text-red-600">
                        <FaTrash className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={addExperience}
              disabled={!newExp.title || !newExp.organization || !newExp.startDate}
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:opacity-50"
            >
              Add Experience
            </button>
          </div>

          {/* Experience List */}
          {experience.map((exp, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between">
              <div>
                <h5 className="font-semibold text-gray-800">{exp.title}</h5>
                <p className="text-sm text-gray-600">{exp.organization}</p>
                <p className="text-xs text-gray-500">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </p>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => removeExperience(index)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Education Tab */}
      {activeTab === 'education' && (
        <div className="space-y-4">
          {/* Add Education Form */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Add Education</h4>
            
            <div className="space-y-3">
              <input
                type="text"
                value={newEdu.institution}
                onChange={(e) => setNewEdu({ ...newEdu, institution: e.target.value })}
                placeholder="Institution Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newEdu.degree}
                  onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })}
                  placeholder="Degree (e.g., BSc)"
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={newEdu.field}
                  onChange={(e) => setNewEdu({ ...newEdu, field: e.target.value })}
                  placeholder="Field of Study"
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={newEdu.startYear}
                  onChange={(e) => setNewEdu({ ...newEdu, startYear: parseInt(e.target.value) })}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                
                <select
                  value={newEdu.endYear}
                  onChange={(e) => setNewEdu({ ...newEdu, endYear: parseInt(e.target.value) })}
                  disabled={newEdu.current}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100"
                >
                  <option value="">End Year</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newEdu.current}
                  onChange={(e) => setNewEdu({ ...newEdu, current: e.target.checked, endYear: undefined })}
                  className="w-4 h-4 text-green-600"
                />
                <span className="text-sm text-gray-700">I am currently studying here</span>
              </label>
            </div>

            <button
              onClick={addEducation}
              disabled={!newEdu.institution || !newEdu.degree || !newEdu.field || !newEdu.startYear}
              className="w-full mt-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:opacity-50"
            >
              Add Education
            </button>
          </div>

          {/* Education List */}
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between">
              <div>
                <h5 className="font-semibold text-gray-800">{edu.degree} in {edu.field}</h5>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-xs text-gray-500">
                  {edu.startYear} - {edu.current ? 'Present' : edu.endYear}
                </p>
              </div>
              <button onClick={() => removeEducation(index)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          ))}
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
          onClick={() => onSubmit({ experience, education })}
          className="flex-1 bg-gradient-to-r from-green-600 to-green-500 
                   hover:from-green-700 hover:to-green-600 text-white font-medium
                   py-3 rounded-xl transition-all duration-300
                   shadow-lg shadow-green-500/20"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;