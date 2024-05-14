"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { MdAccountCircle } from "react-icons/md";

export default function Nav() {
  const gameLink = [
    {name: "Runeterra", shortName: "LoR", href: "runeterra"},
    {name: "League", shortName: "LoL", href: "league"},
  ]

  const router = useRouter();
  const pathname = usePathname();

  const handleQuizNavigation = (game) => {
    router.push(`/quiz/${game}`);
  };

  return (
    <nav className="h-[65px] flex items-center gap-5 px-4 bg-black font-bold text-center max-sm:text-xs">
      <Link href="/" className="flex align-center gap-3">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
        <span className="max-md:hidden">Summoner Trivia Hub</span>
      </Link>
      <div className="flex gap-5 max-md:gap-3 ml-auto">
        {gameLink.map(link => (
          <a key={link.name} onClick={() => handleQuizNavigation(link.href)} id={link.fullName} className={`cursor-pointer whitespace-nowrap hover:underline hover:underline-offset-4 ${pathname === "/quiz/" + link.href ? "decoration-double underline underline-offset-4" : "" }`}>
            <span className="max-md:hidden">{link.name}</span><span className="md:hidden">{link.shortName}</span> Quiz
          </a>
        ))}
        <Link href="/leaderboard" className={`hover:underline hover:underline-offset-4 ${pathname === "/leaderboard" ? "decoration-double underline underline-offset-4" : "" }`}>Leaderboard</Link>
        <Link href="/account">
          <MdAccountCircle className="w-7 max-sm:w-5 h-full" />
        </Link>
      </div>
    </nav>
  )
}