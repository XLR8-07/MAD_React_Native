import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './src/components/test-compontent';
import CounterScreen from './src/screens/counter-screen';

const App = () => {
  return (
    <View style={styles.container}>
      <CounterScreen />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;