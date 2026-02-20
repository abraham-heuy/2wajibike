// pages/Home.tsx
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import AboutSection from '../components/aboutSection';
import WhatWeOffer from '../components/whatWeOffer';
import OpportunitiesSection from '../components/opportunities';
import ContributorsSection from '../components/contributors';
import OperationsSection from '../components/operations';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CTASection />
      <AboutSection />
      <WhatWeOffer />
      <OpportunitiesSection />
      <ContributorsSection />
      <OperationsSection />
      <Footer />
      {/* Add more sections here as needed */}
    </div>
  );
};

export default Home;