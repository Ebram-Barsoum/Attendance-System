import { ReactNode } from "react";

export default function Row({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}): JSX.Element {
    return (
        <div className={`flex items-center ${className}`}>
            {children}
        </div>
    );
}
