import React from 'react';
import {
    Pressable,
    StyleSheet, Text, View
} from 'react-native';

const CalcBTN = ({ onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.btnText}>محاسبه کن</Text>
        </Pressable>
    )
}

export default CalcBTN

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e9e9'
    },

    btnText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})