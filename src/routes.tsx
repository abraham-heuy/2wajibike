// routes.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/aboutpage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/Signup";
import ContributorOnboarding from "./pages/contributor/contributorOnboarding";
import ContributorDashboard from "./pages/contributor/contributorDashboard";
import CitizenDashboard from "./pages/Citizens/citizenDashboard";
import CitizenHome from "./pages/Citizens/Sections/Home";
import RateLeaders from "./pages/Citizens/Sections/RateLeaders";
import VerifyProjects from "./pages/Citizens/Sections/VerifyProjects";
import AskQuestions from "./pages/Citizens/Sections/AskQuestions";
import ReportIssues from "./pages/Citizens/Sections/ReportIssues";
import TrackPromises from "./pages/Citizens/Sections/TrackPromises";

// Main Router Component - ALL routes defined here
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Contributor Routes */}
        <Route path="/contributor/onboarding" element={<ContributorOnboarding />} />
        <Route path="/contributor/dashboard" element={<ContributorDashboard />} />
        <Route path="/contributors" element={<Navigate to="/contributor/onboarding" replace />} />

        {/* Citizen Dashboard - Nested Routes */}
        <Route path="/citizen/dashboard" element={<CitizenDashboard />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<CitizenHome />} />
          <Route path="rate-leaders" element={<RateLeaders />} />
          <Route path="verify-projects" element={<VerifyProjects />} />
          <Route path="ask-questions" element={<AskQuestions />} />
          <Route path="track-promises" element={<TrackPromises />} />
          <Route path="report-issues" element={<ReportIssues />} />
          {/* <Route path="profile" element={<CitizenProfile />} />
          <Route path="settings" element={<CitizenSettings />} /> */}
        </Route>

        {/* 404 - Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

// Optional: Export individual route paths as constants for use in components
export const ROUTE_PATHS = {
  home: "/",
  about: "/about",
  signin: "/signin",
  signup: "/signup",
  contributor: {
    onboarding: "/contributor/onboarding",
    dashboard: "/contributor/dashboard",
    redirect: "/contributors",
  },
  citizen: {
    dashboard: "/citizen/dashboard",
    home: "/citizen/dashboard/home",
    rateLeaders: "/citizen/dashboard/rate-leaders",
    verifyProjects: "/citizen/dashboard/verify-projects",
    askQuestions: "/citizen/dashboard/ask-questions",
    trackPromises: "/citizen/dashboard/track-promises",
    reportIssues: "/citizen/dashboard/report-issues",
    profile: "/citizen/dashboard/profile",
    settings: "/citizen/dashboard/settings",
  },
} as const;