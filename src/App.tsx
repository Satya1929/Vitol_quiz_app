import React, { useState } from 'react';
import { ArrowLeft, Home, Users } from 'lucide-react';
import { WeekCard } from './components/WeekCard';
import { QuizCard } from './components/QuizCard';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizAnalysis } from './components/QuizAnalysis';
import { VideoSection } from './components/VideoSection';
import { Contributors } from './components/Contributors';
import { Background } from './components/Background';
import quizData from './data/quizData.json';

type Stage = 'weeks' | 'sets' | 'quiz' | 'analysis' | 'contributors';

function App() {
  const [stage, setStage] = useState<Stage>('weeks');
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [selectedSet, setSelectedSet] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleWeekSelect = (week: number) => {
    setSelectedWeek(week);
    setStage('sets');
  };

  const handleSetSelect = (set: string) => {
    setSelectedSet(set);
    setStage('quiz');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleBack = () => {
    if (stage === 'sets') {
      setStage('weeks');
      setSelectedWeek(null);
    } else if (stage === 'quiz') {
      setStage('sets');
      setSelectedSet(null);
    } else if (stage === 'analysis') {
      setStage('quiz');
    } else if (stage === 'contributors') {
      setStage('weeks');
    }
  };

  const handleHome = () => {
    setStage('weeks');
    setSelectedWeek(null);
    setSelectedSet(null);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswerSelect = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleSkip = () => {
    if (selectedWeek && selectedSet) {
      const totalQuestions = quizData[`week${selectedWeek}`][selectedSet].length;
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setStage('analysis');
      }
    }
  };

  const handleSubmit = () => {
    setStage('analysis');
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setStage('quiz');
  };

  const getCurrentQuestions = () => {
    if (selectedWeek && selectedSet) {
      return quizData[`week${selectedWeek}`][selectedSet];
    }
    return [];
  };

  if (stage === 'contributors') {
    return <Contributors />;
  }

  return (
    <Background>
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          {stage === 'weeks' ? (
            <button
              onClick={() => setStage('contributors')}
              className="btn inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Meet the Developer
            </button>
          ) : (
            <button
              onClick={handleBack}
              className="btn inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}

          {stage !== 'weeks' && (
            <button
              onClick={handleHome}
              className="btn inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
          )}
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center">
            {stage === 'weeks' && 'Weekly Quizzes'}
            {stage === 'sets' && `Week ${selectedWeek} Quizzes`}
            {stage === 'quiz' && `Week ${selectedWeek} - ${selectedSet === 'pyq' ? 'PYQ' : `Set ${selectedSet?.replace('set', '')}`}`}
            {stage === 'analysis' && 'Quiz Analysis'}
          </h1>
        </div>

        {stage === 'weeks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map(week => (
              <WeekCard
                key={week}
                weekNumber={week}
                onClick={() => handleWeekSelect(week)}
              />
            ))}
          </div>
        )}

        {stage === 'sets' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuizCard
              type="pyq"
              onClick={() => handleSetSelect('pyq')}
            />
            {[1, 2, 3, 4, 5, 6].map(set => (
              <QuizCard
                key={set}
                type="set"
                setNumber={set}
                onClick={() => handleSetSelect(`set${set}`)}
              />
            ))}
          </div>
        )}

        {stage === 'quiz' && selectedWeek && selectedSet && (
          <>
            <QuizQuestion
              question={getCurrentQuestions()[currentQuestion].question}
              options={getCurrentQuestions()[currentQuestion].options}
              selectedAnswer={answers[currentQuestion] || null}
              onSelect={handleAnswerSelect}
              questionNumber={currentQuestion + 1}
              totalQuestions={getCurrentQuestions().length}
              onSkip={handleSkip}
              onSubmit={handleSubmit}
            />
            <VideoSection />
          </>
        )}

        {stage === 'analysis' && (
          <QuizAnalysis
            questions={getCurrentQuestions()}
            userAnswers={answers}
            onRetake={handleRetake}
          />
        )}
      </div>
    </Background>
  );
}

export default App;