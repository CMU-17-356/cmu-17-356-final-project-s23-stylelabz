import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InputBox from '../components/Input';
import ButtonComponent from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/types/types';
import {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import { loginUser, signupUser } from '../api/login';
import { UserContext } from '../utils/context';

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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [errors, seterrors] = useState('');
  const context = React.useContext(UserContext);
  const signupHandler = async () => {
    if (userName.length > 1){
      const response: any = await signupUser({
        username: userName,
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender
      });
      if(response.status == 200) {
          context.setUserId(response.data._id)
          navigation.reset({
            index: 0,
            routes: [{name: 'Survey'}],
          });
      }
    }
    else{
        seterrors("your username needs to exist")
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.registrationText}>Select a fancy username</Text>
      <InputBox
        onChanged={setuserName}
        value={userName}
        placeHolder="JazzItUp@StyleLabz"
      />
      <Text style={styles.ErrorText}>{errors}</Text>
      <Text style={styles.registrationText}>First Name</Text>
      <InputBox onChanged={setFirstName} value={firstName} placeHolder={''} />
      <Text style={styles.registrationText}>Last Name</Text>
      <InputBox onChanged={setLastName} value={lastName} placeHolder={''} />
      <Text style={styles.registrationText}>Email</Text>
      <InputBox onChanged={setEmail} value={email} placeHolder={''} />
      <Text style={styles.registrationText}>Gender</Text>
      <InputBox onChanged={setGender} value={gender} placeHolder={''} />

      {/* <Text style={styles.registrationText}>Date of Birth</Text>
      <DatePicker date={dob} onDateChange={setDob} /> */}
      <ButtonComponent
        onPressed={signupHandler}
        type="primary"
        text="Submit"
        disable={!(userName.length && firstName.length && lastName.length && email.length && (gender=='M' || gender=='F'))}
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
  ErrorText: {
    fontFamily: 'Cochin',
    fontWeight: "400",
    fontSize: 20,
    color: "red"
}
});
