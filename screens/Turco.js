import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Turco() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => NavigationContainer.navigate ("")}>
                <Text style={styles.text}>My Home Page</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
});
