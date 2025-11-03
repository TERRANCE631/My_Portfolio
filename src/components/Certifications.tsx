
import React from 'react';
import { certificationsData } from '../data/certifications';

const Certifications = ({cirtificatesRef}) => {
  return (
    <section ref={cirtificatesRef} id="certifications" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
          Certifications
        </h2>
        
        <div className="section-container p-8 md:p-10 shadow-xl">
          <div className="gap-8">
            {certificationsData.map((certification, index) => (
              <div 
                key={index} 
                className="bg-white border border-purple/20 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-purple">{certification.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{certification.issuer}</p>
                
                <div className="mt-4 flex flex-col md:flex-row md:items-center text-sm">
                  <span>Issued: {certification.date}</span>
                  {certification.expires && (
                    <>
                      <span className="hidden md:block mx-2">•</span>
                      <span>Expires: {certification.expires}</span>
                    </>
                  )}
                </div>
                
                {certification.credentialId && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Credential ID: {certification.credentialId}
                  </p>
                )}
                
                {certification.credentialURL && (
                  <div className="mt-4">
                    <a 
                      href={certification.credentialURL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-purple hover:underline"
                    >
                      View Credential
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
