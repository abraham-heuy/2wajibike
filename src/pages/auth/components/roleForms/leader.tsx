// pages/auth/components/role-forms/LeaderAdditional.tsx
import { useState } from 'react';
import { FaIdCard, FaMapMarkerAlt, FaBuilding, FaPhone, FaEnvelope, FaUpload } from 'react-icons/fa';
import { counties, constituencies, wards } from '../../../../data/KenyaData';

interface LeaderAdditionalProps {
  data: any;
  onChange: (data: any) => void;
}

const LeaderAdditional = ({ onChange }: LeaderAdditionalProps) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    position: '',
    county: '',
    constituency: '',
    ward: '',
    politicalParty: '',
    termStart: '',
    officeEmail: '',
    officePhone: '',
    identificationDoc: null as File | null
  });

  const handleChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange(newData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newData = { ...formData, identificationDoc: e.target.files[0] };
      setFormData(newData);
      onChange(newData);
    }
  };

  const positions = [
    'Member of Parliament (MP)',
    'Senator',
    'Woman Representative',
    'Member of County Assembly (MCA)',
    'Governor',
    'Deputy Governor'
  ];

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
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="12345678"
            required
          />
        </div>
      </div>

      {/* Position */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Position <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBuilding className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={formData.position}
            onChange={(e) => handleChange('position', e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select Position</option>
            {positions.map((pos) => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
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
                     focus:outline-none focus:ring-2 focus:ring-green-500"
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
                   focus:outline-none focus:ring-2 focus:ring-green-500"
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
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          disabled={!formData.constituency}
          required
        >
          <option value="">Select Ward</option>
          {formData.constituency && wards[formData.constituency]?.map((ward: string) => (
            <option key={ward} value={ward}>{ward}</option>
          ))}
        </select>
      </div>

      {/* Political Party (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Political Party <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <input
          type="text"
          value={formData.politicalParty}
          onChange={(e) => handleChange('politicalParty', e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300/80 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="e.g., UDA, ODM, etc."
        />
      </div>

      {/* Term Start */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Term Start Year <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.termStart}
          onChange={(e) => handleChange('termStart', e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300/80 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="2022"
          required
        />
      </div>

      {/* Office Email (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Office Email <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={formData.officeEmail}
            onChange={(e) => handleChange('officeEmail', e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="office@example.com"
          />
        </div>
      </div>

      {/* Office Phone (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Office Phone <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaPhone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            value={formData.officePhone}
            onChange={(e) => handleChange('officePhone', e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="020 1234567"
          />
        </div>
      </div>

      {/* ID Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Upload ID/Passport <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center
                      hover:border-green-500 transition-colors cursor-pointer">
          <input
            type="file"
            id="id-upload"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />
          <label htmlFor="id-upload" className="cursor-pointer">
            <FaUpload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">
              {formData.identificationDoc ? formData.identificationDoc.name : 'Click to upload your ID/Passport'}
            </p>
            <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 5MB)</p>
          </label>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        <span className="text-red-500">*</span> Required fields
      </p>
    </div>
  );
};

export default LeaderAdditional;