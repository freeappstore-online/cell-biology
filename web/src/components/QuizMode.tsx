import { useState, useCallback } from "react";
import { quizQuestions } from "../data/organelles";
import type { QuizQuestion } from "../data/types";

interface Props {
  onClose: () => void;
}

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    const swp = a[j];
    if (tmp != null && swp != null) {
      a[i] = swp;
      a[j] = tmp;
    }
  }
  return a;
}

export default function QuizMode({ onClose }: Props) {
  const [questions] = useState<QuizQuestion[]>(() => shuffle(quizQuestions).slice(0, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentIndex];

  const handleAnswer = useCallback(
    (choice: string) => {
      if (selected != null || question == null) return;
      setSelected(choice);
      setAnswered((a) => a + 1);
      if (choice === question.correctAnswer) {
        setScore((s) => s + 1);
      }
    },
    [selected, question],
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setAnswered(0);
    setShowResult(false);
  }, []);

  if (showResult) {
    const pct = answered > 0 ? Math.round((score / answered) * 100) : 0;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "var(--paper)" }}>
        <div className="text-center p-8 max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}>
            Quiz Complete!
          </h2>
          <div
            className="text-6xl font-bold mb-2"
            style={{ color: pct >= 70 ? "var(--success)" : pct >= 40 ? "var(--warning)" : "var(--error)" }}
          >
            {pct}%
          </div>
          <p className="text-lg mb-6" style={{ color: "var(--muted)" }}>
            {score} out of {answered} correct
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--ink)" }}>
            {pct >= 90
              ? "Outstanding! You really know your cells!"
              : pct >= 70
                ? "Great job! You have a solid understanding of cell biology."
                : pct >= 40
                  ? "Good effort! Review the cell diagrams to strengthen your knowledge."
                  : "Keep studying! Explore the cell diagrams and try again."}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ background: "var(--accent)" }}
            >
              Try Again
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg text-sm font-semibold"
              style={{ background: "var(--line)", color: "var(--ink)" }}
            >
              Back to Explorer
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (question == null) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "var(--paper)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 shrink-0" style={{ borderBottom: "1px solid var(--line)" }}>
        <h2 className="text-lg font-bold" style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}>
          Quiz Mode
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-sm" style={{ color: "var(--muted)" }}>
            {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-sm font-semibold" style={{ color: "var(--success)" }}>
            Score: {score}
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg text-sm font-medium"
            style={{ background: "var(--line)", color: "var(--ink)" }}
          >
            Exit
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full" style={{ background: "var(--line)" }}>
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
            background: "var(--accent)",
          }}
        />
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-5">
        <div className="w-full max-w-lg">
          <h3 className="text-xl font-semibold mb-8 text-center" style={{ color: "var(--ink)" }}>
            {question.question}
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {question.choices.map((choice) => {
              let bg = "var(--panel)";
              let border = "1px solid var(--line)";
              if (selected != null) {
                if (choice === question.correctAnswer) {
                  bg = "rgba(34,197,94,0.15)";
                  border = "2px solid var(--success)";
                } else if (choice === selected && choice !== question.correctAnswer) {
                  bg = "rgba(239,68,68,0.15)";
                  border = "2px solid var(--error)";
                }
              }

              return (
                <button
                  key={choice}
                  onClick={() => handleAnswer(choice)}
                  disabled={selected != null}
                  className="w-full text-left px-5 py-3.5 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: bg,
                    border,
                    color: "var(--ink)",
                    opacity: selected != null && choice !== question.correctAnswer && choice !== selected ? 0.5 : 1,
                    cursor: selected != null ? "default" : "pointer",
                  }}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {selected != null && (
            <div className="mt-6 text-center">
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ background: "var(--accent)" }}
              >
                {currentIndex + 1 >= questions.length ? "See Results" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
