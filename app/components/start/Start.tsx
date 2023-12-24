import GameOptions from "./GameOptions";
import StartButton from "./StartButton";

export default function Start({
  gameOptions,
  handleChange,
  startGame,
}: {
  gameOptions: {
    category: string;
    difficulty: string;
    type: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  startGame: () => void;
}) {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center px-5 text-center">
      <h1 className="text-purple-100 font-karla text-[2.5rem] leading-[36.53px] font-semibold md:text-[2.8rem]">
        Quizzical
      </h1>
      <p className="mt-5 mb-10 text-purple-100 leading-5 md:mt-7 md:text-[17px]">
        How well do you know your trivia?
      </p>
      <GameOptions {...{ gameOptions, handleChange }} />
      <StartButton {...{ startGame }} />
    </div>
  );
}
