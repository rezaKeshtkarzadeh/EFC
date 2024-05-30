import { StatusBar, StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: StatusBar.currentHeight,
    },

    contents: {
        width: '100%',
        height: '100%',
        padding: 15,
        gap: 8
    },

    inputsContainer: {
        width: '100%',
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    resultContainer: {
        width: '100%',
        height: 48,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#e9e9e9'
    },

    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})