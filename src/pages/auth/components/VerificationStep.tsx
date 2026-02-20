// pages/auth/components/VerificationStep.tsx
import { useState } from 'react';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineDeviceMobile } from 'react-icons/hi';

interface VerificationStepProps {
  email: string;
  phone: string;
  onVerificationComplete: (data: { method: 'email' | 'sms', code: string, verified: boolean }) => void;
  onBack: () => void;
}

const VerificationStep = ({ email, phone, onVerificationComplete, onBack }: VerificationStepProps) => {
  const [method, setMethod] = useState<'email' | 'sms'>('email');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [timer, setTimer] = useState(60);

  const handleSendCode = () => {
    setIsSending(true);
    // Simulate sending code
    setTimeout(() => {
      setIsSending(false);
      setCodeSent(true);
      // Start countdown
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1500);
  };

  const handleVerify = () => {
    setIsVerifying(true);
    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      onVerificationComplete({
        method,
        code: code.join(''),
        verified: true
      });
    }, 1500);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Verify Your Identity</h3>
        <p className="text-sm text-gray-600">
          Choose how you'd like to receive the verification code
        </p>
      </div>

      {/* Verification Method Toggle */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setMethod('email')}
          className={`p-4 rounded-xl border-2 transition-all duration-300
                     ${method === 'email' 
                       ? 'border-green-500 bg-green-50' 
                       : 'border-gray-200 hover:border-gray-300'}`}
        >
          <HiOutlineMail className={`w-6 h-6 mx-auto mb-2
            ${method === 'email' ? 'text-green-600' : 'text-gray-400'}`} />
          <p className={`text-sm font-medium
            ${method === 'email' ? 'text-green-700' : 'text-gray-600'}`}>
            Email
          </p>
          <p className="text-xs text-gray-500 mt-1">{email}</p>
        </button>

        <button
          onClick={() => setMethod('sms')}
          className={`p-4 rounded-xl border-2 transition-all duration-300
                     ${method === 'sms' 
                       ? 'border-green-500 bg-green-50' 
                       : 'border-gray-200 hover:border-gray-300'}`}
        >
          <HiOutlineDeviceMobile className={`w-6 h-6 mx-auto mb-2
            ${method === 'sms' ? 'text-green-600' : 'text-gray-400'}`} />
          <p className={`text-sm font-medium
            ${method === 'sms' ? 'text-green-700' : 'text-gray-600'}`}>
            SMS
          </p>
          <p className="text-xs text-gray-500 mt-1">{phone}</p>
        </button>
      </div>

      {/* Send Code Button */}
      {!codeSent ? (
        <button
          onClick={handleSendCode}
          disabled={isSending}
          className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 
                   hover:from-green-700 hover:to-green-600 text-white font-medium
                   rounded-xl transition-all duration-300
                   shadow-lg shadow-green-500/20 disabled:opacity-70"
        >
          {isSending ? 'Sending...' : `Send Code via ${method === 'email' ? 'Email' : 'SMS'}`}
        </button>
      ) : (
        <>
          {/* Code Input */}
          <div className="space-y-4">
            <p className="text-sm text-center text-gray-600">
              Enter the 6-digit code sent to your {method === 'email' ? 'email' : 'phone'}
            </p>
            
            <div className="flex justify-center gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300
                           rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200
                           transition-all duration-300 bg-white"
                />
              ))}
            </div>

            {/* Timer and Resend */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {timer > 0 ? `Resend in ${timer}s` : 'Code expired'}
              </span>
              {timer === 0 && (
                <button
                  onClick={handleSendCode}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Resend Code
                </button>
              )}
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={code.some(d => !d) || isVerifying}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 
                       hover:from-green-700 hover:to-green-600 text-white font-medium
                       rounded-xl transition-all duration-300
                       shadow-lg shadow-green-500/20 disabled:opacity-70
                       flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                'Verifying...'
              ) : (
                <>
                  Verify & Continue
                  <FaCheckCircle className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </>
      )}

      {/* Back Button */}
      <button
        onClick={onBack}
        className="w-full py-3 border-2 border-gray-300 text-gray-700
                 rounded-xl hover:bg-gray-50 transition-all duration-300
                 flex items-center justify-center gap-2 font-medium"
      >
        <FaArrowLeft className="w-4 h-4" />
        Back
      </button>
    </div>
  );
};

export default VerificationStep;