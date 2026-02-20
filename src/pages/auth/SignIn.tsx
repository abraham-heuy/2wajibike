// pages/auth/SignIn.tsx
import { useState } from 'react';
import { FaEnvelope, FaLock, FaArrowRight, FaGoogle, FaGithub, FaEye, FaEyeSlash, FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, accept any non-empty email/password
      if (email && password) {
        console.log('Sign in successful with:', { email, password });
        
        // Redirect to citizen dashboard for testing
        navigate('/citizen/dashboard/home');
      } else {
        setError('Please enter both email and password');
      }
    }, 1500);
  };

  // Demo credentials for quick testing
  const fillDemoCredentials = () => {
    setEmail('citizen@example.com');
    setPassword('password123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-green-50/30 flex items-center justify-center p-4 relative">
      {/* Home Icon - Top Left */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10
                   w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm
                   flex items-center justify-center shadow-md
                   hover:bg-green-600 hover:text-white transition-all duration-300
                   border border-gray-200/50 group"
        aria-label="Go to home"
      >
        <FaHome className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
      </Link>

      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-500 mb-4 shadow-lg shadow-green-500/20">
            <span className="text-2xl font-bold text-white">T</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to continue to Tuwajibike</p>
        </div>

        {/* Demo Credentials Hint */}
        <div className="mb-4 text-center">
          <button
            onClick={fillDemoCredentials}
            className="text-xs text-gray-500 hover:text-green-600 underline"
          >
            Use demo credentials for testing
          </button>
        </div>

        {/* Sign In Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200/50">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300/80 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-300 bg-white/90 backdrop-blur-sm
                           placeholder:text-gray-400"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field with Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300/80 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                           transition-all duration-300 bg-white/90 backdrop-blur-sm
                           placeholder:text-gray-400"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 
                           transition-all duration-200 cursor-pointer"
                />
                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 
                       hover:from-green-700 hover:to-green-600 text-white font-medium
                       py-3.5 px-4 rounded-xl transition-all duration-300
                       shadow-lg shadow-green-500/20 hover:shadow-xl
                       flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {isLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  Sign In
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Social Sign In */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200/80"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 backdrop-blur-sm text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300/80 rounded-xl
                               hover:bg-gray-100/80 transition-all duration-300 group bg-white/50 backdrop-blur-sm">
                <FaGoogle className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300/80 rounded-xl
                               hover:bg-gray-100/80 transition-all duration-300 group bg-white/50 backdrop-blur-sm">
                <FaGithub className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">GitHub</span>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-600 hover:text-green-700 font-medium transition-colors">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Terms note */}
        <p className="text-xs text-center text-gray-500 mt-6">
          By signing in, you agree to our{' '}
          <a href="#" className="underline hover:text-green-600 transition-colors">Terms</a> and{' '}
          <a href="#" className="underline hover:text-green-600 transition-colors">Privacy Policy</a>
        </p>

        {/* Development Note */}
        <p className="text-xs text-center text-gray-400 mt-4">
          Note: Demo Mode: Any valid email/password redirects to citizen dashboard(default)
        </p>
      </div>
    </div>
  );
};

export default SignIn;