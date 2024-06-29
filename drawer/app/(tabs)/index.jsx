import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';
import Calculator from './Calculator';
import SignIn from './SignIn';
import Signup from './Signup';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
      <Stack.Screen name='Calculator' component={Calculator} options={{ headerShown: false }} />
      <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}