// pages/auth/components/role-forms/CitizenAdditional.tsx
import { useState } from 'react';
import { FaMapMarkerAlt, FaIdCard } from 'react-icons/fa';
import { counties, constituencies, wards } from '../../../../data/KenyaData'; 

interface CitizenAdditionalProps {
  data: any;
  onChange: (data: any) => void;
}

const CitizenAdditional = ({ onChange }: CitizenAdditionalProps) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    county: '',
    constituency: '',
    ward: '',
    preferredLanguage: 'english' as 'english' | 'swahili' | 'both'
  });

  const handleChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange(newData);
  };

  return (
    <div className="space-y-4">
      {/* ID Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          ID/Passport Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaIdCard className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={formData.idNumber}
            onChange={(e) => handleChange('idNumber', e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                     transition-all duration-300 bg-white/90"
            placeholder="12345678"
            required
          />
        </div>
      </div>

      {/* County */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          County <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={formData.county}
            onChange={(e) => handleChange('county', e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                     transition-all duration-300 bg-white/90 appearance-none"
            required
          >
            <option value="">Select County</option>
            {counties.map((county) => (
              <option key={county} value={county}>{county}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Constituency */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Constituency <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.constituency}
          onChange={(e) => handleChange('constituency', e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300/80 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                   transition-all duration-300 bg-white/90"
          disabled={!formData.county}
          required
        >
          <option value="">Select Constituency</option>
          {formData.county && constituencies[formData.county]?.map((constituency: string) => (
            <option key={constituency} value={constituency}>{constituency}</option>
          ))}
        </select>
      </div>

      {/* Ward */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Ward <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.ward}
          onChange={(e) => handleChange('ward', e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300/80 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                   transition-all duration-300 bg-white/90"
          disabled={!formData.constituency}
          required
        >
          <option value="">Select Ward</option>
          {formData.constituency && wards[formData.constituency]?.map((ward: string) => (
            <option key={ward} value={ward}>{ward}</option>
          ))}
        </select>
      </div>

      {/* Preferred Language */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Preferred Language <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['english', 'swahili', 'both'].map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => handleChange('preferredLanguage', lang)}
              className={`py-2 px-3 rounded-lg border-2 transition-all duration-300
                ${formData.preferredLanguage === lang 
                  ? 'border-green-500 bg-green-50 text-green-700' 
                  : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
            >
              <span className="text-sm font-medium capitalize">{lang}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        <span className="text-red-500">*</span> Required fields
      </p>
    </div>
  );
};

export default CitizenAdditional;