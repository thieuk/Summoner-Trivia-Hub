import Image from "next/image";
import Questions from "@/utils/Questions";
import Game from "@/components/Game";

export default async function Play({params}) {
  const questions = await Questions(params.game);
  
  return (
    <div className="min-h-[calc(100vh-66px)] bg-gradient">
      <div className="flex justify-center align-center gap-7 pt-10">
        <Image src="/logo.png" alt="logo" width={55} height={55} className="max-md:w-[45px] max-md:h-[35px]" />
        <h1 className="text-5xl max-md:text-3xl max-sm:text-2xl text-center font-extrabold">
          {params.game.charAt(0).toUpperCase() + params.game.slice(1)} Quiz
        </h1>
        <Image src="/logo.png" alt="logo" width={55} height={55} className="max-md:w-[45px] max-md:h-[35px]" />
      </div>
      <Game game={params.game} question={questions} />
    </div>
  );
}