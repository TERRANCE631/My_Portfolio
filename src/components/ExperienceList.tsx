
import React from 'react';
import { experienceData } from '../data/experience';

const ExperienceList: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
          Professional Experience
        </h2>
        
        <div className="section-container p-8 md:p-10 shadow-xl">
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div key={index} className={`timeline-item ${index === experienceData.length - 1 ? 'border-transparent' : ''}`}>
                <div className="timeline-dot"></div>
                
                <div className="mt-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold text-purple">{experience.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                  
                  <div className="mt-2 flex flex-col md:flex-row md:items-center text-sm text-muted-foreground">
                    <span className="font-medium">{experience.company}</span>
                    <span className="hidden md:block mx-2">•</span>
                    <span>{experience.location}</span>
                  </div>
                  
                  <p className="mt-4">{experience.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs bg-purple/10 text-purple rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
