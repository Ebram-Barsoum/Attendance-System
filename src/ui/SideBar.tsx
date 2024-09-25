import Avatar from "./Avatar";
import Logo from "./Logo";
import SideNavs from "./SideNavs";

export default function SideBar(): JSX.Element {
    return (
        <div className="flex flex-col gap-10 p-4 border-r-2 relative sm:static">
            <Logo className="hidden md:flex" />
            <Avatar className="w-[5rem] h-[5rem] mx-auto hidden md:block" />
            <hr className="hidden md:block" />
            <SideNavs />
        </div>
    );
}
