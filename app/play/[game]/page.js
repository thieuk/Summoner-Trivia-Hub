import Questions from "@/utils/Questions";
import CardQuestion from "@/components/CardQuestion";

export default async function Play({params}) {
  const questions = await Questions(params.game);

  return (
    <div className="min-h-[calc(100vh-66px)] bg-gradient">
      {params.game === "runeterra" ? 
        <div>
          <h1 className="text-5xl text-center font-extrabold pt-10">Runeterra Quiz</h1>
          <CardQuestion question={questions} />
        </div>
      : <></>}
    </div>
  );
}