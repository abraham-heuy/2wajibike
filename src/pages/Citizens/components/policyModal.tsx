// pages/citizen/components/PolicyModal.tsx
import {
  FaTimes,
  FaThumbsUp,
  FaMapMarkerAlt,
  FaUser,
  FaFileAlt,
} from "react-icons/fa";

interface PolicyModalProps {
  isOpen: boolean;
  aspirant: any;
  onClose: () => void;
  onSupport: (aspirant: any) => void;
}

const PolicyModal = ({
  isOpen,
  aspirant,
  onClose,
  onSupport,
}: PolicyModalProps) => {
  if (!isOpen || !aspirant) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-none px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
              {aspirant.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                {aspirant.name}
              </h2>
              <p className="text-sm text-gray-500">
                Aspirant: {aspirant.aspiringPosition}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Basic Info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <FaMapMarkerAlt className="w-4 h-4" />
              {aspirant.area}
            </div>
            {aspirant.party && (
              <div className="flex items-center gap-1 text-gray-600">
                <FaUser className="w-4 h-4" />
                {aspirant.party}
              </div>
            )}
            <div className="flex items-center gap-1 text-gray-600">
              <FaThumbsUp className="w-4 h-4" />
              {aspirant.endorsements} endorsements
            </div>
          </div>

          {/* Qualifications */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Qualifications
            </h3>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
              {aspirant.qualifications}
            </p>
          </div>

          {/* Full Manifesto */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
              <FaFileAlt className="w-4 h-4" />
              Full Manifesto
            </h3>
            <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg whitespace-pre-line">
              {aspirant.manifesto}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none px-4 sm:px-6 py-4 border-t border-gray-200 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg 
                     hover:bg-gray-50 transition-colors text-sm"
          >
            Close
          </button>
          <button
            onClick={() => onSupport(aspirant)}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg 
                     hover:bg-green-700 transition-colors text-sm flex items-center 
                     justify-center gap-2"
          >
            <FaThumbsUp className="w-4 h-4" />
            Support Candidate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
