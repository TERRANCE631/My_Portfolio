
import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import ExperienceList from '../components/ExperienceList';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import ThreeScene from '../components/ThreeScene';
import AIChat from '../components/AIChat';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Projects } from '@/components/Projects';
import Chatbot from '@/components/Chatbot';

const Index: React.FC = () => {
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const cirtificatesRef = useRef(null);
  const topRef = useRef(null);

  return (
    <div className="min-h-screen">
      <Navbar topRef={topRef} skillRef={skillRef} contactRef={contactRef} cirtificatesRef={cirtificatesRef} />

      <main className='bg-black/10'>
        {/* <Chatbot /> */}
        <Profile projectsRef={projectsRef} contactRef={contactRef} topRef={topRef} />
        <Skills skillRef={skillRef} />
        <Projects projectsRef={projectsRef} />
        <ThreeScene />
        {/* <ExperienceList /> */}
        {/* <Education /> */}
        <Certifications cirtificatesRef={cirtificatesRef} />
        <Contact contactRef={contactRef} />
        {/* <AIChat /> */}
        <Chatbot />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
