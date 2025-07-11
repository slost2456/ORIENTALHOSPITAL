import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DoctorIntro from '@/components/DoctorIntro';
import TreatmentInfo from '@/components/TreatmentInfo';
import FacilitiesSection from '@/components/FacilitiesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DoctorIntro />
      <TreatmentInfo />
      <FacilitiesSection />
      <Footer />
    </main>
  );
}
