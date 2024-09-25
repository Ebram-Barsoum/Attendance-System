import SignUpForm from "../features/authentication/SignUpForm";
import AuthHeader from "../ui/AuthHeader";

export default function SignUp() {
    return (
        <div className="min-h-[100dvh]  flex flex-col px-2 bg-primary-100 sm:px-6 ">
            <AuthHeader />
            <div className="flex flex-1 flex-wrap-reverse items-center justify-center gap-6 py-6 lg:grid lg:grid-cols-2 sm:w-[85%] sm:mx-auto">
                <SignUpForm />
                <img src="/public/signUp.png" alt="signup image" />
            </div>
        </div>
    )
}
