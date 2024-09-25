import { FaRegFolderOpen } from "react-icons/fa";
import Column from "./Column";

interface FolderProps {
    name: string;
}

export default function Folder({ name }: FolderProps) {
    return (
        <Column className="items-center gap-2">
            <FaRegFolderOpen className="text-6xl text-primary-600" />
            <span>{name}</span>
        </Column>
    )
}
