import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton(): JSX.Element {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="text-xl p-2 rounded-full border border-secondary-500 bg-white">
            <IoArrowBack />
        </button>
    )
}
