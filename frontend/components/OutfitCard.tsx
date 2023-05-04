import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';
import { ClothingItem } from '../utils/types/types';

interface OutfitCardProps {
  style: {},
  data: ClothingItem
}
const { height } = Dimensions.get('window')
const OutfitCard = (props: OutfitCardProps) => {
  const {data, style} = props
  // console.log(data, "rerender")
  return (
    
      data ? 
      <View style={style}>
    {data.imgLink? <Image source={{uri: data.imgLink}} style={styles.image} resizeMode='contain'/>: <Text>No image</Text>}
    <Text>{data.ageGroup}</Text>
    <Text>$ {data.price}</Text>
    <Text>{data.brand}</Text>
  </View>: <Text>Loading</Text>
    
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
