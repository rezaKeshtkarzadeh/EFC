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
    const [factors, setFactors] = useState('pf');
    const [nFloat, setNFloat] = useState(4);
    const [result, setResult] = useState(0.6209);

    const handleCalculation = () => {
        try {
            const bot = new Factors(marr, nTime, nFloat);

            if (factors === 'pf') setResult(bot.calc_pf());
            else if (factors === 'fp') setResult(bot.calc_fp());
            else if (factors === 'pa') setResult(bot.calc_pa());
            else if (factors === 'ap') setResult(bot.calc_ap());
            else if (factors === 'pg') setResult(bot.calc_pg());
            else if (factors === 'gp') setResult(bot.calc_gp());
            else if (factors === 'fa') setResult(bot.calc_fa());
            else if (factors === 'af') setResult(bot.calc_af());
            else if (factors === 'fg') setResult(bot.calc_fg());
            else if (factors === 'gf') setResult(bot.calc_gf());
            else if (factors === 'ag') setResult(bot.calc_ag());
            else if (factors === 'ga') setResult(bot.calc_ga());

        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <ScrollView
            keyboardDismissMode='interactive'
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={appStyles.container}
        >
            <StatusBar backgroundColor='transparent' animated />
            <View style={appStyles.contents}>
                <View style={appStyles.resultContainer}>
                    <Text
                        selectable
                        style={appStyles.resultText}
                    >{result}</Text>
                </View>
                <View style={appStyles.inputsContainer}>
                    <ECPInput
                        title={'نرخ بهره (به درصد)'}
                        value={marr}
                        setValue={setMarr}
                        placeholder='10'
                        keyType={'phone-pad'}
                    />
                    <ECPInput
                        title={'دوره'}
                        value={nTime}
                        setValue={setNTime}
                        placeholder='5'
                        keyType={'phone-pad'}
                    />
                </View>
                <View style={appStyles.inputsContainer}>
                    <ECPInput
                        title={'فاکتور'}
                        value={factors}
                        setValue={setFactors}
                        placeholder='like: pf'
                    />
                    <ECPInput
                        title={'رقم اعشار'}
                        value={nFloat}
                        setValue={setNFloat}
                        placeholder={'4'}
                        keyType={'phone-pad'}
                    />
                </View>
                <CalcBTN onPress={handleCalculation} />
            </View>
        </ScrollView>
    )
}

export default App;