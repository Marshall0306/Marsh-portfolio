import { TextScramble } from '../TextScramble';
import { AnimatedGrid } from '../AnimatedGrid';
import { ChevronDown, FileDown, Folder } from 'lucide-react';
import profileImage from '@/assets/marshall-profile.png';

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGrid />
      
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Profile Photo with Glow */}
        <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Outer glow ring */}
          <div className="absolute -inset-2 rounded-full animate-pulse-glow" />
          
          {/* Border ring */}
          <div className="relative p-1 rounded-full bg-gradient-to-br from-primary via-neon-orange to-primary">
            <div className="p-1 rounded-full bg-background">
              <img
                src={profileImage}
                alt="Marshall R - SOC Analyst"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Welcome Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded border border-primary/30 bg-primary/5 text-primary font-cyber text-sm animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>SYSTEM ONLINE</span>
        </div>

        {/* Main Title with Glow */}
        <h1 
  className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-4 text-primary drop-shadow-[0_0_10px_rgba(255,102,0,0.5)] animate-fade-in-up"
  style={{ animationDelay: '0.6s' }}
>
  <TextScramble text="MARSHALL R" delay={800} />
</h1>


        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl font-cyber text-muted-foreground mb-2 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <TextScramble text="SOC Analyst / Web Application Penetration Testing" delay={1200} />
        </p>

        {/* Tagline */}
        <p 
          className="text-muted-foreground max-w-md mb-10 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          Defending digital frontiers with precision and code
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          <button
            onClick={scrollToAbout}
            className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-cyber font-medium rounded hover:box-glow transition-all duration-300"
          >
            <Folder className="w-4 h-4" />
            View Mission Files
          </button>
          <a
            href="#resume"
            className="flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-cyber font-medium rounded hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <FileDown className="w-4 h-4" />
            Download Intel
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};
