import Folder from "../../ui/Folder"
import Row from "../../ui/Row"

const folderList = [
    {
        name: 'Data structure',
        id: '1',
    },
    {
        name: 'computer vision',
        id: '2',
    },
    {
        name: 'NLP',
        id: '3',
    },
    {
        name: 'Meetings',
        id: '4',
    }
]

export default function FolderList() {
    return (
        <Row className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {folderList.map((folder) => <Folder key={folder.id} name={folder.name} />)}
        </Row>
    )
}
