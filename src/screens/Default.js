/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Default = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Default;