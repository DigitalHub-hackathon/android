import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Header from '../modules/Header'
import { MaterialIcons } from '@expo/vector-icons'

const SomeEvent = ({ route, navigation }) => {
    function getOnline(online){
        let res = ''
        online === true ? res = 'да' : res = 'нет'
        return res
    }

    const info = route.params.item
    return(
        <View style={{ backgroundColor: '#003f5c', flex: 1, minHeight: Dimensions.get('window').height}}>
            <Header name={'Мероприятия'} color={'#A62929'} image={<MaterialIcons style={{ position: "absolute", right: 10, bottom: 5, opacity: 0.5}} name="event" size={40} color="white" />} mode={'back'} onPress={() => navigation.navigate('Мероприятия')}/>
            <View style={styles.container}>
            <Text style={styles.name}>{info.name}</Text>
            </View>
            <View style={styles.container}>
            <Text style={styles.date}>Статус: {info.status}</Text>
            <Text style={styles.date}>{info.price}</Text>
            <Text style={styles.date}>Тип: {info.type}</Text>
            <Text style={styles.date}>Направление: {info.direction}</Text>
            <Text style={styles.date}>Начало: {info.start_date} {info.start_time}</Text>
            <Text style={styles.date}>Конец: {info.stop_date} {info.stop_time}</Text>
            <Text style={styles.date}>Онлайн: {getOnline(info.online)}</Text>
            <Text style={styles.date}>Адрес: {info.place}</Text>
            <Text style={styles.date}>Ограничение: {info.censorship.split('\n')}</Text>
            </View>
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
        paddingBottom: 10
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
        marginLeft: 10,
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

export default SomeEvent