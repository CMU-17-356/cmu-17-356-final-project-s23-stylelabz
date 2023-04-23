import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CollectionContainerProps {}

const CollectionContainer = (props: CollectionContainerProps) => {
  return (
    <View style={styles.container}>
      <Text>CollectionContainer</Text>
    </View>
  );
};

export default CollectionContainer;

const styles = StyleSheet.create({
  container: {}
});
