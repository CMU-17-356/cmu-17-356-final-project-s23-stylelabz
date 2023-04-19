import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InputBox from '../components/Input';
import ButtonComponent from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/types/types';
import {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

type Props = NativeStackScreenProps<RootStackParamList, 'Registration'>;

const genders = [
  {label: 'Male', value: 'M'},
  {label: 'Female', value: 'F'},
  {label: 'Other', value: 'O'},
  {label: 'Prefer not to Say', value: 'NA'},
];

const Registration = (props: Props) => {
  const {navigation} = props;
  const [userName, setuserName] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.registrationText}>Select a fancy username</Text>
      <InputBox
        onChanged={setuserName}
        value={userName}
        placeHolder="JazzItUp@StyleLabz"
      />
      <Text style={styles.registrationText}>Name</Text>
      <InputBox onChanged={setName} value={name} />
      <Text style={styles.registrationText}>Email</Text>
      <InputBox onChanged={setEmail} value={email} />
      <Text style={styles.registrationText}>Gender</Text>
      <InputBox onChanged={setGender} value={gender} />
      <Text style={styles.registrationText}>Age</Text>
      <InputBox onChanged={setAge} value={age} />

      {/* <Text style={styles.registrationText}>Date of Birth</Text>
      <DatePicker date={dob} onDateChange={setDob} /> */}
      <ButtonComponent
        onPressed={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Survey'}],
          });
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
    justifyContent: 'center',
  },
  registrationText: {
    fontFamily: 'Cochin',
    fontWeight: '400',
    fontSize: 20,
  },
});
