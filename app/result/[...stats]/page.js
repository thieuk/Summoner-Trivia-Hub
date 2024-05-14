'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Result() {
  const path = usePathname();
  
  const Time = (secLeft) => {
    const timeFinish = 15 * 60 - secLeft;
    const min = Math.floor(timeFinish / 60);
    const sec = timeFinish % 60;

    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  }

  return (
    <div className="min-h-[calc(100vh-66px)] bg-gradient grid place-items-center">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex justify-center align-center gap-7 pt-10">
          <Image src="/logo.png" alt="logo" width={55} height={55} className="max-md:w-[45px] max-md:h-[35px]" />
          <h1 className="text-5xl max-md:text-4xl text-center font-extrabold">Result</h1>
          <Image src="/logo.png" alt="logo" width={55} height={55} className="max-md:w-[45px] max-md:h-[35px]" />
        </div>
        <Image src="/Calculating_Emote.png" alt="Calculating Emote" width={175} height={175} />
        <div className="flex justify-center align-center gap-12 text-3xl max-sm:text-xl font-bold text-center">
          <p>Score: {path.split("/")[2]}/30</p>
          <p>Time: {Time(parseInt(path.split("/")[3]))}</p>
        </div>
      </div>
    </div>
  )
}