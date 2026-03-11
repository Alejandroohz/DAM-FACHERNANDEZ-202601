import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CountScreen } from './components';
import { appStyles } from './themes/App.style';

type AppProps = {
  atributo: String;
}

type AppState = {
  count: number;
  label: string;
}

export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    count: 0,
    label: 'Hello'
  };

  handleOnPress = () => {
    this.setState((prev: AppState) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <SafeAreaProvider>
        <StatusBar/>
        <View style={appStyles.container}>
          <CountScreen 
            label={`${this.state.label}: ${this.state.count}`} 
            OnPress={this.handleOnPress}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}