import { nanoid } from "nanoid";
import { decode } from "html-entities";
import Image from "next/image";
import correctIcon from "/public/assets/icons/circle-check-solid.svg";
import incorrectIcon from "/public/assets/icons/circle-xmark-solid.svg";

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
    let id: string | null = null;
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
      <button
        key={nanoid()}
        id={nanoid()}
        onClick={() => handleSelectAnswer(answer)}
      >
        {decode(answer)}
      </button>
    );
  });

  return (
    <div className="flex justify-between border-b-[0.79px] border-purple-300 mb-[15px]">
      <div>
        <p className="text-purple-100 font-karla font-bold leading-[18.7px] md:text-[1.25rem]">
          {decode(item.question)}
        </p>
        <div className="flex flex-wrap gap-y-3 mt-[13px] mb-[14px]">
          {answerElements}
        </div>
      </div>
      {item.checked &&
        (item.selected === item.correct ? (
          <Image
            className="w-8 h-8 mr-2"
            src={correctIcon}
            alt="Encircled checkmark icon"
            width={20}
            height={62}
            sizes="100vw"
          />
        ) : (
          <Image
            className="w-8 h-8 mr-2"
            src={incorrectIcon}
            alt="Encircled x icon"
            width={20}
            height={62}
            sizes="100vw"
          />
        ))}
    </div>
  );
}
