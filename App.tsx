import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import AddEventCalendarScreen from "./src/screens/AddEventCalendarScreen";
import BookMoreScreen from "./src/screens/BookMoreScreen";
import AddAnimalScreen from "./src/screens/AddAnimalScreen";
import GameProccesScreen from "./src/screens/GameProccesScreen";
import AddMarkScreen from "./src/screens/AddMarkScreen";
import MoreAnimalScreen from "./src/screens/MoreAnimalScreen";
import CreateCultureScreen from "./src/screens/CreateCultureScreen";
const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
    )
}

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{ headerLeft: Left, headerStyle: { backgroundColor: '#360013' },
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                    }}>
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="AddEventCalendarScreen" component={AddEventCalendarScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="BookMoreScreen" component={BookMoreScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AddAnimalScreen" component={AddAnimalScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="GameProccesScreen" component={GameProccesScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="AddMarkScreen" component={AddMarkScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="MoreAnimalScreen" component={MoreAnimalScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="CreateCultureScreen" component={CreateCultureScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
