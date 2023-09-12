import Modal from "./Modal"
import { useForm } from "react-hook-form"

interface RegisterModalProps {
    handleShowModal: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
    handleShowModal,
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        }
    })

    console.log(errors)

    const bodyContent = (
        <form className="w-full" onSubmit={handleSubmit((data) => {
            console.log(data)
        })}>
            <input className="text-black rounded p-2 h-8 my-2 w-full" {...register("username", { required: "Username is required" })} placeholder="Username" />
            <p className="text-xs text-red-200"> {errors.username?.message} </p>
            <input className="text-black rounded p-2 h-8 my-2 w-full" {...register("password", {
                required: "Password is required",
                minLength: {
                    value: 4,
                    message: "Min length is 4 bozo."
                },
                maxLength: {
                    value: 6,
                    message: "You're not serious. It's too long."
                },
            })} placeholder="Password" type="password" />
            <p className="text-xs text-red-200"> {errors.password?.message} </p>

            <input className="bg-rose-500 text-white font-semibold mt-6 py-2 px-4 rounded-lg cursor-pointer active:scale-95 active:translate-y-0.5 w-full" type="submit" />
        </form>
    )

    const footerContent = (
        <div className="flex gap-2 self-center text-sm opacity-60 mb-6">
            <div>Already have an account?</div>
            <button className="hover:underline font-semibold">Login</button>
        </div>
    )

    return (
        <Modal
            title="Sign up"
            footer={footerContent}
            body={bodyContent}
            handleShowModal={handleShowModal}
        />
    );
}

export default RegisterModal;