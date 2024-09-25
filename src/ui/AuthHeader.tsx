import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

export default function AuthHeader(): JSX.Element {
    return (
        <div className="flex items-center justify-between w-full sm:w-[85%] mx-auto p-2">
            <Logo />

            <Button className="font-poppins">
                <Link
                    to={"/signup"}
                >
                    Sign up
                </Link>
            </Button>
        </div>
    );
}
