import { StatusBar } from 'expo-status-bar'
import React, { PureComponent, useState } from 'react'
import { AsyncStorage } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigation from './StackNavigation'
import { useFonts } from 'expo-font';
import Events from './screens/Events'



export default function App(){
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Active')
      setData(value)
      
    } catch (error) {
      // Error retrieving data
    }
  };

  let [data, setData] = useState(null)

  let [fontsLoaded] = useFonts({
    'Yanone': require('./assets/fonts/YanoneKaffeesatz-Regular.otf'),
  });

  _retrieveData()
  console.log(data)
  if (!fontsLoaded) {
    return null;
  } else/* if (data !== 'null' && data !== null)*/{
    
      return (
        <SafeAreaProvider>
        <StackNavigation />
        <StatusBar backgroundColor={'#A62929'}/>
      </SafeAreaProvider>
      );
  }
}
