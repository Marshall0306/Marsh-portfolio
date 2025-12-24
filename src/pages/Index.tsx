import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { Education } from '@/components/sections/Education';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useThemeBackground } from '@/context/ThemeContext';

const Index = () => {
  const { currentTheme } = useThemeBackground();
  const hasBackground = currentTheme.image !== null;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background Image Layer */}
      {currentTheme.image && (
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-opacity duration-500"
          style={{ backgroundImage: `url(${currentTheme.image})` }}
        >
          {/* Reduced overlay for better visibility */}
          <div className="absolute inset-0 bg-background/50" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className={hasBackground ? 'theme-bg-active' : ''}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>

      <ThemeSwitcher />
    </div>
  );
};

export default Index;
