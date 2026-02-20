// pages/auth/components/RoleSelector.tsx
import { FaUsers, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import { GiKenya } from 'react-icons/gi';
import type { UserRole } from '../components/types/types';

interface RoleSelectorProps {
  selectedRole: UserRole;
  onSelect: (role: UserRole) => void;
  onNext: () => void;
}

const RoleSelector = ({ selectedRole, onSelect, onNext }: RoleSelectorProps) => {
  const roles = [
    {
      id: 'citizen' as UserRole,
      title: 'Citizen',
      icon: FaUsers,
      description: 'Rate leaders, verify projects, hold them accountable',
      color: 'green',
      features: ['Rate leaders 1-5', 'Upload proof', 'Ask questions']
    },
    {
      id: 'leader' as UserRole,
      title: 'Current Leader',
      icon: FaUserTie,
      description: 'Showcase your track record, respond to citizens',
      color: 'blue',
      features: ['Upload projects', 'Monitor ratings', 'Engage with citizens']
    },
    {
      id: 'aspirant' as UserRole,
      title: 'Aspiring Candidate',
      icon: FaUserGraduate,
      description: 'Share vision, crowdfund, connect with voters',
      color: 'purple',
      features: ['Free profile', 'Crowdfunding', 'Voter engagement']
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Kenya icon */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <GiKenya className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Who are you?</h3>
        <p className="text-gray-600">Select your role to get started</p>
      </div>

      {/* Role Cards */}
      <div className="space-y-4">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          
          return (
            <button
              key={role.id}
              onClick={() => onSelect(role.id)}
              className={`w-full p-5 rounded-xl border-2 transition-all duration-300
                         ${isSelected 
                           ? `border-${role.color}-500 bg-${role.color}-50 shadow-lg` 
                           : 'border-gray-200 hover:border-gray-300 bg-white'
                         }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${role.color}-100 flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 text-${role.color}-600`} />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-left">
                  <h4 className={`text-lg font-bold mb-1 ${
                    isSelected ? `text-${role.color}-700` : 'text-gray-800'
                  }`}>
                    {role.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{role.description}</p>
                  
                  {/* Features as chips */}
                  <div className="flex flex-wrap gap-2">
                    {role.features.map((feature, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded-full
                        ${isSelected 
                          ? `bg-${role.color}-200 text-${role.color}-700` 
                          : 'bg-gray-100 text-gray-600'
                        }`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Radio indicator */}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                  ${isSelected 
                    ? `border-${role.color}-500` 
                    : 'border-gray-300'
                  }`}>
                  {isSelected && (
                    <div className={`w-2.5 h-2.5 rounded-full bg-${role.color}-500`}></div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!selectedRole}
        className="w-full mt-6 bg-gray-800 hover:bg-green-700 text-white font-medium
                 py-3.5 px-4 rounded-xl transition-all duration-300
                 disabled:opacity-50 disabled:cursor-not-allowed
                 shadow-lg disabled:shadow-none"
      >
        Continue
      </button>

      {/* Anti-spam note */}
      <p className="text-xs text-center text-gray-500">
        ℹ️ One account per person. We verify to prevent multiple accounts.
      </p>
    </div>
  );
};

export default RoleSelector;