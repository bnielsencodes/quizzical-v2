import { nanoid } from "nanoid";
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
      >
      </button>
    );
  });

  return (
    <div className="flex justify-between border-b-[0.79px] border-purple-300 mb-[15px]">
    </div>
  );
}
