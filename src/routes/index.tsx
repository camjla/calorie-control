import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../pages/Home'

const Stack = createStackNavigator();

const Routes:React.FC = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={
        {
          headerStyle :
          {
            backgroundColor: "#1e3Ba1",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: 
          {
            fontWeight:'bold'
          }

        }
      }>
        <Stack.Screen name="Home" component={Home} options={{title: "Adicionar item"}} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Routes