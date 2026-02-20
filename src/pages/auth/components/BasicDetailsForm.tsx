// pages/auth/components/BasicDetailsForm.tsx
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

interface BasicDetailsFormProps {
  role: string;
  onSubmit: (data: any) => void;
  onBack: () => void;
}

const BasicDetailsForm = ({ role, onSubmit, onBack }: BasicDetailsFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?254\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid Kenyan number (e.g., 0712345678)';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Role Badge */}
      <div className="text-center mb-6">
        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Signing up as: {role === 'citizen' ? 'Citizen' : role === 'leader' ? 'Current Leader' : 'Aspiring Candidate'}
        </span>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaUser className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition-all
                       ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Doe"
          />
        </div>
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition-all
                       ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="you@example.com"
          />
        </div>
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaPhone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition-all
                       ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="0712345678"
          />
        </div>
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        <p className="mt-1 text-xs text-gray-500">We'll verify your phone to prevent duplicate accounts</p>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className={`block w-full pl-10 pr-12 py-3 border rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition-all
                       ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
          </button>
        </div>
        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            className={`block w-full pl-10 pr-12 py-3 border rounded-xl
                       focus:outline-none focus:ring-2 focus:ring-green-500 transition-all
                       ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showConfirmPassword ? <FaEyeSlash className="h-5 w-5 text-gray-400" /> : <FaEye className="h-5 w-5 text-gray-400" />}
          </button>
        </div>
        {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
      </div>

      {/* Terms Agreement */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          checked={formData.agreeToTerms}
          onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
          className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          I agree to the{' '}
          <a href="#" className="text-green-600 hover:text-green-700">Terms of Service</a> and{' '}
          <a href="#" className="text-green-600 hover:text-green-700">Privacy Policy</a>{' '}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.agreeToTerms && <p className="text-xs text-red-500">{errors.agreeToTerms}</p>}

      {/* Form Actions */}
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 px-4 border-2 border-gray-300 text-gray-700
                   rounded-xl hover:bg-gray-50 transition-all duration-300
                   font-medium"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-green-600 to-green-500 
                   hover:from-green-700 hover:to-green-600 text-white font-medium
                   py-3 px-4 rounded-xl transition-all duration-300
                   shadow-lg shadow-green-500/20"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default BasicDetailsForm;