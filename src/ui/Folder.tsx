import { FaRegFolderOpen } from "react-icons/fa";
import Column from "./Column";
import { Link } from "react-router-dom";

interface FolderProps {
    name: string;
}

export default function Folder({ name }: FolderProps) {
    return (
        <Link to={''}>
            <Column className="items-center gap-2">
                <FaRegFolderOpen className="text-6xl text-primary-600" />
                <span>{name}</span>
            </Column>
        </Link>
    )
}
