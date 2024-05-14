import Image from "next/image";
import { FetchData } from "@/utils/FetchData";

export default async function TopSummoners() {
  const data = await FetchData("TopPlayers");

  return (
    <div className="bg-leaderboard bg-center bg-no-repeat bg-cover font-semibold py-[75px] max-md:py-[50px] max-sm:py-[25px] mb-[50px] text-center border-2 border-amber-400">
      <div className="flex justify-center">
        <Image src="/trophy.png" alt="trophy" width={30} height={30} />
        <h1 className="mx-5 text-3xl max-md:text-xl max-sm:text-base [text-shadow:_0_0_10px_#000] font-bold">Top Summoners</h1>
        <Image src="/trophy.png" alt="trophy" width={30} height={30} />
      </div>
      <div className="max-w-[1200px] mx-auto mt-[75px] max-md:mt-[50px] max-sm:mt-[25px] flex text-xl max-md:text-lg max-sm:text-base">
        <div className="w-1/3 flex justify-center">
          <Image src="/second.png" alt="second place medal" width={30} height={30} />
          <p className="text-[#a5a5a5] px-2 line-clamp-1">{data.players[1].name}</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <Image src="/first.png" alt="first place medal" width={30} height={30} />
          <p className="text-[#fbc926] px-2 line-clamp-1">{data.players[0].name}</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <Image src="/third.png" alt="third place medal" width={30} height={30} />
          <p className="text-[#c48c1e] px-2 line-clamp-1">{data.players[2].name}</p>
        </div>
      </div>
    </div>
  )
}