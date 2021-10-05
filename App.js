import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// screens
import Movie from './src/Screens/Movie';
import Series from './src/Screens/Series';
import Lastest from './src/Screens/Lastest';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Peliculas" component={Movie} />
        <Tab.Screen name="Series" component={Series} />
        <Tab.Screen name="Proximamente" component={Lastest} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}