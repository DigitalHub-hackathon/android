import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, StatusBar, Dimensions, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native'
import Header from '../modules/Header'
import { MaterialIcons } from '@expo/vector-icons'
import info from '../modules/info'
import EventBlock from '../modules/EventBlock'

export default class Events extends PureComponent {
    render(){
        return(
            <View style={{ flexDirection: 'column' }}>
                <Header name={'Мероприятия'} color={'#FF5757'} image={<MaterialIcons style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="event" size={40} color="white" />}/>
                <View style={{ backgroundColor: 'white', minHeight: Dimensions.get('window').height}}>
                    <ScrollView style={{ paddingTop: 10 }}>
                        {info.map(item => {
                            return(<EventBlock event={item}/>)
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}
