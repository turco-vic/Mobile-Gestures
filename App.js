import React from 'react';
import { NavigatorContainer } from '@react-navigation/native';
import  TabNavigator  from './navigation/TabNavigator';

export default function App() {
    return (
        <NavigatorContainer>
            <TabNavigator />
        </NavigatorContainer>
    );
}
