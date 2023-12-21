import { ChangeEvent } from "react";
import Image from "next/image";
import caratDownIcon from "/public/assets/icons/carat-down.svg";

export default function GameOptions({
  gameOptions,
  handleChange,
}: {
  gameOptions: {
    category: string;
    difficulty: string;
    type: string;
  };
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <ul className="flex flex-col w-[335px] mb-[18px] md:w-[550px]">
      <li className="relative flex items-center justify-between mb-[18px]">
        {/* category option */}
        <label
          className="min-w-[99px] mr-4 text-purple-100 text-[1.125rem] leading-[1.375rem] font-medium text-left md:min-w-[165px] md:mr-4 md:text-[1.15rem] md:font-semibold"
          htmlFor="category"
        >
          Category:
        </label>
        <select
          name="category"
          id="category"
          className="w-full h-11 px-4 border-0 rounded-[15px] text-purple-200 md:h-12 appearance-none shadow-input peer focus:outline-2 focus:outline-purple-100 active:translate-y-[3.5px] active:shadow-none lg:hover:bg-purple-400 lg:hover:bg-opacity-40 lg:hover:cursor-pointer"
          value={gameOptions.category}
          onChange={handleChange}
        >
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        {/* carat down icon */}
        <Image
          className="customActiveImg absolute top-1/2 right-[14px] z-10 w-4 h-4 -translate-y-1/2 peer-active:-translate-y-[calc(50%-3.5px)]"
          src={caratDownIcon}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </li>

      {/* difficulty option */}
      <li className="relative flex items-center justify-between mb-[18px]">
        <label
          className="min-w-[99px] mr-4 text-purple-100 text-[1.125rem] leading-[1.375rem] font-medium text-left md:min-w-[165px] md:mr-4 md:text-[1.15rem] md:font-semibold"
          htmlFor="difficulty"
        >
          Difficulty:
        </label>
        <select
          name="difficulty"
          id="difficulty"
          className="w-full h-11 px-4 border-0 rounded-[15px] text-purple-200 md:h-12 appearance-none shadow-input peer focus:outline-2 focus:outline-purple-100 active:translate-y-[3.5px] active:shadow-none lg:hover:bg-purple-400 lg:hover:bg-opacity-40 lg:hover:cursor-pointer"
          value={gameOptions.difficulty}
          onChange={handleChange}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        {/* carat down icon */}
        <Image
          className="absolute top-1/2 right-[14px] z-10 w-4 h-4 -translate-y-1/2 peer-active:-translate-y-[calc(50%-3.5px)]"
          src={caratDownIcon}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </li>

      {/* type option */}
      <li className="relative flex items-center justify-between mb-[18px]">
        <label
          className="min-w-[99px] mr-4 text-purple-100 text-[1.125rem] leading-[1.375rem] font-medium text-left md:min-w-[165px] md:mr-4 md:text-[1.15rem] md:font-semibold"
          htmlFor="type"
        >
          Type of questions:
        </label>
        <select
          name="type"
          id="type"
          className="w-full h-11 px-4 border-0 rounded-[15px] text-purple-200 md:h-12 appearance-none shadow-input peer focus:outline-2 focus:outline-purple-100 active:translate-y-[3.5px] active:shadow-none lg:hover:bg-purple-400 lg:hover:bg-opacity-40 lg:hover:cursor-pointer"
          value={gameOptions.type}
          onChange={handleChange}
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        {/* carat down icon */}
        <Image
          className="absolute top-1/2 right-[14px] z-10 w-4 h-4 -translate-y-1/2 peer-active:-translate-y-[calc(50%-3.5px)]"
          src={caratDownIcon}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </li>
    </ul>
  );
}
