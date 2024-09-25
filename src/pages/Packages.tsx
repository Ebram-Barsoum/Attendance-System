import { Link } from "react-router-dom";
import PackagesList from "../features/packages/PackagesList";
import Header from "../ui/Header";
import ButtonCircle from "../ui/ButtonCircle";
import { FaPlus } from "react-icons/fa";

export default function Packages(): JSX.Element {
    return (
        <div className="flex flex-col gap-4 relative">
            <Header>Packages</Header>
            <PackagesList />

            <Link to={'new/'} className="fixed right-5 bottom-5">
                <ButtonCircle className="p-4">
                    <FaPlus />
                </ButtonCircle>
            </Link>
        </div >
    )
}
