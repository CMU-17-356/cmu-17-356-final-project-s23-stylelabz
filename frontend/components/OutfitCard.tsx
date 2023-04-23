import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Clothing } from '../utils/types/interface';
import { Link } from '@react-navigation/native';

interface OutfitCardProps {
  style: {},
  data: Clothing
}
const { height } = Dimensions.get('window')
const OutfitCard = (props: OutfitCardProps) => {
  const {data, style} = props
  return (
    <View style={style}>
      <Image source={require('../assets/o1.jpeg')} style={styles.image} resizeMode='contain'/>
      <Text>OutfitCard 2..............</Text>
    </View>
  );
};

export default OutfitCard;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: '80%',
    width: '100%'
  }
});
