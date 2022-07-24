import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home} from '../src/screens/Home';
import {Details} from '../src/screens/Details';
import {Register} from '../src/screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  )
}