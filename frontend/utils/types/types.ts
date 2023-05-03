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
  user_id: string,
  response: {
    style: string[],
    pattern: string[],
    color: string[],
    price: number[]
  }
}

export type Swipe = {
  user_id: string,
  clothing_id: string,
  swipe: string[]
}





