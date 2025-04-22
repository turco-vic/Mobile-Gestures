import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Turco';
import Page3 from '../screens/Page3';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                headerTitle: "Página Inicial",
                headerStyle: {
                    backgroundColor: "rgba(224, 21, 21, 0.43)",
                    height: 100,
                },
                headerTintColor: "rgba(255, 255, 255, 0.8)",
                headerTitleStyle: {
                    fontSize: 30,
                },
                tabBarShowLabel: true,
                tabBarStyle: {
                    backgroundColor: "rgba(255, 255, 255, 0.43)",
                    borderRadius: 50,
                    height: 100,
                    position: "absolute",
                    margin: 15,
                },
                tabBarLabelStyle: {
                    fontSize: 20,
                },
                tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 5,
                },
                tabBarActiveTintColor: "rgba(255, 14, 14, 0.8)",
                tabBarInactiveTintColor: "black",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="skull-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="3"
                component={Page3}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="reorder-three-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
