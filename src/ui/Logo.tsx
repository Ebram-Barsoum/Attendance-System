import { FaUserGraduate } from "react-icons/fa";

interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps): JSX.Element {
    return (
        <div className={`text-xl flex items-center gap-2 font-serif ${className}`}>
            <div className="relative">
                <FaUserGraduate className="text-primary-700" />
                <div className="absolute w-[2px] h-[80%] bg-primary-700 top-[10%] right-[-5px]"></div>
            </div>
            <span>Attendance</span>
        </div>
    )
}
