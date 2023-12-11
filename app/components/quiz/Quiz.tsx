import QuizButton from "./QuizButton";

export default function Quiz({
  checkAnswers,
  answersChecked,
  answersCorrect,
  playAgain,
}: {
  checkAnswers: () => void;
  answersChecked: boolean;
  answersCorrect: number;
  playAgain: () => void;
}) {
  return (
    <div className="relative flex flex-col items-center content-center w-screen min-h-screen pt-[60px] px-10 pb-[15px] bg-neutral-200 md:pt-[13px] md:px-[75px]">
      <div className="z-20 flex items-center justify-around w-[93%] max-w-[450px] mb-[50px]">
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
