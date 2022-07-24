import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../../helpmobile/src/screens/SignIn';
import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}