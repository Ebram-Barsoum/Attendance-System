import LoginForm from "../features/authentication/LoginForm";
import AuthHeader from "../ui/AuthHeader";

export default function Login(): JSX.Element {
    return (
        <div className="min-h-[100dvh] flex flex-col px-2 bg-primary-100 sm:px-6">
            <AuthHeader />

            <div className="flex flex-col items-center justify-center flex-1 py-6 mx-auto sm:w-[85%]">
                <h1 className="text-3xl text-secondary-500 px-2 font-semibold font-poppins  sm:text-4xl lg:w-[50%] self-start">
                    make tracking attendance easy and efficient.
                </h1>

                <div className="w-full flex justify-center items-center gap-6 flex-wrap-reverse lg:grid lg:grid-cols-2">
                    <LoginForm />

                    <img
                        src="/public/login.png"
                        alt="login page image"
                        className="w-[90%] aspect-square"
                    />
                </div>
            </div>
        </div>
    );
}
