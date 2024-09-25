import { ReactNode } from "react"
interface HeaderProps {
    children: ReactNode,
    className?: string
}

export default function Header({ children, className }: HeaderProps): JSX.Element {
    return (
        <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
    )
}
