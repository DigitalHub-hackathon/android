import React, {useState} from 'react'
import { View, Text, TouchableWithoutFeedback, Animated, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';

import Login from './screens/Auth/Login'
import Register from './screens/Auth/Register'

const LoginStack = createStackNavigator()

export default function StackNavigator(){
    return(
        <NavigationContainer>
            <LoginStack.Navigator>
                <LoginStack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <LoginStack.Screen name='Register' component={Register} options={{headerShown: false}}/>
            </LoginStack.Navigator>
        </NavigationContainer>
    )
}