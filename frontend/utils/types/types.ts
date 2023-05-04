import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';



// const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Registration: undefined;
  Home: undefined;
  Survey: undefined;
  UserHome: undefined;
  Login: undefined;
  Collection: undefined;
  Analytics: undefined;
};

export type UserData  = {
  username: string,
  first_name: string,
  last_name: string,
  gender: string,
  email: string,
}

export type LoginData = {
  username: string,
  password: string
}

export type SurveyResponse = {
  userId: string,
  response: {
    style: string[],
    pattern: string[],
    color: string[],
    price: number[]
  }
}

export type Clothing = {
  userId: string,
  boundaryId?: string | null
}

export type Swipe = {
  userId: string,
  clothingId: string,
  swipe: string
}

export type ClothingItem = {
    _id: string,
    ageGroup: string,
    brand: string,
    category: string,
    color: string,
    description: string,
    fabric: string,
    gender: string,
    id: string,
    imgLink: string,
    name: string,
    price: 20.388,
    season: string,
    type: string,
    usage: string,
    variantName: string
}





