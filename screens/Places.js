import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, StatusBar, Dimensions, ScrollView } from 'react-native'
import Header from '../modules/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import info from '../modules/info'
import GroupBlock from '../modules/GroupBlock'

export default class Places extends PureComponent {
    render(){
        return(
            <View style={{ flexDirection: 'column'}}>
                <Header name={'Кружки'} color={'#00C2CB'} image={<MaterialCommunityIcons style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="account-group" size={40} color="white" />}/>
                <View style={{ backgroundColor: 'white', minHeight: Dimensions.get('window').height}}>
                    <ScrollView style={{ paddingTop: 10 }}>
                        {info.map(item => {
                            return(<GroupBlock event={item}/>)
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}