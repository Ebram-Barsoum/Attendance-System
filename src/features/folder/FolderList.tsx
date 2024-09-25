import Folder from "../../ui/Folder"
import Row from "../../ui/Row"

export default function FolderList() {
    return (
        <Row className="flex-wrap gap-4">
            <Folder name='Data structure' />
            <Folder name='computer vision' />
            <Folder name='NLP' />
            <Folder name='Meetings' />
        </Row>
    )
}
