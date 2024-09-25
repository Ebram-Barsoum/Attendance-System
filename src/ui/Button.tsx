import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}
export default function Button({ children, className, onClick }: ButtonProps) {
    return (
        <button
            className={`p-2 rounded-md bg-primary-500 transition-colors hover:bg-primary-600 font-inter ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
