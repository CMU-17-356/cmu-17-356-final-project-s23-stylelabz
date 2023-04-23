import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';



// const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Registration: undefined;
  Home: undefined;
  Survey: undefined;
  UserHome: undefined;
};

export interface Clothing {
  type: string,
  pattern: string,
  sizes: [string],
  color: string,
  colorScheme: [string],
  colorPalette: [string],
  price: number,
  link: string
}



