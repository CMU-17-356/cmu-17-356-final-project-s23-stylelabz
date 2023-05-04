import * as React from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import SwipeableCard from '../components/OutfitCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import OutfitCard from '../components/OutfitCard';
import SwipeOverlay from '../components/SwipeOverlay';
import { ColorSpace } from 'react-native-reanimated';
import clothingData from '../utils/mockData';
import { UserContext } from '../utils/context';
import { fetchClothing } from '../api/clothing';
import { ClothingItem, Swipe } from '../utils/types/types';
import { swipe } from '../api/swipe';

interface SwipeContainerProps { }
const { height } = Dimensions.get('window')
const demoContent = clothingData
const SwipeContainer = (props: SwipeContainerProps) => {
  const useSwiper = useRef(null).current;
  const context = React.useContext(UserContext);
  const [clothinItems, setclothinItems] = useState([]);
  const [boundaryId, setboundaryId] = useState('');
  const [cardIndex, setcardIndex] = useState(0);
  React.useEffect(() => {
    fetchClothing(
      {
        userId: context.user_id,
        boundaryId: null
      }
    ).then((response: any) => {
      setclothinItems(response.data.results);
      setboundaryId(response.data.boundaryId);
    })
    
  },[])
  
  
  const swipeLeft = async (index: number) => {
    console.log(index);
    const clothingItem: ClothingItem = clothinItems[index];
    if(clothinItems.length-index==2) {
      fetchMoreCards()
    }
    const data =  {
      userId: context.user_id,
      clothingId: clothingItem._id,
      swipe: 'dislike'
    }
    const response = await swipe(data);
  }

  const swipeRight = async (index: number) => {
    console.log(index);
    const clothingItem: ClothingItem = clothinItems[index];
    if(clothinItems.length-index==2) {
      fetchMoreCards()
    }
    const data =  {
      userId: context.user_id,
      clothingId: clothingItem._id,
      swipe: 'like'
    }
    const response = await swipe(data);
  }
  const fetchMoreCards = async () => {
    const response: any = await fetchClothing(
      {
        userId: context.user_id,
        boundaryId: boundaryId
      }
    )
    const newArr: any = [...clothinItems,...response.data.results]
    setclothinItems(newArr);
    setboundaryId(response.data.boundaryId);
    setcardIndex(10);
  }

  
  return (
    <View style={styles.container}>
      <Swiper
        ref={useSwiper}
        cards={clothinItems}
        cardIndex={cardIndex}
        renderCard={(card: any) => {
          
          return card? (
            <OutfitCard style={styles.card} data={card} key={card._id}/>
          ): null
        }}
        onSwipedLeft={swipeLeft}
        onSwipedRight={swipeRight}
        // onSwiped={(cardIndex) => { console.log(cardIndex) }}
        onSwipedAll={fetchMoreCards}
        verticalSwipe={false}
        backgroundColor={'#fff'}
        stackSize={3}
        overlayLabels={
          {
            left: {
              element: <SwipeOverlay overlayLabel='Naaaah!' color='red' />, /* Optional */
              title: 'Naaah',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'red',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                }
              }
            },
            right: {
              title: 'Yeahh!',
              element: <SwipeOverlay overlayLabel='Yeaahh!' color='green' />,
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                
              }
            }
          }
        }
        useViewOverflow
        animateOverlayLabelsOpacity
      />
    </View>
  );
};

export default SwipeContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    height: height - 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});


