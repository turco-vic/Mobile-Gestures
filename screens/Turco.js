import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Turco() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => NavigationContainer.navigate ("Page2")}>
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
        backgroundColor: 'lightgray',
    },
    text: {
        fontSize: 30,
        color: '#000',
    },
});
