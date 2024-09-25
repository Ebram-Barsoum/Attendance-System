import { FiUpload } from "react-icons/fi";
import CreateSessionForm from "../features/sessions/CreateSessionForm";
import BackButton from "../ui/BackButton";
import ButtonCircle from "../ui/ButtonCircle";
import Header from "../ui/Header";
import Button from "../ui/Button";

export default function CreateSession(): JSX.Element {
    return (
        <div className="flex flex-col gap-10 relative">
            <div className="flex items-center gap-2">
                <BackButton />
                <Header>Create new Session</Header>
            </div>

            <CreateSessionForm />

            <div className="flex items-center gap-3 fixed bottom-5 right-8">
                <ButtonCircle className="p-4"><FiUpload /></ButtonCircle>
                <Button className="p-3">Publish</Button>
            </div>
        </div>
    )
}
