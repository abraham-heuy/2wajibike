// pages/auth/SignUp.tsx
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHome, FaCheckCircle } from 'react-icons/fa';
import RoleSelector from './components/RoleSelector';
import BasicDetailsForm from './components/BasicDetailsForm';
import type { UserRole, SignUpFormData, BaseFormData, CitizenAdditionalData, LeaderAdditionalData, AspirantAdditionalData } from './components/types/types';
import VerificationStep from './components/VerificationStep';
import AdditionalInfoForm from './components/additionalInfoForm';

const SignUp = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<UserRole>('citizen');
  const [formData, setFormData] = useState<Partial<SignUpFormData>>({
    role: 'citizen',
    verification: { method: 'email', code: '', verified: false }
  });

  // Check if role was passed from CTA buttons
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role') as UserRole | null;
    if (roleParam && ['citizen', 'leader', 'aspirant'].includes(roleParam)) {
      setSelectedRole(roleParam);
      setFormData(prev => ({ ...prev, role: roleParam }));
      setCurrentStep(2); // Skip to step 2 if role is preselected
    }
  }, [location]);

  const steps = [
    { number: 1, title: 'Choose Role' },
    { number: 2, title: 'Basic Details' },
    { number: 3, title: 'Verify' },
    { number: 4, title: 'Additional Info' }
  ];

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setFormData(prev => ({ ...prev, role: role }));
  };

  const handleBasicDetailsSubmit = (data: BaseFormData) => {
    setFormData(prev => ({ 
      ...prev, 
      basic: data 
    }));
    setCurrentStep(3);
  };

  const handleVerificationComplete = (verificationData: { method: 'email' | 'sms', code: string, verified: boolean }) => {
    setFormData(prev => ({
      ...prev,
      verification: verificationData
    }));
    setCurrentStep(4);
  };

  const handleAdditionalInfoSubmit = (data: CitizenAdditionalData | LeaderAdditionalData | AspirantAdditionalData) => {
    const completeFormData: SignUpFormData = {
      role: selectedRole,
      basic: formData.basic!,
      additional: data,
      verification: formData.verification!
    };
    
    console.log('Final form submission:', completeFormData);
    setCurrentStep(5); // Success step
  };

  const getRoleDisplay = () => {
    switch(selectedRole) {
      case 'citizen': return 'Citizen';
      case 'leader': return 'Current Leader';
      case 'aspirant': return 'Aspiring Candidate';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-green-50/30 flex items-center justify-center p-4 relative">
      {/* Home Icon */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10
                   w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm
                   flex items-center justify-center shadow-md
                   hover:bg-green-600 hover:text-white transition-all duration-300
                   border border-gray-200/50 group"
        aria-label="Go to home"
      >
        <FaHome className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
      </Link>

      <div className="max-w-2xl w-full">
        {/* Logo and Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-3 shadow-lg shadow-green-500/20">
            <span className="text-xl font-bold text-white">T</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-600 mt-1">Join Tuwajibike and help build a transparent Kenya</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute top-5 left-1/2 w-full h-0.5 
                    ${currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
                
                {/* Step Circle */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${currentStep > step.number 
                      ? 'bg-green-500 text-white' 
                      : currentStep === step.number
                        ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                        : 'bg-gray-200 text-gray-500'
                    } transition-all duration-300`}>
                    {currentStep > step.number ? (
                      <FaCheckCircle className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`text-xs mt-2 font-medium
                    ${currentStep >= step.number ? 'text-gray-700' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200/50">
          {currentStep === 1 && (
            <RoleSelector
              selectedRole={selectedRole}
              onSelect={handleRoleSelect}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <BasicDetailsForm
              role={selectedRole}
              onSubmit={handleBasicDetailsSubmit}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <VerificationStep
              email={formData.basic?.email || ''}
              phone={formData.basic?.phone || ''}
              onVerificationComplete={handleVerificationComplete}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 4 && (
            <AdditionalInfoForm
              role={selectedRole}
              onSubmit={handleAdditionalInfoSubmit}
              onBack={() => setCurrentStep(3)}
            />
          )}

          {currentStep === 5 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Account Created Successfully!</h3>
              <p className="text-gray-600 mb-6">
                Your {getRoleDisplay()} account has been created. We've sent a verification email to {formData.basic?.email}.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                ⏳ Your account is now active. You can sign in below.
              </p>
              <Link
                to="/signin"
                className="inline-block bg-gradient-to-r from-green-600 to-green-500 
                         hover:from-green-700 hover:to-green-600 text-white font-medium
                         py-3 px-8 rounded-xl transition-all duration-300
                         shadow-lg shadow-green-500/20"
              >
                Go to Sign In
              </Link>
            </div>
          )}
        </div>

        {/* Sign In Link */}
        {currentStep < 5 && (
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/signin" className="text-green-600 hover:text-green-700 font-medium transition-colors">
              Sign in here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;