import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './src/components/test-compontent';
import CounterScreen from './src/screens/counter-screen';
import ExamComponent from './src/components/exam-component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Quiz_I" component={ExamComponent} />
        <stack.Screen name="Counter" component={CounterScreen} />
        {/* <stack.Screen name="Quiz_I" component={ExamComponent} /> */}
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