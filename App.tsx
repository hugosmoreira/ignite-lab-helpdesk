import * as React from 'react';
import { NativeBaseProvider, StatusBar} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import {  Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { THEME } from './styles/theme'
import {Loading} from './components/Loading';
import { SignIn } from './src/screens/SignIn';


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular ,Roboto_700Bold  })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
