import React from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import Specializations from '../components/Specializations';
import ReliabilitySection from '../components/ReliabilitySection';
import FeaturedComponents from '../components/FeaturedComponents';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <Specializations />
      <ReliabilitySection />
      <FeaturedComponents />
      <CTASection />
    </main>
  );
};

export default Home;
