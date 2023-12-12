export default function StartButton({ startGame }: { startGame: () => void }) {
  return (
    <button
      className="customTransition py-4 px-14 border-0 rounded-[15px] bg-purple-200 text-neutral-200 font-medium leading-5 shadow-btn active:translate-y-[3.5px] active:shadow-none lg:hover:bg-opacity-95"
      onClick={startGame}
    >
      Start Quiz
    </button>
  );
}
