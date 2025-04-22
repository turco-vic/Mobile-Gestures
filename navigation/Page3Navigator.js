import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page3 from '../screens/Page3';
import Page4 from '../screens/Page4';

const Stack = createNativeStackNavigator();

export default function Page3Navigator() {
    return (
        <Stack.Navigator initialRouteName="Turco" screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="Page3" component={Page3} />
            <Stack.Screen name="Page4" component={Page4} />
        </Stack.Navigator>
    );
}
