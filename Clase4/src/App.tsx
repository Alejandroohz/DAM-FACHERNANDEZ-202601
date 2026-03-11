import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const App = () => {
  
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <view>
            <Text style={styles.text}> Hello world </Text>
        </view>
      </SafeAreaView>

 
  </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})
export default App;
