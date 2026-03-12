import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { space } from "./space";

export const appStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : colors.white,
    },
     container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});