import { nanoid } from "nanoid";

export default async function getQuestions(gameOptions: {
  category: string;
  difficulty: string;
  type: string;
}) {
  // shuffle answer options order per question
  function shuffleArray(arr: string[]): string[] {
    return arr.sort(() => Math.random() - 0.5);
  }

  const { category, difficulty, type } = gameOptions;

  let categoryParameter = "";
  let difficultyParameter = "";
  let typeParameter = "";
  if (category !== "") categoryParameter = `&category=${category}`;
  if (difficulty !== "") difficultyParameter = `&difficulty=${difficulty}`;
  if (type !== "") typeParameter = `&type=${type}`;

  let url = `https://opentdb.com/api.php?amount=5${categoryParameter}${difficultyParameter}${typeParameter}`;
  const response = await fetch(url);
  const data = await response.json();
  let questionsArr: any = [];
  data.results.forEach((item: any) => {
    questionsArr.push({
      id: nanoid(),
      question: item.question,
      answers: shuffleArray([...item.incorrect_answers, item.correct_answer]),
      correct: item.correct_answer,
      selected: null,
      checked: false,
    });
  });

  return questionsArr;
}
