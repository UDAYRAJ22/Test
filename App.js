import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';

const Stack = createNativeStackNavigator()

const App = () =>{
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false, animation:'slide_from_right', orientation:'portrait',}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Registration' component={Registration}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App