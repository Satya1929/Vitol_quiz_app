import React from 'react';
import { SkipForward, ArrowRight, CheckCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
  onSkip: () => void;
  onSubmit: () => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  selectedAnswer,
  onSelect,
  questionNumber,
  totalQuestions,
  onSkip,
  onSubmit,
}) => {
  const isLastQuestion = questionNumber === totalQuestions;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="glass-card p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-200">
              Question {questionNumber} of {totalQuestions}
            </span>
            <button
              onClick={onSubmit}
              className="btn"
            >
              Submit Quiz
            </button>
          </div>
          <h2 className="text-xl font-semibold mt-4">{question}</h2>
        </div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz-option"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => onSelect(option)}
                className="peer hidden"
              />
              <label
                htmlFor={`option-${index}`}
                className="radio-card w-full"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {isLastQuestion ? (
          <button
            onClick={onSubmit}
            className="btn flex-1 flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Finish Quiz
          </button>
        ) : (
          <>
            <button
              onClick={onSkip}
              className="btn flex-1 flex items-center justify-center gap-2"
            >
              <SkipForward className="w-5 h-5" />
              Skip Question
            </button>
            <button
              onClick={onSkip}
              className="btn flex-1 flex items-center justify-center gap-2"
            >
              Next Question
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}