import { ReactNode } from "react";

export default function FormColumn({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <div className="grid grid-cols-2 gap-3">{children}</div>
    )
}
