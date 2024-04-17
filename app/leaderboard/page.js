import { FetchData } from "@/utils/FetchData";

export default async function Leader() {
  const data = await FetchData("TopPlayers");

  return (
    <div className="min-h-screen py-5 text-center bg-leaderboard bg-center bg-no-repeat bg-cover bg-fixed">
      <h1 className="relative w-fit mx-auto mb-[-35px] px-7 py-2 text-3xl max-md:text-2xl max-sm:text-xl font-bold bg-zinc-900 border-4 border-amber-400 rounded outline outline-4 outline-black">LEADERBOARD</h1>
      <div className="w-2/5 min-w-[380px] mx-auto pt-14 pb-5 bg-zinc-900 border-double border-8 border-amber-400 rounded outline outline-4 outline-black">
        {data.players.map((player, index) => (
          <div key={player.name} className="w-4/5 mx-auto mb-3 text-lg max-sm:text-base grid grid-cols-[15%_55%_30%] items-center bg-neutral-800">
            <p>{index+1}.</p>
            <div className="flex justify-center items-center">
              {index === 0 ? <img src="medal.png" alt="medal" width="30" height="30" /> : <></>}
              <p className="line-clamp-1">{player.name}</p>
            </div>
            <p>{player.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}