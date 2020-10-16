
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})