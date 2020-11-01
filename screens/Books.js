import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native'
import Header from '../modules/Header'
import { FontAwesome } from '@expo/vector-icons'; 
import BooksBlock from '../modules/BooksBlock'

export default class Books extends PureComponent {
    render(){
        return(
            <View style={{ flexDirection: 'column'}}>
                <Header name={'Книги'} color={'#A62929'} image={<FontAwesome style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="book" size={40} color="white" />}/>
                <View style={{ backgroundColor: '#003f5c' , minHeight: Dimensions.get('window').height}}>
                    <ScrollView style={{ paddingTop: 10 }}>
                        
                    </ScrollView>
                </View>
            </View>
        )
    }
}