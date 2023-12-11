export default function QAndA({
  selectAnswer,
}: {
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
