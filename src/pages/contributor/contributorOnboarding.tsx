// pages/contributor/ContributorOnboarding.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCheckCircle } from 'react-icons/fa';
import GitHubConnect from './components/githubconnect';
import SkillsSetup from './components/skillsSetup';
import ExperienceForm from './components/experienceForm';
import ContributorScore from './components/contributorScore';
import type { ContributorProfile, ContributorSkill, ContributorExperience, ContributorEducation } from '../contributor/types/types';

const ContributorOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [githubData, setGithubData] = useState<ContributorProfile | null>(null);
  const [skills, setSkills] = useState<ContributorSkill[]>([]);
  const [experience, setExperience] = useState<ContributorExperience[]>([]);
  const [education, setEducation] = useState<ContributorEducation[]>([]);
  const [contributorScore, setContributorScore] = useState(0);
  const [scoreBreakdown, setScoreBreakdown] = useState({
    experience: 0,
    education: 0,
    skills: 0,
    contributions: 0,
    total: 0
  });

  const steps = [
    { number: 1, title: 'Connect GitHub' },
    { number: 2, title: 'Add Skills' },
    { number: 3, title: 'Experience' },
    { number: 4, title: 'Your Score' }
  ];

  const calculateScore = (
    skills: ContributorSkill[], 
    experience: ContributorExperience[], 
    education: ContributorEducation[]
  ) => {
    // Skills score (max 5)
    const skillsScore = Math.min(5, skills.length * 0.8 + 
      skills.reduce((acc, s) => acc + s.level, 0) / 5);
    
    // Experience score (max 5)
    const expScore = Math.min(5, experience.length * 1.2 + 
      experience.reduce((acc, e) => {
        const years = e.current ? 
          new Date().getFullYear() - new Date(e.startDate).getFullYear() : 
          (e.endDate ? new Date(e.endDate).getFullYear() - new Date(e.startDate).getFullYear() : 1);
        return acc + Math.min(5, years);
      }, 0) / 2);
    
    // Education score (max 5)
    const eduScore = Math.min(5, education.length * 1.5 + 
      education.reduce((acc, e) => {
        if (e.current) return acc + 3;
        const years = e.endYear && e.startYear ? e.endYear - e.startYear : 1;
        return acc + Math.min(5, years);
      }, 0) / 2);
    
    // Placeholder for contributions (will be updated with actual activity)
    const contribScore = 0.5;
    
    // Total score (weighted average)
    const total = (
      skillsScore * 0.3 + 
      expScore * 0.35 + 
      eduScore * 0.25 + 
      contribScore * 0.1
    );
    
    return {
      experience: expScore,
      education: eduScore,
      skills: skillsScore,
      contributions: contribScore,
      total
    };
  };

  const handleGitHubConnect = (data: ContributorProfile) => {
    setGithubData(data);
    setCurrentStep(2);
  };

  const handleSkillsSubmit = (submittedSkills: ContributorSkill[]) => {
    setSkills(submittedSkills);
    setCurrentStep(3);
  };

  const handleExperienceSubmit = (data: { experience: ContributorExperience[]; education: ContributorEducation[] }) => {
    setExperience(data.experience);
    setEducation(data.education);
    
    // Calculate score
    const breakdown = calculateScore(skills, data.experience, data.education);
    setScoreBreakdown(breakdown);
    setContributorScore(breakdown.total);
    
    setCurrentStep(4);
  };

  const handleComplete = () => {
    // Save all contributor data to backend
    const completeData = {
      profile: githubData,
      skills,
      experience,
      education,
      score: contributorScore,
      scoreBreakdown,
      joinedAt: new Date().toISOString(),
      availability: 'few-hours'
    };
    
    console.log('Contributor onboarding complete:', completeData);
    // Redirect to dashboard
    window.location.href = '/contributor/dashboard';
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
      >
        <FaHome className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
      </Link>

      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-3 shadow-lg">
            <span className="text-xl font-bold text-white">C</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Become a Contributor</h2>
          <p className="text-sm text-gray-600 mt-1">Join the team building Tuwajibike</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 relative">
                {index < steps.length - 1 && (
                  <div className={`absolute top-5 left-1/2 w-full h-0.5 
                    ${currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
                
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
            <GitHubConnect onConnect={handleGitHubConnect} />
          )}

          {currentStep === 2 && (
            <SkillsSetup
              initialSkills={skills}
              onSubmit={handleSkillsSubmit}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {currentStep === 3 && (
            <ExperienceForm
              initialExperience={experience}
              initialEducation={education}
              onSubmit={handleExperienceSubmit}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <ContributorScore
                score={contributorScore}
                breakdown={scoreBreakdown}
                skillsCount={skills.length}
                experienceCount={experience.length}
                educationCount={education.length}
              />

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700
                           rounded-xl hover:bg-gray-50 transition-all duration-300
                           font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleComplete}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 
                           hover:from-green-700 hover:to-green-600 text-white font-medium
                           py-3 rounded-xl transition-all duration-300
                           shadow-lg shadow-green-500/20"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributorOnboarding;