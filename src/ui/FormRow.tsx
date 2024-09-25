import { ReactNode } from "react";

export default function FormRow({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return <div className="flex flex-col gap-2">{children}</div>;
}
