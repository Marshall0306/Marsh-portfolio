import { Terminal, Eye, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
export const Resume = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Marshall_CV.pdf`;

  return (
    <section id="resume" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            EXTRACT_INTEL
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Terminal Window */}
          <div className="rounded border border-border bg-background overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-primary/50" />
              <div className="w-3 h-3 rounded-full bg-neon-green/50" />
              <span className="ml-4 text-xs font-cyber text-muted-foreground">marshall@terminal:~</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-cyber text-sm">
              <div className="flex items-center text-muted-foreground mb-4">
                <span className="text-neon-green">marshall@terminal</span>
                <span className="text-foreground">:</span>
                <span className="text-primary">~</span>
                <span className="text-foreground">$ </span>
                <span className="text-foreground">cat marshall_resume.pdf</span>
                <span className="ml-1 inline-block w-2 h-4 bg-primary animate-cursor border-r-2" />
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-cyber font-medium rounded hover:box-glow transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    VIEW RESUME
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-5xl p-0 overflow-hidden">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="font-cyber text-primary">marshall_resume.pdf</DialogTitle>
                  </DialogHeader>

                  <div className="px-6 pb-6">
                    <div className="rounded border border-border bg-background overflow-hidden">
                      <object
                        data={resumeUrl}
                        type="application/pdf"
                        aria-label="Marshall CV PDF"
                        className="h-[70vh] w-full"
                      >
                        <div className="p-6 text-sm text-muted-foreground font-cyber">
                          PDF preview isn’t available here (some browsers/extensions force downloads).
                        </div>
                      </object>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4">
                      <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-cyber text-primary transition-colors hover:text-primary/80"
                      >
                        <Eye className="h-4 w-4" />
                        OPEN IN NEW TAB
                      </a>

                      <a
                        href={resumeUrl}
                        download
                        className="inline-flex items-center gap-2 text-sm font-cyber text-primary transition-colors hover:text-primary/80"
                      >
                        <Download className="h-4 w-4" />
                        DOWNLOAD PDF
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 font-cyber">
            // Resume contains classified information - handle with care
          </p>
        </div>
      </div>
    </section>
  );
};
