export default function StartButton({ startGame }: { startGame: () => void }) {
  return (
    <button
      className="focus-outline transition-bg py-4 px-14 border-0 rounded-[15px] bg-purple-200 text-neutral-200 font-medium leading-5 shadow-btn active:translate-y-[4.5px] active:shadow-none active:outline-none lg:hover:bg-opacity-95"
      onClick={startGame}
    >
      Start Quiz
    </button>
  );
}
