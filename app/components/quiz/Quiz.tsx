import QAndA from "./QAndA";
import QuizButton from "./QuizButton";

export default function Quiz({
  questions,
  selectAnswer,
  checkAnswers,
  answersChecked,
  answersCorrect,
  playAgain,
}: {
  questions: any;
  selectAnswer: (id: string, answer: string) => void;
  checkAnswers: () => void;
  answersChecked: boolean;
  answersCorrect: number;
  playAgain: () => void;
}) {
  // map questions state and create QAndA components
  const questionElements = questions
    ? questions.map((item: any) => {
        console.log(item);
        return <QAndA key={item.id} {...{ item, selectAnswer }} />;
      })
    : [];

  return (
    <div className="relative z-20 flex flex-col items-center w-screen h-full pt-24 px-6 pb-[120px] md:pt-0 md:px-14 md:pb-0">
      <ul className="mb-5 md:max-w-[750px]">{questionElements}</ul>
      <div className="flex items-center justify-around w-[93%] max-w-[450px]">
        {answersChecked && (
          <span className="text-purple-100 font-bold text-[13px] md:text-[1rem]">
            You scored {answersCorrect}/5 correct answers
          </span>
        )}
        <QuizButton {...{ checkAnswers, answersChecked, playAgain }} />
      </div>
    </div>
  );
}
