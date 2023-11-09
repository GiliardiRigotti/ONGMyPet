import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './app/routes';
import { AppProvider } from './app/context/app';


export default function App(): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
