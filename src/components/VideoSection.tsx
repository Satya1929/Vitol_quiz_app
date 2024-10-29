import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 space-y-4">
      <div className="glass-card p-4">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/4BKzqpQYwhg"
            title="Tutorial Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <a
          href="https://www.youtube.com/@Satyaprakash__1929"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-4 text-lg font-semibold hover:text-violet-300 transition-colors"
        >
          Subscribe for more !!
        </a>
      </div>
    </div>
  );
}