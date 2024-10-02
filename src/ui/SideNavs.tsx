import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { SiSession } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";

import { Link } from "../lib/constants";
import Button from "./Button";
import { BsQrCodeScan } from "react-icons/bs";

const links: Link[] = [
    {
        href: "home",
        text: "Home",
        icon: <IoHomeOutline />,
    },
    {
        href: "sessions/",
        text: "Sessions",
        icon: <SiSession />,
    },
    {
        href: 'join-session',
        text: 'Join by QR Code',
        icon: <BsQrCodeScan />
    }
];

export default function SideNavs(): JSX.Element {
    return (
        <ul className="flex flex-col gap-2 flex-1 pt-16 md:py-3">
            {links.map((link) => (
                <li key={link.href}>
                    <NavLink to={link.href} className="p-2 text-lg flex items-center gap-2 rounded-md hover:bg-primary-500 transition-colors">
                        {link.icon} <span className="hidden md:block">{link.text}</span>
                    </NavLink>
                </li>
            ))}

            <li className="mt-auto"><Button className="flex items-center gap-2 text-lg  w-full"><FiLogOut /> <span className="hidden md:block">Logout</span></Button></li>
        </ul>
    );
}
