import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swipe from '../components/Swipe';
import { useEffect } from 'react';

interface UserHomeProps {}

const UserHome = (props: UserHomeProps) => {
  return (
    <View style={styles.container}>
      <Text>UserHome</Text>
      <Swipe/>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {}
});
