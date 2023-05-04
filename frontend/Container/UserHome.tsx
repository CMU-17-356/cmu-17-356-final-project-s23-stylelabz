import * as React from 'react';
import { StyleSheet } from 'react-native';
import MyTabs from '../components/BottomNavigation';

interface UserHomeProps { }

const UserHome = (props: UserHomeProps) => {
  return (
    <MyTabs />
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {}
});
