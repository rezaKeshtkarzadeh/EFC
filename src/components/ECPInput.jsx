import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const ECPInput = ({ title, value, setValue, placeholder = '' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                // keyboardType='phone-pad'
                value={value}
                onChangeText={setValue}
                style={styles.input}
            />
        </View>
    )
}

export default ECPInput

const styles = StyleSheet.create({
    container: {
        width: '48%',
        borderRadius: 15,
        padding: 7,
        gap: 8,
        justifyContent: 'center',
        backgroundColor: '#d9d9d9'
    },

    title: {
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold'
    },

    input: {
        width: '100%',
        height: 48,
        borderRadius: 15,
        padding: 7,
        fontSize: 14,
        backgroundColor: '#e9e9e9'
    }
})