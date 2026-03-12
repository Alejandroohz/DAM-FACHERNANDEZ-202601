import React from 'react';
import { Text, View } from 'react-native';
import { CountScreen } from './components';
import { appStyles } from './themes/App.style';

type AppProps = {
  atributo?: String;
}

type AppState = {
  count: number;
}

export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    count: 0,
  };

  handleSumar = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleRestar = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <View style={appStyles.container}>

      
        <Text style={{ fontSize: 64, color: 'white', marginBottom: 40 }}>
          {this.state.count}
        </Text>

      
        <CountScreen
          label="Sumar +1"
          OnPress={this.handleSumar}
        />
        <CountScreen
          label="Restar -1"
          OnPress={this.handleRestar}
        />

      </View>
    );
  }
}