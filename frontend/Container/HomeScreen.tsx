import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { RootStackParamList } from '../utils/types/types';
import ButtonComponent from '../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = (props: Props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Logo</Text>
            <Text style={styles.welcomeText}>Welcome to StyleLabz!</Text>
            <Text style={styles.description}>Match with your favorite outfits, checkout their profile, and rock them on any event!</Text>
            <ButtonComponent
                onPressed={() => navigation.navigate('Registration')}
                type="primary"
                text="Get Started"
            />
            <Text style={styles.description}>Already have?</Text>
            <ButtonComponent
                onPressed={() => navigation.navigate('Login')}
                type="primary"
                text="Login"
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',

    justifyContent: 'center',
    margin: 10
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "400",
    marginTop: 5,
    marginBottom: 5
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 5,
    marginBottom: 5
  }
});

