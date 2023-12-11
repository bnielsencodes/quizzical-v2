"use client";
import { useState, useCallback, ChangeEvent } from "react";


interface GameOptions {
  category: string;
  difficulty: string;
  type: string;
}

interface Question {
  id: string;
  question: string;
  answers: string[];
  correct: string;
  selected: string | null;
  checked: boolean;
}
export default function Home() {
  const [gameOptions, setGameOptions] = useState<GameOptions>({
    category: "",
    difficulty: "",
    type: "",
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [answersChecked, setAnswersChecked] = useState<boolean>(false);
  const [answersCorrect, setAnswersCorrect] = useState<number>(0);
  const [allCorrect, setAllCorrect] = useState<boolean>(false);

  // change game options function
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setGameOptions((prevGameOptions) => {
      return {
        ...prevGameOptions,
        [name]: value,
      };
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        />
    </main>
  );
}
