import React from "react";
import { AuthTemplate } from "../../components/Templates";
import { LoginForm, RegisterForm } from "../../components/organisms";

const handleLogin = () => {
    console.log("Tap en iniciar sesion")
}

const LoginPage = () =>{
    return (
        <AuthTemplate title = "Login" subtitle = "Create a new account">
            <LoginForm onSubmit= {handleLogin}/>
            <RegisterForm onSubmit={handleLogin}/>
        </AuthTemplate>
    )

}
export default LoginPage;