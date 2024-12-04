'use client';
import { useState } from 'react';

type Skill = {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
};

const skillsData: Record<string, Skill[]> = {
  languages: [
    { name: 'TypeScript', level: 'Intermediate', icon: '💻' },
    { name: 'JavaScript', level: 'Advanced', icon: '🟨' },
    { name: 'Python', level: 'Intermediate', icon: '🐍' },
  ],
  frameworks: [
    { name: 'React', level: 'Advanced', icon: '⚛️' },
    { name: 'Next.js', level: 'Intermediate', icon: '▲' },
    { name: 'TailwindCSS', level: 'Advanced', icon: '🎨' },
  ],
  tools: [
    { name: 'Git', level: 'Advanced', icon: '📚' },
    { name: 'Docker', level: 'Intermediate', icon: '🐳' },
    { name: 'VS Code', level: 'Advanced', icon: '📝' },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>('languages');

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="flex justify-center mb-8">
          <nav className="flex gap-4 p-1 bg-secondary rounded-lg">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category as keyof typeof skillsData)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === category 
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary-foreground/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <div className="flex-1">
                  <h3 className="font-medium">{skill.name}</h3>
                  <div className="mt-1 h-2 bg-secondary-foreground/20 rounded-full">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{
                        width: 
                          skill.level === 'Beginner' 
                            ? '33%' 
                            : skill.level === 'Intermediate'
                            ? '66%'
                            : '100%'
                      }}
                    />
                  </div>
                  <span className="text-sm text-foreground/60">{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}