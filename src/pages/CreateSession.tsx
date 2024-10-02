import CreateSessionForm from "../features/sessions/CreateSessionForm";
import BackButton from "../ui/BackButton";
import Header from "../ui/Header";
import Row from "../ui/Row";

export default function CreateSession(): JSX.Element {
    return (
        <div className="flex flex-col gap-10 relative">
            <div className="flex items-center gap-2">
                <BackButton />
                <Header>Create new Session</Header>
            </div>

            <Row className="justify-between">
                <CreateSessionForm />
                <img src="/public/attendance.svg" alt="" className="w-[40%] hidden xl:block" />
            </Row>
        </div>
    )
}
