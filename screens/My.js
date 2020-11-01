import React, { Component } from 'react'
import { StyleSheet, View, Text , Dimensions, AsyncStorage} from 'react-native'
import Header from '../modules/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class My extends Component{
    state={
        info: []
    }

    render(){
        
        return(
            <View style={{backgroundColor: '#003f5c', minHeight: Dimensions.get('window').height}}>
                <Header name={'Профиль'} color={'#A62929'} image={<MaterialCommunityIcons style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="account" size={40} color="white"  />} mode='back' onPress={() => this.props.navigation.navigate('Профиль')}/>
            </View>
        )
    }
}