import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Header from "../ui/Header";
import ButtonCircle from "../ui/ButtonCircle";
import Column from "../ui/Column";

import SessionsList from "../features/sessions/SessionsList";
import FolderList from "../features/folder/FolderList";
import { VscNewFolder } from "react-icons/vsc";

export default function Sessions(): JSX.Element {
    return (
        <div className="flex flex-col gap-4 relative">
            <Header>Sessions</Header>
            <Column className="gap-16">
                <FolderList />
                <SessionsList />
            </Column>

            <Column className="fixed right-5 bottom-5">
                <Link to={'new-session/'} >
                    <ButtonCircle className="p-3 sm:p-3">
                        <FaPlus />
                    </ButtonCircle>
                </Link>

                <Link to={'new-folder/'} >
                    <ButtonCircle className="p-3 sm:p-3">
                        <VscNewFolder />
                    </ButtonCircle>
                </Link>
            </Column>
        </div >
    )
}
