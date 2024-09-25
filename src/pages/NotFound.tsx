import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function NotFound(): JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src="/public/notFound.png"
                alt="Error 404 not found image"
                className="sm:w-[40%] sm:mx-auto"
            />

            <Link to={'/app'}>
                <Button>
                    Back To App
                </Button>
            </Link>
        </div>
    );
}
