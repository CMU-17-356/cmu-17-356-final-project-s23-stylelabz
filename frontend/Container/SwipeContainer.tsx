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

interface SwipeContainerProps { }
const { height } = Dimensions.get('window')
const demoContent = clothingData
const SwipeContainer = (props: SwipeContainerProps) => {
  const useSwiper = useRef(null).current
  return (
    <View style={styles.container}>
      <Swiper
        ref={useSwiper}
        cards={demoContent}
        renderCard={(card) => {
          return (
            <OutfitCard style={styles.card} data={card}/>
          )
        }}
        onSwiped={(cardIndex) => { console.log(cardIndex) }}
        onSwipedAll={() => { console.log('onSwipedAll') }}
        verticalSwipe={false}
        cardIndex={0}
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


