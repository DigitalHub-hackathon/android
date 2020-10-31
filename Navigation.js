import React, {useState} from 'react'
import { View, Text, TouchableWithoutFeedback, Animated, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons' 
import { AntDesign } from "@expo/vector-icons";

import AboutMe from './screens/AboutMe'
import Books from './screens/Books'
import Events from './screens/Events'
import Places from './screens/Places'


const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator(){
    const images = ['event', 'account', 'book', 'account']
    return(
        <View style={{ flex: 1, position: "relative"}}>
        <NavigationContainer>
            <BottomTab.Navigator tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}>
                <BottomTab.Screen name='Мероприятия' component={Events} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="event" size={24} color="black" />,
                  }}/>
                <BottomTab.Screen name='Кружки' component={Places} 
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-group" size={24} color="black" />,
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
        </View>
    )
}

type Props = {
    iconName: string;
    isCurrent?: boolean;
};
const BottomMenuItem = ({ iconName, isCurrent }: Props) => {
    const images = {
        'Мероприятия': <MaterialIcons name="event" size={24} style={{ color: isCurrent ? '#FF5757' : 'grey' }} />, 
        'Кружки': <MaterialCommunityIcons name="account-group" size={24} style={{ color: isCurrent ? '#00C2CB' : 'grey' }} />, 
        'Книги': <FontAwesome name="book" size={24} style={{ color: isCurrent ? '#FFDE59' : 'grey' }} />, 
        'Профиль': <MaterialCommunityIcons name="account" size={24} style={{ color: isCurrent ? '#7ED957' : 'grey' }} />}
    return (
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images[iconName]}
        <Text style={{ fontFamily: 'Yanone' }}>{iconName}</Text>
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
      backgroundColor: "white",
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
      backgroundColor: 'gray',
      borderRadius: 10,
      width: 50
  },
  });