import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Turco from '../screens/Turco';
import Page2 from '../screens/Page2';

const Stack = createNativeStackNavigator();

export default function Page2Navigator() {
    return (
        <Stack.Navigator initialRouteName="Turco" screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="Turco" component={Turco} />
            <Stack.Screen name="Page2" component={Page2} />
        </Stack.Navigator>
    );
}
