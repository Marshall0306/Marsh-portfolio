import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import theme backgrounds
import cyberCity from '@/assets/themes/cyber-city.jpg';
import neuralNet from '@/assets/themes/neural-net.jpg';
import avengersHq from '@/assets/themes/avengers-hq.jpg';
import ironTech from '@/assets/themes/iron-tech.jpg';
import deepSpace from '@/assets/themes/deep-space.jpg';
import redAlert from '@/assets/themes/red-alert.jpg';
import nightRider from '@/assets/themes/night-rider.jpg';
import muscleSunset from '@/assets/themes/muscle-sunset.jpg';
import tokyoDrift from '@/assets/themes/tokyo-drift.jpg';
import f1Speed from '@/assets/themes/f1-speed.jpg';

export type ThemeBackground = {
  id: string;
  name: string;
  image: string | null;
};

export const themeBackgrounds: ThemeBackground[] = [
  { id: 'none', name: 'Default', image: null },
  // Superhero themes
  { id: 'avengers-hq', name: 'Avengers HQ', image: avengersHq },
  { id: 'iron-tech', name: 'Iron Tech', image: ironTech },
  // Car themes
  { id: 'night-rider', name: 'Night Rider', image: nightRider },
  { id: 'muscle-sunset', name: 'Muscle Sunset', image: muscleSunset },
  { id: 'tokyo-drift', name: 'Tokyo Drift', image: tokyoDrift },
  { id: 'f1-speed', name: 'F1 Speed', image: f1Speed },
  // Other themes
  { id: 'deep-space', name: 'Deep Space', image: deepSpace },
  { id: 'cyber-city', name: 'Cyber City', image: cyberCity },
  { id: 'neural-net', name: 'Neural Net', image: neuralNet },
  { id: 'red-alert', name: 'Red Alert', image: redAlert },
];

type ThemeContextType = {
  currentTheme: ThemeBackground;
  setTheme: (theme: ThemeBackground) => void;
  hasBackground: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeBackground>(themeBackgrounds[0]);

  useEffect(() => {
    const savedThemeId = localStorage.getItem('site-theme-bg');
    if (savedThemeId) {
      const found = themeBackgrounds.find(t => t.id === savedThemeId);
      if (found) setCurrentTheme(found);
    }
  }, []);

  const setTheme = (theme: ThemeBackground) => {
    setCurrentTheme(theme);
    localStorage.setItem('site-theme-bg', theme.id);
  };

  const hasBackground = currentTheme.image !== null;

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, hasBackground }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeBackground = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeBackground must be used within a ThemeProvider');
  }
  return context;
};
