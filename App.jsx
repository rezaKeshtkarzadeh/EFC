import React, { useState } from 'react';
import {
    ScrollView, Text, View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { appStyles } from './src/styles/wrapper';
import ECPInput from './src/components/ECPInput';
import CalcBTN from './src/components/CalcBTN';
import { Factors } from './src/modules/EFactors';

const App = () => {
    const [marr, setMarr] = useState(10);
    const [nTime, setNTime] = useState(5);
    const [factors, setFactors] = useState('f/p');
    const [nFloat, setNFloat] = useState(4);
    const [result, setResult] = useState(1.6105);

    const handleCalculation = () => {
        try {
            const bot = new Factors(marr, nTime, nFloat);

            if (factors === 'f/p') setResult(bot.calc_fp());
            else if (factors === 'p/f') setResult(bot.calc_pf());
        } catch (error) {

        }

    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={appStyles.container}
        >
            <StatusBar backgroundColor='transparent' animated />
            <View style={appStyles.contents}>
                <View style={appStyles.resultContainer}>
                    <Text style={appStyles.resultText}>{result}</Text>
                </View>
                <View style={appStyles.inputsContainer}>
                    <ECPInput
                        title={'نرخ بهره (به درصد)'}
                        value={marr}
                        setValue={setMarr}
                        placeholder='10'
                    />
                    <ECPInput
                        title={'دوره'}
                        value={nTime}
                        setValue={setNTime}
                        placeholder='5'
                    />
                </View>
                <View style={appStyles.inputsContainer}>
                    <ECPInput
                        title={'فاکتور'}
                        value={factors}
                        setValue={setFactors}
                        placeholder='p/f'
                    />
                    <ECPInput
                        title={'رقم اعشار'}
                        value={nFloat}
                        setValue={setNFloat}
                        placeholder={'4'}
                    />
                </View>
                <CalcBTN onPress={handleCalculation} />
            </View>
        </ScrollView>
    )
}

export default App;