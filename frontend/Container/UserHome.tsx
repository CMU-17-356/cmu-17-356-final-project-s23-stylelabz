import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swipe from '../components/Swipe';
import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Collection from '../Container/Collection';
import Analytics from '../Container/Analytics';

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
