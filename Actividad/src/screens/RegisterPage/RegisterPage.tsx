import React from "react";
import { AuthTemplate } from "../../components/Templates";
import { LoginForm, RegisterForm } from "../../components/organisms";


const handleRegister = () => {
    console.log("Tap en Registro")
}
const RegisterPage = () =>{
    return (
        <AuthTemplate title = "Login" subtitle = "Create a new account">
            <RegisterForm onSubmit={handleRegister}/>
        </AuthTemplate>
    )

}
export default RegisterPage;