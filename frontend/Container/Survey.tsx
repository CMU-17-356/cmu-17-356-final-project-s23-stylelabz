import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {RootStackParamList} from '../utils/types/types';
import ButtonComponent from '../components/Button';
import CheckBox from '@react-native-community/checkbox';
import {FlatList} from 'react-native-gesture-handler';
import {Slider} from '@miblanchard/react-native-slider';
//import InputBox from '../components/Input';

type Props = NativeStackScreenProps<RootStackParamList, 'Survey'>;
const clothingStyles = [
  'Parisian',
  'Athleisure',
  'Classic',
  'Streetwear',
  'Business-Casual',
  'Retro',
  'Minimialist',
  'Vintage',
  'Grunge',
  'Chic',
  'Boho',
  'Preppy',
  'Punk',
  'Gothic',
  'Ethnic',
  'Kawaii',
];
const patterns = ['Solid', 'Floral', 'Spotted', 'Plaid', 'Striped', 'Graphic'];
const colors = [
  'Red',
  'Yellow',
  'Green',
  'Cyan',
  'Blue',
  'Purple',
  'Brown',
  'White',
  'Gray',
  'Black',
  'Multi',
];
function SurveyScreen(props: Props) {
  const {navigation} = props;
  const [clothingStylesState, setClothingStylesState] = React.useState(
    new Array(clothingStyles.length).fill(false),
  );
  const [patternsState, setPatternsState] = React.useState(
    new Array(patterns.length).fill(false),
  );
  const [colorsState, setColorsState] = React.useState(
    new Array(colors.length).fill(false),
  );
  const [price, setPrice] = React.useState([0, 1000]);

  const handleChangeClothingStyles = (position: number) => {
    const updatedState = clothingStylesState.map((item, index) =>
      index === position ? !item : item,
    );
    setClothingStylesState(updatedState);
  };

  const handlePatterns = (position: number) => {
    const updatedState = patternsState.map((item, index) =>
      index === position ? !item : item,
    );
    setPatternsState(updatedState);
  };

  const handleColors = (position: number) => {
    const updatedState = colorsState.map((item, index) =>
      index === position ? !item : item,
    );
    setColorsState(updatedState);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Welcome to Style Labz</Text>
        <Text>Tell us a little bit more about yourself</Text>
        <View>
          <Text>What clothing styles do you like (select all that apply)?</Text>
          <FlatList
            data={clothingStyles}
            renderItem={({item, index}) => (
              <View style={styles.answer}>
                <CheckBox
                  style={styles.checkboxWrapper}
                  value={clothingStylesState[index]}
                  onChange={() => {
                    handleChangeClothingStyles(index);
                  }}
                />
                <Text>{item}</Text>
              </View>
            )}
          />
          <Text>
            What patterns do you like your clothing to have (select all that
            apply)?
          </Text>
          <FlatList
            data={patterns}
            renderItem={({item, index}) => (
              <View style={styles.answer}>
                <CheckBox
                  style={styles.checkboxWrapper}
                  value={patternsState[index]}
                  onChange={() => {
                    handlePatterns(index);
                  }}
                />
                <Text>{item}</Text>
              </View>
            )}
          />

          <Text>What are your favorite colors?</Text>
          <FlatList
            data={colors}
            renderItem={({item, index}) => (
              <View style={styles.answer}>
                <CheckBox
                  style={styles.checkboxWrapper}
                  value={colorsState[index]}
                  onChange={() => {
                    handleColors(index);
                  }}
                />
                <Text>{item}</Text>
              </View>
            )}
          />

          <Text>What is your preferred price range?</Text>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            value={price}
            onValueChange={value => setPrice(value)}
          />
          <Text>
            Current Range: $ {Math.round(price[0])} -  $ {Math.round(price[1])}
          </Text>
        </View>
        <ButtonComponent
          type="primary"
          text="Submit"
          onPressed={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'UserHome'}],
            });
          }}
        />
      </ScrollView>
    </View>
  );
}

export default SurveyScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  answer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
  },
});
