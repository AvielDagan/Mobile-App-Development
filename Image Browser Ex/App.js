import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './comp/Home'
import BigPic from './comp/BigPic'
import MyFavorites from './comp/MyFavorites'

const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BigPic" component={BigPic} />
          <Stack.Screen name="MyFavorites" component={MyFavorites} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
