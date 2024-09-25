import { FiUpload } from "react-icons/fi";
import CreateSequenceForm from "../features/sequences/CreateSequenceForm";
import BackButton from "../ui/BackButton";
import ButtonCircle from "../ui/ButtonCircle";
import Header from "../ui/Header";
import Button from "../ui/Button";

export default function CreateSequence(): JSX.Element {
    return (
        <div className="flex flex-col gap-10 relative:">
            <div className="flex items-center gap-2">
                <BackButton />
                <Header>Create new Sequence</Header>
            </div>

            <CreateSequenceForm />

            <div className="flex items-center gap-3 fixed bottom-5 right-8">
                <ButtonCircle className="p-4"><FiUpload /></ButtonCircle>
                <Button className="p-3">Publish</Button>
            </div>
        </div>
    )
}
