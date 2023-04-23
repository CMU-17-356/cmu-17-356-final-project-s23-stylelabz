import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SwipeContainer from '../Container/SwipeContainer';
import CollectionContainer from '../Container/CollectionContainer';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Swipe" component={SwipeContainer}/>
      <Tab.Screen name="Collection" component={CollectionContainer} />
    </Tab.Navigator>
  );
}
export default MyTabs;
