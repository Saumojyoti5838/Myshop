// ProjectSection.js

import React from 'react';
import { useAuth } from './Auth';

const ProjectSection = () => {
  const { isSignedIn, userDetails } = useAuth();

  return (
    <div className="project-section">
      {isSignedIn ? (
        <div>
          <h2>Welcome back, {userDetails.name}!</h2>
          <p>Your email: {userDetails.email}</p>
          {/* Render projects or other content here */}
        </div>
      ) : (
        <p>Please sign in to view your projects.</p>
      )}
    </div>
  );
};

export default ProjectSection;
