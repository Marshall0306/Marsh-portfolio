import { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { themeBackgrounds, useThemeBackground } from '@/context/ThemeContext';

export const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useThemeBackground();
  const [open, setOpen] = useState(false);

  const handleSelect = (theme: typeof themeBackgrounds[0]) => {
    setTheme(theme);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:box-glow transition-all duration-300"
          aria-label="Change Background Theme"
        >
          <Palette className="w-5 h-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="font-cyber text-primary text-xl">Change Background</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[60vh] px-6 pb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {themeBackgrounds.map((theme) => {
              const isActive = currentTheme.id === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => handleSelect(theme)}
                  className={`relative group rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    isActive ? 'border-primary ring-2 ring-primary/50' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="aspect-video bg-card">
                    {theme.image ? (
                      <img
                        src={theme.image}
                        alt={theme.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-background">
                        <span className="text-muted-foreground font-cyber text-xs">No Image</span>
                      </div>
                    )}
                  </div>

                  {isActive && (
                    <div className="absolute top-2 right-2 p-1 rounded-full bg-primary text-primary-foreground">
                      <Check className="w-3 h-3" />
                    </div>
                  )}

                  <div className="p-2 bg-card/90 text-center">
                    <span className="font-cyber text-xs text-foreground">{theme.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
