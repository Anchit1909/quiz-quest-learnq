import Quiz from "@/components/QuizPage/Quiz";

const page = async ({
  searchParams,
}: {
  searchParams?: { difficulty?: string };
}) => {
  const difficulty = searchParams?.difficulty;
  console.log(difficulty);
  const res = await fetch(
    `http://localhost:5000/quiz/questions?difficulty=${difficulty}`
  );
  const questions = await res.json();
  return <Quiz questions={questions} />;
};

export default page;
