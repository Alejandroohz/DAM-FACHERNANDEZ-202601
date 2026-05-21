import React from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";


interface ButtonProps {
    title: string;
    OnSubmit: () => void;
    
}

const Button = (
    {title, OnSubmit}: ButtonProps
) => {
return (
    <Pressable onPress={OnSubmit}>
        <Text>{title}</Text>
    </Pressable>

);
}


export default Button;