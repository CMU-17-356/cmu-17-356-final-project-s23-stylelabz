/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeScreen from './Container/HomeScreen';
import Registration from './Container/Registration';
import { RootStackParamList } from './utils/types/types';
import SurveyScreen from './Container/Survey';
import UserHome from './Container/UserHome';
import Login from './Container/Login'
import Collection from './Container/Collection';
import Analytics from './Container/Analytics';
import { UserContext } from './utils/context';


const RootStack = createNativeStackNavigator<RootStackParamList>();


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const context1InitialState = {
    user_id: ''
  };
  const [userInfo, setUserInfo] = useState(context1InitialState);
  function setUserId(user_id: string) {
    const newState = {user_id};
    setUserInfo(newState);
  }

  const userContextSetters = {
    setUserId
  }


  return (
    <UserContext.Provider value={{
      ...userInfo, ...userContextSetters
    }}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <RootStack.Screen name="Registration" component={Registration} />
          <RootStack.Screen name="Survey" component={SurveyScreen} />
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Collection" component={Collection} />
          <RootStack.Screen name="Analytics" component={Analytics} />
          <RootStack.Screen name="UserHome" component={UserHome} options={{ headerShown: false }} />

        </RootStack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
