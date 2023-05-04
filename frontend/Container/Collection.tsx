import * as React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import CollectionCard from '../components/CollectionCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/types/types';
import { UserContext } from '../utils/context';
import { fetchCollection } from '../api/collection';

type Props = NativeStackScreenProps<RootStackParamList>;
const { height } = Dimensions.get('window')
const Collection = (props: Props) => {
  const [likedItems, setlikedItems] = useState([]);
  const context = React.useContext(UserContext);
  const {navigation} = props;
  useEffect(() => {
    fetchCollection(context.user_id).then((response: any) => {
      setlikedItems(response.data.results)
    });
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      fetchCollection(context.user_id).then((response: any) => {
        setlikedItems(response.data.results)
      });
    },[])
  )
 return (
   <ScrollView style={styles.scrollView}>
       {likedItems.map((item: any) => {
          return <CollectionCard style={styles.card} data={item} status={"Liked"} navigation={navigation}/>
       })}
   </ScrollView>
 );
};


export default Collection;


const styles = StyleSheet.create({
 container: {},
 card: {
   height: height - 500,
   justifyContent: 'space-around',
   padding: 5,
   margin: 10,
   alignItems: 'center',
   backgroundColor: 'white',
   borderRadius: 5,
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowRadius: 6,
   shadowOpacity: 0.3,
   elevation: 2,
 },
 text: {
   textAlign: "cent",
   fontSize: 50,
   backgroundColor: "transparent"
 },
 scrollView: {
   backgroundColor: 'transparent',
   marginHorizontal: 20,
 },
});

