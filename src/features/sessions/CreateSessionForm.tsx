import Button from "../../ui/Button";
import FormColumn from "../../ui/FormColumn";
import FormRow from "../../ui/FormRow";


export default function CreateSessionForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-primary-100 text-black border rounded-lg p-4 shadow-sm lg:w-[36rem]">
            <FormRow>
                <label htmlFor="name">Session Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter Session Name"
                    className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                />
            </FormRow>

            <FormRow>
                <label htmlFor="desciption">Session Description</label>
                <input
                    type="text"
                    id="desciption"
                    placeholder="Enter Session Description"
                    className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                />
            </FormRow>

            <FormColumn>
                <div className="flex flex-col gap-2">
                    <label htmlFor="startDate">Start date</label>
                    <input
                        type="datetime-local"
                        id="startDate"
                        className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="endDate">End date</label>
                    <input
                        type="datetime-local"
                        id="endDate"
                        className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                    />
                </div>
            </FormColumn>

            <Button> Create Session</Button>
        </form>
    )
}
