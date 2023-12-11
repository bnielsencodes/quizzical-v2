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

  return (
    <div className="flex justify-between border-b-[0.79px] border-purple-300 mb-[15px]">
    </div>
  );
}
