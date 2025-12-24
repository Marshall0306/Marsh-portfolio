import { useState } from 'react';
import { Award, ExternalLink, Eye, CheckCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import lahtpCert from '@/assets/certificates/lahtp-legacy.jpg';

const certifications = [
  {
    title: 'Cybersecurity',
    issuer: 'Boston Institute of Analytics',
    date: '2024',
    verified: true,
    link: 'https://bia.bostoninstituteofanalytics.org/bia-certification/QklBXzg4NDRfQklB',
    hasPopup: false,
  },
  {
    title: 'Ethical Hacking',
    issuer: 'Boston Institute of Analytics',
    date: '2024',
    verified: true,
    link: 'https://bia.bostoninstituteofanalytics.org/bia-certification/QklBXzg4NDVfQklB',
    hasPopup: false,
  },
  {
    title: 'LAHTP - Legacy',
    issuer: 'Selfmade Ninja Academy',
    date: '2024',
    verified: true,
    link: 'https://selfmade.ninja/verify-cert',
    hasPopup: true,
    certificateImage: lahtpCert,
  },
  {
    title: 'Python Programming',
    issuer: 'GUVI',
    date: '2023',
    verified: true,
    link: 'https://www.guvi.in/verify-certificate?id=x7j0oV43T91807ca7t',
    hasPopup: false,
  },
  {
    title: 'JavaScript',
    issuer: 'GUVI',
    date: '2023',
    verified: true,
    link: 'https://www.guvi.in/verify-certificate?id=24ju416sk5l1517a04&course=javascriptTa',
    hasPopup: false,
  },
];

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [showImage, setShowImage] = useState(false);

  const itemsPerPage = 1;
  const maxIndex = certifications.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleView = (cert: typeof certifications[0]) => {
    if (cert.hasPopup) {
      setSelectedCert(cert);
    } else {
      window.open(cert.link, '_blank');
    }
  };

  const visibleCerts = certifications.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            ACCESS_CREDENTIALS
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-card border border-border hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-card border border-border hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Cards Container */}
          <div className="flex justify-center px-4">
            {visibleCerts.map((cert, index) => (
              <div
                key={currentIndex + index}
                className="group p-6 rounded border border-border bg-card/50 hover:border-primary/50 hover:box-glow transition-all duration-300 max-w-md w-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  {cert.verified && (
                    <span className="text-xs font-cyber text-neon-green flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                      VERIFIED
                    </span>
                  )}
                </div>

                <h3 className="font-cyber font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-4">{cert.issuer}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-cyber">{cert.date}</span>
                  <button
                    onClick={() => handleView(cert)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors font-cyber"
                  >
                    VIEW
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-6' : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* LAHTP Legacy Popup with View Certificate + Validate options */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="font-cyber text-primary">
              {selectedCert?.title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground mb-4">{selectedCert?.issuer}</p>
          
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowImage(true)}
              className="flex items-center gap-3 p-4 rounded border border-border hover:border-primary hover:bg-primary/10 transition-all group"
            >
              <Eye className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="font-cyber text-sm text-foreground group-hover:text-primary">View Certificate</p>
                <p className="text-xs text-muted-foreground">See the certificate image</p>
              </div>
            </button>
            
            <a
              href={selectedCert?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded border border-border hover:border-primary hover:bg-primary/10 transition-all group"
            >
              <CheckCircle className="w-5 h-5 text-neon-green" />
              <div className="text-left">
                <p className="font-cyber text-sm text-foreground group-hover:text-primary">Validate</p>
                <p className="text-xs text-muted-foreground">Verify on issuer's website</p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>

      {/* Certificate Image Modal */}
      <Dialog open={showImage} onOpenChange={() => setShowImage(false)}>
        <DialogContent className="bg-card border-border max-w-4xl p-2">
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-2 right-2 p-2 rounded bg-background/80 hover:bg-background transition-colors z-10"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          {selectedCert?.certificateImage && (
            <img
              src={selectedCert.certificateImage}
              alt={`${selectedCert.title} Certificate`}
              className="w-full h-auto rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
