
import React from 'react';
import { educationData } from '../data/education';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
          Education
        </h2>
        
        <div className="section-container p-8 md:p-10 shadow-xl">
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div key={index} className={`timeline-item ${index === educationData.length - 1 ? 'border-transparent' : ''}`}>
                <div className="timeline-dot"></div>
                
                <div className="mt-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold text-purple">{education.degree}</h3>
                    <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">
                      {education.startDate} - {education.endDate}
                    </span>
                  </div>
                  
                  <div className="mt-2 flex flex-col md:flex-row md:items-center text-sm text-muted-foreground">
                    <span className="font-medium">{education.institution}</span>
                    <span className="hidden md:block mx-2">•</span>
                    <span>{education.location}</span>
                    {education.gpa && (
                      <>
                        <span className="hidden md:block mx-2">•</span>
                        <span>GPA: {education.gpa}</span>
                      </>
                    )}
                  </div>
                  
                  {education.achievements && education.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {education.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
