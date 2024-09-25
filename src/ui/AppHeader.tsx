import Avatar from "./Avatar";
import Logo from "./Logo";
import Notification from "./Notification";

export default function AppHeader(): JSX.Element {
    return (
        <header className="flex justify-end items-center gap-4  p-4 bg-white border-b-2 sm:gap-8">
            <Logo className=" md:hidden me-auto" />

            <Notification />
            <Avatar className="h-[45px_!important] w-[45px_!important]" />
        </header>
    )
}
