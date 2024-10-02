import BackButton from "../ui/BackButton";
import Header from "../ui/Header";
import Row from "../ui/Row";

export default function CreateFolder() {
    return (
        <div className="flex flex-col gap-10 relative">
            <div className="flex items-center gap-2">
                <BackButton />
                <Header>Create new folder</Header>
            </div>

            <Row className="justify-between">
                create folder form
            </Row>
        </div>
    )
}
