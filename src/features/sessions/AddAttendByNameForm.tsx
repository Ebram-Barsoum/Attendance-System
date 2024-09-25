import Button from "../../ui/Button"
import Row from "../../ui/Row"

export default function AddAttendByNameForm(): JSX.Element {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className=" sm:w-[90%] sm:mx-auto">
            <Row className="gap-2 sm:gap-6">
                <input type="text" placeholder="Enter name"
                    className="p-3 flex-1 rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                />
                <Button className="p-3 text-xs w-auto bg-primary-500 text-black rounded-md sm:text-base">Add attend</Button>
            </Row>
        </form>
    )
}
