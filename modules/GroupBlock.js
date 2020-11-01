import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'

function getFree(finance){
    let res = ''
    finance === 0 ? res = 'Бесплатный' : res = 'Платный'
    return res
}

function getSchedule(schedule){
    let res = ''
    schedule === 0 ? res = 'общее' : res = 'индивидуальное'
    return res
}

function getDuration(duration){
    duration = duration.split('0')
    let count = duration[0].split(',')
    return count[0] + ' ' + duration[duration.length - 1]
}

const GroupBlock = ({index, event, onPress, favourite}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{event.name}</Text>
            <Text style={styles.date}>Длительность кружка: {getDuration(event.duration)}</Text>
            <Text style={styles.date}>{getFree(event.finance)}</Text>
            <Text style={styles.date}>Расписание: {getSchedule(event.schedule)}</Text>
            {favourite ? 
            <View style={styles.favourite}>
                <Text style={{ fontFamily: 'Yanone', color: 'white'}}>Вам понравится</Text>
            </View> : null}
            <TouchableOpacity onPress={() => onPress(index)}>
                <View style={styles.go}>
                    <Text style={{ fontFamily: 'Yanone', color: 'white', textAlignVertical: 'center', height: 30, fontSize: 25}}>Пойду!</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 20,
        minHeight: 80,
        backgroundColor: '#465881',
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
        marginBottom: 5,
        color: 'white'
    },

    date: {
        fontFamily: 'Yanone',
        fontSize: 20,
        color: 'white',
        marginLeft: 10
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
    },

    go: {
        height: 30,
        width: 100,
        opacity: 0.9,
        backgroundColor: '#FF5757',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: Dimensions.get('window').width - 20 - 100,
        marginTop: 10,
        zIndex: 2
    }
})

export default GroupBlock