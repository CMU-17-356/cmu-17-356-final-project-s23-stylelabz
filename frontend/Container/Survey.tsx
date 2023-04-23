import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../utils/types/types';
import ButtonComponent from '../components/Button';
import InputBox from '../components/Input';

type Props = NativeStackScreenProps<RootStackParamList, 'Survey'>

const SurveyScreen = (props: Props) => {
    const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text>SurveyScreen</Text>
      <ButtonComponent
        type="primary"
        text="Submit"
        onPressed={() => {
            navigation.reset({
                index: 0,
                routes: [{name: 'UserHome'}]
            })
        }}
        
      />
      {/* <InputBox onChanged={() => console.log(123)}/> */}
    </View>
  );
};

export default SurveyScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
