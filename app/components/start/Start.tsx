import GameOptions from "./GameOptions";

export default function Start({
  gameOptions,
  handleChange,
}: {
  gameOptions: {
    category: string;
    difficulty: string;
    type: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-neutral-200 text-center overflow-clip">
      <h1 className="text-purple-100 font-karla text-[31.25px] leading-[36.53px] ">
        Quizzical
      </h1>
      <p className="mt-[11px] mb-[29px] text-purple-100 leading-5">
        How well do you know your trivia?
      </p>
      <GameOptions {...{ gameOptions, handleChange }} />
    </div>
  );
}
