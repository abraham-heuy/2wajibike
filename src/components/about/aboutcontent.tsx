// AboutContent.tsx
import { useEffect, useRef, useState } from 'react';
import { GiKenya } from 'react-icons/gi';
import { FaUsers, FaHeart, FaCode, FaQuoteLeft, FaChartLine } from 'react-icons/fa';
import { HiOutlineArrowRight, HiOutlineCalendar, HiOutlineUser } from 'react-icons/hi';
import ArticleModal from './articles';

const AboutContent = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const assignRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  const images = {
    main: "https://images.unsplash.com/photo-1573164713988-2485fc6d6f3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    community: "https://images.unsplash.com/photo-1593113598338-9c6e9e2a5b6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    coding: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    scalability: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const articles = [
    {
      id: 1,
      title: "The Future of Civic Tech in Kenya",
      excerpt: "Exploring how technology is reshaping citizen engagement and government accountability across all 47 counties.",
      author: "Tuwajibike Team",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Civic Tech",
      image: images.community,
      content: "Full article content here..."
    },
    {
      id: 2,
      title: "Scalability Models for Digital Democracy",
      excerpt: "How we're building a platform that can grow from 1,000 to 1 million users while maintaining trust and transparency.",
      author: "Tuwajibike Team",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Technology",
      image: images.scalability,
      content: "Full article content here..."
    },
    {
      id: 3,
      title: "From Ratings to Results: Measuring Impact",
      excerpt: "A look at how citizen feedback is translating into tangible improvements in service delivery across Kenya.",
      author: "Tuwajibike Team",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Impact",
      image: images.team,
      content: "Full article content here..."
    }
  ];

  const openArticle = (id: number) => {
    setSelectedArticle(id);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-20 md:space-y-28 font-sans antialiased">
      {/* Hero Section */}
      <div 
        ref={assignRef(0)}
        className="relative rounded-3xl overflow-hidden transform transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={images.main}
            alt="Tuwajibike team"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent"></div>
          
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center p-8 md:p-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
                  <GiKenya className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-green-400 font-medium tracking-wide">EST. 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Built by{' '}
                <span className="relative">
                  Kenyans
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 rounded-full"></span>
                </span>
                <br />for Kenya
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
                A citizen-powered platform transforming governance through technology, 
                transparency, and collective action.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          ref={assignRef(1)}
          className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 
                     transform transition-all duration-700 opacity-0 translate-y-10
                     hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-100 group-hover:bg-green-600 
                        transition-colors duration-300 flex items-center justify-center mb-6">
            <FaHeart className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            To create a continuous dialogue between citizens and their leaders through 
            transparent, verifiable, and accessible technology. We believe accountability 
            shouldn't wait for election day—it should happen every day.
          </p>
          <div className="mt-6 h-1 w-20 bg-green-500 rounded-full group-hover:w-32 transition-all duration-300"></div>
        </div>

        <div 
          ref={assignRef(2)}
          className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 
                     transform transition-all duration-700 delay-200 opacity-0 translate-y-10
                     hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="w-16 h-16 rounded-2xl bg-green-100 group-hover:bg-green-600 
                        transition-colors duration-300 flex items-center justify-center mb-6">
            <GiKenya className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            A Kenya where every citizen can hold leaders accountable, every leader can 
            prove their work, and every aspiring candidate has a fair chance—regardless 
            of their resources.
          </p>
          <div className="mt-6 h-1 w-20 bg-green-500 rounded-full group-hover:w-32 transition-all duration-300"></div>
        </div>
      </div>

      {/* Our Story - Generalized */}
      <div 
        ref={assignRef(3)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="relative group order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={images.team}
              alt="Team collaboration"
              className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-green-600 font-semibold text-sm tracking-wider">OUR STORY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
            A Movement for{' '}
            <span className="text-green-600 relative">
              Accountability
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
            </span>
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Tuwajibike was founded in 2025 by a group of Kenyan citizens who recognized 
              a fundamental gap between campaign promises and actual delivery. The platform 
              emerged from a simple question: how can technology help citizens hold leaders 
              accountable every day, not just during elections?
            </p>
            <p className="text-lg">
              What began as a conversation among concerned citizens has grown into a 
              movement of developers, designers, researchers, and community organizers 
              united by a common purpose: transparent, accountable governance.
            </p>
            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500 mt-4">
              <p className="italic text-gray-700">
                "We believe that when citizens have access to reliable information about 
                their leaders' performance, they make better decisions—and leaders become 
                more responsive to the communities they serve."
              </p>
              <p className="text-sm text-gray-500 mt-2">— Tuwajibike Founding Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scalability Focus - New Section */}
      <div 
        ref={assignRef(4)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-700 opacity-0 translate-y-10"
      >
        <div>
          <span className="text-green-600 font-semibold text-sm tracking-wider">SCALABILITY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
            Built to{' '}
            <span className="text-green-600">Grow</span>
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Tuwajibike is designed with scalability at its core. From day one, we've built 
              the platform to grow from hundreds to millions of users while maintaining 
              performance, trust, and transparency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 p-5 rounded-xl">
                <FaChartLine className="w-6 h-6 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Technical Scalability</h4>
                <p className="text-sm text-gray-600">
                  Cloud-native architecture that automatically scales with user demand. 
                  Microservices design allows independent scaling of features.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl">
                <FaUsers className="w-6 h-6 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Community Scalability</h4>
                <p className="text-sm text-gray-600">
                  Distributed verification model where local communities validate 
                  information, enabling growth without centralized bottlenecks.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl">
                <GiKenya className="w-6 h-6 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Geographic Expansion</h4>
                <p className="text-sm text-gray-600">
                  Phased rollout strategy starting with pilot counties, expanding to all 
                  47 based on learnings and community feedback.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl">
                <FaCode className="w-6 h-6 text-green-600 mb-3" />
                <h4 className="font-semibold text-gray-800 mb-2">Open Source Model</h4>
                <p className="text-sm text-gray-600">
                  Public codebase allows developers across Kenya to contribute, audit, 
                  and build on our work—accelerating growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={images.scalability}
              alt="Scalability planning"
              className="w-full h-[300px] lg:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 
                        border border-gray-200 max-w-[200px] backdrop-blur-sm bg-white/90
                        group-hover:-translate-y-2 transition-transform">
            <p className="text-xs text-gray-500">Target Scale</p>
            <p className="text-2xl font-bold text-gray-800">1M+</p>
            <p className="text-xs text-green-600">users by 2027</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div 
        ref={assignRef(5)}
        className="transform transition-all duration-700 opacity-0 translate-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          What{' '}
          <span className="text-green-600 relative">
            Drives Us
            <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FaHeart, title: "Citizen-First", desc: "Every feature starts with citizen needs" },
            { icon: GiKenya, title: "All 47 Counties", desc: "Designed for every Kenyan, everywhere" },
            { icon: FaUsers, title: "Community-Led", desc: "Powered by local knowledge and participation" },
            { icon: FaCode, title: "Open Source", desc: "Transparent code, verifiable by anyone" }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl p-6 border border-gray-200 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
                       hover:border-green-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100/50 to-transparent 
                            rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="w-14 h-14 rounded-xl bg-green-100 group-hover:bg-green-600 
                            transition-colors duration-300 flex items-center justify-center mb-4 relative z-10">
                <item.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 relative z-10">{item.title}</h3>
              <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-green-500 
                            transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog/Articles Section - New */}
      <div 
        ref={assignRef(6)}
        className="transform transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest{' '}
            <span className="text-green-600 relative">
              Articles
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-100 -z-10"></span>
            </span>
          </h2>
          <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 text-sm">
            View All
            <HiOutlineArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => openArticle(article.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200
                       hover:shadow-xl hover:-translate-y-2 transition-all duration-500
                       cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineUser className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiOutlineCalendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <span className="text-gray-400">{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Quote - Generalized */}
      <div 
        ref={assignRef(7)}
        className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 text-center
                   transform transition-all duration-700 opacity-0 translate-y-10"
      >
        <FaQuoteLeft className="w-12 h-12 text-white/30 mx-auto mb-6" />
        <p className="text-white text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
          "We're building tools that empower citizens to hold leaders accountable, 
          enabling a future where transparency is the norm, not the exception."
        </p>
        <p className="text-white/80 mt-6">— Tuwajibike Team</p>
      </div>

      {/* Simple Stats - Updated */}
      <div 
        ref={assignRef(8)}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-700 opacity-0 translate-y-10"
      >
        {[
          { label: "Founded", value: "2025" },
          { label: "Contributors", value: "30+" },
          { label: "Counties", value: "12" },
          { label: "Articles", value: "15+" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200
                                   hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-2xl md:text-3xl font-bold text-green-600">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div 
        ref={assignRef(9)}
        className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-xl
                   transform transition-all duration-700 opacity-0 translate-y-10
                   hover:shadow-2xl"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Join the Movement
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Tuwajibike is building the future of citizen accountability in Kenya. 
          Whether you're a developer, writer, researcher, or community organizer—there's a place for you here.
        </p>
        <button className="group inline-flex items-center gap-3 px-8 py-4 
                         bg-gray-800 hover:bg-green-700 text-white font-medium 
                         rounded-full transition-all duration-300 shadow-lg
                         hover:shadow-green-500/20">
          Get Involved
          <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-sm text-gray-400 mt-4">
          🇰🇪 Pamoja, tunaweza. Together, we can.
        </p>
      </div>

      {/* Article Modal */}
      <ArticleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        article={articles.find(a => a.id === selectedArticle) || null}
      />
    </div>
  );
};

export default AboutContent;