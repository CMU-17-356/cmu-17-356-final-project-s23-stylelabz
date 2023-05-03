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
  const [isValidForm, setIsValidForm] = React.useState(false);
  const context = React.useContext(UserContext);
  const handleChangeClothingStyles = (position: number) => {
    const updatedState = clothingStylesState.map((item, index) =>
      index === position ? !item : item,
    );
    setClothingStylesState(updatedState);
    const validForm = isValid();
    setIsValidForm(validForm);
  };

  const handlePatterns = (position: number) => {
    const updatedState = patternsState.map((item, index) =>
      index === position ? !item : item,
    );
    setPatternsState(updatedState);
    setClothingStylesState(updatedState);
    const validForm = isValid();
    setIsValidForm(validForm);
  };

  const handleColors = (position: number) => {
    const updatedState = colorsState.map((item, index) =>
      index === position ? !item : item,
    );
    setColorsState(updatedState);
    setClothingStylesState(updatedState);
    const validForm = isValid();
    setIsValidForm(validForm);
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
      user_id: context.user_id,
      response: {
        color: colorSelected,
        pattern: patternsSelected,
        style: clothingStylesSelected,
        price: price
      }
    })
    if(response.status ==200) {
      navigation.reset({
        index: 0,
        routes: [{name: 'UserHome'}],
      });
    }
  }

  const isValid = () => {
    let isClothingStyle = false;
    clothingStylesState.forEach((item) => {
      console.log(item)
      if(item) {
        isClothingStyle = true;
      }
    });
    let isPattern = false;
    patternsState.forEach((item) => {
      if(item) {
        isPattern = true;
      }
    })
    let isColor = false;
    colorsState.forEach((item) => {
      if(item) {
        isColor = true;
      }
    })
    return isClothingStyle && isPattern && isColor;
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
          onPressed={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'UserHome'}],
            });
          }}
          disable={!isValidForm}
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
