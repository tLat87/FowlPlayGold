import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import CalendarScreen from '../screens/CalendarScreen';
import GameScreen from '../screens/GameScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // headerShown: false,
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#000',
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    width: '90%',
                    marginLeft: '5%',
                    backgroundColor: '#404040',
                    borderRadius: 99,
                    paddingHorizontal: 1,
                    borderWidth: 3,
                    borderColor: '#F98C0B',
                    paddingTop: 20,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                },
                headerShadowVisible: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/main/home.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="BookScreen"
                component={BookScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/main/book.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="CalendarScreen"
                component={CalendarScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/main/calendar.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="GameScreen"
                component={GameScreen}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/main/game.png')} />
                    ),
                }}
            />
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/img/main/settings.png')} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
