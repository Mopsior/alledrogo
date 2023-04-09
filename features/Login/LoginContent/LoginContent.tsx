import { Form } from "@/components/Form/Form"

export const LoginContent = () => {
    return (
        <div className="container">
            {/* Tworzymy login */}
            <Form type="login" />
            {/* Tworzymy rejestracje */}
            <Form type="register" />
        </div>
    )
}