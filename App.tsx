import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './src/components/test-compontent';
import CounterScreen from './src/screens/counter-screen';
import ExamComponent from './src/components/exam-component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/auth-screen';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Auth" component={AuthScreen} />
        <stack.Screen name="Counter" component={CounterScreen} />
      </stack.Navigator>
    </NavigationContainer>

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