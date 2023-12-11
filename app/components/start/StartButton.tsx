export default function StartButton({ startGame }: { startGame: () => void }) {
  return (
    <button
      className="btn primary py-4 px-14 shadow-custom"
      onClick={startGame}
    >
      Start Quiz
    </button>
  );
}
