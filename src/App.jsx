import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useReveal } from './hooks/useReveal';

export const SECTION_IDS = ['home', 'experience', 'projects', 'skills', 'certificates', 'education', 'contact'];

export default function App() {
  useReveal();

  return (
    <>
      <Navbar sectionIds={SECTION_IDS} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
