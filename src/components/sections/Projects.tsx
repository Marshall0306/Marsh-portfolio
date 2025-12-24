import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Python Vulnerability Scanner',
    description: 'Custom-built vulnerability scanner using Python for automated security assessments of web applications and network infrastructure.',
    tags: ['Python', 'Security', 'Automation'],
    github: 'https://github.com/marshallr',
    demo: null,
  },
  {
    title: 'Electricity Theft Detection System',
    description: 'IoT-based system using MATLAB and PROTEUS for detecting electricity theft through anomaly detection algorithms.',
    tags: ['MATLAB', 'PROTEUS', 'IoT', 'Machine Learning'],
    github: null,
    demo: null,
  },
  {
    title: 'SOC Practice Lab',
    description: 'Personal security operations center lab environment using Splunk for log analysis, threat hunting, and incident response practice.',
    tags: ['Splunk', 'SIEM', 'Log Analysis'],
    github: null,
    demo: null,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            MISSION_FILES
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-6 rounded border border-border bg-card/80 hover:border-primary/50 hover:box-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded bg-primary/10 border border-primary/30">
                  <FolderGit2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-cyber font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs rounded border border-border bg-secondary/50 text-muted-foreground font-cyber"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
