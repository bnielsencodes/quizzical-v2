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
    <div className="relative flex flex-col items-center content-center w-screen min-h-screen pt-[60px] px-10 pb-[15px] bg-neutral-200 md:pt-[13px] md:px-[75px]">
      <div className="z-20 mb-[5px] md:max-w-[750px]">{questionElements}</div>
      <div className="z-20 flex items-center justify-around w-[93%] max-w-[450px] mb-[50px]">
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
