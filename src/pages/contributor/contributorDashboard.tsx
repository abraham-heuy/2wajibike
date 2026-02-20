// pages/contributor/ContributorDashboard.tsx
import { useState } from 'react';
import DashboardNav from './dashboard/dashboardNav';
import ScoreCard from './dashboard/scoreCard';
import IssueFilters from './dashboard/issueFilters';
import IssueList from './dashboard/issueList';
import RecentActivity from './dashboard/recentActivity';
import ClaimIssueModal from './dashboard/claimIssueModal';
import UpdateSkillsModal from './dashboard/updateSkillsModal';
import type { ContributorData, Notification, Issue } from './types/types';
import StatsCards from './dashboard/statsCard';

const ContributorDashboard = () => {
  const [contributorData] = useState<ContributorData>({
    name: 'John Doe',
    github: 'kenyan-dev',
    email: 'john.doe@example.com',
    avatar: 'JD',
    score: 3.8,
    breakdown: {
      experience: 4.2,
      education: 3.5,
      skills: 4.0,
      contributions: 2.5,
      total: 3.8
    },
    skillsCount: 12,
    experienceCount: 3,
    educationCount: 2,
    contributions: 15,
    level: 3,
    nextLevelScore: 4.5,
    achievements: 5,
    skills: [
      { name: 'React', level: 4, years: 3 },
      { name: 'TypeScript', level: 4, years: 2 },
      { name: 'Node.js', level: 3, years: 2 },
      { name: 'Python', level: 3, years: 1.5 },
      { name: 'UI/UX', level: 2, years: 1 },
    ]
  });

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'issue',
      title: 'New issue matching your skills',
      description: 'Issue #234: Implement user authentication in React',
      timestamp: '5 min ago',
      read: false,
      link: '/issues/234'
    },
    {
      id: '2',
      type: 'mention',
      title: '@developer_ke mentioned you',
      description: 'Asked for your input on the database schema',
      timestamp: '2 hours ago',
      read: false
    },
    {
      id: '3',
      type: 'review',
      title: 'PR #128 needs review',
      description: 'Your review is requested on the new API endpoint',
      timestamp: '1 day ago',
      read: true
    },
    {
      id: '4',
      type: 'achievement',
      title: 'New Achievement Unlocked!',
      description: 'You\'ve completed 10 issues - "Rising Star"',
      timestamp: '2 days ago',
      read: true
    }
  ]);

  const [issues, setIssues] = useState<Issue[]>([
    {
      id: '234',
      title: 'Implement user authentication',
      description: 'Create a secure authentication system using JWT tokens. Include login, register, password reset, and email verification flows.',
      skills: ['React', 'TypeScript', 'Node.js', 'JWT'],
      difficulty: 'intermediate',
      priority: 'high',
      estimatedHours: 8,
      points: 50,
      repository: 'tuwajibike/frontend',
      labels: ['feature', 'auth', 'security']
    },
    {
      id: '235',
      title: 'Fix navigation responsive bug',
      description: 'The mobile navigation menu is not closing properly after clicking a link. Fix the state management and ensure smooth transitions.',
      skills: ['React', 'CSS', 'Responsive Design'],
      difficulty: 'beginner',
      priority: 'medium',
      estimatedHours: 3,
      points: 20,
      repository: 'tuwajibike/frontend',
      labels: ['bug', 'mobile', 'UI']
    },
    {
      id: '236',
      title: 'Design system components',
      description: 'Create reusable UI components following our design system: buttons, modals, cards, and form inputs with proper accessibility.',
      skills: ['React', 'TailwindCSS', 'Figma'],
      difficulty: 'intermediate',
      priority: 'medium',
      estimatedHours: 12,
      points: 75,
      repository: 'tuwajibike/design-system',
      labels: ['design', 'components', 'accessibility']
    },
    {
      id: '237',
      title: 'API rate limiting',
      description: 'Implement rate limiting for public API endpoints to prevent abuse. Use Redis for distributed rate tracking.',
      skills: ['Node.js', 'Redis', 'Security'],
      difficulty: 'advanced',
      priority: 'critical',
      estimatedHours: 6,
      points: 100,
      repository: 'tuwajibike/backend',
      labels: ['backend', 'security', 'performance']
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const markNotificationAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleClaimIssue = (issue: Issue) => {
    setSelectedIssue(issue);
    setShowIssueModal(true);
  };

  const confirmClaimIssue = () => {
    if (selectedIssue) {
      setIssues(issues.map(i => 
        i.id === selectedIssue.id 
          ? { ...i, claimedBy: contributorData.github, claimedAt: new Date().toISOString() }
          : i
      ));
      
      const newNotification: Notification = {
        id: Date.now().toString(),
        type: 'issue',
        title: 'Issue claimed successfully',
        description: `You've claimed issue #${selectedIssue.id}: ${selectedIssue.title}`,
        timestamp: 'just now',
        read: false
      };
      setNotifications([newNotification, ...notifications]);
      
      setShowIssueModal(false);
      setSelectedIssue(null);
    }
  };

  const filteredIssues = issues
    .filter(issue => !issue.claimedBy)
    .filter(issue => 
      filter === 'all' || 
      (filter === 'beginner' && issue.difficulty === 'beginner') ||
      (filter === 'my-skill' && issue.skills.some(s => 
        contributorData.skills.map(sk => sk.name).includes(s)
      ))
    )
    .filter(issue => 
      searchTerm === '' || 
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav
        contributorData={contributorData}
        notifications={notifications}
        unreadCount={notifications.filter(n => !n.read).length}
        onMarkAsRead={markNotificationAsRead}
        onMarkAllAsRead={markAllNotificationsAsRead}
        onUpdateSkills={() => setShowSkillsModal(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Mobile: Stack vertically, Desktop: 3 columns */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Score (full width on mobile, 1/3 on desktop) */}
          <div className="w-full lg:w-1/3">
            <ScoreCard
              contributorData={contributorData}
              onUpdateSkills={() => setShowSkillsModal(true)}
            />
          </div>

          {/* Right Column - Content (full width on mobile, 2/3 on desktop) */}
          <div className="w-full lg:w-2/3 space-y-6">
            <StatsCards
              availableIssues={filteredIssues.length}
              contributions={contributorData.contributions}
              fellowContributors={28}
              currentScore={contributorData.score}
            />

            <IssueFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filter={filter}
              onFilterChange={setFilter}
            />

            <IssueList
              issues={filteredIssues}
              contributorSkills={contributorData.skills}
              onClaimIssue={handleClaimIssue}
            />

            <RecentActivity />
          </div>
        </div>
      </main>

      <ClaimIssueModal
        isOpen={showIssueModal}
        issue={selectedIssue}
        contributorSkills={contributorData.skills}
        onClose={() => setShowIssueModal(false)}
        onConfirm={confirmClaimIssue}
      />

      <UpdateSkillsModal
        isOpen={showSkillsModal}
        skills={contributorData.skills}
        onClose={() => setShowSkillsModal(false)}
        onSave={(updatedSkills) => {
          console.log('Skills updated:', updatedSkills);
          setShowSkillsModal(false);
        }}
      />
    </div>
  );
};

export default ContributorDashboard;