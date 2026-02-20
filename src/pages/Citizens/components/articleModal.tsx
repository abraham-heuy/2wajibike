// pages/citizen/components/articleModal.tsx
import { FaTimes, FaCalendarAlt, FaUser, FaBookmark, FaShare, FaArrowLeft } from 'react-icons/fa';

interface ArticleModalProps {
  isOpen: boolean;
  article: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string | null;
  } | null;
  onClose: () => void;
}

const ArticleModal = ({ isOpen, article, onClose }: ArticleModalProps) => {
  if (!isOpen || !article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred transparent background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed at top */}
        <div className="flex-none bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-4 h-4 text-gray-500" />
          </button>
          <h2 className="text-lg font-medium text-gray-900 flex-1 line-clamp-1">{article.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Article Content - Scrollable area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Category chip */}
          <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full mb-4">
            {article.category}
          </span>

          {/* Article image placeholder */}
          <div className="w-full h-48 bg-gray-100 rounded-lg mb-4"></div>

          {/* Article metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <FaUser className="w-3 h-3" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="w-3 h-3" />
              {new Date(article.date).toLocaleDateString('en-KE', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
            <span>{article.readTime} read</span>
          </div>

          {/* Article content */}
          <div className="text-sm text-gray-700 leading-relaxed space-y-4">
            <p className="font-medium text-gray-900">{article.excerpt}</p>
            <p>{article.content}</p>
            <p>{article.content}</p> {/* Duplicate to ensure scrolling is visible */}
          </div>

          {/* Article actions */}
          <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              <FaBookmark className="w-3 h-3" />
              Save
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
              <FaShare className="w-3 h-3" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;