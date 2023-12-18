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
      className="customTransition py-4 px-7 border-0 rounded-[15px] bg-purple-200 text-neutral-200 font-medium leading-5 shadow-btn active:translate-y-[4.5px] active:shadow-none lg:hover:bg-opacity-95"
      onClick={answersChecked ? playAgain : checkAnswers}
    >
      {answersChecked ? "Play Again" : "Check Answers"}
    </button>
  );
}
