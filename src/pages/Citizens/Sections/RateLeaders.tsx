// pages/citizen/pages/RateLeaders.tsx
import { useState } from 'react';
import { 
  FaStar, FaThumbsUp, FaFilter, FaSearch, 
  FaMapMarkerAlt, FaFileAlt,
 FaEye, FaHistory,  FaLocationArrow
} from 'react-icons/fa';

import PolicyModal from '../components/policyModal';
import RatingModal from '../components/RatingModal';
import RatingHistoryModal from '../components/RatingHistoryModal';

const RateLeaders = () => {
  const [selectedLeader, setSelectedLeader] = useState<any>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<any>(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'leaders' | 'aspirants'>('leaders');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Leaders data
  const leaders = [
    {
      id: 1,
      name: 'Jane Wanjiku',
      position: 'Member of Parliament',
      area: 'Kasarani',
      party: 'UDA',
      rating: 4.2,
      totalRatings: 128,
      categories: {
        projectDelivery: 4.5,
        accessibility: 4.0,
        communication: 4.2,
        integrity: 4.1,
      },
      image: null,
      lastUpdated: '2024-03-15',
      promises: [
        { text: 'Market construction', status: 'completed', year: 2023 },
        { text: 'Road repairs in Mwiki', status: 'in-progress', year: 2024 },
        { text: 'Youth employment program', status: 'pending', year: 2024 },
      ],
    },
    {
      id: 2,
      name: 'John Otieno',
      position: 'MCA',
      area: 'Kasarani Ward',
      party: 'ODM',
      rating: 3.8,
      totalRatings: 94,
      categories: {
        projectDelivery: 3.5,
        accessibility: 4.2,
        communication: 3.8,
        integrity: 3.7,
      },
      image: null,
      lastUpdated: '2024-03-10',
      promises: [
        { text: 'Water project', status: 'completed', year: 2023 },
        { text: 'Street lights', status: 'in-progress', year: 2024 },
      ],
    },
    {
      id: 3,
      name: 'Mary Mwangi',
      position: 'Woman Representative',
      area: 'Nairobi',
      party: 'Jubilee',
      rating: 4.5,
      totalRatings: 203,
      categories: {
        projectDelivery: 4.6,
        accessibility: 4.4,
        communication: 4.5,
        integrity: 4.5,
      },
      image: null,
      lastUpdated: '2024-03-18',
      promises: [
        { text: 'Women empowerment hubs', status: 'completed', year: 2023 },
        { text: 'Maternal health program', status: 'in-progress', year: 2024 },
        { text: 'Scholarship fund', status: 'completed', year: 2023 },
      ],
    },
  ];

  // Aspirants data
  const aspirants = [
    {
      id: 101,
      name: 'Peter Kamau',
      aspiringPosition: 'Member of Parliament',
      area: 'Kasarani',
      party: 'UDA',
      manifesto: `My vision for Kasarani includes:
      • Modern market with 500 stalls
      • Technical training center for youth
      • Upgrading all primary schools
      • 24/7 water supply through boreholes
      • Street lighting in all estates`,
      qualifications: 'Former CEC Member, Businessman',
      endorsements: 156,
      image: null,
    },
    {
      id: 102,
      name: 'Lucy Achieng',
      aspiringPosition: 'Woman Representative',
      area: 'Nairobi',
      party: 'ODM',
      manifesto: `I will champion:
      • Free sanitary pads in schools
      • Women enterprise fund access
      • Maternity health improvements
      • Girls' education scholarships
      • GBV response centers`,
      qualifications: 'Womens Rights Advocate, Lawyer',
      endorsements: 234,
      image: null,
    },
    {
      id: 103,
      name: 'James Mwangi',
      aspiringPosition: 'MCA',
      area: 'Kasarani Ward',
      party: 'Independent',
      manifesto: `Focused on:
      • Youth employment programs
      • Sports academy
      • Business mentorship
      • Community policing
      • Waste management`,
      qualifications: 'Youth Leader, Entrepreneur',
      endorsements: 89,
      image: null,
    },
  ];

  // Rating history
  const ratingHistory = [
    {
      id: 1,
      leaderName: 'Jane Wanjiku',
      position: 'MP',
      date: '2024-03-15',
      rating: 4.2,
      categories: { projectDelivery: 4, accessibility: 4, communication: 5, integrity: 4 },
      comment: 'Good work on the market project but need to improve road repairs',
      anonymous: true,
    },
    {
      id: 2,
      leaderName: 'John Otieno',
      position: 'MCA',
      date: '2024-03-10',
      rating: 3.5,
      categories: { projectDelivery: 3, accessibility: 4, communication: 3, integrity: 4 },
      comment: 'Accessible but slow on project delivery',
      anonymous: false,
    },
  ];


  const filteredLeaders = leaders.filter(leader => 
    (categoryFilter === 'all' || leader.position.toLowerCase().includes(categoryFilter)) &&
    (searchTerm === '' || 
      leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leader.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leader.party.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredAspirants = aspirants.filter(aspirant => 
    searchTerm === '' || 
    aspirant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aspirant.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aspirant.party?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRate = (leader: any) => {
    setSelectedLeader(leader);
    setShowRatingModal(true);
  };

  const handleViewPolicy = (aspirant: any) => {
    setSelectedPolicy(aspirant);
  };

  const handleThumbsUp = (aspirant: any) => {
    // Handle thumbs up logic
    console.log('Thumbs up for:', aspirant.name);
  };

  return (
    <div className="space-y-6">
      {/* Header with location match indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-tight">
            Rate Leaders
          </h1>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
            <FaLocationArrow className="w-3 h-3 text-green-600" />
            Showing leaders and candidates in <span className="font-medium">Kasarani, Nairobi</span>
          </p>
        </div>
        
        {/* History Button - Lighter and rounded */}
        <button
          onClick={() => setShowHistoryModal(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 
                   rounded-full text-sm text-gray-700 hover:border-green-500 hover:text-green-600
                   hover:bg-green-50 transition-all duration-200 shadow-sm"
        >
          <FaHistory className="w-4 h-4" />
          Rating History
        </button>
      </div>

      {/* Location Match Info */}
      <div className="bg-green-50 rounded-lg border border-green-200 p-3 flex items-center gap-2">
        <FaMapMarkerAlt className="w-4 h-4 text-green-600" />
        <p className="text-sm text-gray-700">
          <span className="font-medium">Leaders matched to your location:</span> We've found {leaders.length} leaders and {aspirants.length} aspirants in your area based on your profile.
        </p>
      </div>

      {/* Rating Guide - Description before rating */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">How ratings work</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Rate leaders on a scale of 1-5 across four categories: project delivery, accessibility, 
          communication, and integrity. Your ratings are anonymous by default and help other citizens 
          make informed decisions. For aspirants, show support with a thumbs up.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, area, or party..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden inline-flex items-center justify-center gap-2 px-4 py-2 
                     bg-gray-100 text-gray-700 rounded-lg"
          >
            <FaFilter className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Filters */}
          <div className="hidden sm:flex items-center gap-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
            >
              <option value="all">All Positions</option>
              <option value="mp">MP</option>
              <option value="mca">MCA</option>
              <option value="woman-rep">Woman Rep</option>
              <option value="senator">Senator</option>
              <option value="governor">Governor</option>
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="this-year">This Year</option>
            </select>
          </div>
        </div>

        {/* Mobile Filters (Expandable) */}
        {showFilters && (
          <div className="sm:hidden mt-3 space-y-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            >
              <option value="all">All Positions</option>
              <option value="mp">MP</option>
              <option value="mca">MCA</option>
              <option value="woman-rep">Woman Rep</option>
              <option value="senator">Senator</option>
              <option value="governor">Governor</option>
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="this-year">This Year</option>
            </select>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('leaders')}
            className={`pb-3 px-1 text-sm font-medium transition-colors relative
              ${activeTab === 'leaders' 
                ? 'text-gray-900 border-b-2 border-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Current Leaders ({filteredLeaders.length})
          </button>
          <button
            onClick={() => setActiveTab('aspirants')}
            className={`pb-3 px-1 text-sm font-medium transition-colors relative
              ${activeTab === 'aspirants' 
                ? 'text-gray-900 border-b-2 border-gray-900' 
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Aspiring Candidates ({filteredAspirants.length})
          </button>
        </div>
      </div>

      {/* Leaders Tab */}
      {activeTab === 'leaders' && (
        <div className="space-y-4">
          {filteredLeaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              {/* Leader Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-lg">
                    {leader.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{leader.name}</h3>
                    <p className="text-sm text-gray-500">{leader.position}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        {leader.area}
                      </span>
                      <span>·</span>
                      <span>{leader.party}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <span className="text-lg font-medium text-gray-900">{leader.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{leader.totalRatings} ratings</p>
                </div>
              </div>

              {/* Category Ratings */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-500">Projects</p>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="w-3 h-3 text-yellow-500" />
                    <span className="text-sm font-medium">{leader.categories.projectDelivery}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-500">Accessibility</p>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="w-3 h-3 text-yellow-500" />
                    <span className="text-sm font-medium">{leader.categories.accessibility}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-500">Communication</p>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="w-3 h-3 text-yellow-500" />
                    <span className="text-sm font-medium">{leader.categories.communication}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-500">Integrity</p>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="w-3 h-3 text-yellow-500" />
                    <span className="text-sm font-medium">{leader.categories.integrity}</span>
                  </div>
                </div>
              </div>

              {/* Promises */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 mb-2">KEY PROMISES</p>
                <div className="space-y-2">
                  {leader.promises.slice(0, 2).map((promise, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        promise.status === 'completed' ? 'bg-green-500' :
                        promise.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`} />
                      <span className="text-gray-700 flex-1">{promise.text}</span>
                      <span className="text-xs text-gray-400">{promise.year}</span>
                    </div>
                  ))}
                  {leader.promises.length > 2 && (
                    <button className="text-xs text-gray-500 hover:text-gray-700">
                      View all {leader.promises.length} promises
                    </button>
                  )}
                </div>
              </div>

              {/* Actions - Lighter and rounded */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleRate(leader)}
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 
                           text-sm rounded-full hover:border-green-500 hover:text-green-600 
                           hover:bg-green-50 transition-all duration-200 flex items-center 
                           justify-center gap-2 shadow-sm"
                >
                  <FaStar className="w-4 h-4" />
                  Rate Leader
                </button>
                <button className="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 
                                 text-sm rounded-full hover:border-gray-400 hover:bg-gray-50 
                                 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm">
                  <FaEye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}

          {filteredLeaders.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">No leaders found matching your criteria</p>
            </div>
          )}
        </div>
      )}

      {/* Aspirants Tab */}
      {activeTab === 'aspirants' && (
        <div className="space-y-4">
          {filteredAspirants.map((aspirant) => (
            <div
              key={aspirant.id}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-lg">
                    {aspirant.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{aspirant.name}</h3>
                    <p className="text-sm text-gray-500">Aspirant: {aspirant.aspiringPosition}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        {aspirant.area}
                      </span>
                      {aspirant.party && (
                        <>
                          <span>·</span>
                          <span>{aspirant.party}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <FaThumbsUp className="w-4 h-4 text-green-600" />
                    <span className="text-lg font-medium text-gray-900">{aspirant.endorsements}</span>
                  </div>
                  <p className="text-xs text-gray-500">endorsements</p>
                </div>
              </div>

              {/* Qualifications */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Qualifications</p>
                <p className="text-sm text-gray-700">{aspirant.qualifications}</p>
              </div>

              {/* Manifesto Preview */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">MANIFESTO HIGHLIGHTS</p>
                <p className="text-sm text-gray-700 line-clamp-2">{aspirant.manifesto}</p>
              </div>

              {/* Actions - Lighter and rounded */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleThumbsUp(aspirant)}
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 
                           text-sm rounded-full hover:border-green-500 hover:text-green-600 
                           hover:bg-green-50 transition-all duration-200 flex items-center 
                           justify-center gap-2 shadow-sm"
                >
                  <FaThumbsUp className="w-4 h-4" />
                  Support ({aspirant.endorsements})
                </button>
                <button
                  onClick={() => handleViewPolicy(aspirant)}
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 
                           text-sm rounded-full hover:border-gray-400 hover:bg-gray-50 
                           transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaFileAlt className="w-4 h-4" />
                  View Manifesto
                </button>
              </div>
            </div>
          ))}

          {filteredAspirants.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">No aspirants found matching your criteria</p>
            </div>
          )}
        </div>
      )}

      {/* Modals */}
      <RatingModal
        isOpen={showRatingModal}
        leader={selectedLeader}
        onClose={() => setShowRatingModal(false)}
        onSubmit={(rating) => {
          console.log('Rating submitted:', rating);
          setShowRatingModal(false);
        }}
      />

      <PolicyModal
        isOpen={!!selectedPolicy}
        aspirant={selectedPolicy}
        onClose={() => setSelectedPolicy(null)}
        onSupport={(aspirant) => {
          console.log('Supported:', aspirant);
          setSelectedPolicy(null);
        }}
      />

      <RatingHistoryModal
        isOpen={showHistoryModal}
        history={ratingHistory}
        onClose={() => setShowHistoryModal(false)}
      />
    </div>
  );
};

export default RateLeaders;