import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/Home'
import Details from './src/screens/Details'

const Stack = createNativeStackNavigator()

const App = () =>{
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false, animation:'slide_from_right', orientation:'portrait',}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Details' component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App