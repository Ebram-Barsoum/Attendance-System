import { FiUpload } from "react-icons/fi";
import CreatePackageForm from "../features/packages/CreatePackageForm";
import BackButton from "../ui/BackButton";
import ButtonCircle from "../ui/ButtonCircle";
import Header from "../ui/Header";
import Button from "../ui/Button";

export default function CreatePackage(): JSX.Element {
    return (
        <div className="flex flex-col gap-10 relative:">
            <div className="flex items-center gap-2">
                <BackButton />
                <Header>Create new Package</Header>
            </div>

            <CreatePackageForm />

            <div className="flex items-center gap-3 fixed bottom-5 right-8">
                <ButtonCircle className="p-4"><FiUpload /></ButtonCircle>
                <Button className="p-3">Publish</Button>
            </div>
        </div>
    )
}
