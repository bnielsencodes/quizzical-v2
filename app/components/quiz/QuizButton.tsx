import clsx from "clsx";

export default function QuizButton({
  checkAnswers,
  answersChecked,
  playAgain,
}: {
  checkAnswers: () => void;
  answersChecked: boolean;
  playAgain: () => void;
}) {
  return (
    <button
      className={clsx(
        "focus-outline transition-opacity py-4 px-7 border-0 rounded-[15px] bg-purple-200 text-neutral-200 font-medium leading-5 shadow-btn active:translate-y-[4.5px] active:shadow-none active:outline-none lg:hover:opacity-95",
        { "px-[1.2rem] md:px-6 lg:px-7": answersChecked }
      )}
      onClick={answersChecked ? playAgain : checkAnswers}
    >
      {answersChecked ? "Play Again" : "Check Answers"}
    </button>
  );
}
