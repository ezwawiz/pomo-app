import { IoPersonSharp, IoSettingsSharp, IoBarChart } from "react-icons/io5"
import UserMenu from "./UserMenu";

const Navbar = () => {
    return (
        <div className="flex items-center justify-end gap-3 p-4 text-3xl">
            <UserMenu />
            {/* <IoPersonSharp className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded p-1" /> */}
            <IoBarChart className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded p-1" />
            <IoSettingsSharp className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded p-1" />

        </div>
    );
}

export default Navbar;