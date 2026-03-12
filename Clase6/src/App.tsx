import React from 'react';
import { StatusBar, View } from 'react-native';
import { CountScreen } from './components';
import { appStyles } from './themes/App.style';

type AppProps = {
  atributo: String;
}

type AppState = {
  count: number;
  label: string;
}
let count: number = 0;

const handleOnPress = (value: number) => {
    console.log
    count++;
    console.log(count);
  };
const handleOnPressx2 = (value: number) => {
    console.log
    count+=2;
    console.log("x2 ", count);
  };

export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    count: 0,
    label: 'Hello'
  };


  render() {
    const label = "hello world"
    const name = "Fabian x2"
    return (
      
        <View style={appStyles.container}>
          <CountScreen 
            label={label} 
            OnPress={() => handleOnPress(1)}
          />
          <CountScreen 
            label={name}
            OnPress={() => handleOnPressx2(2)}
          />
        </View>

    );
  }
}