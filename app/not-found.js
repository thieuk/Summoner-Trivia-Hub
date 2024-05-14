import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="h-[70vh] grid place-content-center text-center font-bold text-3xl max-md:text-xl">
      <Image src="/sad-poro.png" alt="sad poro" width={150} height={0} style={{ height: "auto", margin: "0 auto" }} />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link href="/" className="bg-amber-400 mt-4 px-4 py-1 text-2xl text-black border-[3px] border-black rounded outline outline-2 outline-amber-400">Return Home</Link>
    </div>
  )
}