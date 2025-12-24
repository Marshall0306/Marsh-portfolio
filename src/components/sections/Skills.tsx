import { Cpu, Radar, FileSearch, AlertTriangle, Siren } from 'lucide-react';

// Import tool logos
import splunkLogo from '@/assets/logos/splunk.png';
import nessusLogo from '@/assets/logos/nessus.png';
import burpsuiteLogo from '@/assets/logos/burpsuite.png';
import metasploitLogo from '@/assets/logos/metasploit.png';
import wiresharkLogo from '@/assets/logos/wireshark.png';
import pythonLogo from '@/assets/logos/python.png';
import bashLogo from '@/assets/logos/bash.png';
import cLogo from '@/assets/logos/c.png';
import rustLogo from '@/assets/logos/rust.png';
import zapLogo from '@/assets/logos/zap.png';
import openvasLogo from '@/assets/logos/openvas.png';
import masscanLogo from '@/assets/logos/masscan.png';
import maltegoLogo from '@/assets/logos/maltego.png';
import johntheripperLogo from '@/assets/logos/johntheripper.png';
import tcpdumpLogo from '@/assets/logos/tcpdump.png';

type SkillItem = {
  name: string;
  logo?: string;
  icon?: React.ComponentType<{ className?: string }>;
  category: string;
};

const skills: SkillItem[] = [
  // Cybersecurity Toolkit
  { name: 'Splunk SIEM', logo: splunkLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Nessus', logo: nessusLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Burp Suite', logo: burpsuiteLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Metasploit', logo: metasploitLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Wireshark', logo: wiresharkLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Nmap', icon: Radar, category: 'Cybersecurity Toolkit' },
  { name: 'ZAP', logo: zapLogo, category: 'Cybersecurity Toolkit' },
  { name: 'OpenVAS', logo: openvasLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Masscan', logo: masscanLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Maltego', logo: maltegoLogo, category: 'Cybersecurity Toolkit' },
  { name: 'Aircrack-ng', icon: Radar, category: 'Cybersecurity Toolkit' },
  { name: 'John the Ripper', logo: johntheripperLogo, category: 'Cybersecurity Toolkit' },
  { name: 'tcpdump', logo: tcpdumpLogo, category: 'Cybersecurity Toolkit' },
  // Programming
  { name: 'Python', logo: pythonLogo, category: 'Programming' },
  { name: 'Bash Scripting', logo: bashLogo, category: 'Programming' },
  { name: 'C (Debugging)', logo: cLogo, category: 'Programming' },
  { name: 'Rust (Debugging)', logo: rustLogo, category: 'Programming' },
  // SOC Skills
  { name: 'Log Analysis', icon: FileSearch, category: 'SOC Skills' },
  { name: 'Threat Detection', icon: AlertTriangle, category: 'SOC Skills' },
  { name: 'Incident Response', icon: Siren, category: 'SOC Skills' },
];

export const Skills = () => {
  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Cpu className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-cyber font-bold text-glow-sm text-primary">
            SYSTEM_LOAD
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categorySkills = skills.filter(s => s.category === category);
            const isToolkit = category === 'Cybersecurity Toolkit';
            
            return (
              <div 
                key={category} 
                className={`p-6 rounded border border-border bg-card/50 ${isToolkit ? 'lg:col-span-2' : ''}`}
              >
                <h3 className="font-cyber text-sm text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {category.toUpperCase()}
                </h3>
                <div className={`grid ${isToolkit ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-2`}>
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="flex items-center gap-3 p-2 rounded hover:bg-primary/10 transition-all duration-300 group cursor-default"
                      >
                        <div className="relative">
                          {skill.logo ? (
                            <img 
                              src={skill.logo} 
                              alt={skill.name} 
                              className="w-6 h-6 object-contain transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]"
                            />
                          ) : Icon ? (
                            <Icon className="w-5 h-5 text-primary transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
                          ) : null}
                        </div>
                        <span className="font-cyber text-sm text-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
