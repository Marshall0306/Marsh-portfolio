import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Security Operations / IT Security Intern',
    company: 'TVS Electronics',
    location: 'Chennai, India',
    period: '2025',
    description: [
      'Conducted vulnerability assessments using Nessus and Burp Suite',
      'Implemented real-time security monitoring with Splunk SIEM',
      'Assisted in incident response and threat analysis procedures',
      'Documented security protocols and best practices',
    ],
    current: true,
  },
  {
    title: 'Database Intern',
    company: 'Leiten Technologies',
    location: 'Remote',
    period: '2025',
    description: [
      'Managed and optimized database systems for improved performance',
      'Implemented data backup and recovery procedures',
      'Collaborated with development team on data architecture',
      'Created automated scripts for routine database tasks',
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            AUDIT_LOG
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 animate-pulse-glow" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`p-6 rounded border border-border bg-card/80 hover:border-primary/50 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    {/* Status badge */}
                    {exp.current && (
                      <span className="inline-flex items-center gap-2 px-2 py-1 mb-3 text-xs font-cyber rounded border border-neon-green/30 bg-neon-green/10 text-neon-green">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                        
                      </span>
                    )}

                    <h3 className="text-xl font-cyber font-bold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-foreground font-medium mb-2">{exp.company}</p>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-sm text-foreground/80 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
