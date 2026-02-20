// pages/auth/components/AdditionalInfoForm.tsx
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import type { UserRole } from '../components/types/types';
import CitizenAdditional from './roleForms/Citizen';
import LeaderAdditional from './roleForms/leader';
import AspirantAdditional from './roleForms/aspirant';

interface AdditionalInfoFormProps {
  role: UserRole;
  onSubmit: (data: any) => void;
  onBack: () => void;
}

const AdditionalInfoForm = ({ role, onSubmit, onBack }: AdditionalInfoFormProps) => {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const renderRoleForm = () => {
    switch(role) {
      case 'citizen':
        return <CitizenAdditional data={formData} onChange={setFormData} />;
      case 'leader':
        return <LeaderAdditional data={formData} onChange={setFormData} />;
      case 'aspirant':
        return <AspirantAdditional data={formData} onChange={setFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Additional Information</h3>
        <p className="text-sm text-gray-600">
          Tell us more about yourself to complete your profile
        </p>
      </div>

      {renderRoleForm()}

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 border-2 border-gray-300 text-gray-700
                   rounded-xl hover:bg-gray-50 transition-all duration-300
                   flex items-center justify-center gap-2 font-medium"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 bg-gradient-to-r from-green-600 to-green-500 
                   hover:from-green-700 hover:to-green-600 text-white font-medium
                   py-3 rounded-xl transition-all duration-300
                   shadow-lg shadow-green-500/20"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;