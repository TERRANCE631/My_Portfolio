
import React from 'react';
import { profileData } from '../data/profile';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="mt-20 bg-purple/5 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">{profileData.name}</h3>
            <p className="text-muted-foreground">{profileData.title}</p>
            <p className="text-muted-foreground mt-2">{profileData.location}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              {profileData.email && (
                <li>
                  <a href={`mailto:${profileData.email}`} className="text-muted-foreground hover:text-purple transition-colors">
                    {profileData.email}
                  </a>
                </li>
              )}
              {profileData.phone && (
                <li>
                  <a href={`tel:${profileData.phone}`} className="text-muted-foreground hover:text-purple transition-colors">
                    {profileData.phone}
                  </a>
                </li>
              )}
              {profileData.website && (
                <li>
                  <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">
                    {profileData.website}
                  </a>
                </li>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              {profileData.github && (
                <li>
                  <a href={`https://${profileData.github}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">
                    GitHub
                  </a>
                </li>
              )}
              {profileData.linkedin && (
                <li>
                  <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">
                    LinkedIn
                  </a>
                </li>
              )}
              {profileData.twitter && (
                <li>
                  <a href={`https://${profileData.twitter}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">
                    Twitter
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-purple/10 text-center">
          <p className="text-sm text-muted-foreground">
            © {year} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
