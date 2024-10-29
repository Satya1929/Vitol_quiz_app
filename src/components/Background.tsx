import React, { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />
      <div className="relative flex min-h-screen flex-col items-center px-4 py-12">
        {children}
      </div>
    </div>
  );
}