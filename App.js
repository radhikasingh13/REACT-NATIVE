/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  backgroundColor,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login.js';
import Home from './src/screens/Home.js';
import Todays_Order from './src/screens/Todays_Order.js';
import Tab1 from './src/screens/Tab1.js';
import Tab2 from './src/screens/Tab2.js';
import Tab4 from './src/screens/Tab4.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationActions, StackActions} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Todays_Order" component={Todays_Order} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Orders() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Todays_Order" component={Todays_Order} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => {
        return {tabBarLabel: navigation.isFocused() ? route.name : ''};
      }}
      initialRouteName="Orders"
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          color: 'green',
        },
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon name="home" size={17} color={focused ? 'green' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon name="home" size={17} color={focused ? 'green' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon name="box" size={17} color={focused ? 'green' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={Tab4}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name="user-alt"
              size={17}
              color={focused ? 'green' : 'black'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
