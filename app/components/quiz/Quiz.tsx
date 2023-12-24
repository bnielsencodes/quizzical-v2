import QAndA from "./QAndA";
import QuizButton from "./QuizButton";
import clsx from "clsx";

export default function Quiz({
  questions,
  selectAnswer,
  checkAnswers,
  answersChecked,
  answersCorrect,
  playAgain,
}: {
  questions: any;
  selectAnswer: (id: string, answer: string) => void;
  checkAnswers: () => void;
  answersChecked: boolean;
  answersCorrect: number;
  playAgain: () => void;
}) {
  // map questions state and create QAndA components
  const questionElements = questions
    ? questions.map((item: any) => {
        console.log(item);
        return <QAndA key={item.id} {...{ item, selectAnswer }} />;
      })
    : [];

  return (
    <div className="relative z-20 flex flex-col items-center px-5 mt-20 mb-28 md:px-14 md:mb-32 lg:px-0">
      <ul className="mb-5 md:max-w-[786px]">{questionElements}</ul>
      <div
        className={clsx(
          "flex items-center justify-around w-full max-w-[400px] lg:max-w-[445px]",
          { "justify-between": answersChecked }
        )}
      >
        {answersChecked && (
          <span className="text-purple-100 font-bold text-[13px] md:text-[1rem]">
            You scored {answersCorrect}/5 correct answers
          </span>
        )}
        <QuizButton {...{ checkAnswers, answersChecked, playAgain }} />
      </div>
    </div>
  );
}
