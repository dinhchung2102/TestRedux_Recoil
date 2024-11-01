import React from 'react';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen1' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Screen1' component={Screen1}/>
          <Stack.Screen name='Screen2' component={Screen2}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
