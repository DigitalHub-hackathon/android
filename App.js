import { StatusBar } from 'expo-status-bar'
import React, { PureComponent } from 'react'
import { AsyncStorage } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigation'
import Login from './screens/Login'

import useCachedResources from './hooks/useCachedResources';
import { useFonts } from 'expo-font';

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value
    }
    else{
      return null
    }
  } catch (error) {
    // Error retrieving data
  }
};

export default function App(){
  const isLoadingComplete = useCachedResources();

  let [fontsLoaded] = useFonts({
    'Yanone': require('./assets/fonts/YanoneKaffeesatz-Regular.otf'),
  });

  const value = _retrieveData()
  

  if (!isLoadingComplete) {
    return null;
  } else {
    if(value !== null){
      return (
        <SafeAreaProvider>
          <Navigation />
          <StatusBar backgroundColor={null}/>
        </SafeAreaProvider>
      );
    }
    else{
      return(
        <Login />
      )
    }
  }

  //return (<Login />)
}
