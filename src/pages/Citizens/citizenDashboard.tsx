// pages/citizen/CitizenDashboard.tsx
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Sidebar from './components/sidebar';

const CitizenDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Auto-open sidebar on desktop, close on mobile
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar with menu toggle */}
      <Topbar 
        toggleSidebar={toggleSidebar} 
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
      />

      {/* Main layout - Mobile first */}
      <div className="flex h-[calc(100vh-64px)] relative">
        {/* Backdrop for mobile */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-20 transition-opacity"
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}

        {/* Sidebar - slides in on mobile, fixed on desktop */}
        <aside
          className={`
            fixed md:static top-16 left-0 h-[calc(100vh-64px)] z-30
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            ${!isMobile && 'md:translate-x-0'} // Always visible on desktop
            w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none
          `}
        >
          <Sidebar 
            closeSidebar={closeSidebar}
            isMobile={isMobile}
          />
        </aside>

        {/* Main content - scrollable */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CitizenDashboard;