import Image from "next/image"
import logo from "../public/me.png"
function Navbar() {
  return (
    <nav className="flex justify-between item-center px-10 py-6">
        <div className="flex items-center justify-center gap-3">
          <Image
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">Creative <span className="text-[#0070F3]">Coder</span></h1>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-[400px] rounded-full bg-[#0F1126] text-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-[#0070F3]"
          />
        </div>
        <div className="">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full object-cover aspect-square"
          />
        </div>
      </nav>
  )
}

export default Navbar