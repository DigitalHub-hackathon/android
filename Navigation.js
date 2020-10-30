import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import AboutMe from './screens/AboutMe'
import Books from './screens/Books'
import Events from './screens/Events'
import Places from './screens/Places'


const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator(){
    return(
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen name='Мероприятия' component={Events} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="event" size={24} color="black" />,
                  }}/>
                <BottomTab.Screen name='Места' component={Places} 
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="place-of-worship" size={24} color="black" />,
                  }}/>
                <BottomTab.Screen name='Книги' component={Books} 
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="book" size={24} color="black" />,
                  }}/>
                <BottomTab.Screen name='Профиль' component={AboutMe} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color="black" />,
                  }}/>
            </BottomTab.Navigator>
        </NavigationContainer>
        
    )
}