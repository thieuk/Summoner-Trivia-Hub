import Image from "next/image";
import Link from "next/link";

export default function Instruction(props) {

  return (
    <div className="h-[calc(100vh-66px)] grid place-content-center text-center">
      <Image src="/logo.png" alt="logo" width={100} height={81} className="mx-auto mt-10" />
      <h1 className="mt-5 text-3xl font-bold">Ready to test your knowledge?</h1>
      <h3 className="mt-5 text-xl">You have <span className="font-bold underline">30 minutes</span> to complete the quiz.</h3>
      <h3 className="text-center text-xl">To qualify for the leaderboard, you must get 100%.</h3>
      {props.game === "runeterra" ? <p className="italic mt-5">*Patch 5.0</p> : <p className="italic mt-5">*Patch 14.2</p> }
      <Link href={`/play/${props.game}`} className="mt-7 w-fit bg-amber-400 mx-auto px-4 py-2 font-extrabold rounded text-3xl bttn-style">START GAME</Link>
    </div>
  );
} 