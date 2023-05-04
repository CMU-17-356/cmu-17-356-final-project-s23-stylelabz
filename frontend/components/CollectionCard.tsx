import * as React from 'react';
import { Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { ClothingItem } from '../utils/types/types';

interface CollectionCardProps {
    navigation: any,
    style: {},
    data: ClothingItem
    status: string
}
const { height } = Dimensions.get('window')
const CollectionCard = (props: CollectionCardProps) => {
    
  const {data, style, status, navigation} = props
  const handleOnPress = () => {
    navigation.navigate('CollectionItem', data)
  }
  return (
    <Pressable style={style} onPress={handleOnPress}>
      <Image source={{uri: data.imgLink}} style={styles.image} resizeMode='contain'/>
      <Text>{data.brand}</Text>
      <Text>{data.category}</Text>

    </Pressable>
  );
};

export default CollectionCard;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: '80%',
    width: '100%'
  }
});