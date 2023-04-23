import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InputBox from '../components/Input';
import ButtonComponent from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Registration'>

const Registration = (props: Props) => {
    const {navigation} = props;
    const [userName, setuserName] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.registrationText}>Select a fancy username</Text>
            <InputBox onChanged={setuserName} value={userName} placeHolder='JazzItUp@StyleLabz'/>
            <ButtonComponent
                onPressed={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Survey'}]
                    })
                }}
                type="primary"
                text="Submit"
            />
        </View>
    );
};

export default Registration;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    registrationText: {
        fontFamily: 'Cochin',
        fontWeight: "400",
        fontSize: 20
    }
});
