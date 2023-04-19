import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swipe from '../components/Swipe';
import { useEffect } from 'react';


interface AnalyticsProps {}

const Analytics = (props: AnalyticsProps) => {
  return (
    <View style={styles.container}>
      <Text>Analytics</Text>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {}
});
