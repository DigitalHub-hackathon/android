import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../modules/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default class AboutMe extends PureComponent {
    render(){
        return(
            <View style={{ backgroundColor: 'white' }}>
                <Header name={'Профиль'} color={'#7ED957'} image={<MaterialCommunityIcons style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="account" size={40} color="white" />}/>
                <View>
                    
                </View>
            </View>
        )
    }
}