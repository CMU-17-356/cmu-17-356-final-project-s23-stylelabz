import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InputBox from '../components/Input';
import ButtonComponent from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { useState } from 'react';

//use login in the navigation
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = (props: Props) => {
    const {navigation} = props;
    const [userName, setuserName] = useState('');
    const [errors, seterrors] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.LoginText}>Enter your username</Text>
            <InputBox onChanged={setuserName} value={userName} placeHolder='JazzItUp@StyleLabz'/>
            <Text style={styles.ErrorText}>{errors}</Text>
            <ButtonComponent
                onPressed={() => {
                    if (userName.length > 1){
                        navigation.reset({
                            index: 0,
                            routes: [{name: 'UserHome'}]
                        })
                    }
                    else{
                        seterrors("your username needs to exist")
                    }
                }}
                type="primary"
                text="Login"
            />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    LoginText: {
        fontFamily: 'Cochin',
        fontWeight: "400",
        fontSize: 20
    },
    ErrorText: {
        fontFamily: 'Cochin',
        fontWeight: "400",
        fontSize: 20,
        color: "red"
    }
});