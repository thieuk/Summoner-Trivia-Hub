import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
	const link = [
    { name: "About Us" },
    { name: "Privacy Policy" },
    { name: "Terms of Service" },
    { name: "Code of Ethics" },
    { name: "FAQ" },
  ];

  const socialIconStyle = "w-7 h-9 cursor-pointer";

	return (
		<footer className="bg-black max-md:text-sm max-sm:text-xs py-7">
			<div className="w-2/3 max-w-[1000px] min-w-[400px] flex justify-around mx-auto pb-5">
				<div className="self-center">
					<Image src="/logo.png" alt="logo" width={75} height={66} className="mx-auto" />
					<p className="font-bold">Summoner Trivia Hub</p>
				</div>
				<div className="w-fit">
          {link.map(ele => ( 
            <p key={ele.name} className="cursor-pointer hover:underline decoration-amber-400 underline-offset-4">{ele.name}</p>
          ))}
				</div>
				<div className="w-fit">
					<p>123 Fake Street,</p>
					<p>City, State 54321</p>
					<p>(123) 456-7890</p>
					<p>fakeEmail@gmail.com</p>
				</div>
			</div>
			<hr className="w-[95%] mx-auto border-1 border-amber-400" />
			<div className="flex justify-center gap-4 pt-2">
        <FaInstagramSquare className={socialIconStyle} />
        <ImFacebook2 className={socialIconStyle} />
        <FaSquareXTwitter className={socialIconStyle} />
        <ImLinkedin className={socialIconStyle} />
			</div>
		</footer>
	)
}