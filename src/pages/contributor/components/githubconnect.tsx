// pages/contributor/components/GitHubConnect.tsx
import { useState } from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

interface GitHubConnectProps {
  onConnect: (githubData: any) => void;
}

const GitHubConnect = ({ onConnect }: GitHubConnectProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [githubUsername, setGithubUsername] = useState('');

  // Simulate GitHub OAuth
  const handleGitHubConnect = () => {
    setIsConnecting(true);
    
    // Simulate OAuth flow
    setTimeout(() => {
      // Mock GitHub user data
      const mockGitHubData = {
        githubId: '12345678',
        githubUsername: githubUsername || 'kenyan-dev',
        avatarUrl: 'https://avatars.githubusercontent.com/u/12345678',
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Full-stack developer passionate about civic tech',
        location: 'Nairobi, Kenya',
        website: 'https://johndoe.dev',
        twitter: '@johndoe',
        publicRepos: 24,
        followers: 156,
        following: 89,
        joinedYear: 2018
      };
      
      onConnect(mockGitHubData);
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4">
          <FaGithub className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Connect with GitHub</h3>
        <p className="text-gray-600">
          Start your contributor journey by connecting your GitHub account
        </p>
      </div>

      {/* GitHub Username Input (for demo - in production this would be OAuth) */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          GitHub Username (Demo)
        </label>
        <input
          type="text"
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
          placeholder="e.g., kenyan-dev"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-green-500
                   transition-all duration-300"
        />
        <p className="text-xs text-gray-500 mt-2">
          In production, this would be a proper OAuth flow
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
        <h4 className="font-semibold text-green-800 mb-2">Why connect GitHub?</h4>
        <ul className="space-y-2 text-sm text-green-700">
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Automatically import your public repositories</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Showcase your contribution history</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Get matched with issues based on your skills</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>Build your contributor score</span>
          </li>
        </ul>
      </div>

      {/* Connect Button */}
      <button
        onClick={handleGitHubConnect}
        disabled={isConnecting}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium
                 py-4 px-6 rounded-xl transition-all duration-300
                 shadow-lg hover:shadow-xl disabled:opacity-70
                 flex items-center justify-center gap-3 group"
      >
        {isConnecting ? (
          <span>Connecting...</span>
        ) : (
          <>
            <FaGithub className="w-5 h-5" />
            Continue with GitHub
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {/* Skip option */}
      <p className="text-center text-sm text-gray-500">
        Prefer to set up manually?{' '}
        <button className="text-green-600 hover:text-green-700 font-medium">
          Skip GitHub
        </button>
      </p>
    </div>
  );
};

export default GitHubConnect;