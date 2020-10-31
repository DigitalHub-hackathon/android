import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight, Dimensions } from 'react-native'

const EventBlock = ({event}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{event.name}</Text>
            <Text style={styles.date}>Дата: {event.date}</Text>
            {event.favourite === true ? 
            <View style={styles.favourite}>
                <Text style={{ fontFamily: 'Yanone', color: 'white'}}>Вам понравится</Text>
            </View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 20,
        minHeight: 80,
        backgroundColor: 'white',
        borderRadius: 15,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10, 
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 7,
    },

    name: {
        fontFamily: 'Yanone',
        fontSize: 25,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 30
    },

    date: {
        fontFamily: 'Yanone',
        fontSize: 20,
        position: 'absolute',
        bottom: 5,
        left: 10,
    },

    favourite: {
        height: 20,
        width: 80,
        opacity: 0.9,
        backgroundColor: '#FF5757',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        right: 20,
        top: -10,
    }
})

export default EventBlock