import * as React from 'react';
import { Text, View, StyleSheet, Button, Pressable } from 'react-native';

interface ButtonComponentProps {
    type: String,
    text: String,
    onPressed: Function
}

const ButtonComponent = (props: ButtonComponentProps) => {
    const {onPressed, text} = props;
  return (
    <Pressable style={styles.container} onPress={() => onPressed()}>
        <Text style={styles.buttontext}>{text}</Text>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "purple",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttontext: {
    color: 'white',
    fontSize: 20
  }
});