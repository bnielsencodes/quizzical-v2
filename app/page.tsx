"use client";
import { useState, useCallback, ChangeEvent } from "react";
import getQuestions from "./lib/getQuestions";
import Start from "./components/start/Start";
import Quiz from "./components/quiz/Quiz";
import Footer from "./components/Footer";
import BlobImages from "./components/BlobImages";
import Confetti from "react-confetti";

//
//

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

//
//

// COMPONENT
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

  //
  //

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

  //
  //

  // start game function
  async function startGame() {
    let questions = await getQuestions(gameOptions);
    setQuestions(questions);
    setGameStarted(true);
  }

  //
  //

  // select answer function
  function selectAnswer(id: string, answer: string) {
    setQuestions((questions) =>
      questions.map((question) => {
        return question.id === id
          ? { ...question, selected: answer }
          : question;
      })
    );
  }

  //
  //

  // check correct answers function
  function checkAnswers() {
    let selected = true;
    questions.forEach((question: any) => {
      if (question.selected === null) {
        selected = false;
        return;
      }
    });
    if (!selected) {
      alert("Please answer all questions first!");
      return;
    }
    setQuestions((questions: any) =>
      questions.map((question: any) => {
        return { ...question, checked: true };
      })
    );
    setAnswersChecked(true);
    let correct = 0;
    console.log(questions);
    questions.forEach((question) => {
      if (question.correct === question.selected) {
        correct += 1;
      }
    });
    setAnswersCorrect(correct);
    setAllCorrect(correct === 5);
  }

  //
  //

  // play again function
  const playAgain = useCallback(() => {
    setGameStarted(false);
    setQuestions([]);
    setAnswersChecked(false);
    setAllCorrect(false);
  }, []);

  //
  //

  return (
    <main className="relative grid place-items-center h-[100svh] bg-neutral-100">
      {!gameStarted ? (
        <Start {...{ gameOptions, handleChange, startGame }} />
      ) : (
        <Quiz
          {...{
            questions,
            selectAnswer,
            checkAnswers,
            answersChecked,
            answersCorrect,
            playAgain,
          }}
        />
      )}
      <Footer />
      <BlobImages />

      {/* show confetti when 5/5 questions correct */}
      {allCorrect && <Confetti />}
    </main>
  );
}
