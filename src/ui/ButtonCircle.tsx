import { ReactNode } from "react";

interface ButtonCircleProps {
    children: ReactNode;
    className?: string;
}

export default function ButtonCircle({
    children,
    className,
}: ButtonCircleProps): JSX.Element {
    return (
        <button
            className={`rounded-full bg-primary-600 text-white text-xl ${className}`}
        >
            {children}
        </button>
    );
}
