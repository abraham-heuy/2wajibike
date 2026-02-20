// pages/auth/components/role-forms/AspirantAdditional.tsx
import { useState } from 'react';
import { FaIdCard, FaMapMarkerAlt, FaBuilding, FaLink, FaUpload } from 'react-icons/fa';

interface AspirantAdditionalProps {
  data: any;
  onChange: (data: any) => void;
}

const AspirantAdditional = ({ data, onChange }: AspirantAdditionalProps) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    aspiringPosition: '',
    county: '',
    constituency: '',
    ward: '',
    politicalParty: '',
    manifesto: '',
    campaignWebsite: '',
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

  const counties = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Kiambu', 'Nakuru', 'Uasin Gishu'
    // Add all 47 counties
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

      {/* Aspiring Position */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Aspiring Position <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBuilding className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={formData.aspiringPosition}
            onChange={(e) => handleChange('aspiringPosition', e.target.value)}
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
        <input
          type="text"
          value={formData.constituency}
          onChange={(e) => handleChange('constituency', e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300/80 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="e.g., Kasarani"
          required
        />
      </div>

      {/* Ward */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Ward <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.ward}
          onChange={(e) => handleChange('ward', e.target.value)}
          className="block w-full px-4 py-3 border border-gray-300/80 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="e.g., Kasarani Ward"
          required
        />
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

      {/* Manifesto (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Manifesto Summary <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <textarea
          value={formData.manifesto}
          onChange={(e) => handleChange('manifesto', e.target.value)}
          rows={4}
          className="block w-full px-4 py-3 border border-gray-300/80 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Share your vision and key promises..."
        />
      </div>

      {/* Campaign Website (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Campaign Website <span className="text-gray-400 text-xs">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLink className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            value={formData.campaignWebsite}
            onChange={(e) => handleChange('campaignWebsite', e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="https://example.com"
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

export default AspirantAdditional;