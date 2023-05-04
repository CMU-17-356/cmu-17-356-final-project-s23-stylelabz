import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import UserHome from '../Container/UserHome';
import Collection from '../Container/Collection';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={UserHome} />
          <Tab.Screen name="Collection" component={Collection} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }