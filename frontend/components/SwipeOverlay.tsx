import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SwipeOverlayProps {
  overlayLabel: string,
  color: string
}

const SwipeOverlay = (props: SwipeOverlayProps) => {
  return (
    <View style={[styles.container, {borderColor: props.color}]}>
      <Text style={[styles.text, {color: props.color}]}>{props.overlayLabel}</Text>
    </View>
  );
};

export default SwipeOverlay;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
    width: 100
  },
  text: {
    fontSize: 20,
    fontWeight: '900'
  }
});

