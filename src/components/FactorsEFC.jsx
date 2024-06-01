import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { dark1 } from '../customs/themes/test';

const FactorsEFC = ({ title, value, setValue, placeholder = '', keyType }) => {
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: dark1.card2
                }
            ]}>
            <Text
                style={[
                    styles.title,
                    {
                        color: dark1.text1
                    }
                ]}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={dark1.text3}
                keyboardType={keyType}
                value={value}
                onChangeText={setValue}
                style={[
                    styles.input,
                    {
                        // backgroundColor: '#d9d9d9'
                        backgroundColor: dark1.fg2,
                        color: dark1.text3
                    }
                ]}
            />
        </View>
    )
}

export default FactorsEFC;

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