import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Keyboard } from '../components/organisms/Keyboard';
import { colors } from '../themes/colors';
import { space } from '../themes/space';

const CalculateScreen = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');

  useEffect(() => {
    console.log('Input actualizado:', input);
  }, [input]);

  const handlePress = (value: string) => {
    if (value === 'C') {
      setInput('0');
      setResult('');
    } else if (value === '=') {
      try {
        const evaluated = eval(input).toString();
        setResult(evaluated);
      } catch {
        setResult('Error');
      }
    } else {
      setInput(prev => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <Keyboard onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: space.md },
  display: {
    flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end',
    backgroundColor: colors.display, borderRadius: 12, padding: space.md,
    marginBottom: space.md,
  },
  input: { fontSize: 36, color: colors.text },
  result: { fontSize: 24, color: colors.buttonText, marginTop: space.sm },
});

export default CalculateScreen;