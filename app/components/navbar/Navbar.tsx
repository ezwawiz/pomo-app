import { IoSettingsSharp, IoBarChart } from "react-icons/io5"
import UserMenu from "./UserMenu";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-end gap-4 p-6 text-3xl mb-10">
            <UserMenu />
            <IoBarChart className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded p-1 cursor-pointer" />
            <IoSettingsSharp className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded p-1 cursor-pointer" />
        </nav>
    );
}

export default Navbar;