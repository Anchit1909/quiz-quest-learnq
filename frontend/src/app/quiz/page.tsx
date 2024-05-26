import Quiz from "@/components/QuizPage/Quiz";

const page = async ({
  searchParams,
}: {
  searchParams?: { difficulty?: string };
}) => {
  const difficulty = searchParams?.difficulty;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}/quiz/questions?difficulty=${difficulty}`
  );
  const questions = await res.json();
  return <Quiz questions={questions} />;
};

export default page;
