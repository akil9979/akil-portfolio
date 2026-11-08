import { useEffect, useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef<number | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    isNavigatingRef.current = true;
    if (navTimeoutRef.current) {
      window.clearTimeout(navTimeoutRef.current);
    }
    navTimeoutRef.current = window.setTimeout(() => {
      isNavigatingRef.current = false;
    }, 850);
  };

  useEffect(() => {
    // 1. Intersection Observer for data-reveal animations
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || isReducedMotion) {
      revealElements.forEach((el) => el.classList.add('is-visible'));
    } else {
      revealElements.forEach((el) => el.classList.add('reveal'));
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );
      revealElements.forEach((el) => revealObserver.observe(el));
    }

    // 2. High-precision Scroll Spy
    const sectionIds = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Bottom of the page check
      if (scrollPosition + windowHeight >= documentHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Top of the page check
      if (scrollPosition < 180) {
        setActiveSection('home');
        return;
      }

      // Check each section position relative to header
      const headerOffset = 140; // comfortable viewing threshold
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navTimeoutRef.current) {
        window.clearTimeout(navTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Background ambient lighting layers */}
      <div className="bg-canvas-grid" aria-hidden="true" />
      <div className="bg-ambient-glow-top" aria-hidden="true" />
      <div className="bg-ambient-glow-mid" aria-hidden="true" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content with strict 1-to-1 matching section IDs */}
      <main id="main-content">
        <Hero onNavigate={handleNavigate} />
        <AboutSection />
        <FeaturedProjects />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
