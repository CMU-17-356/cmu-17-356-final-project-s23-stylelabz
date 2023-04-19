import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../utils/types/types';
import ButtonComponent from '../components/Button';
import CheckBox from '@react-native-community/checkbox';
//import InputBox from '../components/Input';

type Props = NativeStackScreenProps<RootStackParamList, 'Survey'>;

function SurveyScreen(props: Props) {
  const {navigation} = props;
  const [toggleButton, setToggleButton] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>Welcome to Style Labz</Text>
      <Text>Tell us a little bit more about yourself</Text>
      <View>
        <Text>What are you looking for in your clothes?</Text>
        <CheckBox
          style={styles.checkboxWrapper}
          disabled={false}
          value={toggleButton}
          onValueChange={newValue => setToggleButton(newValue)}
        />
        <Text>Functional</Text>
        <CheckBox
          style={styles.checkboxWrapper}
          disabled={false}
          value={toggleButton}
          onValueChange={newValue => setToggleButton(newValue)}
        />
        <Text>Style</Text>
        <CheckBox
          style={styles.checkboxWrapper}
          disabled={false}
          value={toggleButton}
          onValueChange={newValue => setToggleButton(newValue)}
        />
        <Text>Price</Text>
        <CheckBox
          style={styles.checkboxWrapper}
          disabled={false}
          value={toggleButton}
          onValueChange={newValue => setToggleButton(newValue)}
        />
        <Text>Comfort</Text>
      </View>
      <ButtonComponent
        type="primary"
        text="Submit"
        onPressed={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'UserHome'}],
          });
        }}
      />
    </View>
  );
}

export default SurveyScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
