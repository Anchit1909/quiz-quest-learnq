import Quiz from "@/components/QuizPage/Quiz";

const page = async () => {
  const res = await fetch(
    "http://localhost:5000/quiz/questions?difficulty=Hard"
  );
  const questions = await res.json();
  console.log(questions);
  return <Quiz questions={questions} />;
};

export default page;
