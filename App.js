/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { I18nManager } from 'react-native'
import {
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './app/screens/HomeScreen';
import AddNoteScreen from './app/screens/AddNoteScreen';
import { NoteProvider } from './app/context/NoteContext';
import UpdateNoteScreen from './app/screens/UpdateNoteScreen';
import RNBootSplash from 'react-native-bootsplash'
import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from '@react-native-community/push-notification-ios';
import Firabase from '@react-native-firebase/app'

// I18nManager.forceRTL(true)

const Stack = createStackNavigator()

const App = () => {

  useEffect(() => {
    RNBootSplash.hide({ fade: true })
    Firabase.initializeApp(App)
    PushNotification.configure({})
  }, [])

  return (
    <NoteProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add" component={AddNoteScreen} />
          <Stack.Screen name="Update" component={UpdateNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
