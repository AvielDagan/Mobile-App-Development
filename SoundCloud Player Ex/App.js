import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './src/RootReducer';
import PlayerApp from './src/PlayerApp';
import RecentScreen from './src/comp/RecentScreen';

const Stack = createStackNavigator();

const middlewares = applyMiddleware(thunk);
const store = createStore(RootReducer, compose(middlewares));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PlayerApp">
          <Stack.Screen
            name="PlayerApp"
            component={PlayerApp}
            options={() => ({
              headerStyle: {
                backgroundColor: 'rgb(225, 232, 238)'
              },
              headerTitleStyle: {
                marginTop: 20,
                marginRight: 90,
                height: 50,
                fontFamily: 'sans-serif-thin',
                fontSize: 18,
                fontWeight: 'bold'
              },
              title: 'SoundCloud Player'
            })}
          />
          <Stack.Screen
            name="RecentScreen"
            component={RecentScreen}
            options={() => ({
              headerStyle: {
                backgroundColor: 'rgb(225, 232, 238)'
              },
              headerTitleStyle: {
                marginTop: 20,
                marginRight: 90,
                height: 50,
                fontFamily: 'sans-serif-thin',
                fontSize: 18,
                fontWeight: 'bold'
              },
              title: 'SoundCloud Player',
              headerBackTitle: 'Back'
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
