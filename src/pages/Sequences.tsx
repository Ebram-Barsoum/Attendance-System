import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import SequenceList from "../features/sequences/SequenceList";
import Header from "../ui/Header";
import ButtonCircle from "../ui/ButtonCircle";

export default function Sequences(): JSX.Element {
    return (
        <div className="flex flex-col gap-4 relative">
            <Header>Sequences</Header>
            <SequenceList />

            <Link to={'new/'} className="fixed right-5 bottom-5">
                <ButtonCircle className="p-4">
                    <FaPlus />
                </ButtonCircle>
            </Link>
        </div >
    )
}
