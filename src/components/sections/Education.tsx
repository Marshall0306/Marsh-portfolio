import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'Jerusalem College of Engineering',
    degree: 'Bachelor of Engineering',
    period: '2021 - 2025',
    status: '',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            EDUCATION_LOG
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="max-w-2xl">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group p-6 rounded border border-border bg-card/50 hover:border-primary/50 hover:box-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-cyber text-neon-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                  {edu.status.toUpperCase()}
                </span>
              </div>

              <h3 className="font-cyber font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {edu.institution}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">{edu.degree}</p>
              
              <div className="flex items-center gap-2 text-primary font-cyber text-sm">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
