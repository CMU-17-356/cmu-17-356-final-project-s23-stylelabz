import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swipe from '../components/OutfitCard';
import { useEffect } from 'react';
import SwipeContainer from './SwipeContainer';
import MyTabs from '../components/BottomNavigation';

interface UserHomeProps {}

const UserHome = (props: UserHomeProps) => {
  return (
    
      <MyTabs/>
    
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {}
});
