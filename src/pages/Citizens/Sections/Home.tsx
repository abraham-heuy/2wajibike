// pages/citizen/pages/Home.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaStar, FaCamera, FaQuestionCircle, FaFlag,
  FaCheckCircle, FaClock, FaMapMarkerAlt, FaTimes,
  FaCalendarAlt, FaUsers, FaBullhorn, FaNewspaper,
  FaFilter
} from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import EventsSection from '../components/eventSection';
import ArticleModal from '../components/articleModal';
import EventModal from '../components/eventModal';

const CitizenHome = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [verificationFilter, setVerificationFilter] = useState('all');

  // Articles data
  const articles = [
    {
      id: 1,
      title: 'Understanding County Budgets',
      excerpt: 'A comprehensive guide to how your county allocates funds and how citizens can track spending to ensure accountability.',
      content: `County budgets in Kenya are governed by the County Governments Act and the Public Finance Management Act. 
      Each county develops an annual budget that outlines revenue projections and expenditure plans across various sectors 
      including health, infrastructure, agriculture, and education. Citizens have a constitutional right to participate in 
      the budget process through public participation forums held at the ward level. This article breaks down the key 
      stages of the budget cycle, from planning to implementation, and provides practical tips on how to track whether 
      allocated funds are actually spent as intended.`,
      author: 'Catherine Mwangi',
      date: '2024-03-15',
      readTime: '5 min',
      category: 'Governance',
      image: null,
    },
    {
      id: 2,
      title: 'New Public Participation Guidelines',
      excerpt: 'How to effectively engage in county assembly hearings and make your voice heard on development projects.',
      content: `The County Assembly recently approved new guidelines for public participation that aim to make the process 
      more accessible and impactful. Key changes include: extended notice periods for hearings (minimum 14 days), 
      online submission options for memoranda, and requirements for county officials to provide written responses to 
      public input. This article explains how you can use these new guidelines to advocate for projects in your ward, 
      what documents to prepare before attending hearings, and how to follow up after submissions to ensure your voice 
      is considered in decision-making.`,
      author: 'James Otieno',
      date: '2024-03-10',
      readTime: '8 min',
      category: 'Civic Education',
      image: null,
    },
  ];

  // Summary stats - clean and minimal
  const stats = [
    { label: 'Leaders Rated', value: '24', change: '+3 this week', icon: <FaStar className="text-gray-600" /> },
    { label: 'Projects Verified', value: '12', change: '2 pending', icon: <FaCheckCircle className="text-gray-600" /> },
    { label: 'Questions Asked', value: '8', change: '2 awaiting response', icon: <FaQuestionCircle className="text-gray-600" /> },
  ];

  const recentActivity = [
    { 
      id: 1, 
      action: 'You rated Kasarani MP', 
      details: 'Rated 4/5 on project delivery',
      time: '2 hours ago', 
      icon: <FaStar className="text-gray-500" /> 
    },
    { 
      id: 2, 
      action: 'Verified project', 
      details: 'Market construction completed',
      time: '1 day ago', 
      icon: <FaCamera className="text-gray-500" /> 
    },
    { 
      id: 3, 
      action: 'Question asked', 
      details: 'About road repairs in your ward',
      time: '2 days ago', 
      icon: <FaQuestionCircle className="text-gray-500" /> 
    },
  ];

  const quickActions = [
    { path: '/citizen/dashboard/rate-leaders', label: 'Rate Leaders', icon: <FaStar /> },
    { path: '/citizen/dashboard/verify-projects', label: 'Verify Projects', icon: <FaCamera /> },
    { path: '/citizen/dashboard/ask-questions', label: 'Ask Question', icon: <FaQuestionCircle /> },
    { path: '/citizen/dashboard/report-issues', label: 'Report Issue', icon: <FaFlag /> },
  ];

  const leaders = [
    { name: 'Jane Wanjiku', position: 'Member of Parliament', area: 'Kasarani', rating: 4.2, reviews: 128 },
    { name: 'John Otieno', position: 'MCA', area: 'Kasarani Ward', rating: 3.8, reviews: 94 },
    { name: 'Mary Mwangi', position: 'Woman Representative', area: 'Nairobi', rating: 4.5, reviews: 203 },
  ];

  // Verification items with filters
  const verificationItems = [
    { 
      id: 1,
      title: 'Market construction', 
      location: 'Kasarani', 
      reporters: 3,
      status: 'pending',
      category: 'infrastructure',
      timeAgo: '2 days ago'
    },
    { 
      id: 2,
      title: 'Road repairs', 
      location: 'Mwiki', 
      status: 'pending',
      category: 'infrastructure',
      timeAgo: '2 days ago'
    },
    { 
      id: 3,
      title: 'School renovation', 
      location: 'Kasarani', 
      reporters: 5,
      status: 'verified',
      category: 'education',
      timeAgo: '1 week ago'
    },
  ];

  const categories = ['all', 'infrastructure', 'education', 'health'];
  
  const filteredVerifications = verificationItems.filter(item => 
    verificationFilter === 'all' ? true : item.category === verificationFilter
  );

  const pendingCount = verificationItems.filter(item => item.status === 'pending').length;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
            Good evening, John
          </h1>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FaMapMarkerAlt className="w-3 h-3" />
            Kasarani, Nairobi
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Last active 5 mins ago</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-2xl font-light text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Dashboard Purpose */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
        <p className="text-sm text-gray-600 leading-relaxed">
          This dashboard helps you track leader performance, verify community projects, 
          and participate in local governance. Your contributions help build transparency 
          and accountability in Kenyan leadership.
        </p>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-sm font-medium text-gray-700 mb-3 tracking-wide">QUICK ACTIONS</h2>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 
                       rounded-full text-sm text-gray-700 hover:border-green-500 hover:bg-green-50 
                       hover:text-green-700 transition-all duration-200"
            >
              <span className="text-gray-500 group-hover:text-green-600">{action.icon}</span>
              <span>{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <EventsSection onEventClick={setSelectedEvent} />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h2 className="text-sm font-medium text-gray-700 mb-4 tracking-wide">RECENT ACTIVITY</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.details}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-xs text-gray-500 hover:text-green-600 flex items-center gap-1">
            View all activity
            <HiOutlineArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Leaders Overview */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h2 className="text-sm font-medium text-gray-700 mb-4 tracking-wide">LOCAL LEADERS</h2>
          <div className="space-y-4">
            {leaders.map((leader, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-sm flex-shrink-0">
                    {leader.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{leader.name}</p>
                    <p className="text-xs text-gray-500 truncate">{leader.position} · {leader.area}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                  <FaStar className="w-3 h-3 text-gray-400" />
                  <span className="text-sm text-gray-700">{leader.rating}</span>
                  <span className="text-xs text-gray-400 ml-1">({leader.reviews})</span>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/citizen/dashboard/rate-leaders"
            className="mt-4 inline-block text-xs text-gray-500 hover:text-green-600"
          >
            View all leaders →
          </Link>
        </div>
      </div>

      {/* Pending Verifications with Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium text-gray-700 tracking-wide">PENDING VERIFICATIONS</h2>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
              {pendingCount} pending
            </span>
          </div>
          
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setVerificationFilter(cat)}
                className={`
                  inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs
                  transition-all duration-200
                  ${verificationFilter === cat 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                <span>{cat === 'all' ? 'All' : cat}</span>
                {verificationFilter === cat && (
                  <FaTimes 
                    className="w-3 h-3 cursor-pointer hover:text-gray-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setVerificationFilter('all');
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredVerifications
            .filter(item => item.status === 'pending')
            .map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    {item.location} · Reported by {item.reporters || 1} neighbor{item.reporters !== 1 ? 's' : ''}
                  </p>
                </div>
                <button className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  Verify
                </button>
              </div>
            ))}
        </div>

        {filteredVerifications.filter(item => item.status === 'pending').length === 0 && (
          <p className="text-sm text-gray-500 text-center py-4">No pending verifications</p>
        )}
      </div>

      {/* Articles Section - Each article is clickable */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-700 tracking-wide">ARTICLES & UPDATES</h2>
        </div>
        
        <div className="space-y-4">
          {articles.map((article) => (
            <div 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 mb-1">{article.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{article.excerpt}</p>
                <p className="text-xs text-gray-400 mt-1">{article.readTime} read · {new Date(article.date).toLocaleDateString('en-KE', { month: 'short', day: 'numeric' })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <ArticleModal 
        isOpen={!!selectedArticle}
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)} 
      />

      <EventModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)} 
      />
    </div>
  );
};

export default CitizenHome;