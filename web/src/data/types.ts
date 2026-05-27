export type CellType = "animal" | "plant" | "prokaryote";

export interface Organelle {
  id: string;
  name: string;
  description: string;
  funFact: string;
  foundIn: CellType[];
  analogy: string;
  color: string;
  glowColor: string;
}

export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  choices: string[];
}
