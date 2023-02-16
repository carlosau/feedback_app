import { BsQuestionCircle } from "react-icons/bs"
import Link from "next/link"

export default function Header() {
  return (
    <div className="fixed z-10 w-[768px] md:w-full justify-between px-12 items-center flex h-20 bg-cyan-500 drop-shadow-lg">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-wider">
          FEEDBACK APP
        </h1>
      </div>
      <div></div>
      <div className="flex items-center text-slate-50">
        <Link href="/about">
          <BsQuestionCircle
            size={25}
            className="hover:text-blue-100 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  )
}
