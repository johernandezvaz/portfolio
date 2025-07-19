'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import EducationSection from '@/components/sections/education-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import MotivationSection from '@/components/sections/motivation-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <MotivationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}