import { ReactNode } from "react";

export default function Column({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}): JSX.Element {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>{children}</div>
    )
}
