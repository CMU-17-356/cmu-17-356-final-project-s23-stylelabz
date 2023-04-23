import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SwipeContainer from '../Container/SwipeContainer';
import { NavigationContainer } from '@react-navigation/native';
import Collection from '../Container/Collection';
import Analytics from '../Container/Analytics';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Swipe" component={SwipeContainer}/>
      <Tab.Screen name="Collection" component={Collection} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
}
export default MyTabs;
