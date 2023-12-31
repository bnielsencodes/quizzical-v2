import { nanoid } from "nanoid";
import { decode } from "html-entities";
import Image from "next/image";
import correctIcon from "/public/assets/icons/circle-check-solid.svg";
import incorrectIcon from "/public/assets/icons/circle-xmark-solid.svg";
import clsx from "clsx";

export default function QAndA({
  item,
  selectAnswer,
}: {
  item: {
    id: string;
    question: string;
    answers: [];
    correct: string;
    selected: null;
    checked: boolean;
  };
  selectAnswer: (id: string, answer: string) => void;
}) {
  let answers: string[] = item.answers;

  function handleSelectAnswer(answer: string): void {
    if (item.checked) {
      return;
    }
    selectAnswer(item.id, answer);
  }

  const answerElements = answers.map((answer) => {
    let id: string | undefined = undefined;
    if (item.checked) {
      if (item.correct === answer) {
        id = "correct";
      } else if (item.selected === answer) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }
    return (
      <li key={nanoid()}>
        <button
          id={id}
          className={clsx(
            "focus-outline transition-bg flex items-center justify-center py-[6px] px-[10px] border-[0.8px] border-purple-200 rounded-lg mr-[12.75px] text-purple-100 text-[15px] font-medium leading-[1.25rem] text-left shadow-answer active:outline-none",
            {
              "bg-[transparent]": item.selected !== answer,
              "bg-purple-300": item.selected === answer,
              "lg:hover:bg-purple-300 lg:hover-90 active:shadow-none active:translate-y-[2.5px]":
                !item.checked,
              "disabled lg:hover:opacity-100 active:shadow-answer active:translate-y-0":
                item.checked,
              "lg:hover:bg-[transparent]":
                item.checked && id === "not-selected",
              "lg:hover:bg-green": item.checked && id === "correct",
              "lg:hover:bg-red": item.checked && id === "incorrect",
            }
          )}
          onClick={() => handleSelectAnswer(answer)}
        >
          {decode(answer)}
        </button>
      </li>
    );
  });

  return (
    <li className="flex justify-between border-b-[0.79px] border-purple-300 pt-4 pb-6">
      <div className="max-w-[calc(100%-28px)] md:max-w-[calc(100%-35px)]">
        <p className="text-purple-100 font-karla text-[1.125rem] font-bold leading-[1.4rem] md:text-[19px] lg:text-[21px]">
          {decode(item.question)}
        </p>
        <ul className="flex flex-wrap gap-y-3 mt-[13px]">{answerElements}</ul>
      </div>
      <div className="flex items-center min-w-5">
        {item.checked &&
          (item.selected === item.correct ? (
            <Image
              src={correctIcon}
              alt="Encircled checkmark icon"
              width={20}
              height={62}
              sizes="100vw"
            />
          ) : (
            <Image
              src={incorrectIcon}
              alt="Encircled x icon"
              width={20}
              height={62}
              sizes="100vw"
            />
          ))}
      </div>
    </li>
  );
}
