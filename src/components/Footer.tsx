import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-cyber text-sm">
              © MARSHALL R. 
            </span>
          </div>

          <div className="font-cyber text-xs text-muted-foreground">
            
          </div>
        </div>
      </div>
    </footer>
  );
};
