import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {RootStackParamList} from '../utils/types/types';
import ButtonComponent from '../components/Button';
import CheckBox from '@react-native-community/checkbox';
import {FlatList} from 'react-native-gesture-handler';
import {Slider} from '@miblanchard/react-native-slider';
import { saveSurvey } from '../api/survey';
import { UserContext } from '../utils/context';
//import InputBox from '../components/Input';

type Props = NativeStackScreenProps<RootStackParamList, 'Survey'>;
const clothingStyles = [
  'Casual',
  'Ethnic',
  'Formal',
  'NA',
  'Party',
  'Smart Casual',
  'Sports',
  'Travel'
];
const patterns = [
  'Checked', 'Colourblocked',
  'Dyed', 'Embellished',
  'Lace', 'Patterned',
  'Printed', 'Satin Finish',
  'Self Design', 'Solid',
  'Striped', 'Washed',
  'Woven Design'
];
const colors = [
  'Beige', 'Black', 'Blue',
  'Brown', 'Burgundy', 'Charcoal',
  'Coffee Brown', 'Cream', 'Fluorescent Green',
  'Gold', 'Green', 'Grey',
  'Grey Melange', 'Khaki', 'Lavender',
  'Lime Green', 'Magenta', 'Maroon',
  'Mauve', 'Multi', 'Mushroom Brown',
  'Mustard', 'NA', 'Navy Blue',
  'Nude', 'Off White', 'Olive',
  'Orange', 'Peach', 'Pink',
  'Purple', 'Red', 'Rose',
  'Rust', 'Sea Green', 'Silver',
  'Skin', 'Tan', 'Taupe',
  'Teal', 'Turquoise Blue', 'White',
  'Yellow'
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
  const [isValidForm, setIsValidForm] = React.useState(false);
  const context = React.useContext(UserContext);
  const handleChangeClothingStyles = (position: number) => {
    const updatedState = clothingStylesState.map((item, index) =>
      index === position ? !item : item,
    );
    setClothingStylesState(updatedState);
    // const validForm = isValid();
    // setIsValidForm(validForm);
  };

  const handlePatterns = (position: number) => {
    const updatedState = patternsState.map((item, index) =>
      index === position ? !item : item,
    );
    setPatternsState(updatedState);
    // const validForm = isValid();
    // setIsValidForm(validForm);
  };

  const handleColors = (position: number) => {
    const updatedState = colorsState.map((item, index) =>
      index === position ? !item : item,
    );
    setColorsState(updatedState);
    // const validForm = isValid();
    // setIsValidForm(validForm);
  };

  const handleSurveySubmission = async () => {
    let clothingStylesSelected: string[] = [];
    clothingStylesState.forEach((item, index) => {
      if(item) {
        clothingStylesSelected.push(clothingStyles[index])
      }
    })
    let patternsSelected: string[] = [];
    patternsState.forEach((item, index) => {
      if(item) {
        patternsSelected.push(patterns[index])
      }
    })
    let colorSelected: string[] = [];
    colorsState.forEach((item, index) => {
      if(item) {
        colorSelected.push(colors[index])
      }
    })
    const response: any = await saveSurvey({
      userId: context.user_id,
      response: {
        color: colorSelected,
        pattern: patternsSelected,
        style: clothingStylesSelected,
        price: price
      }
    })
    console.log(response)
    if(response.status ==200) {
      navigation.reset({
        index: 0,
        routes: [{name: 'UserHome'}],
      });
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Welcome to Style Labz</Text>
        <Text>Tell us a little bit more about yourself</Text>
        <View>
          <Text>What clothing styles do you like (select all that apply)?</Text>
          {clothingStyles.map((item, index) => {
            return <View style={styles.answer} key={index}>
            <CheckBox
              style={styles.checkboxWrapper}
              value={clothingStylesState[index]}
              onChange={() => {
                handleChangeClothingStyles(index);
              }}
            />
            <Text>{item}</Text>
          </View>
          })}

          <Text>
            What patterns do you like your clothing to have (select all that
            apply)?
          </Text>
          {patterns.map((item, index) => {
            return <View style={styles.answer} key={index}>
            <CheckBox
              style={styles.checkboxWrapper}
              value={patternsState[index]}
              onChange={() => {
                handlePatterns(index);
              }}
            />
            <Text>{item}</Text>
          </View>
          })}
        

          <Text>What are your favorite colors?</Text>
          {colors.map((item, index) => {
            return <View style={styles.answer} key={index}>
            <CheckBox
              style={styles.checkboxWrapper}
              value={colorsState[index]}
              onChange={() => {
                handleColors(index);
              }}
            />
            <Text>{item}</Text>
          </View>
          })}

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
          onPressed={handleSurveySubmission}
          disable={!(clothingStylesState.includes(true) && patternsState.includes(true) && colorsState.includes(true))}
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
