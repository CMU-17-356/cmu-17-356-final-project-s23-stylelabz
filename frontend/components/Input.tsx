import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

interface InputBoxProps {
    onChanged: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    placeHolder: string
}

const InputBox = (props: InputBoxProps) => {
    const {onChanged, value, placeHolder} = props;
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placeHolder}
        style = {styles.input}
        onChangeText={(onChanged)}
        value={value}
    />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {

  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#bbb',
    padding: 10,
  }
});
