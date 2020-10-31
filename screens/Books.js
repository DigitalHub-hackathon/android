import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native'
import Header from '../modules/Header'
import { FontAwesome } from '@expo/vector-icons'; 
import info from '../modules/info'
import BooksBlock from '../modules/BooksBlock'

export default class Books extends PureComponent {
    render(){
        return(
            <View style={{ flexDirection: 'column'}}>
                <Header name={'Книги'} color={'#FFDE59'} image={<FontAwesome style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="book" size={40} color="white" />}/>
                <View style={{ backgroundColor: 'white', minHeight: Dimensions.get('window').height}}>
                    <ScrollView style={{ paddingTop: 10 }}>
                        {info.map(item => {
                            return(<BooksBlock event={item}/>)
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}