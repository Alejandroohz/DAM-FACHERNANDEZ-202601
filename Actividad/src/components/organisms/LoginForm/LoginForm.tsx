import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atoms";

interface LoginFormProps {
    onSubmit: () => void;
}

const LoginForm = (
    {onSubmit}: LoginFormProps
) => {
    return (
        <View>
            <Text>Fotrmulario Login</Text>
            <Button title="iniciar Sesión" OnSubmit={onSubmit}></Button>
        </View>
    )
}

export default LoginForm;