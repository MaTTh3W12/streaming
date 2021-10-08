import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// screens
import Movie from '../Screens/Movie';
import Series from '../Screens/Series';
import Lastest from '../Screens/Lastest';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation(props) {
    return (
        <Tab.Navigator
            initialRouteName="Movie"
            activeColor="#fff"
            inactiveColor="#FF9505"
            style={{ backgroundColor: '#353535'}}
            barStyle={{ backgroundColor: '#353535', padding: 4}}
        >
            <Tab.Screen 
                name="Peliculas" 
                component={Movie} 
                options={{
                    tabBarLabel: 'Movie',
                    tabBarColor: '#000000',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="movie-open" size={26} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Series" 
                component={Series}
                options={{
                    tabBarLabel: 'Series',
                    tabBarColor: '#EC4E20',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="camera-metering-spot" size={26} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Proximamente" 
                component={Lastest}
                options={{
                    tabBarLabel: 'Proximamente',
                    tabBarColor: '#FF9505',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="filmstrip" size={26} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
