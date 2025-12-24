import { Shield, Terminal, Eye } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            SYSTEM_PROFILE
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="p-6 rounded border border-border bg-card/50">
              <div className="flex items-center gap-2 mb-4 text-primary font-cyber text-sm">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                user@marshall:~$ cat profile.txt
              </div>
              
              <p className="text-foreground/90 leading-relaxed mb-4">
                Passionate and dedicated <span className="text-primary font-medium">SOC Analyst</span> with hands-on experience 
                in security operations, threat analysis, and incident response. Recently worked as a 
                <span className="text-primary font-medium"> Security Operations Intern at TVS Electronics</span>, 
                where I implemented vulnerability assessments and real-time monitoring systems.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                Skilled in SIEM tools like <span className="text-primary">Splunk</span>, 
                vulnerability scanners like <span className="text-primary">Nessus</span> and 
                <span className="text-primary"> Burp Suite</span>, and network analysis with 
                <span className="text-primary"> Wireshark</span>. Driven to protect organizations 
                from evolving cyber threats.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded border border-border bg-card/50 text-center group hover:border-primary/50 transition-colors">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-glow-sm" />
                <div className="text-3xl font-cyber font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </div>
              
              <div className="p-6 rounded border border-border bg-card/50 text-center group hover:border-primary/50 transition-colors">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-cyber font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Security Tools</div>
              </div>
            </div>

            <div className="p-6 rounded border border-border bg-card/50">
              <h3 className="font-cyber text-sm text-primary mb-4">// CORE FOCUS</h3>
              <div className="flex flex-wrap gap-2">
                {['Threat Detection', 'Log Analysis', 'SIEM', 'Vulnerability Assessment', 'Incident Response', 'Network Security'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm rounded border border-primary/30 bg-primary/5 text-primary font-cyber"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
