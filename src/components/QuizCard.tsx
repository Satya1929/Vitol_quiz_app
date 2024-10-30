import React from 'react';
import { BookOpen, FileQuestion } from 'lucide-react';

interface QuizCardProps {
  type: 'pyq' | 'set';
  setNumber?: number;
  onClick: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ type, setNumber, onClick }) => {
  const isPYQ = type === 'pyq';
  const Icon = isPYQ ? BookOpen : FileQuestion;
  
  return (
    <button
      onClick={onClick}
      className="w-full glass-card p-6 text-left transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-violet-600/30">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            {isPYQ ? 'Previous Year Questions' : `Set ${setNumber}`}
          </h3>
          <p className="text-gray-400">10 Questions</p>
        </div>
      </div>
    </button>
  );
}

