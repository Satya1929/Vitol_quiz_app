import React from 'react';
import { CheckCircle, XCircle, SkipForward, PieChart } from 'lucide-react';

interface QuizAnalysisProps {
  questions: Array<{
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }>;
  userAnswers: Record<number, string>;
  onRetake: () => void;
}

export const QuizAnalysis: React.FC<QuizAnalysisProps> = ({
  questions,
  userAnswers,
  onRetake,
}) => {
  const stats = {
    total: questions.length,
    attempted: Object.keys(userAnswers).length,
    notAttempted: questions.length - Object.keys(userAnswers).length,
    correct: questions.filter((q, i) => userAnswers[i] === q.correctAnswer).length,
    incorrect: Object.keys(userAnswers).length - questions.filter((q, i) => userAnswers[i] === q.correctAnswer).length,
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-5 h-5 text-violet-400" />
          <h2 className="text-xl font-semibold">Quiz Statistics</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 text-center">
            <p className="text-sm text-gray-400">Attempted</p>
            <p className="text-2xl font-bold mt-1">{stats.attempted}</p>
            <p className="text-xs text-gray-400">out of {stats.total}</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-sm text-gray-400">Not Attempted</p>
            <p className="text-2xl font-bold mt-1">{stats.notAttempted}</p>
            <p className="text-xs text-gray-400">out of {stats.total}</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-sm text-green-400">Correct</p>
            <p className="text-2xl font-bold mt-1">{stats.correct}</p>
            <p className="text-xs text-gray-400">out of {stats.attempted}</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-sm text-red-400">Incorrect</p>
            <p className="text-2xl font-bold mt-1">{stats.incorrect}</p>
            <p className="text-xs text-gray-400">out of {stats.attempted}</p>
          </div>
        </div>
      </div>

      {questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        const isSkipped = !userAnswer;
        const isCorrect = userAnswer === question.correctAnswer;

        return (
          <div key={index} className="glass-card p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">Question {index + 1}</h3>
              {isSkipped ? (
                <div className="flex items-center gap-2 text-gray-400">
                  <SkipForward className="w-5 h-5" />
                  <span>Skipped</span>
                </div>
              ) : isCorrect ? (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Correct</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-400">
                  <XCircle className="w-5 h-5" />
                  <span>Incorrect</span>
                </div>
              )}
            </div>

            <p className="mt-2 mb-4">{question.question}</p>

            <div className="space-y-2">
              {question.options.map((option, optionIndex) => {
                const isCorrectOption = option === question.correctAnswer;
                const isUserSelection = option === userAnswer;

                let optionClassName = "p-3 rounded-lg ";
                if (isCorrectOption) {
                  optionClassName += "bg-green-500/20 border border-green-500";
                } else if (isUserSelection) {
                  optionClassName += "bg-red-500/20 border border-red-500";
                } else {
                  optionClassName += "bg-gray-800/30";
                }

                return (
                  <div key={optionIndex} className={optionClassName}>
                    {option}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-4 bg-violet-600/20 rounded-lg">
              <p className="text-sm font-medium text-violet-200">Explanation:</p>
              <p className="mt-1 text-gray-300">{question.explanation}</p>
            </div>
          </div>
        );
      })}

      <button
        onClick={onRetake}
        className="btn w-full"
      >
        Retake Quiz
      </button>
    </div>
  );
}