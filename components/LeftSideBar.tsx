import Link from "next/link";
import { FaHome } from "react-icons/fa";

function LeftSideBar() {
    return (
        <div className="flex">
            <div className="w-1/5 px-5 py-2">
                <ul className="space-y-6">
                    <li className="text-xl font-bold bg-blue-600 px-3 py-3 rounded-xl flex gap-2 items-center">
                        <FaHome />
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-xl font-bold bg-blue-400 px-3 py-3 rounded-xl flex gap-2 items-center">
                        <FaHome />
                        <Link href="/">Tags</Link>
                    </li>
                    <li className="text-xl font-bold bg-blue-400 px-3 py-3 rounded-xl flex gap-2 items-center">
                        <FaHome />
                        <Link href="/">Popular</Link>
                    </li>
                    <li className="text-xl font-bold bg-blue-400 px-3 py-3 rounded-xl flex gap-2 items-center">
                        <FaHome />
                        <Link href="/">Ask new question</Link>
                    </li>
                    <li className="text-xl font-bold bg-blue-400 px-3 py-3 rounded-xl flex gap-2 items-center">
                        <FaHome />
                        <Link href="/">Newest</Link>
                    </li>
                    <li className="text-xl font-bold bg-red-700 px-3 py-3 rounded-xl flex gap-2 items-center">
                        <FaHome />
                        <Link href="/">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="w-3/5">2</div>
            <div className="w-1/5">3</div>
        </div>
    );
}

export default LeftSideBar;
