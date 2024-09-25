import { ReactNode } from "react";

interface FormHeaderProps {
    children: ReactNode;
}

export default function FormHeader({ children }: FormHeaderProps): JSX.Element {
    return (
        <h2 className="text-center text-xl font-semibold mb-3 font-poppins">
            {children}
        </h2>
    );
}
