import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Mail className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            ENCRYPTED_CHANNEL
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div className="p-6 rounded border border-border bg-card/50">
            <h3 className="font-cyber text-sm text-primary mb-6">// DIRECT CHANNELS</h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:marshall06rs@gmail.com"
                className="flex items-center gap-4 p-4 rounded border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="p-2 rounded bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-cyber text-foreground group-hover:text-primary transition-colors">Email</div>
                  <div className="text-xs text-muted-foreground">marshall06rs@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://github.com/Marshall0306 "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="p-2 rounded bg-primary/10">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-cyber text-foreground group-hover:text-primary transition-colors">GitHub</div>
                  <div className="text-xs text-muted-foreground">Marshall0306</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/marshall-r-799396227/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="p-2 rounded bg-primary/10">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-cyber text-foreground group-hover:text-primary transition-colors">LinkedIn</div>
                  <div className="text-xs text-muted-foreground">/in/marshallr</div>
                </div>
              </a>
            </div>
          </div>

          <div className="p-6 rounded border border-primary/30 bg-primary/5 text-center">
            <p className="font-cyber text-sm text-primary">
              // OPEN TO OPPORTUNITIES
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Currently seeking SOC Analyst positions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
