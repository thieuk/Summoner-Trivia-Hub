"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function QuizzRedirect() {
	const router = useRouter();

	const handleQuizNavigation = (game) => {
		router.push(`/quiz/${game}`);
	}

	const handleMouseOver = (hoverImg, otherImg) => { 
		document.getElementById(hoverImg).style.filter = "brightness(95%) grayscale(0%)"; 
		document.getElementById(otherImg).style.filter = "brightness(70%) grayscale(100%)"; 
	}

	const handleMouseOut = (hoverImg, otherImg) => { 
		document.getElementById(hoverImg).style.filter = "brightness(70%) grayscale(0%)";
		document.getElementById(otherImg).style.filter = "brightness(70%) grayscale(0%)"; 
	}

	return (
		<div className="pb-6 border-b-[3px] border-x-[3px] border-amber-400 mb-[50px]">
			<hr className="border-2 border-amber-400 mt-[40px] mb-[-42px]" />
			<h1 className="bg-zinc-900 w-fit mx-auto py-5 px-3 text-3xl max-md:text-2xl max-sm:text-xl font-bold">Champion Your Knowledge</h1>
			<div className="relative flex bg-amber-400 border-y-8 border-amber-400 overflow-hidden">
				<Image 
					id="lor-img" 
					src="/lor_hero.jpg" 
					alt="runeterra" 
					width={0} 
					height={0} 
					sizes="57vw" 
					style={{ width: '100%', height: 'auto' }} 
					className="mr-[-7%] brightness-[70%] [clip-path:polygon(0_0,75%_0%,100%_100%,0%_100%)]" />
				<Image 
					id="lol-img" 
					src="/lol_hero.png" 
					alt="league" 
					width={0} 
					height={0} 
					sizes="57vw" 
					style={{ width: '100%', height: 'auto' }} 
					className="w-[57%] ml-[-7%] self-right brightness-[70%] [clip-path:polygon(0_0,100%_0%,100%_100%,25%_100%)]" />
				<div className="absolute w-full h-full flex justify-around items-center text-black text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base">
					<button onMouseOver={() => handleMouseOver("lor-img", "lol-img")} onMouseOut={() => handleMouseOut("lor-img", "lol-img")} className="px-4 py-2 max-sm:px-2 max-sm:py-1 bttn-style">
						<a onClick={() => handleQuizNavigation("runeterra")}>Runeterra Quiz</a>
					</button>
					<button onMouseOver={() => handleMouseOver("lol-img", "lor-img")} onMouseOut={() => handleMouseOut("lol-img", "lor-img")} className="px-4 py-2 max-sm:px-2 max-sm:py-1 bttn-style">
						<a onClick={() => handleQuizNavigation("league")}>League Quiz</a>
					</button>
				</div>
			</div>
		</div>
	)
}