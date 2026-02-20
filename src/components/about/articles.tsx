// ArticleModal.tsx
import React, { useEffect } from 'react';
import { HiX, HiOutlineCalendar, HiOutlineUser, HiOutlineClock } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    content: string;
  } | null;
}

const ArticleModal = ({ isOpen, onClose, article }: ArticleModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-10 px-4"
      onClick={onClose}
    >
      {/* Blurred background */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md"></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 
                     transition-colors z-10 bg-white/80 backdrop-blur-sm rounded-full p-2
                     shadow-md"
        >
          <HiX className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 rounded-t-2xl overflow-hidden">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6 bg-green-600 text-white text-sm px-4 py-2 rounded-full">
            {article.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {article.title}
          </h2>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <HiOutlineUser className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <HiOutlineCalendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <HiOutlineClock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Share this article</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-600 
                               flex items-center justify-center text-gray-600 hover:text-white
                               transition-all duration-300">
                <FaTwitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-600 
                               flex items-center justify-center text-gray-600 hover:text-white
                               transition-all duration-300">
                <FaLinkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-600 
                               flex items-center justify-center text-gray-600 hover:text-white
                               transition-all duration-300">
                <FaFacebook className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;