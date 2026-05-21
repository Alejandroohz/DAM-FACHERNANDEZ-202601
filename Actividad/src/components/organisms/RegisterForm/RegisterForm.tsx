import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atoms";

interface RegisterFormProps {
    onSubmit: () => void;
}


const RegisterForm = ({onSubmit}: RegisterFormProps) => {
    return (
        <View>
            <Text>Formulario Registro</Text>
             <Button title="Registrate"
              OnSubmit={onSubmit}></Button>
        </View>
    )
}

export default RegisterForm;