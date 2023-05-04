import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SwipeContainer from '../Container/SwipeContainer';
import Collection from '../Container/Collection';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Swipe" component={SwipeContainer} options={{headerShown: false}}/>
      <Tab.Screen name="Collection" component={Collection} />
    </Tab.Navigator>
  );
}
export default MyTabs;
