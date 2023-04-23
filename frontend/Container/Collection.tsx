import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';

interface CollectionProps {}

const Collection = (props: CollectionProps) => {
  return (
    <View style={styles.container}>
      <Text>Collection</Text>
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({
  container: {}
});
