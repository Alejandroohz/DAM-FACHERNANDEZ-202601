import { Pressable, Text } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";


type countScreenProps = {
    label: String;
    OnPress: () => void
}

export const CountScreen: React.FC<countScreenProps> = (
    {label, OnPress}
) =>{

    return(
        <Pressable   onPress={OnPress}>
            <Text style={stylesCountScreen.labelText}>
                {label}
            </Text>
        </Pressable>
    )

}
