import React, {useState} from 'react'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { View, Text, TouchableWithoutFeedback, Animated, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';

import Login from './screens/Auth/Login'
import Register from './screens/Auth/Register'

import Books from './screens/Books'
import Events from './screens/Events'
import Places from './screens/Places'
import SomeEvent from './screens/SomeEvent'
import AboutMe from './screens/AboutMe'
import My from './screens/My'

import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import { FontAwesome } from '@expo/vector-icons' 

const LoginStack = createStackNavigator()

export default function LoginStackNavigator(){
    return(
        <NavigationContainer>
            <LoginStack.Navigator>
                <LoginStack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <LoginStack.Screen name='Register' component={Register} options={{headerShown: false}}/>
                <LoginStack.Screen name='Other' component={BottomTabNavigator} options={{headerShown: false}} />
            </LoginStack.Navigator>
        </NavigationContainer>
    )
}


const Stack = createStackNavigator()

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Мероприятия' component={Events} options={{ headerShown: false}}/>
      <Stack.Screen name='Конкретное' component={SomeEvent} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}


function SecondStackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Профиль' component={AboutMe} options={{headerShown: false}}/>
      <Stack.Screen name='Моё' component={My} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator(){
    return(
            <BottomTab.Navigator tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
                {/*<BottomTab.Screen name='Логин' component={LoginStackNavigator} />*/}
                <BottomTab.Screen name='Мероприятия' component={StackNavigator} />
                <BottomTab.Screen name='Кружки' component={Places} />
                <BottomTab.Screen name='Книги' component={Books} />
                <BottomTab.Screen name='Профиль' component={SecondStackNavigator} />
            </BottomTab.Navigator>
    )
}

type Props = {
    iconName: string;
    isCurrent?: boolean;
};
const BottomMenuItem = ({ iconName, isCurrent }: Props) => {
    const images = {
        'Мероприятия': <MaterialIcons name="event" size={24} style={{ color: isCurrent ? '#FF5757' : 'white' }} />, 
        'Кружки': <MaterialCommunityIcons name="account-group" size={24} style={{ color: isCurrent ? '#FF5757' : 'white' }} />, 
        'Книги': <FontAwesome name="book" size={24} style={{ color: isCurrent ? '#FF5757' : 'white' }} />, 
        'Профиль': <MaterialCommunityIcons name="account" size={24} style={{ color: isCurrent ? '#FF5757' : 'white' }} />}
    return (
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images[iconName]}
        <Text style={{ fontFamily: 'Yanone', color: 'white' }}>{iconName}</Text>
      </View>
    );
};


const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
    const totalWidth = Dimensions.get("window").width;
    const tabWidth = totalWidth / state.routes.length;
    const [translateValue] = useState(new Animated.Value(0));
    console.log(state)
    return (
      <View style={[style.tabContainer, { width: totalWidth }]}>
        <View style={{ flexDirection: "row" }}>
            <Animated.View
                style={[
                    style.slider,
                    {
                        transform: [{ translateX: translateValue }],
                        width: tabWidth - 40,
                        height: 3,
                        marginLeft: 10
                    },
                ]}
            />
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }

            Animated.spring(translateValue, {
                toValue: index * tabWidth,
                velocity: 10,
                useNativeDriver: true,
              }).start();
            }

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
            });
            };
  return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ["selected"] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1 }}
                key={index}
              >
                <BottomMenuItem
                  iconName={label.toString()}
                  isCurrent={isFocused}
                />
              </TouchableOpacity>
            );
          })
        }
        </View>
      </View> 
    )
}

const style = StyleSheet.create({
    tabContainer: {
      height: 50,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4.0,
      backgroundColor: "#465881",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      elevation: 10,
      position: "absolute",
      bottom: 0,
    },
    slider: {
      height: 5,
      position: "absolute",
      top: 0,
      left: 10,
      backgroundColor: '#fb5b5a',
      borderRadius: 10,
      width: 50
  },
  });