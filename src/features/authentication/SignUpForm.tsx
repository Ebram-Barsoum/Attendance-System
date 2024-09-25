import { useState } from "react";
import { Link } from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

import FormHeader from "../../ui/FormHeader";
import Button from "../../ui/Button";

export default function SignUpForm(): JSX.Element {
    const [show, setShow] = useState(false);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-4 w-[95%] h-auto sm:w-[90%]  lg:w-[26rem] p-4 rounded-lg border shadow-sm"
        >
            <FormHeader>Sign Up</FormHeader>

            <div className="">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-3 w-[100%] rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50"

                />
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Your E-mail"
                    className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                />
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div >
                    <input type="number" placeholder="age"
                        className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                    />
                </div>

                <div >
                    <select
                        className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                    >
                        <option value="" hidden>
                            Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>

            <div>
                <select
                    className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                >
                    <option value="" hidden>
                        Choose account type
                    </option>
                    <option value="admin">Admin</option>
                    <option value="student">Studnet</option>
                </select>
            </div>

            <div>
                <div className="relative">
                    <input
                        type={`${show ? 'text' : 'password'}`}
                        placeholder="Password"
                        className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                    />
                    <button type="button" className="absolute top-[50%] right-3 translate-y-[-50%] text-primary-700" onClick={() => setShow(state => !state)}>
                        {show ? <GoEyeClosed /> : <RxEyeOpen />}
                    </button>
                </div>
            </div>

            <div>
                <div className="relative">
                    <input
                        type='password'
                        placeholder="Confirm Password"
                        className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                    />

                </div>
            </div>

            <Button>Sign Up</Button>

            <p className="text-sm flex items-center gap-2">
                Already have an account ?<Link to="/login">Login</Link>
            </p>
        </form>
    );
}
