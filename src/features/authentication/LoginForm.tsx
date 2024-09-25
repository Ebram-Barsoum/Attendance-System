import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

import FormHeader from "../../ui/FormHeader";
import Button from "../../ui/Button";

export default function LoginForm() {
    const [show, setShow] = useState(false);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmitForm}
            className="flex flex-col gap-4 w-[95%] h-fit sm:w-[90%]  lg:w-[26rem] p-4 rounded-lg  border shadow-sm"
        >
            <FormHeader>Login</FormHeader>

            <div>
                <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                />
            </div>

            <div>
                <div className="relative">
                    <input
                        type={`${show ? 'text' : 'password'}`}
                        placeholder="Enter Your Password"
                        className="p-3 w-full rounded-md transition-all border focus:outline-none focus:ring-1 ring-primary-600 ring-offset-3 bg-stone-50 "
                    />
                    <button type="button" className="absolute top-[50%] right-3 translate-y-[-50%] text-primary-700" onClick={() => setShow(state => !state)}>
                        {show ? <GoEyeClosed /> : <RxEyeOpen />}
                    </button>
                </div>
            </div>

            <p className="text-end text-sm font-inter">
                <Link to=''>Forget Password ?</Link>
            </p>

            <Button>Login</Button>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[#263238] w-[80%] mx-auto">
                <span className="bg-[#263238] h-[.5px]"></span>
                <span className="text-sm">Or</span>
                <span className="bg-[#263238] h-[.5px]"></span>
            </div>

            <Link to='' className="bg-white p-2 rounded-md flex items-center justify-center gap-2"><FcGoogle className="text-2xl" /><span>Login with Google</span></Link>
            <p className="text-sm flex items-center justify-center gap-2 ">
                Don't have an account ?<Link to="/signup">SignUp</Link>
            </p>
        </form>

    );
}
